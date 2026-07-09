import fs from 'node:fs';

const TASK_COMMIT_RE = /^task\d+: .+$/i;

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
      'Formato esperado: task123456: descrição da alteração',
      'Exemplo: task14379: remove Cloudinary e mapeia link da branch',
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
