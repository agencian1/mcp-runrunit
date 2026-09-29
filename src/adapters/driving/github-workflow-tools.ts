import type { CommitFileInput } from '../../application/github-workflow/commit-per-file.js';
import { commitPerFile } from '../../application/github-workflow/commit-per-file.js';
import { checkPr } from '../../application/github-workflow/check-pr.js';
import { routeCommitsBranchesPrs } from '../../application/github-workflow/commits-branches-prs.js';
import { createPrGithub } from '../../application/github-workflow/create-pr-github.js';
import { createTaskBranch } from '../../application/github-workflow/create-task-branch.js';
import { formatCommitMessage } from '../../application/github-workflow/format-commit-message.js';
import type { PrReferences } from '../../application/pr-template.js';
import type { PlannedCommit } from '../../domain/github-workflow.js';
import { GitCliWorkspace } from '../driven/git-workspace.js';

const git = new GitCliWorkspace();

const projectRootProp = {
  type: 'string',
  description:
    'Absolute path of the git repository. Required for tools that read or write that repo.',
};

const approvedProp = {
  type: 'boolean',
  description:
    'Default false. When false or omitted, returns a plan and does not change git. Set true only after the user approves that plan.',
};

const taskIdProp = {
  type: 'string',
  description: 'Task number, or task_[número]. Used in branch names and commit subjects.',
};

/**
 * MCP tool definitions for the GitHub workflow skills.
 * Each tool has one responsibility and plans before any git write.
 */
export const GITHUB_WORKFLOW_TOOLS = [
  /**
   * @namedTools runrunit_commits_branches_prs
   */
  {
    name: 'runrunit_commits_branches_prs',
    description:
      'Routes a git workflow request to one entry tool. Does not create branches, commits, or pull requests. intent: branch, message, commit, branch_and_commit, or pr. Call the returned next_tool yourself.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        intent: {
          type: 'string',
          enum: ['branch', 'message', 'commit', 'branch_and_commit', 'pr'],
          description: 'What the user asked for. pr routes to the checklist, not to opening a PR.',
        },
      },
      required: ['intent'],
    },
  },
  /**
   * @namedTools runrunit_create_task_branch
   */
  {
    name: 'runrunit_create_task_branch',
    description:
      'Plans or creates only the branch task_[número]. Default is plan (no checkout). Pass approved:true after the user accepts the plan. Does not commit. If includes_commit is true, next_tool is runrunit_commit_per_file.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        project_root: projectRootProp,
        task_id: taskIdProp,
        includes_commit: {
          type: 'boolean',
          description:
            'When true, next_tool is runrunit_commit_per_file. This tool still does not commit.',
        },
        approved: approvedProp,
      },
      required: ['project_root'],
    },
  },
  /**
   * @namedTools runrunit_format_commit_message
   */
  {
    name: 'runrunit_format_commit_message',
    description:
      'Formats one commit subject as [numero] - [tipo] - [descrição]. Does not commit. Types: feat, fix, docs, refactor, test, chore, perf. If task_id is omitted, the number comes from the current task_[número] branch. If includes_commit is true and called_from is not commit-per-file, next_tool is runrunit_commit_per_file.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        project_root: projectRootProp,
        task_id: taskIdProp,
        type: {
          type: 'string',
          enum: ['feat', 'fix', 'docs', 'refactor', 'test', 'chore', 'perf'],
          description: 'Commit type.',
        },
        description: {
          type: 'string',
          description: 'Imperative description in Portuguese.',
        },
        includes_commit: {
          type: 'boolean',
          description:
            'When true, points next_tool at runrunit_commit_per_file without committing.',
        },
        called_from: {
          type: 'string',
          description: 'Set to commit-per-file to avoid calling that tool back.',
        },
      },
      required: ['type', 'description'],
    },
  },
  /**
   * @namedTools runrunit_commit_per_file
   */
  {
    name: 'runrunit_commit_per_file',
    description:
      'Plans one commit per changed file, in dependency order, with a `[numero] - [tipo] - [descrição]` subject. Excludes likely secrets. Default is plan. Pass approved:true and the same commits list to create the commits. Does not open a pull request. If includes_pr is true, next_tool is runrunit_check_pr.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        project_root: projectRootProp,
        task_id: taskIdProp,
        type: {
          type: 'string',
          enum: ['feat', 'fix', 'docs', 'refactor', 'test', 'chore', 'perf'],
          description: 'Default commit type when a file does not set its own.',
        },
        description: {
          type: 'string',
          description: 'Default description when a file does not set its own.',
        },
        files: {
          type: 'array',
          description: 'Optional explicit files. Secrets in this list are dropped from the plan.',
          items: {
            type: 'object',
            properties: {
              path: { type: 'string' },
              type: { type: 'string' },
              description: { type: 'string' },
            },
            required: ['path'],
          },
        },
        commits: {
          type: 'array',
          description:
            'Approved commits (path + message). When present, this list is used as-is and is not reordered. Required shape of the plan you are approving.',
          items: {
            type: 'object',
            properties: {
              path: { type: 'string' },
              message: { type: 'string' },
            },
            required: ['path', 'message'],
          },
        },
        includes_pr: {
          type: 'boolean',
          description:
            'When true, next_tool is runrunit_check_pr. This tool still does not open a PR.',
        },
        approved: approvedProp,
      },
      required: ['project_root'],
    },
  },
  /**
   * @namedTools runrunit_check_pr
   */
  {
    name: 'runrunit_check_pr',
    description:
      'Read-only checklist: branch task_[número], commit subjects [numero] - [tipo] - [descrição], one file per commit. Compares with origin/development or origin/homolog unless base is set. next_tool is always null. Does not open a pull request.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        project_root: projectRootProp,
        base: {
          type: 'string',
          description: 'Optional git ref to compare against (example: origin/development).',
        },
      },
      required: ['project_root'],
    },
  },
  /**
   * @namedTools runrunit_create_pr_github
   */
  {
    name: 'runrunit_create_pr_github',
    description:
      'Plans or opens one GitHub pull request to development or homolog, never main or master (only by user request). Reuses .github/PULL_REQUEST_TEMPLATE.md. Default is plan (no push, no gh pr create). Pass approved:true only after the user accepts title, body, base, and branch. Does not comment on Runrun.it or capture screenshots; those are follow-up actions in the response. After execution the response includes pull_request_url, branch, and target_environment.',
    inputSchema: {
      type: 'object' as const,
      properties: {
        project_root: projectRootProp,
        task_id: taskIdProp,
        type: {
          type: 'string',
          description: 'PR title type, for example feat or fix.',
        },
        title_description: {
          type: 'string',
          description: 'Short PR title description.',
        },
        description: {
          type: 'string',
          description: 'Body description. Defaults to title_description.',
        },
        change_type: {
          type: 'string',
          enum: ['bug', 'feature', 'refactor', 'docs', 'layout'],
          description: 'Checkbox in the PR template.',
        },
        base: {
          type: 'string',
          enum: ['development', 'homolog'],
          description: 'Target branch. Default development. main and master are rejected.',
        },
        labels: {
          type: 'array',
          items: { type: 'string' },
          description: 'PR labels. When omitted, one label is derived from type.',
        },
        reviewers: {
          type: 'array',
          items: { type: 'string' },
          description: 'GitHub reviewers. Optional.',
        },
        include_visual_evidence: {
          type: 'boolean',
          description: 'When false, omits the visual evidence section of the template.',
        },
        references: {
          type: 'object',
          properties: {
            task: { type: 'string' },
            figma: { type: 'string' },
            document: { type: 'string' },
          },
        },
        approved: approvedProp,
      },
      required: ['project_root', 'type', 'title_description'],
    },
  },
];

export function runGithubWorkflowTool(
  name: string,
  args: Record<string, unknown>,
): { handled: true; result: unknown } | { handled: false } {
  switch (name) {
    case 'runrunit_commits_branches_prs':
      return { handled: true, result: routeCommitsBranchesPrs(String(args.intent ?? '')) };
    case 'runrunit_create_task_branch':
      return {
        handled: true,
        result: createTaskBranch(
          {
            projectRoot: optionalString(args.project_root),
            taskId: optionalString(args.task_id),
            includesCommit: args.includes_commit === true,
            approved: args.approved === true,
          },
          git,
        ),
      };
    case 'runrunit_format_commit_message':
      return {
        handled: true,
        result: formatCommitMessage(
          {
            projectRoot: optionalString(args.project_root),
            taskId: optionalString(args.task_id),
            type: optionalString(args.type),
            description: args.description != null ? String(args.description) : undefined,
            includesCommit: args.includes_commit === true,
            calledFrom: optionalString(args.called_from),
          },
          git,
        ),
      };
    case 'runrunit_commit_per_file':
      return {
        handled: true,
        result: commitPerFile(
          {
            projectRoot: optionalString(args.project_root),
            taskId: optionalString(args.task_id),
            type: optionalString(args.type),
            description: args.description != null ? String(args.description) : undefined,
            files: parseFiles(args.files),
            commits: parseCommits(args.commits),
            includesPr: args.includes_pr === true,
            approved: args.approved === true,
          },
          git,
        ),
      };
    case 'runrunit_check_pr':
      return {
        handled: true,
        result: checkPr(
          {
            projectRoot: optionalString(args.project_root),
            base: optionalString(args.base),
          },
          git,
        ),
      };
    case 'runrunit_create_pr_github':
      return {
        handled: true,
        result: createPrGithub(
          {
            projectRoot: optionalString(args.project_root),
            approved: args.approved === true,
            taskId: optionalString(args.task_id),
            type: optionalString(args.type),
            titleDescription: optionalString(args.title_description),
            description: args.description != null ? String(args.description) : undefined,
            changeType: optionalString(args.change_type),
            base: optionalString(args.base),
            labels: parseStringList(args.labels),
            reviewers: parseStringList(args.reviewers),
            includeVisualEvidence:
              args.include_visual_evidence === undefined
                ? undefined
                : args.include_visual_evidence === true,
            references: parseReferences(args.references),
          },
          git,
        ),
      };
    default:
      return { handled: false };
  }
}

function optionalString(value: unknown): string | undefined {
  if (value == null) return undefined;
  const text = String(value).trim();
  return text || undefined;
}

function parseStringList(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value.map((item) => String(item).trim()).filter(Boolean);
  return items.length > 0 ? items : undefined;
}

function parseFiles(value: unknown): CommitFileInput[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.map((item) => {
    if (!item || typeof item !== 'object') return { path: '' };
    const record = item as Record<string, unknown>;
    return {
      path: String(record.path ?? ''),
      type: record.type != null ? String(record.type) : undefined,
      description: record.description != null ? String(record.description) : undefined,
    };
  });
}

function parseCommits(value: unknown): PlannedCommit[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.map((item) => {
    if (!item || typeof item !== 'object') return { path: '', message: '' };
    const record = item as Record<string, unknown>;
    return {
      path: String(record.path ?? ''),
      message: String(record.message ?? ''),
    };
  });
}

function parseReferences(value: unknown): PrReferences | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const record = value as Record<string, unknown>;
  return {
    task: record.task != null ? String(record.task) : undefined,
    figma: record.figma != null ? String(record.figma) : undefined,
    document: record.document != null ? String(record.document) : undefined,
  };
}
