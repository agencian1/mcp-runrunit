import { Octokit } from "@octokit/rest";

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
      `GitHub share is not configured. Set these environment variables on the MCP server host (never pass a token via tools): ${missingVars.join(", ")}`,
    );
    this.name = "ShareGithubConfigError";
    this.missingVars = missingVars;
  }
}

export function readGithubShareConfigFromEnv(): GithubShareConfig {
  const missing: string[] = [];
  const token = process.env.GITHUB_TOKEN?.trim();
  const owner = process.env.GITHUB_REPO_OWNER?.trim();
  const repo = process.env.GITHUB_REPO_NAME?.trim();
  if (!token) missing.push("GITHUB_TOKEN");
  if (!owner) missing.push("GITHUB_REPO_OWNER");
  if (!repo) missing.push("GITHUB_REPO_NAME");
  if (missing.length > 0) {
    throw new ShareGithubConfigError(missing);
  }
  const baseBranch =
    process.env.GITHUB_BASE_BRANCH?.trim() || "main";
  return {
    token: token!,
    owner: owner!,
    repo: repo!,
    baseBranch,
  };
}

export function createOctokit(token: string): Octokit {
  return new Octokit({ auth: token });
}

function isHttpError(e: unknown): e is { status: number; message?: string } {
  return (
    typeof e === "object" &&
    e !== null &&
    "status" in e &&
    typeof (e as { status: unknown }).status === "number"
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
  const contentB64 = Buffer.from(params.contentUtf8, "utf8").toString("base64");

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
        "Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).",
      );
    }
    throw new Error(
      "GitHub: could not read the base branch. Try again later.",
    );
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
        "Já existe uma submissão com este identificador (branch em conflito). Tente de novo dentro de instantes ou altere o nome.",
      );
    }
    if (isHttpError(error) && (error.status === 401 || error.status === 403)) {
      throw new Error(
        "Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).",
      );
    }
    throw new Error(
      "GitHub: could not create the submission branch. Check token permissions.",
    );
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
        "Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).",
      );
    }
    throw new Error(
      "GitHub: could not write the file to the repository.",
    );
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
        "Falha de autenticação ou permissões com o GitHub. Verifique GITHUB_TOKEN e scopes (contents, pull_requests).",
      );
    }
    throw new Error(
      "GitHub: the file was created but opening the pull request failed. Check the repository on GitHub.",
    );
  }
}
