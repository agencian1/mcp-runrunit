import {
  isSecretPath,
  parseTaskNumber,
  sortByDependency,
  type GitWorkspacePort,
  type PlannedCommit,
  type WorkflowPlan,
} from '../../domain/github-workflow.js';
import { validateCommitSubject } from '../../infrastructure/validate-commit-message.js';
import { formatCommitMessage } from './format-commit-message.js';
import { errorMessage, rejected, requireProjectRoot } from './shared.js';

const SKILL = 'commit-per-file';
const CHECK_PR = 'runrunit_check_pr';

export type CommitFileInput = {
  path: string;
  type?: string;
  description?: string;
};

export type CommitPerFileInput = {
  projectRoot?: string;
  taskId?: string;
  type?: string;
  description?: string;
  files?: CommitFileInput[];
  commits?: PlannedCommit[];
  includesPr?: boolean;
  approved?: boolean;
};

/**
 * Plans or creates one commit per file, in dependency order.
 * Does not open a pull request.
 */
export function commitPerFile(input: CommitPerFileInput, git: GitWorkspacePort): WorkflowPlan {
  const root = requireProjectRoot(input.projectRoot);
  if (!root) {
    return rejected(SKILL, 'project_root é obrigatório.');
  }

  let taskNumber: string | null = parseTaskNumber(input.taskId);
  if (!taskNumber) {
    try {
      taskNumber = parseTaskNumber(git.currentBranch(root));
    } catch (err) {
      return rejected(SKILL, errorMessage(err));
    }
  }
  if (!taskNumber) {
    return rejected(SKILL, 'Informe task_id ou esteja numa branch task_[número].');
  }

  const built = buildCommits(input, git, root, taskNumber);
  if (!Array.isArray(built)) {
    return built;
  }
  const commits = built;

  if (commits.length === 0) {
    const secrets = collectSecrets(input, git, root);
    if (secrets.length > 0) {
      return rejected(
        SKILL,
        `Nenhum arquivo para commitar. Ignorados por parecerem secrets: ${secrets.join(', ')}`,
      );
    }
    return rejected(SKILL, 'Nenhum arquivo para commitar.');
  }

  const secrets = collectSecrets(input, git, root);
  const warnings = secrets.length
    ? [`Arquivos ignorados por parecerem secrets: ${secrets.join(', ')}`]
    : [];

  const nextTool = input.includesPr ? CHECK_PR : null;
  const actions = commits.map((commit) => ({
    description: `${commit.path}: ${commit.message}`,
    command: `git add -- ${commit.path} && git commit -m ${shellQuote(commit.message)} -- ${commit.path}`,
  }));

  let diff: string;
  try {
    diff = git.diffStat(root);
  } catch {
    diff = '';
  }
  if (diff) {
    actions.unshift({ description: `Diff resumido:\n${diff}`, command: 'git diff --stat' });
  }

  if (!input.approved) {
    return {
      status: 'awaiting_approval',
      skill: SKILL,
      summary: `${commits.length} commit(s), um por arquivo. Nenhum commit foi criado. Aprove com approved: true e a mesma lista commits para executar.`,
      actions,
      warnings,
      next_tool: nextTool,
      commits,
    };
  }

  const created: PlannedCommit[] = [];
  try {
    for (const commit of commits) {
      git.commitFile(root, commit.path, commit.message);
      created.push(commit);
    }
  } catch (err) {
    const done = created.map((commit) => commit.path).join(', ');
    return rejected(
      SKILL,
      errorMessage(err),
      done ? [`Commits já criados antes da falha: ${done}`] : [],
    );
  }

  return {
    status: 'executed',
    skill: SKILL,
    summary: `${created.length} commit(s) criado(s), um por arquivo.`,
    actions,
    warnings,
    next_tool: nextTool,
    commits: created,
  };
}

function buildCommits(
  input: CommitPerFileInput,
  git: GitWorkspacePort,
  root: string,
  taskNumber: string,
): PlannedCommit[] | WorkflowPlan {
  if (input.commits && input.commits.length > 0) {
    return validateExplicitCommits(input.commits);
  }

  const files = resolveFiles(input, git, root);
  if ('status' in files) {
    return files;
  }

  const ordered = sortByDependency(files.safe, (file) => file.path);
  const commits: PlannedCommit[] = [];
  for (const file of ordered) {
    const type = file.type ?? input.type;
    const description =
      file.description?.trim() || input.description?.trim() || defaultDescription(file.path);
    const formatted = formatCommitMessage(
      {
        taskId: taskNumber,
        type,
        description,
        calledFrom: 'commit-per-file',
        includesCommit: false,
      },
      git,
    );
    if (formatted.status === 'rejected' || !formatted.message) {
      return rejected(SKILL, formatted.summary);
    }
    commits.push({ path: file.path, message: formatted.message });
  }
  return commits;
}

function validateExplicitCommits(commits: PlannedCommit[]): PlannedCommit[] | WorkflowPlan {
  const safe: PlannedCommit[] = [];
  for (const commit of commits) {
    const path = commit.path?.trim();
    const message = commit.message?.trim();
    if (!path || !message) {
      return rejected(SKILL, 'Cada item de commits precisa de path e message.');
    }
    if (isSecretPath(path)) {
      return rejected(SKILL, `Recusado: ${path} parece secret e não entra no commit.`);
    }
    const validationError = validateCommitSubject(message);
    if (validationError) {
      return rejected(SKILL, `${path}: ${validationError}`);
    }
    safe.push({ path, message });
  }
  return safe;
}

function resolveFiles(
  input: CommitPerFileInput,
  git: GitWorkspacePort,
  root: string,
): { safe: CommitFileInput[] } | WorkflowPlan {
  if (input.files && input.files.length > 0) {
    const safe: CommitFileInput[] = [];
    for (const file of input.files) {
      const path = file.path?.trim();
      if (!path) {
        return rejected(SKILL, 'Cada arquivo precisa de path.');
      }
      if (!isSecretPath(path)) {
        safe.push({ path, type: file.type, description: file.description });
      }
    }
    return { safe };
  }

  if (!input.type?.trim()) {
    return rejected(
      SKILL,
      'Informe type ou a lista commits aprovada (path + message) antes de executar.',
    );
  }

  let changes;
  try {
    changes = git.listChanges(root);
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }

  const safe = changes
    .filter((change) => change.path && !isSecretPath(change.path))
    .map((change) => ({ path: change.path }));
  return { safe };
}

function collectSecrets(input: CommitPerFileInput, git: GitWorkspacePort, root: string): string[] {
  const fromInput = [
    ...(input.files ?? []).map((file) => file.path),
    ...(input.commits ?? []).map((commit) => commit.path),
  ].filter((path) => path && isSecretPath(path));

  if (input.files?.length || input.commits?.length) {
    return fromInput;
  }

  try {
    return git
      .listChanges(root)
      .map((change) => change.path)
      .filter((path) => isSecretPath(path));
  } catch {
    return fromInput;
  }
}

function defaultDescription(filePath: string): string {
  const base = filePath.split(/[/\\]/).pop() || filePath;
  return `atualiza ${base}`;
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}
