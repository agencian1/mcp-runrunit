import type { WorkflowPlan } from '../../domain/github-workflow.js';
import { rejected } from './shared.js';

const SKILL = 'commits-branches-prs';

const CREATE_BRANCH = 'runrunit_create_task_branch';
const FORMAT_MESSAGE = 'runrunit_format_commit_message';
const COMMIT_PER_FILE = 'runrunit_commit_per_file';
const CHECK_PR = 'runrunit_check_pr';

export type WorkflowIntent = 'branch' | 'message' | 'commit' | 'branch_and_commit' | 'pr';

/**
 * Routes a GitHub workflow request to a single entry tool.
 * Does not create branches, commits, or pull requests.
 */
export function routeCommitsBranchesPrs(intent: string): WorkflowPlan {
  const normalized = intent.trim() as WorkflowIntent;

  switch (normalized) {
    case 'branch':
      return {
        status: 'executed',
        skill: SKILL,
        summary: 'Pedido só de branch. Próxima tool: criar task_[número].',
        actions: [
          {
            description: `Chamar ${CREATE_BRANCH}. Não commitar neste passo.`,
          },
        ],
        warnings: [],
        next_tool: CREATE_BRANCH,
        chain: [CREATE_BRANCH],
      };
    case 'message':
      return {
        status: 'executed',
        skill: SKILL,
        summary: 'Pedido só da mensagem. Próxima tool: formatar o subject.',
        actions: [
          {
            description: `Chamar ${FORMAT_MESSAGE}. Não commitar neste passo.`,
          },
        ],
        warnings: [],
        next_tool: FORMAT_MESSAGE,
        chain: [FORMAT_MESSAGE],
      };
    case 'commit':
      return {
        status: 'executed',
        skill: SKILL,
        summary:
          'Pedido de commit na branch atual. commit-per-file formata cada mensagem e não abre PR.',
        actions: [
          {
            description: `Chamar ${COMMIT_PER_FILE}. A formatação usa o padrão de ${FORMAT_MESSAGE} dentro dessa tool.`,
          },
        ],
        warnings: [],
        next_tool: COMMIT_PER_FILE,
        chain: [COMMIT_PER_FILE],
      };
    case 'branch_and_commit':
      return {
        status: 'executed',
        skill: SKILL,
        summary:
          'Pedido de branch e commit. Começar pela branch e seguir para um commit por arquivo.',
        actions: [
          {
            description: `Chamar ${CREATE_BRANCH} com includes_commit: true.`,
          },
          {
            description: `Depois chamar ${COMMIT_PER_FILE}.`,
          },
        ],
        warnings: [],
        next_tool: CREATE_BRANCH,
        chain: [CREATE_BRANCH, COMMIT_PER_FILE],
      };
    case 'pr':
      return {
        status: 'executed',
        skill: SKILL,
        summary:
          'Checklist de PR. check-pr encerra a cadeia do fluxo. Abrir o PR no GitHub é outra tool, só se o pedido for criar a PR.',
        actions: [
          {
            description: `Chamar ${CHECK_PR}.`,
          },
          {
            description:
              'Se o checklist passar e o pedido for abrir a PR, chamar runrunit_create_pr_github. check-pr não chama essa tool.',
          },
        ],
        warnings: [],
        next_tool: CHECK_PR,
        chain: [CHECK_PR],
      };
    default:
      return rejected(
        SKILL,
        'intent inválido. Use branch, message, commit, branch_and_commit ou pr.',
      );
  }
}
