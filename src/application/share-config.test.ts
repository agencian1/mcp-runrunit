import { afterEach, describe, expect, it, vi } from 'vitest';
import { readGithubShareConfig } from '../adapters/driven/github.js';
import { readBitbucketShareConfig } from '../adapters/driven/bitbucket.js';

vi.mock('./git-repo-detect.js', () => ({
  detectGitRepoFromProjectRoot: vi.fn(),
}));

import { detectGitRepoFromProjectRoot } from './git-repo-detect.js';

describe('readGithubShareConfig merge', () => {
  const envKeys = [
    'GITHUB_TOKEN',
    'GITHUB_REPO_OWNER',
    'GITHUB_REPO_NAME',
    'GITHUB_BASE_BRANCH',
  ] as const;

  afterEach(() => {
    for (const key of envKeys) {
      delete process.env[key];
    }
    vi.mocked(detectGitRepoFromProjectRoot).mockReset();
  });

  it('uses detected values when env is empty', () => {
    process.env.GITHUB_TOKEN = 'tok';
    vi.mocked(detectGitRepoFromProjectRoot).mockReturnValue({
      github: { owner: 'org', repo: 'repo', defaultBranch: 'develop' },
    });

    const config = readGithubShareConfig({ projectRoot: '/tmp/proj' });
    expect(config).toEqual({
      token: 'tok',
      owner: 'org',
      repo: 'repo',
      baseBranch: 'develop',
    });
  });

  it('env overrides detected values', () => {
    process.env.GITHUB_TOKEN = 'tok';
    process.env.GITHUB_REPO_NAME = 'override-repo';
    process.env.GITHUB_BASE_BRANCH = 'release';
    vi.mocked(detectGitRepoFromProjectRoot).mockReturnValue({
      github: { owner: 'org', repo: 'repo', defaultBranch: 'develop' },
    });

    const config = readGithubShareConfig({ projectRoot: '/tmp/proj' });
    expect(config.owner).toBe('org');
    expect(config.repo).toBe('override-repo');
    expect(config.baseBranch).toBe('release');
  });

  it('throws when token and repo identity are missing', () => {
    vi.mocked(detectGitRepoFromProjectRoot).mockReturnValue({});

    expect(() => readGithubShareConfig({ projectRoot: '/tmp/proj' })).toThrow(/GITHUB_TOKEN/);
  });
});

describe('readBitbucketShareConfig merge', () => {
  const envKeys = [
    'BITBUCKET_USERNAME',
    'BITBUCKET_APP_PASSWORD',
    'BITBUCKET_WORKSPACE',
    'BITBUCKET_REPO_SLUG',
    'BITBUCKET_BASE_BRANCH',
  ] as const;

  afterEach(() => {
    for (const key of envKeys) {
      delete process.env[key];
    }
    vi.mocked(detectGitRepoFromProjectRoot).mockReset();
  });

  it('uses detected values when env repo fields are empty', () => {
    process.env.BITBUCKET_USERNAME = 'user';
    process.env.BITBUCKET_APP_PASSWORD = 'pass';
    vi.mocked(detectGitRepoFromProjectRoot).mockReturnValue({
      bitbucket: { workspace: 'ws', repoSlug: 'slug', defaultBranch: 'main' },
    });

    const config = readBitbucketShareConfig({ projectRoot: '/tmp/proj' });
    expect(config).toEqual({
      username: 'user',
      appPassword: 'pass',
      workspace: 'ws',
      repoSlug: 'slug',
      baseBranch: 'main',
    });
  });

  it('env overrides detected base branch', () => {
    process.env.BITBUCKET_USERNAME = 'user';
    process.env.BITBUCKET_APP_PASSWORD = 'pass';
    process.env.BITBUCKET_BASE_BRANCH = 'develop';
    vi.mocked(detectGitRepoFromProjectRoot).mockReturnValue({
      bitbucket: { workspace: 'ws', repoSlug: 'slug', defaultBranch: 'main' },
    });

    const config = readBitbucketShareConfig({ projectRoot: '/tmp/proj' });
    expect(config.baseBranch).toBe('develop');
  });
});
