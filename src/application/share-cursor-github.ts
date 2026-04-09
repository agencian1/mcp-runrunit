import { randomBytes, randomUUID } from "node:crypto";
import fs from "node:fs";
import type { Octokit } from "@octokit/rest";
import type { GithubShareConfig } from "../adapters/driven/github.js";
import {
  createOctokit,
  readGithubShareConfigFromEnv,
  submitNewFilePullRequest,
} from "../adapters/driven/github.js";
import {
  assertPathInsideProjectRoot,
  MAX_SHARE_FILE_BYTES,
  resolveAgentMarkdownForShare,
  resolveShareProjectRoot,
  resolveSkillMarkdownForShare,
} from "./share-cursor-paths.js";

export type ShareCursorGithubResult = {
  pr_url: string;
  branch: string;
  path: string;
  bytes: number;
};

export type ShareCursorGithubDeps = {
  octokit?: Octokit;
  config?: GithubShareConfig;
};

function readUtf8FileLimited(absPath: string, projectRoot: string): string {
  assertPathInsideProjectRoot(projectRoot, absPath);
  let buf: Buffer;
  try {
    buf = fs.readFileSync(absPath);
  } catch (e) {
    throw new Error(
      `Could not read file: ${e instanceof Error ? e.message : String(e)}`,
    );
  }
  if (buf.length > MAX_SHARE_FILE_BYTES) {
    throw new Error(
      `File exceeds maximum size (${MAX_SHARE_FILE_BYTES} bytes).`,
    );
  }
  return buf.toString("utf8");
}

function branchSlugFromBasename(basename: string): string {
  const stem = basename.toLowerCase().replace(/\.md$/i, "");
  const slug = stem.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const trimmed = slug.slice(0, 40);
  return trimmed || "agent";
}

function branchSlugFromSkillFolder(folder: string): string {
  const slug = folder
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug.slice(0, 40) || "skill";
}

function uniqueSuffix(): string {
  return randomBytes(3).toString("hex");
}

function prBodyAgent(params: {
  repoPath: string;
  correlationId: string;
}): string {
  return [
    "## Partilha via MCP (cursor-agent)",
    "",
    "Commits aparecem como a identidade configurada no token GitHub do servidor MCP (não o utilizador do chat).",
    "",
    "### Metadados",
    "",
    `- **Correlation ID:** ${params.correlationId}`,
    "",
    "### Ficheiro remoto",
    "",
    `- \`${params.repoPath}\``,
    "",
  ].join("\n");
}

function prBodySkill(params: {
  repoPath: string;
  correlationId: string;
}): string {
  return [
    "## Partilha via MCP (cursor-skill)",
    "",
    "Commits aparecem como a identidade configurada no token GitHub do servidor MCP (não o utilizador do chat).",
    "",
    "### Metadados",
    "",
    `- **Correlation ID:** ${params.correlationId}`,
    "",
    "### Ficheiro remoto",
    "",
    `- \`${params.repoPath}\``,
    "",
  ].join("\n");
}

function resolveDeps(deps?: ShareCursorGithubDeps): {
  octokit: Octokit;
  config: GithubShareConfig;
} {
  if (deps?.octokit && deps?.config) {
    return { octokit: deps.octokit, config: deps.config };
  }
  const config = readGithubShareConfigFromEnv();
  const octokit = createOctokit(config.token);
  return { octokit, config };
}

export async function shareCursorAgent(
  params: { agent_name: string; project_root?: string },
  deps?: ShareCursorGithubDeps,
): Promise<ShareCursorGithubResult> {
  const agentName = String(params.agent_name ?? "").trim();
  if (!agentName) {
    throw new Error("agent_name is required.");
  }
  const projectRoot = resolveShareProjectRoot(
    params.project_root,
    "cursor-agents",
  );
  const { sourcePath, destBasename } = resolveAgentMarkdownForShare(
    projectRoot,
    agentName,
  );
  const content = readUtf8FileLimited(sourcePath, projectRoot);
  const bytes = Buffer.byteLength(content, "utf8");
  const repoPath = `cursor-agents/${destBasename}`;
  const slug = branchSlugFromBasename(destBasename);
  const suffix = uniqueSuffix();
  const branch = `feat/share-agent-${slug}-${suffix}`;
  const correlationId = randomUUID();
  const { octokit, config } = resolveDeps(deps);

  const { prUrl, branch: createdBranch } = await submitNewFilePullRequest(
    octokit,
    {
      owner: config.owner,
      repo: config.repo,
      baseBranch: config.baseBranch,
      branch,
      path: repoPath,
      contentUtf8: content,
      commitMessage: `feat(agents): share ${destBasename}`,
      prTitle: `feat(agents): share ${destBasename}`,
      prBody: prBodyAgent({ repoPath, correlationId }),
    },
  );

  return {
    pr_url: prUrl,
    branch: createdBranch,
    path: repoPath,
    bytes,
  };
}

export async function shareCursorSkill(
  params: { skill_name: string; project_root?: string },
  deps?: ShareCursorGithubDeps,
): Promise<ShareCursorGithubResult> {
  const skillNameRaw = String(params.skill_name ?? "").trim();
  if (!skillNameRaw) {
    throw new Error("skill_name is required.");
  }
  const projectRoot = resolveShareProjectRoot(
    params.project_root,
    "cursor-skills",
  );
  const { sourcePath, repoPath, folder } = resolveSkillMarkdownForShare(
    projectRoot,
    skillNameRaw,
  );
  const content = readUtf8FileLimited(sourcePath, projectRoot);
  const bytes = Buffer.byteLength(content, "utf8");
  const slug = branchSlugFromSkillFolder(folder);
  const suffix = uniqueSuffix();
  const branch = `feat/share-skill-${slug}-${suffix}`;
  const correlationId = randomUUID();
  const { octokit, config } = resolveDeps(deps);

  const { prUrl, branch: createdBranch } = await submitNewFilePullRequest(
    octokit,
    {
      owner: config.owner,
      repo: config.repo,
      baseBranch: config.baseBranch,
      branch,
      path: repoPath,
      contentUtf8: content,
      commitMessage: `feat(skills): share ${folder}`,
      prTitle: `feat(skills): share ${folder}`,
      prBody: prBodySkill({ repoPath, correlationId }),
    },
  );

  return {
    pr_url: prUrl,
    branch: createdBranch,
    path: repoPath,
    bytes,
  };
}
