import type { Octokit } from '@octokit/rest';
import { describe, expect, it, vi } from 'vitest';
import { submitMultiFilePullRequest } from './github.js';

function mockOctokit(): Octokit {
  let blobCounter = 0;
  return {
    rest: {
      git: {
        getRef: vi.fn().mockResolvedValue({
          data: { object: { sha: 'base-commit' } },
        }),
        getCommit: vi.fn().mockResolvedValue({
          data: { tree: { sha: 'base-tree' } },
        }),
        createRef: vi.fn().mockResolvedValue({}),
        createBlob: vi.fn().mockImplementation(() => {
          blobCounter += 1;
          return Promise.resolve({ data: { sha: `blob-${blobCounter}` } });
        }),
        createTree: vi.fn().mockResolvedValue({ data: { sha: 'new-tree' } }),
        createCommit: vi.fn().mockResolvedValue({ data: { sha: 'new-commit' } }),
        updateRef: vi.fn().mockResolvedValue({}),
      },
      pulls: {
        create: vi.fn().mockResolvedValue({
          data: { html_url: 'https://github.com/o/r/pull/1' },
        }),
      },
    },
  } as unknown as Octokit;
}

describe('submitMultiFilePullRequest', () => {
  it('creates blobs, tree, commit, and PR for multiple files', async () => {
    const octokit = mockOctokit();
    const result = await submitMultiFilePullRequest(octokit, {
      owner: 'owner',
      repo: 'repo',
      baseBranch: 'main',
      branch: 'feat/multi',
      files: [
        { path: 'a.txt', content: Buffer.from('a') },
        { path: 'b/c.txt', content: Buffer.from('bc') },
      ],
      commitMessage: 'add files',
      prTitle: 'PR title',
      prBody: 'PR body',
    });

    expect(result.prUrl).toBe('https://github.com/o/r/pull/1');
    expect(result.branch).toBe('feat/multi');
    expect(octokit.rest.git.createBlob).toHaveBeenCalledTimes(2);
    expect(octokit.rest.git.createTree).toHaveBeenCalledWith(
      expect.objectContaining({
        base_tree: 'base-tree',
        tree: [
          expect.objectContaining({ path: 'a.txt', sha: 'blob-1' }),
          expect.objectContaining({ path: 'b/c.txt', sha: 'blob-2' }),
        ],
      }),
    );
    expect(octokit.rest.git.createCommit).toHaveBeenCalledWith(
      expect.objectContaining({
        parents: ['base-commit'],
        tree: 'new-tree',
      }),
    );
    expect(octokit.rest.git.updateRef).toHaveBeenCalled();
    expect(octokit.rest.pulls.create).toHaveBeenCalled();
  });
});
