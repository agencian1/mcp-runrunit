/**
 * Maps semantic custom field names (used by the agent) to Runrun.it API keys.
 * Part of the driven/infrastructure layer: encodes the API contract (opaque
 * keys like custom_32). The API uses these; we expose meaningful names
 * (e.g. link_da_branch for "Link da branch" / PR URL).
 */

/** Semantic key → API custom field key (e.g. custom_32) */
export const CUSTOM_FIELD_API_KEYS: Record<string, string> = {
  link_da_branch: "custom_32",
};

/** API custom field key → semantic key (for reading task responses) */
export const CUSTOM_FIELD_SEMANTIC_KEYS: Record<string, string> = Object.fromEntries(
  Object.entries(CUSTOM_FIELD_API_KEYS).map(([k, v]) => [v, k]),
);

export type TaskUpdatePayload = Record<string, unknown>;

interface CustomFieldObject {
  id: string;
  color: string | null;
  label: string;
}

function isCustomFieldObject(v: unknown): v is CustomFieldObject {
  return typeof v === "object" && v !== null && "label" in v;
}

/** Extracts the usable value from a custom field (handles both plain and object shapes). */
function normalizeCustomFieldValue(v: unknown): unknown {
  return isCustomFieldObject(v) ? v.label : v;
}

/**
 * Converts a task update payload that may contain semantic custom field names
 * (e.g. link_da_branch) into the shape expected by the Runrun.it API
 * (custom_fields: { custom_32: value }).
 * Non-custom fields are left unchanged.
 */
export function taskUpdateToApiPayload(task: TaskUpdatePayload): TaskUpdatePayload {
  const result = { ...task };
  let customFields = (result.custom_fields as Record<string, unknown>) ?? {};

  for (const [semanticKey, apiKey] of Object.entries(CUSTOM_FIELD_API_KEYS)) {
    const value = result[semanticKey];
    if (value !== undefined) {
      customFields = { ...customFields, [apiKey]: value };
      delete result[semanticKey];
    }
  }

  if (Object.keys(customFields).length > 0) {
    result.custom_fields = customFields;
  }

  return result;
}

/**
 * Converts a task object from the API (e.g. get_task response) so that
 * custom_32 etc. are exposed as link_da_branch for the agent.
 */
export function taskFromApiToSemantic(task: TaskUpdatePayload): TaskUpdatePayload {
  const customFields = task.custom_fields as Record<string, unknown> | undefined;
  if (!customFields || typeof customFields !== "object") return task;

  const result = { ...task };
  const mappedCustom: Record<string, unknown> = {};

  for (const [apiKey, rawValue] of Object.entries(customFields)) {
    const value = normalizeCustomFieldValue(rawValue);
    const semanticKey = CUSTOM_FIELD_SEMANTIC_KEYS[apiKey];
    if (semanticKey) {
      (result as Record<string, unknown>)[semanticKey] = value;
    } else {
      mappedCustom[apiKey] = value;
    }
  }

  if (Object.keys(mappedCustom).length > 0) {
    result.custom_fields = mappedCustom;
  } else {
    delete result.custom_fields;
  }

  return result;
}
