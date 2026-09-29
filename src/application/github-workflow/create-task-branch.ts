import {
  parseTaskNumber,
  taskBranchName,
  type GitWorkspacePort,
  type WorkflowPlan,
} from '../../domain/github-workflow.js';
import { errorMessage, rejected, requireProjectRoot } from './shared.js';

const SKILL = 'create-task-branch';
const COMMIT_PER_FILE = 'runrunit_commit_per_file';

export type CreateTaskBranchInput = {
  projectRoot?: string;
  taskId?: string;
  includesCommit?: boolean;
  approved?: boolean;
};

/**
 * Plans or creates only the branch task_[número].
 * Commit stays on runrunit_commit_per_file when includesCommit is set.
 */
export function createTaskBranch(
  input: CreateTaskBranchInput,
  git: GitWorkspacePort,
): WorkflowPlan {
  const root = requireProjectRoot(input.projectRoot);
  if (!root) {
    return rejected(SKILL, 'project_root é obrigatório.');
  }

  let currentBranch: string | null;
  try {
    currentBranch = git.currentBranch(root);
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }

  const taskNumber = parseTaskNumber(input.taskId) ?? parseTaskNumber(currentBranch);
  if (!taskNumber) {
    return rejected(
      SKILL,
      'Informe task_id ou esteja numa branch task_[número] para nomear a branch.',
    );
  }

  const branch = taskBranchName(taskNumber);
  const nextTool = input.includesCommit ? COMMIT_PER_FILE : null;
  const alreadyThere = currentBranch === branch;

  let exists: boolean;
  try {
    exists = alreadyThere || git.branchExists(root, branch);
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }

  const command = exists ? `git checkout ${branch}` : `git checkout -b ${branch}`;
  const description = alreadyThere
    ? `Já está em ${branch}. Nenhum checkout.`
    : exists
      ? `Trocar para a branch existente ${branch}.`
      : `Criar e trocar para ${branch}.`;

  if (!input.approved) {
    if (alreadyThere) {
      return {
        status: 'executed',
        skill: SKILL,
        summary: `Nada a criar: a branch atual já é ${branch}.`,
        actions: [{ description, command: undefined }],
        warnings: [],
        next_tool: nextTool,
        branch,
      };
    }

    return {
      status: 'awaiting_approval',
      skill: SKILL,
      summary: `Plano para a branch ${branch}. Nenhum checkout foi feito. Aprove com approved: true para executar.`,
      actions: [{ description, command }],
      warnings: [],
      next_tool: nextTool,
      branch,
    };
  }

  if (!alreadyThere) {
    try {
      if (exists) {
        git.checkoutExisting(root, branch);
      } else {
        git.checkoutNewBranch(root, branch);
      }
    } catch (err) {
      return rejected(SKILL, errorMessage(err));
    }
  }

  return {
    status: 'executed',
    skill: SKILL,
    summary: alreadyThere ? `Já estava em ${branch}.` : `Branch ${branch} em uso.`,
    actions: [{ description, command: alreadyThere ? undefined : command }],
    warnings: [],
    next_tool: nextTool,
    branch,
  };
}
