/**
 * Domain types for Tasks: DTOs and contracts for the Runrun.it Tasks API.
 * These types define the shape of requests (list params, create/update body)
 * and belong in the domain layer so that application and adapters depend on
 * the same contract.
 */

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

export type CreateTaskPayload = {
  title: string;
  type_id: number;
  /** Set on create; stored via `PUT /tasks/:id/description`, not on the main create payload. */
  description?: string;
  board_stage_id?: number;
  board_name?: string;
  board_stage_name?: string;
  project_id?: number;
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

export type CreateTaskBody = {
  task: CreateTaskPayload;
};

export type UpdateTaskBody = {
  task: Record<string, unknown>;
};
