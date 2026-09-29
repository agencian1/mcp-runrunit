import {
  isProductionBranch,
  type ChecklistItem,
  type GitCommitRecord,
  type GitWorkspacePort,
  type WorkflowPlan,
} from '../../domain/github-workflow.js';
import { validateCommitSubject } from '../../infrastructure/validate-commit-message.js';
import { errorMessage, rejected, requireProjectRoot } from './shared.js';

const SKILL = 'check-pr';

const EXEMPT_SUBJECT = /^(Merge |Revert "|fixup!|squash!|amend!)/i;

export type CheckPrInput = {
  projectRoot?: string;
  base?: string;
};

/**
 * Read-only PR checklist: branch task_[número], subject format, one file per commit.
 * End of the workflow chain — next_tool is always null.
 */
export function checkPr(input: CheckPrInput, git: GitWorkspacePort): WorkflowPlan {
  const root = requireProjectRoot(input.projectRoot);
  if (!root) {
    return rejected(SKILL, 'project_root é obrigatório.');
  }

  let branch: string | null;
  try {
    branch = git.currentBranch(root);
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }

  const checklist: ChecklistItem[] = [];
  const branchOk = Boolean(branch && /^task_\d+$/.test(branch));
  checklist.push({
    ok: branchOk,
    item: branchOk
      ? `Branch ${branch} segue task_[número].`
      : `Branch atual "${branch ?? '(desconhecida)'}" não segue task_[número].`,
  });

  const loaded = loadCommits(git, root, input.base);
  if ('status' in loaded) {
    return loaded;
  }

  if (loaded.commits.length === 0) {
    checklist.push({
      ok: false,
      item: `Nenhum commit em relação a ${loaded.comparedTo}.`,
    });
  }

  for (const commit of loaded.commits) {
    checklist.push(...checkCommit(commit));
  }

  const warnings = loaded.warning ? [loaded.warning] : [];
  const failed = checklist.filter((item) => !item.ok);

  if (branch && isProductionBranch(branch)) {
    warnings.push('A branch atual é de produção. Não abra PR a partir dela.');
  }

  return {
    status: failed.length === 0 ? 'executed' : 'rejected',
    skill: SKILL,
    summary:
      failed.length === 0
        ? `Checklist ok em ${branch ?? 'branch atual'} comparado a ${loaded.comparedTo}. Fim da cadeia.`
        : `Checklist com ${failed.length} falha(s) comparado a ${loaded.comparedTo}.`,
    actions: checklist.map((item) => ({
      description: `${item.ok ? 'ok' : 'falha'} — ${item.item}`,
    })),
    warnings,
    next_tool: null,
    checklist,
    branch: branch ?? undefined,
  };
}

function checkCommit(commit: GitCommitRecord): ChecklistItem[] {
  if (EXEMPT_SUBJECT.test(commit.subject)) {
    return [
      {
        ok: true,
        item: `${shortSha(commit.sha)} isento do formato (${commit.subject}).`,
      },
    ];
  }

  const items: ChecklistItem[] = [];
  const subjectError = validateCommitSubject(commit.subject);
  items.push({
    ok: subjectError == null,
    item: subjectError
      ? `${shortSha(commit.sha)} fora do formato: ${commit.subject}`
      : `${shortSha(commit.sha)} formato ok: ${commit.subject}`,
  });

  const fileCount = commit.files.length;
  items.push({
    ok: fileCount === 1,
    item:
      fileCount === 1
        ? `${shortSha(commit.sha)} tem um arquivo (${commit.files[0]}).`
        : `${shortSha(commit.sha)} tem ${fileCount} arquivo(s); o padrão é um commit por arquivo.`,
  });
  return items;
}

function loadCommits(
  git: GitWorkspacePort,
  root: string,
  base: string | undefined,
): { commits: GitCommitRecord[]; comparedTo: string; warning?: string } | WorkflowPlan {
  const requested = base?.trim();
  const candidates = requested ? [requested] : ['origin/development', 'origin/homolog'];

  for (const candidate of candidates) {
    let exists: boolean;
    try {
      exists = git.refExists(root, candidate);
    } catch (err) {
      return rejected(SKILL, errorMessage(err));
    }
    if (!exists) continue;
    try {
      return {
        commits: git.listCommits(root, candidate),
        comparedTo: candidate,
      };
    } catch (err) {
      return rejected(SKILL, errorMessage(err));
    }
  }

  try {
    return {
      commits: git.listCommits(root, null),
      comparedTo: 'os últimos commits',
      warning: requested
        ? `Base ${requested} não encontrada. Checklist usa os commits recentes.`
        : 'origin/development e origin/homolog não encontradas. Checklist usa os commits recentes.',
    };
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }
}

function shortSha(sha: string): string {
  return sha.slice(0, 7);
}
