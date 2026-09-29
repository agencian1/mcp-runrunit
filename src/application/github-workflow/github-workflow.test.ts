import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkPr } from './check-pr.js';
import { commitPerFile } from './commit-per-file.js';
import { routeCommitsBranchesPrs } from './commits-branches-prs.js';
import { createPrGithub } from './create-pr-github.js';
import { createTaskBranch } from './create-task-branch.js';
import { formatCommitMessage } from './format-commit-message.js';
import type {
  GitCommitRecord,
  GitFileChange,
  GitWorkspacePort,
  OpenPullRequestInput,
  PlannedCommit,
} from '../../domain/github-workflow.js';

class InMemoryGitWorkspace implements GitWorkspacePort {
  branch: string | null = 'main';
  branches = new Set<string>(['main']);
  refs = new Set<string>(['origin/development']);
  changes: GitFileChange[] = [];
  commits: GitCommitRecord[] = [];
  diff = '';
  checkoutCalls: string[] = [];
  commitCalls: PlannedCommit[] = [];
  pushes: string[] = [];
  pullRequests: OpenPullRequestInput[] = [];
  commitError: string | null = null;

  currentBranch(): string | null {
    return this.branch;
  }

  branchExists(_projectRoot: string, branch: string): boolean {
    return this.branches.has(branch);
  }

  refExists(_projectRoot: string, ref: string): boolean {
    return this.refs.has(ref);
  }

  checkoutNewBranch(_projectRoot: string, branch: string): void {
    if (this.branches.has(branch)) {
      throw new Error(`branch exists: ${branch}`);
    }
    this.branches.add(branch);
    this.branch = branch;
    this.checkoutCalls.push(`new:${branch}`);
  }

  checkoutExisting(_projectRoot: string, branch: string): void {
    if (!this.branches.has(branch)) {
      throw new Error(`missing branch: ${branch}`);
    }
    this.branch = branch;
    this.checkoutCalls.push(`existing:${branch}`);
  }

  listChanges(): GitFileChange[] {
    return this.changes;
  }

  diffStat(): string {
    return this.diff;
  }

  listCommits(_projectRoot: string, baseRef: string | null): GitCommitRecord[] {
    if (baseRef && !this.refs.has(baseRef)) {
      throw new Error(`unknown ref ${baseRef}`);
    }
    return this.commits;
  }

  commitFile(_projectRoot: string, filePath: string, message: string): void {
    if (this.commitError) {
      throw new Error(this.commitError);
    }
    this.commitCalls.push({ path: filePath, message });
    this.commits.unshift({
      sha: `sha${this.commitCalls.length}`,
      subject: message,
      files: [filePath],
    });
    this.changes = this.changes.filter((change) => change.path !== filePath);
  }

  pushBranch(_projectRoot: string, branch: string): void {
    this.pushes.push(branch);
  }

  openPullRequest(input: OpenPullRequestInput): string {
    this.pullRequests.push(input);
    return `https://github.com/example/repo/pull/${this.pullRequests.length}`;
  }
}

function writePrTemplate(root: string): void {
  const dir = path.join(root, '.github');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'PULL_REQUEST_TEMPLATE.md'),
    `# Título do PR: (Ex: task0123: feat: Adiciona login social com Google)

## 🎯 Tipo de Mudança

- [ ] 🐛 **Correção de bug** (alteração que corrige um problema)
- [ ] ✨ **Novo recurso** (alteração que adiciona uma funcionalidade)
- [ ] ♻️ **Refatoração** (uma alteração de código que não corrige um bug nem adiciona um recurso)
- [ ] 📖 **Documentação** (atualizações na documentação)
- [ ] 🎨 **Alteração de layout** (Mudança no layout sem alterar o comportamento de uma funcionalidade existente)
---

## 📝 Descrição

> placeholder

---
`,
  );
}

describe('routeCommitsBranchesPrs', () => {
  it('routes branch and commit to the branch tool first', () => {
    const plan = routeCommitsBranchesPrs('branch_and_commit');

    expect(plan.status).toBe('executed');
    expect(plan.next_tool).toBe('runrunit_create_task_branch');
    expect(plan.chain).toEqual(['runrunit_create_task_branch', 'runrunit_commit_per_file']);
  });

  it('routes a pull request request to the checklist only', () => {
    const plan = routeCommitsBranchesPrs('pr');

    expect(plan.next_tool).toBe('runrunit_check_pr');
    expect(plan.chain).toEqual(['runrunit_check_pr']);
    expect(
      plan.actions.some((action) => action.description.includes('runrunit_create_pr_github')),
    ).toBe(true);
  });

  it('rejects an unknown intent', () => {
    expect(routeCommitsBranchesPrs('push').status).toBe('rejected');
  });
});

describe('createTaskBranch', () => {
  it('plans a new branch and does not check it out until approved', () => {
    const git = new InMemoryGitWorkspace();

    const plan = createTaskBranch({ projectRoot: '/repo', taskId: '12345' }, git);

    expect(plan.status).toBe('awaiting_approval');
    expect(plan.branch).toBe('task_12345');
    expect(plan.actions[0]?.command).toBe('git checkout -b task_12345');
    expect(git.branch).toBe('main');
    expect(git.checkoutCalls).toEqual([]);

    const done = createTaskBranch({ projectRoot: '/repo', taskId: '12345', approved: true }, git);

    expect(done.status).toBe('executed');
    expect(git.branch).toBe('task_12345');
    expect(git.checkoutCalls).toEqual(['new:task_12345']);
  });

  it('points at commit-per-file when the request includes a commit', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_99';
    git.branches.add('task_99');

    const plan = createTaskBranch({ projectRoot: '/repo', includesCommit: true }, git);

    expect(plan.status).toBe('executed');
    expect(plan.branch).toBe('task_99');
    expect(plan.next_tool).toBe('runrunit_commit_per_file');
    expect(git.checkoutCalls).toEqual([]);
  });
});

describe('formatCommitMessage', () => {
  it('formats a subject and does not commit', () => {
    const plan = formatCommitMessage({
      taskId: '12345',
      type: 'feat',
      description: 'adiciona suporte a cupom no carrinho',
    });

    expect(plan.status).toBe('executed');
    expect(plan.message).toBe('12345 - feat - adiciona suporte a cupom no carrinho');
    expect(plan.next_tool).toBeNull();
  });

  it('derives the task number from the current branch', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_14751';

    const plan = formatCommitMessage(
      {
        projectRoot: '/repo',
        type: 'fix',
        description: 'corrige seleção de SKU na PDP',
        includesCommit: true,
      },
      git,
    );

    expect(plan.message).toBe('14751 - fix - corrige seleção de SKU na PDP');
    expect(plan.next_tool).toBe('runrunit_commit_per_file');
  });

  it('does not hand off when called from commit-per-file', () => {
    const plan = formatCommitMessage({
      taskId: '10',
      type: 'chore',
      description: 'atualiza manifest',
      includesCommit: true,
      calledFrom: 'commit-per-file',
    });

    expect(plan.next_tool).toBeNull();
  });

  it('rejects an unknown type', () => {
    const plan = formatCommitMessage({ taskId: '10', type: 'wip', description: 'ajusta' });
    expect(plan.status).toBe('rejected');
  });
});

describe('commitPerFile', () => {
  it('plans one commit per file in dependency order and skips secrets', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_10';
    git.changes = [
      { path: 'src/components/Button.tsx', status: ' M', untracked: false },
      { path: '.env', status: '??', untracked: true },
      { path: 'src/domain/user.ts', status: 'M ', untracked: false },
      { path: '.env.example', status: ' M', untracked: false },
    ];

    const plan = commitPerFile(
      { projectRoot: '/repo', type: 'feat', description: 'organiza módulos' },
      git,
    );

    expect(plan.status).toBe('awaiting_approval');
    expect(plan.commits?.map((commit) => commit.path)).toEqual([
      '.env.example',
      'src/domain/user.ts',
      'src/components/Button.tsx',
    ]);
    expect(plan.warnings.some((warning) => warning.includes('.env'))).toBe(true);
    expect(plan.commits?.every((commit) => commit.message.startsWith('10 - feat - '))).toBe(true);
    expect(git.commitCalls).toEqual([]);
  });

  it('keeps an approved commit list order and writes only after approval', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_10';
    const commits = [
      { path: 'src/components/Button.tsx', message: '10 - feat - atualiza botao' },
      { path: 'src/domain/user.ts', message: '10 - feat - atualiza usuario' },
    ];

    const plan = commitPerFile({ projectRoot: '/repo', commits, includesPr: true }, git);
    expect(plan.status).toBe('awaiting_approval');
    expect(plan.commits).toEqual(commits);
    expect(plan.next_tool).toBe('runrunit_check_pr');
    expect(git.commitCalls).toEqual([]);

    const done = commitPerFile({ projectRoot: '/repo', commits, approved: true }, git);
    expect(done.status).toBe('executed');
    expect(git.commitCalls).toEqual(commits);
  });

  it('rejects a secret path in the approved list without committing', () => {
    const git = new InMemoryGitWorkspace();
    const plan = commitPerFile(
      {
        projectRoot: '/repo',
        approved: true,
        commits: [{ path: 'credentials.json', message: '10 - chore - atualiza segredo' }],
      },
      git,
    );

    expect(plan.status).toBe('rejected');
    expect(git.commitCalls).toEqual([]);
  });
});

describe('checkPr', () => {
  it('accepts a task branch with one file per formatted commit', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_10';
    git.commits = [
      {
        sha: 'abc1234ffff',
        subject: '10 - feat - adiciona suporte a cupom no carrinho',
        files: ['src/domain/coupon.ts'],
      },
    ];

    const plan = checkPr({ projectRoot: '/repo' }, git);

    expect(plan.status).toBe('executed');
    expect(plan.next_tool).toBeNull();
    expect(plan.checklist?.every((item) => item.ok)).toBe(true);
  });

  it('rejects a commit that touches more than one file', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_10';
    git.commits = [
      {
        sha: 'abc1234ffff',
        subject: '10 - feat - adiciona suporte a cupom no carrinho',
        files: ['src/domain/coupon.ts', 'src/ui/Cart.tsx'],
      },
    ];

    const plan = checkPr({ projectRoot: '/repo' }, git);

    expect(plan.status).toBe('rejected');
    expect(plan.checklist?.some((item) => !item.ok && item.item.includes('2 arquivo'))).toBe(true);
  });
});

describe('createPrGithub', () => {
  it('returns a plan and does not push until approved', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pr-plan-'));
    writePrTemplate(root);
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_123';

    const plan = createPrGithub(
      {
        projectRoot: root,
        taskId: '123',
        type: 'feat',
        titleDescription: 'Adiciona login social',
        description: 'Motivo da mudança.',
        base: 'homolog',
      },
      git,
    );

    expect(plan.status).toBe('awaiting_approval');
    expect(plan.title).toBe('task123: feat: Adiciona login social');
    expect(plan.target_environment).toBe('homolog');
    expect(plan.body).toContain('Motivo da mudança.');
    expect(plan.pull_request_url).toBeUndefined();
    expect(git.pushes).toEqual([]);
    expect(
      plan.actions.some((action) => action.description.includes('runrunit_create_comment')),
    ).toBe(true);
  });

  it('opens the pull request only after approval', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pr-exec-'));
    writePrTemplate(root);
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_123';

    const done = createPrGithub(
      {
        projectRoot: root,
        taskId: '123',
        type: 'fix',
        titleDescription: 'Corrige header',
        approved: true,
        reviewers: ['ada'],
      },
      git,
    );

    expect(done.status).toBe('executed');
    expect(done.pull_request_url).toBe('https://github.com/example/repo/pull/1');
    expect(done.branch).toBe('task_123');
    expect(done.target_environment).toBe('development');
    expect(git.pushes).toEqual(['task_123']);
    expect(git.pullRequests[0]?.base).toBe('development');
    expect(git.pullRequests[0]?.labels).toEqual(['Fix']);
    expect(git.pullRequests[0]?.reviewers).toEqual(['ada']);
  });

  it('rejects a pull request aimed at main', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'task_123';

    const plan = createPrGithub(
      {
        projectRoot: '/repo',
        taskId: '123',
        type: 'feat',
        titleDescription: 'Adiciona login',
        base: 'main',
      },
      git,
    );

    expect(plan.status).toBe('rejected');
    expect(git.pushes).toEqual([]);
  });

  it('rejects opening a pull request from master', () => {
    const git = new InMemoryGitWorkspace();
    git.branch = 'master';

    const plan = createPrGithub(
      {
        projectRoot: '/repo',
        taskId: '123',
        type: 'feat',
        titleDescription: 'Adiciona login',
      },
      git,
    );

    expect(plan.status).toBe('rejected');
    expect(git.pushes).toEqual([]);
  });
});
