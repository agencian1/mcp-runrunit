import { execFileSync } from 'node:child_process';
import path from 'node:path';
import type {
  GitCommitRecord,
  GitFileChange,
  GitWorkspacePort,
  OpenPullRequestInput,
} from '../../domain/github-workflow.js';

export class GitWorkspaceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GitWorkspaceError';
  }
}

function assertSafeName(name: string, label: string): void {
  if (!name || name.startsWith('-') || name.includes('\0') || name.includes('\n')) {
    throw new GitWorkspaceError(`${label} inválido.`);
  }
}

function run(cwd: string, command: string, args: string[], trim: boolean): string {
  try {
    const stdout = execFileSync(command, args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      maxBuffer: 10 * 1024 * 1024,
    });
    return trim ? stdout.trim() : stdout;
  } catch (err) {
    const stderr =
      err && typeof err === 'object' && 'stderr' in err
        ? String((err as { stderr?: unknown }).stderr ?? '')
        : '';
    const message = stderr.trim() || (err instanceof Error ? err.message : `${command} falhou`);
    throw new GitWorkspaceError(message);
  }
}

function tryRun(cwd: string, args: string[]): string | null {
  try {
    return run(cwd, 'git', args, true);
  } catch {
    return null;
  }
}

/**
 * Parses `git status --porcelain=v1 -z` output.
 * Rename/copy records use a second NUL-terminated path.
 */
export function parsePorcelainZ(raw: string): GitFileChange[] {
  const tokens = raw.split('\0').filter((token) => token.length > 0);
  const changes: GitFileChange[] = [];

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index] ?? '';
    if (token.length < 4) continue;

    const status = token.slice(0, 2);
    const pathPart = token.slice(3);
    const isRename = status.includes('R') || status.includes('C');
    if (isRename) {
      const newPath = tokens[index + 1];
      index += 1;
      if (newPath) {
        changes.push({ path: newPath, status, untracked: false });
      }
      continue;
    }

    if (!pathPart) continue;
    changes.push({
      path: pathPart,
      status,
      untracked: status === '??',
    });
  }

  return changes;
}

/**
 * Parses `git log --pretty=format:%x1e%H%x1f%s --name-only`.
 */
export function parseCommitLog(raw: string): GitCommitRecord[] {
  const chunks = raw
    .split('\x1e')
    .map((chunk) => chunk.trim())
    .filter(Boolean);
  const commits: GitCommitRecord[] = [];

  for (const chunk of chunks) {
    const lines = chunk.split('\n');
    const header = lines[0] ?? '';
    const separator = header.indexOf('\x1f');
    if (separator === -1) continue;
    const sha = header.slice(0, separator).trim();
    const subject = header.slice(separator + 1).trim();
    if (!sha) continue;
    const files = lines
      .slice(1)
      .map((line) => line.trim())
      .filter(Boolean);
    commits.push({ sha, subject, files });
  }

  return commits;
}

function pullRequestUrl(stdout: string): string {
  const url = stdout
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.startsWith('http'));
  if (!url) {
    throw new GitWorkspaceError(
      stdout.trim() ||
        'gh não retornou a URL da pull request. Verifique se o gh está instalado e autenticado.',
    );
  }
  return url;
}

export class GitCliWorkspace implements GitWorkspacePort {
  currentBranch(projectRoot: string): string | null {
    const branch = run(
      resolveRoot(projectRoot),
      'git',
      ['rev-parse', '--abbrev-ref', 'HEAD'],
      true,
    );
    return branch || null;
  }

  branchExists(projectRoot: string, branch: string): boolean {
    assertSafeName(branch, 'Branch');
    return (
      tryRun(resolveRoot(projectRoot), [
        'rev-parse',
        '--verify',
        '--quiet',
        `refs/heads/${branch}`,
      ]) !== null
    );
  }

  refExists(projectRoot: string, ref: string): boolean {
    assertSafeName(ref, 'Ref');
    return (
      tryRun(resolveRoot(projectRoot), ['rev-parse', '--verify', '--quiet', `${ref}^{commit}`]) !==
      null
    );
  }

  checkoutNewBranch(projectRoot: string, branch: string): void {
    assertSafeName(branch, 'Branch');
    run(resolveRoot(projectRoot), 'git', ['checkout', '-b', branch], true);
  }

  checkoutExisting(projectRoot: string, branch: string): void {
    assertSafeName(branch, 'Branch');
    run(resolveRoot(projectRoot), 'git', ['checkout', branch], true);
  }

  listChanges(projectRoot: string): GitFileChange[] {
    const raw = run(
      resolveRoot(projectRoot),
      'git',
      ['status', '--porcelain=v1', '-z', '-uall'],
      false,
    );
    return parsePorcelainZ(raw);
  }

  diffStat(projectRoot: string): string {
    const root = resolveRoot(projectRoot);
    const unstaged = tryRun(root, ['diff', '--stat']) ?? '';
    const staged = tryRun(root, ['diff', '--cached', '--stat']) ?? '';
    return [staged, unstaged].filter(Boolean).join('\n');
  }

  listCommits(projectRoot: string, baseRef: string | null): GitCommitRecord[] {
    const root = resolveRoot(projectRoot);
    const pretty = '--pretty=format:%x1e%H%x1f%s';
    const args = baseRef
      ? ['log', pretty, '--name-only', `${baseRef}..HEAD`]
      : ['log', '-n', '30', pretty, '--name-only'];
    if (baseRef) {
      assertSafeName(baseRef, 'Base');
    }
    const raw = run(root, 'git', args, false);
    return parseCommitLog(raw);
  }

  commitFile(projectRoot: string, filePath: string, message: string): void {
    assertSafeName(filePath, 'Arquivo');
    if (!message.trim()) {
      throw new GitWorkspaceError('A mensagem de commit não pode estar vazia.');
    }
    const root = resolveRoot(projectRoot);
    run(root, 'git', ['add', '--', filePath], true);
    run(root, 'git', ['commit', '-m', message, '--', filePath], true);
  }

  pushBranch(projectRoot: string, branch: string): void {
    assertSafeName(branch, 'Branch');
    run(resolveRoot(projectRoot), 'git', ['push', '-u', 'origin', branch], true);
  }

  openPullRequest(input: OpenPullRequestInput): string {
    assertSafeName(input.head, 'Head');
    assertSafeName(input.base, 'Base');
    const args = [
      'pr',
      'create',
      '--title',
      input.title,
      '--body',
      input.body,
      '--base',
      input.base,
      '--head',
      input.head,
    ];
    for (const label of input.labels) {
      args.push('--label', label);
    }
    for (const reviewer of input.reviewers) {
      args.push('--reviewer', reviewer);
    }
    const stdout = run(resolveRoot(input.projectRoot), 'gh', args, true);
    return pullRequestUrl(stdout);
  }
}

function resolveRoot(projectRoot: string): string {
  const root = projectRoot.trim();
  if (!root) {
    throw new GitWorkspaceError('project_root é obrigatório.');
  }
  return path.resolve(root);
}
