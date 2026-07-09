import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import type { Octokit } from '@octokit/rest';
import { describe, expect, it, vi } from 'vitest';
import { shareCursorAgent, shareCursorSkill } from './share-cursor-github.js';

function mkTmp(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-share-gh-'));
}

function writePrTemplate(root: string): void {
  const dir = path.join(root, '.github');
  fs.mkdirSync(dir, { recursive: true });
  const source = path.join(process.cwd(), '.github', 'PULL_REQUEST_TEMPLATE.md');
  fs.copyFileSync(source, path.join(dir, 'PULL_REQUEST_TEMPLATE.md'));
}

function mockOctokitSingleFile(): Octokit {
  return {
    rest: {
      git: {
        getRef: vi.fn().mockResolvedValue({
          data: { object: { sha: 'base-sha-1' } },
        }),
        createRef: vi.fn().mockResolvedValue({}),
      },
      repos: {
        createOrUpdateFileContents: vi.fn().mockResolvedValue({}),
      },
      pulls: {
        create: vi.fn().mockResolvedValue({
          data: { html_url: 'https://github.com/o/r/pull/99' },
        }),
      },
    },
  } as unknown as Octokit;
}

function mockOctokitMultiFile(): Octokit {
  let blobCounter = 0;
  return {
    rest: {
      git: {
        getRef: vi.fn().mockResolvedValue({
          data: { object: { sha: 'base-sha-1' } },
        }),
        getCommit: vi.fn().mockResolvedValue({
          data: { tree: { sha: 'base-tree-sha' } },
        }),
        createRef: vi.fn().mockResolvedValue({}),
        createBlob: vi.fn().mockImplementation(() => {
          blobCounter += 1;
          return Promise.resolve({ data: { sha: `blob-sha-${blobCounter}` } });
        }),
        createTree: vi.fn().mockResolvedValue({ data: { sha: 'new-tree-sha' } }),
        createCommit: vi.fn().mockResolvedValue({ data: { sha: 'new-commit-sha' } }),
        updateRef: vi.fn().mockResolvedValue({}),
      },
      pulls: {
        create: vi.fn().mockResolvedValue({
          data: { html_url: 'https://github.com/o/r/pull/100' },
        }),
      },
    },
  } as unknown as Octokit;
}

describe('shareCursorAgent', () => {
  it('calls GitHub APIs and returns pr_url', async () => {
    const root = mkTmp();
    writePrTemplate(root);
    const agents = path.join(root, 'cursor-agents');
    fs.mkdirSync(agents, { recursive: true });
    fs.writeFileSync(path.join(agents, 'bot.md'), '# Bot', 'utf8');

    const octokit = mockOctokitSingleFile();
    const result = await shareCursorAgent(
      { agent_name: 'bot', project_root: root },
      {
        octokit,
        config: {
          token: 'test-token',
          owner: 'acme',
          repo: 'hub',
          baseBranch: 'main',
        },
      },
    );

    expect(result.pr_url).toBe('https://github.com/o/r/pull/99');
    expect(result.path).toBe('cursor-agents/bot.md');
    expect(result.bytes).toBeGreaterThan(0);
    expect(result.branch).toMatch(/^feat\/share-agent-/);

    const git = octokit.rest.git;
    expect(git.getRef).toHaveBeenCalledWith({
      owner: 'acme',
      repo: 'hub',
      ref: 'heads/main',
    });
    expect(git.createRef).toHaveBeenCalled();
    expect(octokit.rest.repos.createOrUpdateFileContents).toHaveBeenCalled();
    expect(octokit.rest.pulls.create).toHaveBeenCalled();
  });
});

describe('shareCursorSkill', () => {
  it('uploads all skill files via Git Data API and returns file_count and paths', async () => {
    const root = mkTmp();
    writePrTemplate(root);
    const dir = path.join(root, 'cursor-skills', 'team-skill');
    fs.mkdirSync(path.join(dir, 'rules'), { recursive: true });
    fs.writeFileSync(path.join(dir, 'SKILL.md'), '# Skill', 'utf8');
    fs.writeFileSync(path.join(dir, 'rules', 'one.md'), 'r1', 'utf8');
    fs.writeFileSync(path.join(dir, 'reference.md'), 'ref', 'utf8');

    const octokit = mockOctokitMultiFile();
    const result = await shareCursorSkill(
      { skill_name: 'team-skill', project_root: root },
      {
        octokit,
        config: {
          token: 'test-token',
          owner: 'acme',
          repo: 'hub',
          baseBranch: 'main',
        },
      },
    );

    expect(result.pr_url).toBe('https://github.com/o/r/pull/100');
    expect(result.path).toBe('cursor-skills/team-skill/');
    expect(result.file_count).toBe(3);
    expect(result.paths).toContain('cursor-skills/team-skill/SKILL.md');
    expect(result.paths).toContain('cursor-skills/team-skill/rules/one.md');
    expect(result.paths).toContain('cursor-skills/team-skill/reference.md');
    expect(result.bytes).toBeGreaterThan(0);
    expect(result.branch).toMatch(/^feat\/share-skill-/);

    const git = octokit.rest.git;
    expect(git.createBlob).toHaveBeenCalledTimes(3);
    expect(git.createTree).toHaveBeenCalledWith(
      expect.objectContaining({
        owner: 'acme',
        repo: 'hub',
        base_tree: 'base-tree-sha',
        tree: expect.arrayContaining([
          expect.objectContaining({ path: 'cursor-skills/team-skill/SKILL.md' }),
          expect.objectContaining({ path: 'cursor-skills/team-skill/rules/one.md' }),
          expect.objectContaining({ path: 'cursor-skills/team-skill/reference.md' }),
        ]),
      }),
    );
    expect(git.createCommit).toHaveBeenCalled();
    expect(git.updateRef).toHaveBeenCalled();
    expect(octokit.rest.pulls.create).toHaveBeenCalled();
  });
});
