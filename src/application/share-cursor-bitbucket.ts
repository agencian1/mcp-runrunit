import { randomBytes, randomUUID } from 'node:crypto';
import fs from 'node:fs';
import type { BitbucketClient, BitbucketShareConfig } from '../adapters/driven/bitbucket.js';
import {
  createBitbucketClient,
  readBitbucketShareConfig,
  submitFilesPullRequest,
} from '../adapters/driven/bitbucket.js';
import { buildShareAgentPr, buildShareSkillPr } from './pr-template.js';
import {
  assertPathInsideProjectRoot,
  collectSkillFilesForShare,
  MAX_SHARE_FILE_BYTES,
  resolveAgentMarkdownForShare,
  resolveShareProjectRoot,
} from './share-cursor-paths.js';

export type ShareCursorBitbucketResult = {
  pr_url: string;
  branch: string;
  path: string;
  bytes: number;
  file_count?: number;
  paths?: string[];
};

export type ShareCursorBitbucketDeps = {
  client?: BitbucketClient;
  config?: BitbucketShareConfig;
};

function readUtf8FileLimited(absPath: string, projectRoot: string): string {
  assertPathInsideProjectRoot(projectRoot, absPath);
  let buf: Buffer;
  try {
    buf = fs.readFileSync(absPath);
  } catch (e) {
    throw new Error(`Could not read file: ${e instanceof Error ? e.message : String(e)}`);
  }
  if (buf.length > MAX_SHARE_FILE_BYTES) {
    throw new Error(`File exceeds maximum size (${MAX_SHARE_FILE_BYTES} bytes).`);
  }
  return buf.toString('utf8');
}

function branchSlugFromBasename(basename: string): string {
  const stem = basename.toLowerCase().replace(/\.md$/i, '');
  const slug = stem.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const trimmed = slug.slice(0, 40);
  return trimmed || 'agent';
}

function branchSlugFromSkillFolder(folder: string): string {
  const slug = folder
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return slug.slice(0, 40) || 'skill';
}

function uniqueSuffix(): string {
  return randomBytes(3).toString('hex');
}

function resolveDeps(
  projectRoot: string,
  deps?: ShareCursorBitbucketDeps,
): {
  client: BitbucketClient;
  config: BitbucketShareConfig;
} {
  if (deps?.client && deps?.config) {
    return { client: deps.client, config: deps.config };
  }
  const config = deps?.config ?? readBitbucketShareConfig({ projectRoot });
  const client = deps?.client ?? createBitbucketClient(config);
  return { client, config };
}

export async function shareCursorAgentBitbucket(
  params: { agent_name: string; project_root?: string },
  deps?: ShareCursorBitbucketDeps,
): Promise<ShareCursorBitbucketResult> {
  const agentName = String(params.agent_name ?? '').trim();
  if (!agentName) {
    throw new Error('agent_name is required.');
  }
  const projectRoot = resolveShareProjectRoot(params.project_root, 'cursor-agents');
  const { sourcePath, destBasename } = resolveAgentMarkdownForShare(projectRoot, agentName);
  const content = readUtf8FileLimited(sourcePath, projectRoot);
  const bytes = Buffer.byteLength(content, 'utf8');
  const repoPath = `cursor-agents/${destBasename}`;
  const slug = branchSlugFromBasename(destBasename);
  const suffix = uniqueSuffix();
  const branch = `feat/share-agent-${slug}-${suffix}`;
  const correlationId = randomUUID();
  const { client, config } = resolveDeps(projectRoot, deps);

  const pr = buildShareAgentPr({
    repoPath,
    correlationId,
    destBasename,
    projectRoot,
  });

  const { prUrl, branch: createdBranch } = await submitFilesPullRequest(client, {
    workspace: config.workspace,
    repoSlug: config.repoSlug,
    baseBranch: config.baseBranch,
    branch,
    files: [{ path: repoPath, content }],
    commitMessage: `feat(agents): share ${destBasename}`,
    prTitle: pr.title,
    prBody: pr.body,
  });

  return {
    pr_url: prUrl,
    branch: createdBranch,
    path: repoPath,
    bytes,
  };
}

export async function shareCursorSkillBitbucket(
  params: { skill_name: string; project_root?: string },
  deps?: ShareCursorBitbucketDeps,
): Promise<ShareCursorBitbucketResult> {
  const skillNameRaw = String(params.skill_name ?? '').trim();
  if (!skillNameRaw) {
    throw new Error('skill_name is required.');
  }
  const projectRoot = resolveShareProjectRoot(params.project_root, 'cursor-skills');
  const { folder, repoFolderPath, files } = collectSkillFilesForShare(projectRoot, skillNameRaw);
  const bytes = files.reduce((sum, f) => sum + f.content.length, 0);
  const paths = files.map((f) => f.repoPath);
  const slug = branchSlugFromSkillFolder(folder);
  const suffix = uniqueSuffix();
  const branch = `feat/share-skill-${slug}-${suffix}`;
  const correlationId = randomUUID();
  const { client, config } = resolveDeps(projectRoot, deps);

  const pr = buildShareSkillPr({
    repoFolderPath,
    fileCount: files.length,
    correlationId,
    folder,
    projectRoot,
  });

  const { prUrl, branch: createdBranch } = await submitFilesPullRequest(client, {
    workspace: config.workspace,
    repoSlug: config.repoSlug,
    baseBranch: config.baseBranch,
    branch,
    files: files.map((f) => ({ path: f.repoPath, content: f.content })),
    commitMessage: `feat(skills): share ${folder}`,
    prTitle: pr.title,
    prBody: pr.body,
  });

  return {
    pr_url: prUrl,
    branch: createdBranch,
    path: repoFolderPath,
    bytes,
    file_count: files.length,
    paths,
  };
}
