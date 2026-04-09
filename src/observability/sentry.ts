import * as Sentry from "@sentry/node";

const SENSITIVE_KEY_RE =
  /authorization|cookie|set-cookie|token|password|secret|api[-_]?key|x-api-key|github_|runrunit_|cloudinary_/i;
const REDACTED = "[REDACTED]";
const FLUSH_TIMEOUT_MS = 2000;

type RuntimeMode = "stdio" | "http";
type Primitive = string | number | boolean | null;
type SanitizedValue = Primitive | SanitizedValue[] | { [key: string]: SanitizedValue };

let isInitialized = false;
let activeRuntimeMode: RuntimeMode = "stdio";

function sanitizeValue(value: unknown, depth = 0): SanitizedValue {
  if (depth > 6) return "[TRUNCATED]";
  if (value == null) return null;
  if (typeof value === "string") return value.length > 1000 ? `${value.slice(0, 1000)}...[TRUNCATED]` : value;
  if (typeof value === "number" || typeof value === "boolean") return value;

  if (Array.isArray(value)) {
    return value.slice(0, 20).map((item) => sanitizeValue(item, depth + 1));
  }

  if (typeof value === "object") {
    const objectValue = value as Record<string, unknown>;
    const sanitizedEntries = Object.entries(objectValue)
      .slice(0, 50)
      .map(([key, val]) => {
        if (SENSITIVE_KEY_RE.test(key)) {
          return [key, REDACTED] as const;
        }
        return [key, sanitizeValue(val, depth + 1)] as const;
      });
    return Object.fromEntries(sanitizedEntries);
  }

  return String(value);
}

function sanitizeEvent(event: Sentry.ErrorEvent): Sentry.ErrorEvent {
  if (event.request?.headers) {
    event.request.headers = sanitizeValue(event.request.headers) as Record<string, string>;
  }

  if (event.request?.data) {
    event.request.data = sanitizeValue(event.request.data);
  }

  if (event.extra) {
    event.extra = sanitizeValue(event.extra) as Record<string, unknown>;
  }

  if (event.user) {
    // Keep user context disabled to avoid accidental PII.
    event.user = undefined;
  }

  return event;
}

function isSentryEnabled(): boolean {
  const value = process.env.SENTRY_ENABLED?.trim().toLowerCase();
  if (value === "false" || value === "0") return false;
  if (value === "true" || value === "1") return true;
  return process.env.NODE_ENV !== "development";
}

function parseSampleRate(): number {
  const raw = process.env.SENTRY_ERROR_SAMPLE_RATE;
  if (!raw) return 1.0;
  const parsed = Number(raw);
  if (Number.isFinite(parsed) && parsed >= 0 && parsed <= 1) return parsed;
  return 1.0;
}

export function initSentry(runtimeMode: RuntimeMode): void {
  activeRuntimeMode = runtimeMode;

  if (isInitialized) {
    Sentry.setTag("runtime_mode", runtimeMode);
    process.env.MCP_RUNTIME_MODE = runtimeMode;
    return;
  }

  const enabled = isSentryEnabled();
  const dsn = process.env.SENTRY_DSN;
  const environment = process.env.SENTRY_ENVIRONMENT ?? process.env.NODE_ENV ?? "development";
  const release = process.env.SENTRY_RELEASE;

  Sentry.init({
    dsn: dsn || undefined,
    enabled,
    environment,
    release,
    sampleRate: parseSampleRate(),
    sendDefaultPii: false,
    maxBreadcrumbs: 30,
    beforeSend(event) {
      return sanitizeEvent(event);
    },
    beforeBreadcrumb(breadcrumb) {
      if (breadcrumb.data) {
        breadcrumb.data = sanitizeValue(breadcrumb.data) as Record<string, unknown>;
      }
      return breadcrumb;
    },
    initialScope: {
      tags: {
        service: "mcp-runrunit",
        runtime_mode: runtimeMode,
      },
    },
  });

  process.env.MCP_RUNTIME_MODE = runtimeMode;
  isInitialized = true;
}

export function captureExceptionWithContext(
  error: unknown,
  context: { tags?: Record<string, string>; extra?: Record<string, unknown> } = {}
): void {
  const tags = {
    runtime_mode: activeRuntimeMode,
    ...context.tags,
  };

  Sentry.withScope((scope) => {
    Object.entries(tags).forEach(([key, value]) => scope.setTag(key, value));
    if (context.extra) {
      scope.setContext("details", sanitizeValue(context.extra) as Record<string, unknown>);
    }
    Sentry.captureException(error);
  });
}

export async function flushAndClose(timeoutMs = FLUSH_TIMEOUT_MS): Promise<void> {
  if (!isInitialized) return;
  try {
    await Sentry.close(timeoutMs);
  } catch {
    // no-op: never let observability crash the process.
  }
}

