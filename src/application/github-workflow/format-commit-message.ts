import {
  formatCommitSubject,
  isCommitType,
  parseTaskNumber,
  type CommitType,
  type GitWorkspacePort,
  type WorkflowPlan,
} from '../../domain/github-workflow.js';
import { validateCommitSubject } from '../../infrastructure/validate-commit-message.js';
import { errorMessage, rejected, requireProjectRoot } from './shared.js';

const SKILL = 'format-commit-message';
const COMMIT_PER_FILE = 'runrunit_commit_per_file';

export type FormatCommitMessageInput = {
  projectRoot?: string;
  taskId?: string;
  type?: string;
  description?: string;
  includesCommit?: boolean;
  calledFrom?: string;
};

/**
 * Formats one commit subject. Does not create the commit.
 * When called_from is commit-per-file, next_tool stays null to avoid a cycle.
 */
export function formatCommitMessage(
  input: FormatCommitMessageInput,
  git?: GitWorkspacePort,
): WorkflowPlan {
  const type = input.type?.trim() ?? '';
  if (!isCommitType(type)) {
    return rejected(SKILL, 'type inválido. Use feat, fix, docs, refactor, test, chore ou perf.');
  }

  const description = input.description?.trim() ?? '';
  if (!description) {
    return rejected(SKILL, 'description é obrigatória.');
  }

  const resolved = resolveTaskNumber(input, git);
  if (!resolved.ok) {
    return resolved.plan;
  }

  const message = formatCommitSubject(resolved.taskNumber, type as CommitType, description);
  const validationError = validateCommitSubject(message);
  if (validationError) {
    return rejected(SKILL, validationError);
  }

  const handoff = input.includesCommit === true && input.calledFrom !== 'commit-per-file';

  return {
    status: 'executed',
    skill: SKILL,
    summary: handoff
      ? 'Mensagem pronta. O commit fica em runrunit_commit_per_file.'
      : 'Mensagem pronta. Nenhum commit foi criado.',
    actions: [
      {
        description: message,
        command: `git commit -m "$(cat <<'EOF'\n${message}\nEOF\n)"`,
      },
    ],
    warnings: [],
    next_tool: handoff ? COMMIT_PER_FILE : null,
    message,
  };
}

function resolveTaskNumber(
  input: FormatCommitMessageInput,
  git?: GitWorkspacePort,
): { ok: true; taskNumber: string } | { ok: false; plan: WorkflowPlan } {
  const fromArg = parseTaskNumber(input.taskId);
  if (fromArg) {
    return { ok: true, taskNumber: fromArg };
  }

  const root = requireProjectRoot(input.projectRoot);
  if (!root || !git) {
    return {
      ok: false,
      plan: rejected(SKILL, 'Informe task_id ou project_root numa branch task_[número].'),
    };
  }

  let branch: string | null;
  try {
    branch = git.currentBranch(root);
  } catch (err) {
    return { ok: false, plan: rejected(SKILL, errorMessage(err)) };
  }

  const fromBranch = parseTaskNumber(branch);
  if (!fromBranch) {
    return {
      ok: false,
      plan: rejected(
        SKILL,
        'Não foi possível derivar o número da task. Informe task_id ou use uma branch task_[número].',
      ),
    };
  }

  return { ok: true, taskNumber: fromBranch };
}
