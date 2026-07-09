import { describe, expect, it } from 'vitest';
import {
  parseRemoteUrl,
  detectGitRepoFromProjectRoot,
  detectGitDefaultBranch,
} from './git-repo-detect.js';

describe('parseRemoteUrl', () => {
  it('parses GitHub HTTPS remote', () => {
    expect(parseRemoteUrl('https://github.com/agencian1/mcp-runrunit.git')).toEqual({
      provider: 'github',
      owner: 'agencian1',
      repo: 'mcp-runrunit',
    });
  });

  it('parses GitHub SSH remote', () => {
    expect(parseRemoteUrl('git@github.com:agencian1/mcp-runrunit.git')).toEqual({
      provider: 'github',
      owner: 'agencian1',
      repo: 'mcp-runrunit',
    });
  });

  it('parses Bitbucket HTTPS remote', () => {
    expect(parseRemoteUrl('https://bitbucket.org/my-workspace/my-repo.git')).toEqual({
      provider: 'bitbucket',
      workspace: 'my-workspace',
      repoSlug: 'my-repo',
    });
  });

  it('parses Bitbucket SSH remote', () => {
    expect(parseRemoteUrl('git@bitbucket.org:my-workspace/my-repo.git')).toEqual({
      provider: 'bitbucket',
      workspace: 'my-workspace',
      repoSlug: 'my-repo',
    });
  });

  it('returns null for unknown host', () => {
    expect(parseRemoteUrl('https://gitlab.com/group/project.git')).toBeNull();
  });

  it('returns null for empty input', () => {
    expect(parseRemoteUrl('')).toBeNull();
  });
});

describe('detectGitDefaultBranch', () => {
  it('reads default branch from origin/HEAD when git is available', () => {
    const branch = detectGitDefaultBranch(process.cwd());
    expect(typeof branch).toBe('string');
    expect(branch.length).toBeGreaterThan(0);
  });
});

describe('detectGitRepoFromProjectRoot', () => {
  it('detects GitHub repo from current project', () => {
    const detected = detectGitRepoFromProjectRoot(process.cwd());
    expect(detected.github).toEqual({
      owner: 'agencian1',
      repo: 'mcp-runrunit',
      defaultBranch: expect.any(String),
    });
  });
});
