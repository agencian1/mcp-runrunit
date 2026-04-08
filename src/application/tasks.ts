import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { RunrunitAPIError, runrunitFetch } from "../adapters/driven/api.js";
import { getUserFromToken } from "./users.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEBUG_LOG = path.resolve(__dirname, "..", "..", "..", "debug-6b964c.log");
function dbg(payload: Record<string, unknown>) {
  try { fs.appendFileSync(DEBUG_LOG, JSON.stringify({ ...payload, timestamp: Date.now() }) + "\n"); } catch { /* ignore */ }
}

export type ListTasksParams = {
  ids?: string;
  user_id?: string;
  follower_id?: string;
  responsible_id?: string;
  assignee_id?: string;
  filter_id?: number | string;
  board_stage_id?: number;
  project_id?: number;
  is_closed?: boolean;
  is_working_on?: boolean;
  sort?: string;
  sort_dir?: "asc" | "desc";
  page?: number;
  limit?: number;
  bypass_status_default?: boolean;
};

export async function listTasks(params: ListTasksParams = {}) {
  return runrunitFetch<unknown[]>("tasks", { query: params as Record<string, string | number | boolean | undefined> });
}

export async function listTaskFilters() {
  return runrunitFetch<unknown[]>("tasks/filters");
}

export async function getTask(id: number) {
  return runrunitFetch<unknown>(`tasks/${id}`);
}

export async function listSubtasks(taskId: number) {
  return runrunitFetch<unknown[]>(`tasks/${taskId}/subtasks`);
}

export type CreateTaskBody = {
  task: {
    title: string;
    type_id: number;
    board_stage_id?: number;
    board_name?: string;
    board_stage_name?: string;
    project_id?: number;
    description?: string;
    project_name?: string;
    on_going?: boolean;
    desired_start_date?: string;
    desired_date?: string;
    tag_list?: string;
    assignments?: Array<{ assignee_id: string; team_id?: number }>;
    task_prerequisite_ids?: number[];
    task_descendant_ids?: number[];
    follower_ids?: string[];
    document_ids?: number[];
  };
};

async function getAssigneeId(body: CreateTaskBody) {

  const user = await getUserFromToken();
  if (!user) {
    return { error: "No user found" };
  }
  return user.id;
}

/**
 * Runrun.it keeps the rich-text task body on a separate resource:
 * `GET/PUT /api/v1.0/tasks/:task_id/description` (see Task Description API).
 */
type TaskDescriptionResource = {
  description?: string | null;
};

/**
 * Parses the task id from `POST /tasks` (response is the task object with top-level `id`).
 */
function extractCreatedTaskId(result: unknown): number {
  if (result !== null && typeof result === "object" && "id" in result) {
    const raw = (result as { id: unknown }).id;
    if (typeof raw === "number" && Number.isFinite(raw)) {
      return raw;
    }
  }
  throw new RunrunitAPIError(
    "Task was created but the API response did not include a numeric id; description could not be updated.",
    undefined,
    result
  );
}

/**
 * Loads the current description, appends `incoming` at the end (never replaces outright),
 * and persists via `PUT .../description`.
 *
 * Flow: (1) GET current text, (2) merge `existing + "\\n\\n" + new`, (3) PUT full body.
 * For a newly created task the GET is usually empty; we still call GET so any server-side
 * default or race-written content is preserved.
 */
async function appendTaskDescription(taskId: number, incoming: string): Promise<void> {
  const trimmedIncoming = incoming.trim();
  if (!trimmedIncoming) {
    return;
  }

  const current = await runrunitFetch<TaskDescriptionResource>(`tasks/${taskId}/description`);
  const existing =
    typeof current?.description === "string" ? current.description.trimEnd() : "";
  const merged =
    existing.length === 0 ? trimmedIncoming : `${existing}\n\n${trimmedIncoming}`;

  await runrunitFetch<unknown>(`tasks/${taskId}/description`, {
    method: "PUT",
    body: JSON.stringify({
      task_description: {
        id: null,
        description: merged,
        task_id: taskId,
        created_at: null,
        updated_at: null,
        current_editor_id: null,
        edited_at: null,
        locked_at: null,
        enterprise_id: null,
      },
    }),
  });
}

/**
 * Creates a task via `POST /tasks`, then optionally sets its description through the
 * dedicated description endpoints.
 *
 * When `body.task.description` is non-empty:
 * - It is **not** sent on the create payload (that API does not own the rich description).
 * - After create succeeds, we **GET** `/tasks/:id/description`, **append** the new text
 *   after any existing content, and **PUT** the merged text (see `appendTaskDescription`).
 *
 * If description update fails after the task exists, the error is thrown and the caller
 * should treat the task as created but the description as not applied.
 */
export async function createTask(body: CreateTaskBody) {
  console.log("createTask", body);
  const id = body.task.assignments?.[0]?.assignee_id;
  if (!id) {
    const assigneeId = await getAssigneeId(body);
    if (typeof assigneeId === "string") {
      body.task.assignments = [{ assignee_id: assigneeId }];
    } else {
      return assigneeId;
    }
  }

  const { description: descriptionForAppend, ...taskForCreate } = body.task;
  const result = await runrunitFetch<unknown>("tasks", {
    method: "POST",
    body: JSON.stringify({ task: taskForCreate }),
  });

  if (descriptionForAppend != null && String(descriptionForAppend).trim() !== "") {
    const taskId = extractCreatedTaskId(result);
    await appendTaskDescription(taskId, String(descriptionForAppend));
  }

  return result;
}

export type UpdateTaskBody = {
  task: Record<string, unknown>;
};

export async function updateTask(id: number, body: UpdateTaskBody) {
  try {
    const result = await runrunitFetch<unknown>(`tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });

    return result;
  } catch (err) {
    throw err;
  }
}

export async function deleteTask(id: number) {
  return runrunitFetch<void>(`tasks/${id}`, { method: "DELETE" });
}

export async function createWorkflow(taskId: number) {
  return runrunitFetch<unknown>("workflows", {
    method: "POST",
    body: JSON.stringify({ task_id: taskId }),
  });
}

export async function assignmentPlay(taskId: number, assignmentId: string) {
  return runrunitFetch<unknown>(`tasks/${taskId}/assignments/${assignmentId}/play`, {
    method: "POST",
    body: "{}",
  });
}

export async function listBoardStages(boardId: number) {
  const stages = await runrunitFetch<unknown[]>(`boards/${boardId}/stages`);
  return stages;
}

export async function moveTask(id: number, boardStageId: number) {
  return runrunitFetch<unknown>(`tasks/${id}/move`, {
    method: "POST",
    body: JSON.stringify({ board_stage_id: boardStageId }),
  });
}
