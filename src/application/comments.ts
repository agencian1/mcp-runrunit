import { runrunitFetch } from '../adapters/driven/api.js';

export async function listTaskComments(taskId: number) {
  return runrunitFetch<unknown[]>(`tasks/${taskId}/comments`);
}

export async function getComment(id: number) {
  return runrunitFetch<unknown>(`comments/${id}`);
}

export type TaskCommentSections = {
  escopo: string;
  como_foi_feito: string;
  arquivos_configuracoes: string;
  como_validar: string;
  links: string;
};

export type TaskCommentEvidence = {
  url_antes?: string;
  url_depois?: string;
};

const TASK_COMMENT_SECTIONS: Array<[keyof TaskCommentSections, string]> = [
  ['escopo', 'Escopo'],
  ['como_foi_feito', 'Como foi feito'],
  ['arquivos_configuracoes', 'Quais arquivos/configurações foram afetadas'],
  ['como_validar', 'Como validar'],
  ['links', 'Links'],
];

function markdownViolation(value: string): string | null {
  if (/(^|\n)\s{0,3}#{1,6}\s+\S/.test(value)) {
    return 'título com #';
  }
  if (value.includes('**')) {
    return 'negrito (**)';
  }
  if (value.includes('`')) {
    return 'código com crase';
  }
  if (/\[[^\]]+\]\([^)]+\)/.test(value)) {
    return 'link Markdown [texto](url)';
  }
  return null;
}

function assertPlainText(value: string, label: string): void {
  const violation = markdownViolation(value);
  if (violation != null) {
    throw new Error(
      `A seção "${label}" contém Markdown (${violation}). Use texto simples e URLs cruas.`,
    );
  }
}

/**
 * Monta o comentário interno no template da task 15392.
 * Rejeita seção vazia, Markdown e validação com um único passo.
 * url_antes e url_depois, quando preenchidos, entram no final de Links.
 */
export function buildTaskComment(
  sections: TaskCommentSections,
  evidence?: TaskCommentEvidence,
): string {
  const blocks: Array<{ key: keyof TaskCommentSections; label: string; value: string }> = [];

  for (const [key, label] of TASK_COMMENT_SECTIONS) {
    const value = String(sections[key] ?? '').trim();
    if (value.length === 0) {
      throw new Error(`Seção obrigatória vazia: ${label}.`);
    }
    assertPlainText(value, label);
    if (key === 'como_validar') {
      const steps = value
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
      if (steps.length < 2) {
        throw new Error('A seção "Como validar" precisa de pelo menos dois passos, um por linha.');
      }
    }
    blocks.push({ key, label, value });
  }

  const evidenceLines: string[] = [];
  const antes = evidence?.url_antes?.trim() ?? '';
  const depois = evidence?.url_depois?.trim() ?? '';
  if (antes.length > 0) {
    assertPlainText(antes, 'url_antes');
    evidenceLines.push(`Antes: ${antes}`);
  }
  if (depois.length > 0) {
    assertPlainText(depois, 'url_depois');
    evidenceLines.push(`Depois: ${depois}`);
  }

  return blocks
    .map((block) => {
      const body =
        block.key === 'links' && evidenceLines.length > 0
          ? `${block.value}\n${evidenceLines.join('\n')}`
          : block.value;
      return `${block.label}:\n${body}`;
    })
    .join('\n\n');
}

export type CreateCommentBody =
  | { task_id: number; text: string }
  | { project_id: number; text: string };

export async function createComment(body: CreateCommentBody) {
  return runrunitFetch<unknown>('comments', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/**
 * Cria um comentário na sessão de comentários externos (compartilhados com clientes).
 * Para comentar nessa sessão a API exige channel_name: "guest".
 */
export async function createExternalComment(taskId: number, text: string) {
  return runrunitFetch<unknown>('comments', {
    method: 'POST',
    body: JSON.stringify({
      task_id: taskId,
      text,
      channel_name: 'guest',
    }),
  });
}

export async function updateComment(id: number, text: string) {
  return runrunitFetch<unknown>(`comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ text }),
  });
}

export async function deleteComment(id: number) {
  return runrunitFetch<void>(`comments/${id}`, { method: 'DELETE' });
}

export async function commentReaction(commentId: number, emoji: string) {
  return runrunitFetch<unknown>(`comments/${commentId}/reaction`, {
    method: 'POST',
    body: JSON.stringify({ emoji }),
  });
}
