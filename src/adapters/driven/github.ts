import { Octokit } from '@octokit/rest';
import { detectGitRepoFromProjectRoot } from '../../application/git-repo-detect.js';

export type GithubShareConfig = {
  token: string;
  owner: string;
  repo: string;
  baseBranch: string;
};

export class ShareGithubConfigError extends Error {
  readonly missingVars: string[];

  constructor(missingVars: string[]) {
    super(
      `GitHub share is not configured. Set these environment variables on the MCP server host (never pass a token via tools): ${missingVars.join(', ')}`,
    );
    this.name = 'ShareGithubConfigError';
    this.missingVars = missingVars;
  }
}

export type ReadGithubShareConfigOptions = {
  projectRoot?: string;
};

export function readGithubShareConfig(options?: ReadGithubShareConfigOptions): GithubShareConfig {
  const detected =
    options?.projectRoot !== undefined
      ? detectGitRepoFromProjectRoot(options.projectRoot).github
      : undefined;

  const missing: string[] = [];
  const token = process.env.GITHUB_TOKEN?.trim();
  const owner = process.env.GITHUB_REPO_OWNER?.trim() || detected?.owner;
  const repo = process.env.GITHUB_REPO_NAME?.trim() || detected?.repo;
  if (!token) missing.push('GITHUB_TOKEN');
  if (!owner) missing.push('GITHUB_REPO_OWNER');
  if (!repo) missing.push('GITHUB_REPO_NAME');
  if (missing.length > 0) {
    throw new ShareGithubConfigError(missing);
  }
  const baseBranch = process.env.GITHUB_BASE_BRANCH?.trim() || detected?.defaultBranch || 'main';
  return {
    token: token!,
    owner: owner!,
    repo: repo!,
    baseBranch,
  };
}

/** @deprecated Use readGithubShareConfig */
export function readGithubShareConfigFromEnv(): GithubShareConfig {
  return readGithubShareConfig();
}

export function createOctokit(token: string): Octokit {
  return new Octokit({ auth: token });
}

function isHttpError(e: unknown): e is { status: number; message?: string } {
  return (
    typeof e === 'object' &&
    e !== null &&
    'status' in e &&
    typeof (e as { status: unknown }).status === 'number'
  );
}

export type SubmitNewFilePrParams = {
  owner: string;
  repo: string;
  baseBranch: string;
  branch: string;
  path: string;
  contentUtf8: string;
  commitMessage: string;
  prTitle: string;
  prBody: string;
};

/**
 * Creates a new branch from base, adds one file, opens a PR. Mirrors submit-documents flow.
 */
export async function submitNewFilePullRequest(
  octokit: Octokit,
  params: SubmitNewFilePrParams,
): Promise<{ prUrl: string; branch: string }> {
  const { owner, repo, baseBranch, branch, path } = params;
  const contentB64 = Buffer.from(params.contentUtf8, 'utf8').toString('base64');

  let baseSha: string;
  try {
    const ref = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${baseBranch}`,
    });
    baseSha = ref.data.object.sha;
  } catch (error: unknown) {
    if (isHttpError(error) && error.status === 404) {
      throw new Error(
        `GitHub: base branch "${baseBranch}" was not found in ${owner}/${repo}. Check GITHUB_BASE_BRANCH.`,
      );
    }
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw new Error(
        'Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).',
      );
    }
    throw new Error('GitHub: could not read the base branch. Try again later.');
  }

  try {
    await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branch}`,
      sha: baseSha,
    });
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 422 || error.status === 409)) {
      throw new Error(
        'Já existe uma submissão com este identificador (branch em conflito). Tente de novo dentro de instantes ou altere o nome.',
      );
    }
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw new Error(
        'Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).',
      );
    }
    throw new Error('GitHub: could not create the submission branch. Check token permissions.');
  }

  try {
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: params.commitMessage,
      content: contentB64,
      branch,
    });
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw new Error(
        'Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).',
      );
    }
    throw new Error('GitHub: could not write the file to the repository.');
  }

  try {
    const pr = await octokit.rest.pulls.create({
      owner,
      repo,
      title: params.prTitle,
      head: branch,
      base: baseBranch,
      body: params.prBody,
    });
    return { prUrl: pr.data.html_url, branch };
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw new Error(
        'Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).',
      );
    }
    throw new Error(
      'GitHub: the file was created but opening the pull request failed. Check the repository on GitHub.',
    );
  }
}

export type ShareFileEntry = { path: string; content: Buffer };

export type SubmitMultiFilePrParams = {
  owner: string;
  repo: string;
  baseBranch: string;
  branch: string;
  files: ShareFileEntry[];
  commitMessage: string;
  prTitle: string;
  prBody: string;
};

function authOrPermError(): Error {
  return new Error(
    'Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).',
  );
}

/**
 * Creates a new branch from base, adds multiple files in one commit via Git Data API, opens a PR.
 */
export async function submitMultiFilePullRequest(
  octokit: Octokit,
  params: SubmitMultiFilePrParams,
): Promise<{ prUrl: string; branch: string }> {
  const { owner, repo, baseBranch, branch, files } = params;
  if (files.length === 0) {
    throw new Error('GitHub: no files to submit.');
  }

  let baseCommitSha: string;
  try {
    const ref = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${baseBranch}`,
    });
    baseCommitSha = ref.data.object.sha;
  } catch (error: unknown) {
    if (isHttpError(error) && error.status === 404) {
      throw new Error(
        `GitHub: base branch "${baseBranch}" was not found in ${owner}/${repo}. Check GITHUB_BASE_BRANCH.`,
      );
    }
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not read the base branch. Try again later.');
  }

  let baseTreeSha: string;
  try {
    const commit = await octokit.rest.git.getCommit({
      owner,
      repo,
      commit_sha: baseCommitSha,
    });
    baseTreeSha = commit.data.tree.sha;
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not read the base commit. Try again later.');
  }

  try {
    await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branch}`,
      sha: baseCommitSha,
    });
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 422 || error.status === 409)) {
      throw new Error(
        'Já existe uma submissão com este identificador (branch em conflito). Tente de novo dentro de instantes ou altere o nome.',
      );
    }
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not create the submission branch. Check token permissions.');
  }

  const treeEntries: Array<{ path: string; mode: '100644'; type: 'blob'; sha: string }> = [];
  try {
    for (const file of files) {
      const blob = await octokit.rest.git.createBlob({
        owner,
        repo,
        content: file.content.toString('base64'),
        encoding: 'base64',
      });
      treeEntries.push({
        path: file.path,
        mode: '100644',
        type: 'blob',
        sha: blob.data.sha,
      });
    }
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not upload file blobs to the repository.');
  }

  let newTreeSha: string;
  try {
    const tree = await octokit.rest.git.createTree({
      owner,
      repo,
      base_tree: baseTreeSha,
      tree: treeEntries,
    });
    newTreeSha = tree.data.sha;
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not create the file tree.');
  }

  let newCommitSha: string;
  try {
    const commit = await octokit.rest.git.createCommit({
      owner,
      repo,
      message: params.commitMessage,
      tree: newTreeSha,
      parents: [baseCommitSha],
    });
    newCommitSha = commit.data.sha;
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not create the commit.');
  }

  try {
    await octokit.rest.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommitSha,
    });
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error('GitHub: could not update the submission branch.');
  }

  try {
    const pr = await octokit.rest.pulls.create({
      owner,
      repo,
      title: params.prTitle,
      head: branch,
      base: baseBranch,
      body: params.prBody,
    });
    return { prUrl: pr.data.html_url, branch };
  } catch (error: unknown) {
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw authOrPermError();
    }
    throw new Error(
      'GitHub: the commit was created but opening the pull request failed. Check the repository on GitHub.',
    );
  }
}
