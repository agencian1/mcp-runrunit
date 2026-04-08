import { runrunitFetch } from "../adapters/driven/api.js";

export async function listTaskComments(taskId: number) {
  return runrunitFetch<unknown[]>(`tasks/${taskId}/comments`);
}

export async function getComment(id: number) {
  return runrunitFetch<unknown>(`comments/${id}`);
}

export type CreateCommentBody =
  | { task_id: number; text: string }
  | { project_id: number; text: string };

export async function createComment(body: CreateCommentBody) {
  return runrunitFetch<unknown>("comments", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * Cria um comentário na sessão de comentários externos (compartilhados com clientes).
 * Para comentar nessa sessão a API exige channel_name: "guest".
 */
export async function createExternalComment(taskId: number, text: string) {
  return runrunitFetch<unknown>("comments", {
    method: "POST",
    body: JSON.stringify({
      task_id: taskId,
      text,
      channel_name: "guest",
    }),
  });
}

export async function updateComment(id: number, text: string) {
  return runrunitFetch<unknown>(`comments/${id}`, {
    method: "PUT",
    body: JSON.stringify({ text }),
  });
}

export async function deleteComment(id: number) {
  return runrunitFetch<void>(`comments/${id}`, { method: "DELETE" });
}

export async function commentReaction(commentId: number, emoji: string) {
  return runrunitFetch<unknown>(`comments/${commentId}/reaction`, {
    method: "POST",
    body: JSON.stringify({ emoji }),
  });
}
