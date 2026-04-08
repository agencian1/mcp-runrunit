import { runrunitFetch } from "../adapters/driven/api.js";

export type ListProjectsParams = {
  /** Filter by client ID */
  client_id?: number;
  /** Filter by project group ID */
  project_group_id?: number;
  /** Filter by closed state */
  is_closed?: boolean;
  /** Filter by active state (is_active) */
  is_active?: boolean;
  page?: number;
  limit?: number;
};

export async function listProjects(params: ListProjectsParams = {}) {
  const query = params as Record<string, string | number | boolean | undefined>;
  return runrunitFetch<unknown[]>("projects", {
    query,
  });
}

export async function getProject(id: number) {
  return runrunitFetch<unknown>(`projects/${id}`);
}
