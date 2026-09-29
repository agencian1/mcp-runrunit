import { execFileSync } from 'node:child_process';
import path from 'node:path';

export type ParsedGitHubRemote = {
  provider: 'github';
  owner: string;
  repo: string;
};

export type ParsedBitbucketRemote = {
  provider: 'bitbucket';
  workspace: string;
  repoSlug: string;
};

export type ParsedGitRemote = ParsedGitHubRemote | ParsedBitbucketRemote;

export type DetectedGitHubRepo = {
  owner: string;
  repo: string;
  defaultBranch: string;
};

export type DetectedBitbucketRepo = {
  workspace: string;
  repoSlug: string;
  defaultBranch: string;
};

export type DetectedGitRepo = {
  github?: DetectedGitHubRepo;
  bitbucket?: DetectedBitbucketRepo;
};

function runGit(cwd: string, args: string[]): string | null {
  try {
    const out = execFileSync('git', args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return out.trim();
  } catch {
    return null;
  }
}

function stripGitSuffix(name: string): string {
  return name.replace(/\.git$/i, '');
}

/**
 * Parses a git remote URL into GitHub or Bitbucket owner/workspace + repo slug.
 */
export function parseRemoteUrl(url: string): ParsedGitRemote | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  const sshMatch = trimmed.match(/^git@([^:]+):([^/]+)\/(.+?)$/);
  if (sshMatch) {
    const host = sshMatch[1].toLowerCase();
    const first = sshMatch[2];
    const second = stripGitSuffix(sshMatch[3]);
    if (host === 'github.com') {
      return { provider: 'github', owner: first, repo: second };
    }
    if (host === 'bitbucket.org') {
      return { provider: 'bitbucket', workspace: first, repoSlug: second };
    }
    return null;
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return null;
  }

  const host = parsed.hostname.toLowerCase();
  const parts = parsed.pathname.split('/').filter(Boolean);
  if (parts.length < 2) return null;

  if (host === 'github.com') {
    return {
      provider: 'github',
      owner: parts[0],
      repo: stripGitSuffix(parts[1]),
    };
  }

  if (host === 'bitbucket.org') {
    return {
      provider: 'bitbucket',
      workspace: parts[0],
      repoSlug: stripGitSuffix(parts[1]),
    };
  }

  return null;
}

function branchExists(projectRoot: string, branch: string): boolean {
  return runGit(projectRoot, ['rev-parse', '--verify', `refs/remotes/origin/${branch}`]) !== null;
}

/**
 * Detects the default branch from origin/HEAD or common fallbacks.
 */
export function detectGitDefaultBranch(projectRoot: string): string {
  const symbolic = runGit(projectRoot, ['symbolic-ref', 'refs/remotes/origin/HEAD']);
  if (symbolic) {
    const match = symbolic.match(/^refs\/remotes\/origin\/(.+)$/);
    if (match?.[1]) {
      return match[1];
    }
  }

  for (const candidate of ['main', 'master']) {
    if (branchExists(projectRoot, candidate)) {
      return candidate;
    }
  }

  return 'main';
}

function readOriginRemoteUrl(projectRoot: string): string | null {
  return runGit(projectRoot, ['remote', 'get-url', 'origin']);
}

/**
 * Detects GitHub/Bitbucket repo identity and default branch from git in projectRoot.
 */
export function detectGitRepoFromProjectRoot(projectRoot: string): DetectedGitRepo {
  const root = path.resolve(projectRoot);
  const remoteUrl = readOriginRemoteUrl(root);
  if (!remoteUrl) {
    return {};
  }

  const parsed = parseRemoteUrl(remoteUrl);
  if (!parsed) {
    return {};
  }

  const defaultBranch = detectGitDefaultBranch(root);

  if (parsed.provider === 'github') {
    return {
      github: {
        owner: parsed.owner,
        repo: parsed.repo,
        defaultBranch,
      },
    };
  }

  return {
    bitbucket: {
      workspace: parsed.workspace,
      repoSlug: parsed.repoSlug,
      defaultBranch,
    },
  };
}
