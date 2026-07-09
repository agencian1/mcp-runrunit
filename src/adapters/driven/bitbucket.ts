import { detectGitRepoFromProjectRoot } from '../../application/git-repo-detect.js';

const BITBUCKET_BASE_URL = 'https://api.bitbucket.org/2.0';

export type BitbucketShareConfig = {
  username: string;
  appPassword: string;
  workspace: string;
  repoSlug: string;
  baseBranch: string;
};

export class ShareBitbucketConfigError extends Error {
  readonly missingVars: string[];

  constructor(missingVars: string[]) {
    super(
      `Bitbucket share is not configured. Set these environment variables on the MCP server host (never pass credentials via tools): ${missingVars.join(', ')}`,
    );
    this.name = 'ShareBitbucketConfigError';
    this.missingVars = missingVars;
  }
}

export type ReadBitbucketShareConfigOptions = {
  projectRoot?: string;
};

export function readBitbucketShareConfig(
  options?: ReadBitbucketShareConfigOptions,
): BitbucketShareConfig {
  const detected =
    options?.projectRoot !== undefined
      ? detectGitRepoFromProjectRoot(options.projectRoot).bitbucket
      : undefined;

  const missing: string[] = [];
  const username = process.env.BITBUCKET_USERNAME?.trim();
  const appPassword = process.env.BITBUCKET_APP_PASSWORD?.trim();
  const workspace = process.env.BITBUCKET_WORKSPACE?.trim() || detected?.workspace;
  const repoSlug = process.env.BITBUCKET_REPO_SLUG?.trim() || detected?.repoSlug;
  if (!username) missing.push('BITBUCKET_USERNAME');
  if (!appPassword) missing.push('BITBUCKET_APP_PASSWORD');
  if (!workspace) missing.push('BITBUCKET_WORKSPACE');
  if (!repoSlug) missing.push('BITBUCKET_REPO_SLUG');
  if (missing.length > 0) {
    throw new ShareBitbucketConfigError(missing);
  }
  const baseBranch = process.env.BITBUCKET_BASE_BRANCH?.trim() || detected?.defaultBranch || 'main';
  return {
    username: username!,
    appPassword: appPassword!,
    workspace: workspace!,
    repoSlug: repoSlug!,
    baseBranch,
  };
}

/** @deprecated Use readBitbucketShareConfig */
export function readBitbucketShareConfigFromEnv(): BitbucketShareConfig {
  return readBitbucketShareConfig();
}

export type BitbucketClient = {
  fetch: typeof fetch;
  authHeader: string;
};

export function createBitbucketClient(
  config: Pick<BitbucketShareConfig, 'username' | 'appPassword'>,
): BitbucketClient {
  const authHeader = `Basic ${Buffer.from(`${config.username}:${config.appPassword}`).toString('base64')}`;
  return { fetch, authHeader };
}

export type BitbucketFileEntry = { path: string; content: Buffer | string };

export type SubmitBitbucketFilesPrParams = {
  workspace: string;
  repoSlug: string;
  baseBranch: string;
  branch: string;
  files: BitbucketFileEntry[];
  commitMessage: string;
  prTitle: string;
  prBody: string;
};

type BitbucketBranchRef = {
  target?: { hash?: string };
};

type BitbucketPullRequest = {
  links?: { html?: { href?: string } };
};

function authOrPermError(): Error {
  return new Error(
    'Falha de autenticação ou permissões com o Bitbucket. Verifique BITBUCKET_USERNAME, BITBUCKET_APP_PASSWORD e permissões de escrita no repositório.',
  );
}

function repoPath(workspace: string, repoSlug: string, suffix: string): string {
  return `${BITBUCKET_BASE_URL}/repositories/${encodeURIComponent(workspace)}/${encodeURIComponent(repoSlug)}${suffix}`;
}

async function bitbucketJson<T>(
  client: BitbucketClient,
  method: string,
  url: string,
  body?: unknown,
): Promise<{ status: number; data: T | null; text: string }> {
  const headers: Record<string, string> = {
    Authorization: client.authHeader,
    Accept: 'application/json',
  };
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }
  const res = await client.fetch(url, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data: T | null = null;
  if (text) {
    try {
      data = JSON.parse(text) as T;
    } catch {
      data = null;
    }
  }
  return { status: res.status, data, text };
}

async function getBaseCommitSha(
  client: BitbucketClient,
  params: Pick<SubmitBitbucketFilesPrParams, 'workspace' | 'repoSlug' | 'baseBranch'>,
): Promise<string> {
  const url = repoPath(
    params.workspace,
    params.repoSlug,
    `/refs/branches/${encodeURIComponent(params.baseBranch)}`,
  );
  const { status, data } = await bitbucketJson<BitbucketBranchRef>(client, 'GET', url);
  if (status === 404) {
    throw new Error(
      `Bitbucket: base branch "${params.baseBranch}" was not found in ${params.workspace}/${params.repoSlug}. Check BITBUCKET_BASE_BRANCH.`,
    );
  }
  if (status === 401 || status === 403) {
    throw authOrPermError();
  }
  if (status < 200 || status >= 300) {
    throw new Error('Bitbucket: could not read the base branch. Try again later.');
  }
  const hash = data?.target?.hash;
  if (!hash) {
    throw new Error('Bitbucket: base branch response did not include a commit hash.');
  }
  return hash;
}

async function createFeatureBranch(
  client: BitbucketClient,
  params: Pick<SubmitBitbucketFilesPrParams, 'workspace' | 'repoSlug' | 'branch'>,
  baseSha: string,
): Promise<void> {
  const url = repoPath(params.workspace, params.repoSlug, '/refs/branches');
  const { status } = await bitbucketJson(client, 'POST', url, {
    name: params.branch,
    target: { hash: baseSha },
  });
  if (status === 409 || status === 422) {
    throw new Error(
      'Já existe uma submissão com este identificador (branch em conflito). Tente de novo dentro de instantes ou altere o nome.',
    );
  }
  if (status === 401 || status === 403) {
    throw authOrPermError();
  }
  if (status < 200 || status >= 300) {
    throw new Error('Bitbucket: could not create the submission branch. Check token permissions.');
  }
}

async function commitFiles(
  client: BitbucketClient,
  params: Pick<SubmitBitbucketFilesPrParams, 'workspace' | 'repoSlug' | 'branch' | 'commitMessage'>,
  files: BitbucketFileEntry[],
  parentSha: string,
): Promise<void> {
  const url = repoPath(params.workspace, params.repoSlug, '/src');
  const form = new FormData();
  form.append('message', params.commitMessage);
  form.append('branch', params.branch);
  form.append('parents', parentSha);
  for (const file of files) {
    const content = typeof file.content === 'string' ? file.content : new Uint8Array(file.content);
    form.append(file.path, new Blob([content]), file.path);
  }

  const res = await client.fetch(url, {
    method: 'POST',
    headers: {
      Authorization: client.authHeader,
    },
    body: form,
  });

  if (res.status === 401 || res.status === 403) {
    throw authOrPermError();
  }
  if (res.status < 200 || res.status >= 300) {
    throw new Error('Bitbucket: could not write files to the repository.');
  }
}

async function createBitbucketPullRequest(
  client: BitbucketClient,
  params: Pick<
    SubmitBitbucketFilesPrParams,
    'workspace' | 'repoSlug' | 'baseBranch' | 'branch' | 'prTitle' | 'prBody'
  >,
): Promise<string> {
  const url = repoPath(params.workspace, params.repoSlug, '/pullrequests');
  const { status, data } = await bitbucketJson<BitbucketPullRequest>(client, 'POST', url, {
    title: params.prTitle,
    description: params.prBody,
    source: { branch: { name: params.branch } },
    destination: { branch: { name: params.baseBranch } },
  });
  if (status === 401 || status === 403) {
    throw authOrPermError();
  }
  if (status < 200 || status >= 300) {
    throw new Error(
      'Bitbucket: the commit was created but opening the pull request failed. Check the repository on Bitbucket.',
    );
  }
  const prUrl = data?.links?.html?.href;
  if (!prUrl) {
    throw new Error('Bitbucket: pull request was created but no URL was returned.');
  }
  return prUrl;
}

/**
 * Creates a feature branch from base, commits one or more files via Source API, opens a PR.
 */
export async function submitFilesPullRequest(
  client: BitbucketClient,
  params: SubmitBitbucketFilesPrParams,
): Promise<{ prUrl: string; branch: string }> {
  const { files } = params;
  if (files.length === 0) {
    throw new Error('Bitbucket: no files to submit.');
  }

  const baseSha = await getBaseCommitSha(client, params);
  await createFeatureBranch(client, params, baseSha);
  await commitFiles(client, params, files, baseSha);
  const prUrl = await createBitbucketPullRequest(client, params);
  return { prUrl, branch: params.branch };
}
