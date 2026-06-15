import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findPackageRoot } from './cursor-catalog.js';

export const PR_TEMPLATE_FILENAME = 'PR_template.md';

export type PrChangeType = 'bug' | 'feature' | 'refactor' | 'docs' | 'layout';

export type PrReferences = {
  task?: string;
  figma?: string;
  document?: string;
};

export type BuildPrBodyParams = {
  changeType: PrChangeType;
  description: string;
  includeVisualEvidence?: boolean;
  references?: PrReferences;
  projectRoot?: string;
};

export type GetPrTemplateParams = {
  changeType?: PrChangeType;
  description?: string;
  includeVisualEvidence?: boolean;
  references?: PrReferences;
  projectRoot?: string;
  taskId?: string;
  type?: string;
  titleDescription?: string;
};

export type GetPrTemplateResult = {
  source_path: string;
  title_format: string;
  title?: string;
  body: string;
  change_types: PrChangeType[];
};

const CHANGE_TYPE_MARKERS: Record<PrChangeType, string> = {
  bug: '🐛',
  feature: '✨',
  refactor: '♻️',
  docs: '📖',
  layout: '🎨',
};

export function findPrTemplateRoot(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (let i = 0; i < 14; i++) {
    const template = path.join(dir, PR_TEMPLATE_FILENAME);
    try {
      if (fs.existsSync(template) && fs.statSync(template).isFile()) {
        return dir;
      }
    } catch {
      /* ignore */
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

export function resolvePrTemplatePath(projectRoot?: string): string {
  if (projectRoot?.trim()) {
    const templatePath = path.join(path.resolve(projectRoot.trim()), PR_TEMPLATE_FILENAME);
    if (!fs.existsSync(templatePath)) {
      throw new Error(`PR_template.md not found at ${templatePath}`);
    }
    return templatePath;
  }

  const fromCwd = findPrTemplateRoot(process.cwd());
  if (fromCwd) {
    return path.join(fromCwd, PR_TEMPLATE_FILENAME);
  }

  const here = path.dirname(fileURLToPath(import.meta.url));
  const fromPkg = findPrTemplateRoot(here) ?? findPackageRoot(here);
  if (fromPkg) {
    const templatePath = path.join(fromPkg, PR_TEMPLATE_FILENAME);
    if (fs.existsSync(templatePath)) {
      return templatePath;
    }
  }

  throw new Error(
    'PR_template.md not found. Pass project_root or run from a repo that contains it.',
  );
}

export function readPrTemplateRaw(projectRoot?: string): string {
  return fs.readFileSync(resolvePrTemplatePath(projectRoot), 'utf8');
}

export function extractPrBodyTemplate(raw: string): string {
  const marker = '## 🎯 Tipo de Mudança';
  const idx = raw.indexOf(marker);
  if (idx === -1) {
    throw new Error(`PR_template.md: missing "${marker}" section`);
  }
  return raw.slice(idx).trimEnd();
}

export function formatPrTitle(params: {
  taskId?: string;
  type: string;
  description: string;
}): string {
  const type = params.type.trim();
  const description = params.description.trim();
  const taskId = params.taskId?.trim();
  if (taskId) {
    return `${taskId}: ${type}: ${description}`;
  }
  return `${type}: ${description}`;
}

function markChangeType(body: string, changeType: PrChangeType): string {
  const marker = CHANGE_TYPE_MARKERS[changeType];
  return body
    .split('\n')
    .map((line) => {
      if (!line.startsWith('- [ ]') && !line.startsWith('- [x]')) {
        return line;
      }
      if (line.includes(marker)) {
        return line.replace('- [ ]', '- [x]').replace('- [x]', '- [x]');
      }
      return line.replace('- [x]', '- [ ]');
    })
    .join('\n');
}

function replaceDescriptionSection(body: string, description: string): string {
  const header = '## 📝 Descrição';
  const start = body.indexOf(header);
  if (start === -1) {
    throw new Error('PR_template.md: missing "## 📝 Descrição" section');
  }

  const afterHeader = body.slice(start + header.length);
  const divider = afterHeader.indexOf('\n---');
  if (divider === -1) {
    throw new Error('PR_template.md: missing divider after description section');
  }

  const before = body.slice(0, start + header.length);
  const after = afterHeader.slice(divider);
  const trimmedDescription = description.trim();
  return `${before}\n\n${trimmedDescription}\n${after}`;
}

function removeSection(body: string, header: string): string {
  const start = body.indexOf(header);
  if (start === -1) {
    return body;
  }

  const afterHeader = body.slice(start + header.length);
  const divider = afterHeader.indexOf('\n---');
  if (divider === -1) {
    return body.slice(0, start).trimEnd();
  }

  const rest = afterHeader.slice(divider + '\n---'.length).replace(/^\n+/, '');
  return `${body.slice(0, start).trimEnd()}\n\n---\n\n${rest}`.trimEnd();
}

function applyReferences(body: string, references?: PrReferences): string {
  if (!references) {
    return body;
  }

  let result = body;
  if (references.task) {
    result = result.replace(
      /- \*\*Tarefa:\*\* \[TASK-0123\]\(https:\/\/link-da-tarefa\.com\)/,
      `- **Tarefa:** ${references.task}`,
    );
  } else {
    result = removeReferenceLine(result, 'Tarefa');
  }

  if (references.figma) {
    result = result.replace(
      /- \*\*Design no Figma:\*\* \[Link para o design\]\(https:\/\/figma\.com\/\.\.\.\)/,
      `- **Design no Figma:** ${references.figma}`,
    );
  } else {
    result = removeReferenceLine(result, 'Design no Figma');
  }

  if (references.document) {
    result = result.replace(
      /- \*\*Documento:\*\* \[Link\]\(https:\/\/\.\.\.\)/,
      `- **Documento:** ${references.document}`,
    );
  } else {
    result = removeReferenceLine(result, 'Documento');
  }

  return result.replace(/\n---\n\n## 🔗 Referências\n\n>[^\n]*\n\n(?=\n*$)/, '');
}

function removeReferenceLine(body: string, label: string): string {
  const pattern = new RegExp(`\\n- \\*\\*${label}:\\*\\*[^\\n]*`, 'g');
  return body.replace(pattern, '');
}

export function buildPrBody(params: BuildPrBodyParams): string {
  const raw = readPrTemplateRaw(params.projectRoot);
  let body = extractPrBodyTemplate(raw);
  body = markChangeType(body, params.changeType);
  body = replaceDescriptionSection(body, params.description);

  if (params.includeVisualEvidence === false) {
    body = removeSection(body, '## 📸 Evidências Visuais (Se aplicável)');
  }

  body = applyReferences(body, params.references);
  return body.trimEnd();
}

export function getPrTemplate(params: GetPrTemplateParams = {}): GetPrTemplateResult {
  const sourcePath = resolvePrTemplatePath(params.projectRoot);
  const raw = fs.readFileSync(sourcePath, 'utf8');
  const titleFormat = raw
    .split('\n')[0]
    ?.replace(/^#\s*Título do PR:\s*\(Ex:\s*/i, '')
    .replace(/\)\s*$/, '')
    .trim();

  const hasFillParams =
    params.changeType != null ||
    params.description != null ||
    params.taskId != null ||
    params.type != null ||
    params.titleDescription != null;

  const body = hasFillParams
    ? buildPrBody({
        changeType: params.changeType ?? 'feature',
        description: params.description ?? '',
        includeVisualEvidence: params.includeVisualEvidence,
        references: params.references,
        projectRoot: params.projectRoot,
      })
    : extractPrBodyTemplate(raw);

  const result: GetPrTemplateResult = {
    source_path: sourcePath,
    title_format: titleFormat || 'task0123: feat: <description>',
    body,
    change_types: ['bug', 'feature', 'refactor', 'docs', 'layout'],
  };

  if (params.type && params.titleDescription) {
    result.title = formatPrTitle({
      taskId: params.taskId,
      type: params.type,
      description: params.titleDescription,
    });
  }

  return result;
}

export function buildShareAgentPr(params: {
  repoPath: string;
  correlationId: string;
  destBasename: string;
  projectRoot?: string;
}): { title: string; body: string } {
  const description = [
    'Partilha de agente Cursor via MCP.',
    '',
    'Commits aparecem como a identidade configurada no token do servidor MCP (não o utilizador do chat).',
    '',
    '### Metadados',
    '',
    `- **Correlation ID:** ${params.correlationId}`,
    '',
    '### Ficheiro remoto',
    '',
    `- \`${params.repoPath}\``,
  ].join('\n');

  return {
    title: formatPrTitle({
      type: 'feat',
      description: `Partilha agente ${params.destBasename}`,
    }),
    body: buildPrBody({
      changeType: 'feature',
      description,
      includeVisualEvidence: false,
      projectRoot: params.projectRoot,
    }),
  };
}

export function buildShareSkillPr(params: {
  repoFolderPath: string;
  fileCount: number;
  correlationId: string;
  folder: string;
  projectRoot?: string;
}): { title: string; body: string } {
  const description = [
    'Partilha de skill Cursor via MCP.',
    '',
    'Commits aparecem como a identidade configurada no token do servidor MCP (não o utilizador do chat).',
    '',
    '### Metadados',
    '',
    `- **Correlation ID:** ${params.correlationId}`,
    '',
    '### Pasta remota',
    '',
    `- \`${params.repoFolderPath}\` (${params.fileCount} ficheiro${params.fileCount === 1 ? '' : 's'})`,
  ].join('\n');

  return {
    title: formatPrTitle({
      type: 'feat',
      description: `Partilha skill ${params.folder}`,
    }),
    body: buildPrBody({
      changeType: 'feature',
      description,
      includeVisualEvidence: false,
      projectRoot: params.projectRoot,
    }),
  };
}
