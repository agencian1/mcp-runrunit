const BASE_URL = "https://runrun.it/api/v1.0";

export class RunrunitAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public body?: unknown
  ) {
    super(message);
    this.name = "RunrunitAPIError";
  }
}

function getAuth(): { appKey: string; userToken: string } {
  const appKey = process.env.RUNRUNIT_APP_KEY;
  const userToken = process.env.RUNRUNIT_USER_TOKEN;
  if (!appKey || !userToken) {
    throw new RunrunitAPIError(
      "Missing RUNRUNIT_APP_KEY or RUNRUNIT_USER_TOKEN environment variables. Set them in your MCP client config or environment."
    );
  }
  return { appKey, userToken };
}

function buildUrl(path: string, searchParams?: Record<string, string | number | boolean | undefined>): string {
  const url = new URL(path, BASE_URL);
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }
  return url.toString();
}

export async function runrunitFetch<T>(
  path: string,
  options: RequestInit & { query?: Record<string, string | number | boolean | undefined> } = {}
): Promise<T> {
  const { appKey, userToken } = getAuth();
  const { query, ...fetchOptions } = options;
  const url = buildUrl(path, query);

  const headers: Record<string, string> = {
    "Version": "HTTP/1.0",
    "App-Key": appKey,
    "User-Token": userToken,
    "Content-Type": "application/json",
    ...(fetchOptions.headers as Record<string, string>),
  };

  const res = await fetch(url, {
    ...fetchOptions,
    headers,
  });

  if (res.status === 204) {
    return undefined as T;
  }

  const text = await res.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    throw new RunrunitAPIError(
      `Runrun.it API error: ${res.status} ${res.statusText}`,
      res.status,
      data
    );
  }

  return data as T;
}
