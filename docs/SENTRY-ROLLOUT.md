# Sentry Rollout and Validation

## 1) Pre-flight configuration

- Set `SENTRY_DSN`, `SENTRY_ENVIRONMENT`, `SENTRY_RELEASE`, `SENTRY_ENABLED`, `SENTRY_ERROR_SAMPLE_RATE`.
- Keep `SENTRY_ENABLED=true` in `staging` and `production`.
- Keep `sendDefaultPii` disabled (already enforced in code).

## 2) Synthetic error validation (staging)

1. Start the HTTP server in staging settings.
2. Trigger an invalid/forced tool execution to generate an exception.
3. Confirm the event appears in Sentry with:
   - `service: mcp-runrunit`
   - `runtime_mode: http` or `runtime_mode: stdio`
   - `tool_name` (when failure comes from a tool call)
4. Confirm sensitive values are redacted in event payload.

## 3) Minimum alerts

Configure these alerts in Sentry for `production`:

- New issue alert.
- Error spike alert (threshold/window defined by the team).

## 4) Gradual production rollout

1. Deploy with `SENTRY_ENABLED=true`.
2. Review events daily in the first week.
3. Tune sampling and `beforeSend` filters if noise is high.

## 5) Go-live checklist

- [ ] Synthetic error verified in `staging`.
- [ ] No secret leakage in event payload.
- [ ] New issue + spike alerts enabled.
- [ ] Owner approved production enablement.
