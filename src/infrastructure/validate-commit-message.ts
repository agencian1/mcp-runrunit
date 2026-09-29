import fs from 'node:fs';

/** Mesmo formato de validate-commit-msg.sh. O hook commit-msg chama o script bash. */
const TASK_COMMIT_RE = /^(\d+) - (feat|fix|docs|refactor|test|chore|perf) - \S.*$/;

const EXEMPT_RES = [/^Merge /, /^Revert "/, /^(fixup!|squash!|amend!)/i];

export function validateCommitSubject(subject: string): string | null {
  const trimmed = subject.trim();
  if (!trimmed) {
    return 'A mensagem de commit não pode estar vazia.';
  }

  if (EXEMPT_RES.some((re) => re.test(trimmed))) {
    return null;
  }

  if (!TASK_COMMIT_RE.test(trimmed)) {
    return [
      'Formato esperado: [numero da task] - [tipo] - [descrição]',
      'Tipos: feat, fix, docs, refactor, test, chore, perf',
      'Exemplo: 12345 - feat - adiciona suporte a cupom no carrinho',
    ].join('\n');
  }

  return null;
}

export function validateCommitMessage(message: string): string | null {
  const subject = message.split('\n')[0] ?? '';
  return validateCommitSubject(subject);
}

export function validateCommitMessageFile(msgFile: string): string | null {
  const message = fs.readFileSync(msgFile, 'utf8');
  return validateCommitMessage(message);
}
