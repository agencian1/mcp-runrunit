import {
  isProductionBranch,
  parsePrBase,
  parseTaskNumber,
  type GitWorkspacePort,
  type WorkflowPlan,
} from '../../domain/github-workflow.js';
import { getPrTemplate, type PrChangeType, type PrReferences } from '../pr-template.js';
import { errorMessage, rejected, requireProjectRoot } from './shared.js';

const SKILL = 'create-pr-github';

const CHANGE_TYPES: readonly PrChangeType[] = ['bug', 'feature', 'refactor', 'docs', 'layout'];

export type CreatePrGithubInput = {
  projectRoot?: string;
  approved?: boolean;
  taskId?: string;
  type?: string;
  titleDescription?: string;
  description?: string;
  changeType?: string;
  base?: string;
  labels?: string[];
  reviewers?: string[];
  includeVisualEvidence?: boolean;
  references?: PrReferences;
};

/**
 * Plans or opens one GitHub pull request.
 * Evidence, task comments, and link_da_branch stay as follow-up actions for other tools.
 */
export function createPrGithub(input: CreatePrGithubInput, git: GitWorkspacePort): WorkflowPlan {
  const root = requireProjectRoot(input.projectRoot);
  if (!root) {
    return rejected(SKILL, 'project_root é obrigatório.');
  }

  const base = parsePrBase(input.base);
  if (!base) {
    return rejected(
      SKILL,
      'Base inválida. Use development ou homolog. Nunca abra PR para main ou master.',
    );
  }

  let branch: string | null;
  try {
    branch = git.currentBranch(root);
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }

  if (!branch || isProductionBranch(branch)) {
    return rejected(
      SKILL,
      'A branch atual é main ou master. Abra a PR a partir da branch da task.',
    );
  }

  const taskNumber = parseTaskNumber(input.taskId) ?? parseTaskNumber(branch);
  if (!taskNumber) {
    return rejected(SKILL, 'Informe task_id numérico ou use uma branch task_[número].');
  }

  const branchNumber = parseTaskNumber(branch);
  if (branchNumber && branchNumber !== taskNumber) {
    return rejected(SKILL, `A branch ${branch} não corresponde à task ${taskNumber}.`);
  }
  if (!branchNumber && !branch.includes(taskNumber)) {
    return rejected(
      SKILL,
      `A branch ${branch} não contém o id ${taskNumber}. Crie task_${taskNumber} antes da PR.`,
    );
  }

  const type = input.type?.trim() ?? '';
  const titleDescription = input.titleDescription?.trim() ?? '';
  if (!type || !titleDescription) {
    return rejected(SKILL, 'type e title_description são obrigatórios para montar o título da PR.');
  }

  const changeType = resolveChangeType(input.changeType, type);
  const description = input.description?.trim() || titleDescription;
  const providedLabels = input.labels?.map((label) => label.trim()).filter(Boolean) ?? [];
  const labels = providedLabels.length > 0 ? providedLabels : [labelFor(type, changeType)];
  const reviewers = input.reviewers?.map((reviewer) => reviewer.trim()).filter(Boolean) ?? [];

  let template;
  try {
    template = getPrTemplate({
      projectRoot: root,
      changeType,
      description,
      taskId: `task${taskNumber}`,
      type,
      titleDescription,
      includeVisualEvidence: input.includeVisualEvidence,
      references: input.references,
    });
  } catch (err) {
    return rejected(SKILL, errorMessage(err));
  }

  if (!template.title) {
    return rejected(SKILL, 'Não foi possível montar o título da PR.');
  }

  const pushCommand = `git push -u origin ${branch}`;
  const labelArgs = labels.map((label) => `--label ${shellQuote(label)}`).join(' ');
  const reviewerArgs = reviewers.map((reviewer) => `--reviewer ${shellQuote(reviewer)}`).join(' ');
  const prCommand = [
    'gh pr create',
    `--title ${shellQuote(template.title)}`,
    '--body <body do template>',
    `--base ${base}`,
    `--head ${branch}`,
    labelArgs,
    reviewerArgs,
  ]
    .filter(Boolean)
    .join(' ');

  const actions = [
    { description: `Enviar ${branch} para o remoto.`, command: pushCommand },
    { description: `Abrir PR para ${base}.`, command: prCommand },
    ...followUpActions(),
  ];

  const warnings: string[] = [];
  if (reviewers.length === 0) {
    warnings.push('Nenhum revisor informado.');
  }
  if (input.includeVisualEvidence !== false) {
    warnings.push(
      'Evidências visuais não são capturadas por esta tool. Preencha a seção no body ou siga registrar-evidencias antes de aprovar, se a mudança for de UI.',
    );
  }

  if (!input.approved) {
    return {
      status: 'awaiting_approval',
      skill: SKILL,
      summary: `Plano da PR "${template.title}" de ${branch} para ${base}. Nada foi enviado. Aprove com approved: true para executar.`,
      actions,
      warnings,
      next_tool: null,
      title: template.title,
      body: template.body,
      branch,
      target_environment: base,
    };
  }

  try {
    git.pushBranch(root, branch);
  } catch (err) {
    return rejected(SKILL, `Falha no push: ${errorMessage(err)}`);
  }

  let pullRequestUrl: string;
  try {
    pullRequestUrl = git.openPullRequest({
      projectRoot: root,
      title: template.title,
      body: template.body,
      base,
      head: branch,
      labels,
      reviewers,
    });
  } catch (err) {
    return rejected(SKILL, `Push feito, mas a PR não abriu: ${errorMessage(err)}`, [
      `Branch ${branch} já foi enviada.`,
    ]);
  }

  return {
    status: 'executed',
    skill: SKILL,
    summary: `PR aberta: ${pullRequestUrl}`,
    actions: [
      { description: `PR: ${pullRequestUrl}`, command: prCommand },
      { description: `Branch: ${branch}` },
      { description: `Ambiente de destino: ${base}` },
      ...followUpActions(),
    ],
    warnings,
    next_tool: null,
    title: template.title,
    body: template.body,
    branch,
    target_environment: base,
    pull_request_url: pullRequestUrl,
  };
}

function followUpActions(): WorkflowPlan['actions'] {
  return [
    {
      description:
        'Capturar evidências com a skill registrar-evidencias (mobile, tablet e desktop; antes e depois quando houver UI).',
    },
    {
      description:
        'Comentar na task com runrunit_create_comment preenchendo escopo, como_foi_feito, arquivos_configuracoes, como_validar e links (URL da PR em links). Texto simples, sem Markdown.',
    },
    {
      description:
        'Gravar link_da_branch com a URL da PR e link_da_branch_relatorio com a URL da branch via runrunit_update_task.',
    },
  ];
}

function resolveChangeType(changeType: string | undefined, type: string): PrChangeType {
  if (changeType && (CHANGE_TYPES as readonly string[]).includes(changeType)) {
    return changeType as PrChangeType;
  }
  if (type === 'fix') return 'bug';
  if (type === 'docs') return 'docs';
  if (type === 'refactor' || type === 'test' || type === 'chore' || type === 'perf') {
    return 'refactor';
  }
  return 'feature';
}

function labelFor(type: string, changeType: PrChangeType): string {
  const byChange: Record<PrChangeType, string> = {
    bug: 'Fix',
    feature: 'Feature',
    refactor: 'Refactor',
    docs: 'Docs',
    layout: 'Layout',
  };
  const byType: Record<string, string> = {
    feat: 'Feature',
    fix: 'Fix',
    docs: 'Docs',
    refactor: 'Refactor',
    test: 'Test',
    chore: 'Chore',
    perf: 'Perf',
  };
  return byType[type] ?? byChange[changeType];
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}
