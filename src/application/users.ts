import { runrunitFetch } from "../adapters/driven/api.js";

export type RunrunitUser = {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  avatar_large_url?: string;
  cost_hour?: number;
  is_master?: boolean;
  is_manager?: boolean;
  is_auditor?: boolean;
  can_create_client_project_and_task_types?: boolean;
  can_create_boards?: boolean;
  is_blocked_on_mobile?: boolean;
  bypass_block_by_time_worked?: boolean;
  time_zone?: string;
  position?: string | null;
  on_vacation?: boolean;
};

export async function listUsers(): Promise<RunrunitUser[]> {
  return runrunitFetch<RunrunitUser[]>("users");
}

/**
 * Busca o usuário associado ao token configurado (RUNRUNIT_USER_TOKEN).
 * Utiliza o endpoint `GET /users` e retorna o primeiro usuário da lista,
 * que é o suficiente para preencher `assignments` em chamadas que precisem
 * do `assignee_id`.
 */
export async function getUserFromToken(): Promise<RunrunitUser | null> {
  const users = await listUsers();

  if (!Array.isArray(users) || users.length === 0) {
    return null;
  }

  return users[0] as RunrunitUser;
}

