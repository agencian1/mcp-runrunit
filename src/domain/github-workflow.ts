/**
 * Git workflow domain: plan types and the driven port for local git/GitHub.
 * Application use cases depend on this port, not on child_process or gh.
 */

export const COMMIT_TYPES = ['feat', 'fix', 'docs', 'refactor', 'test', 'chore', 'perf'] as const;

export type CommitType = (typeof COMMIT_TYPES)[number];

export type WorkflowStatus = 'awaiting_approval' | 'executed' | 'rejected';

export type WorkflowAction = {
  description: string;
  command?: string;
};

export type PlannedCommit = {
  path: string;
  message: string;
};

export type ChecklistItem = {
  ok: boolean;
  item: string;
};

export type WorkflowPlan = {
  status: WorkflowStatus;
  skill: string;
  summary: string;
  actions: WorkflowAction[];
  warnings: string[];
  next_tool: string | null;
  chain?: string[];
  message?: string;
  commits?: PlannedCommit[];
  checklist?: ChecklistItem[];
  title?: string;
  body?: string;
  branch?: string;
  target_environment?: 'development' | 'homolog';
  pull_request_url?: string;
};

export type GitFileChange = {
  path: string;
  status: string;
  untracked: boolean;
};

export type GitCommitRecord = {
  sha: string;
  subject: string;
  files: string[];
};

export type OpenPullRequestInput = {
  projectRoot: string;
  title: string;
  body: string;
  base: string;
  head: string;
  labels: string[];
  reviewers: string[];
};

export interface GitWorkspacePort {
  currentBranch(projectRoot: string): string | null;
  branchExists(projectRoot: string, branch: string): boolean;
  refExists(projectRoot: string, ref: string): boolean;
  checkoutNewBranch(projectRoot: string, branch: string): void;
  checkoutExisting(projectRoot: string, branch: string): void;
  listChanges(projectRoot: string): GitFileChange[];
  diffStat(projectRoot: string): string;
  listCommits(projectRoot: string, baseRef: string | null): GitCommitRecord[];
  commitFile(projectRoot: string, filePath: string, message: string): void;
  pushBranch(projectRoot: string, branch: string): void;
  openPullRequest(input: OpenPullRequestInput): string;
}

export function isCommitType(value: string): value is CommitType {
  return (COMMIT_TYPES as readonly string[]).includes(value);
}

const SECRET_ALLOW = [/(^|\/)\.env\.(example|sample|template)$/i];

const SECRET_FILE_RES = [
  /(^|\/)\.env(\.|$)/i,
  /(^|\/)credentials\.json$/i,
  /(^|\/).+\.(pem|key|p12|pfx)$/i,
  /(^|\/)id_rsa$/i,
  /(^|\/)id_dsa$/i,
  /(^|\/).*\.secret$/i,
  /(^|\/)secrets?\.(json|ya?ml|txt)$/i,
];

export function isSecretPath(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, '/');
  if (SECRET_ALLOW.some((re) => re.test(normalized))) {
    return false;
  }
  return SECRET_FILE_RES.some((re) => re.test(normalized));
}

export function parseTaskNumber(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  const exact = trimmed.match(/^(?:task[_-]?)?(\d+)$/i);
  if (exact?.[1]) return exact[1];
  const embedded = trimmed.match(/task[_-](\d+)/i);
  return embedded?.[1] ?? null;
}

export function taskBranchName(taskNumber: string): string {
  return `task_${taskNumber}`;
}

export function formatCommitSubject(
  taskNumber: string,
  type: CommitType,
  description: string,
): string {
  return `${taskNumber} - ${type} - ${description.trim()}`;
}

/** Lower rank commits first: configs and contracts before UI. */
export function dependencyRank(filePath: string): number {
  const p = filePath.replace(/\\/g, '/').toLowerCase();
  if (
    /(^|\/)(config|configs|schema|schemas|loader|loaders)\b/.test(p) ||
    /(^|\/)(package\.json|tsconfig.*\.json|server\.json)$/.test(p) ||
    /(^|\/)\.env\.(example|sample|template)$/.test(p)
  ) {
    return 0;
  }
  if (/(^|\/)(domain|ports?|interfaces?|types|dto)\b/.test(p)) return 1;
  if (/(^|\/)(application|use-cases|usecases)\b/.test(p)) return 2;
  if (/(^|\/)(adapters?|infrastructure)\b/.test(p)) return 3;
  if (/(^|\/)(components?|sections?|blocks?|ui|pages?)\b/.test(p)) return 4;
  if (/\.(test|spec)\./.test(p) || /(^|\/)(__tests__|tests?)\//.test(p)) return 6;
  return 5;
}

export function sortByDependency<T>(items: T[], pathOf: (item: T) => string): T[] {
  return [...items].sort(
    (a, b) =>
      dependencyRank(pathOf(a)) - dependencyRank(pathOf(b)) || pathOf(a).localeCompare(pathOf(b)),
  );
}

export function isProductionBranch(branch: string): boolean {
  const name = branch
    .trim()
    .toLowerCase()
    .replace(/^refs\/heads\//, '');
  return name === 'main' || name === 'master';
}

export function parsePrBase(value: string | undefined): 'development' | 'homolog' | null {
  const name = (value ?? 'development').trim().toLowerCase();
  if (name === 'development' || name === 'homolog') return name;
  return null;
}
