import path from 'node:path';
import {
  filterAgentEntries,
  filterSkillEntries,
  loadCursorCatalog,
  parseFrontmatterDescription,
  type CategoryFilter,
  type CatalogCategories,
} from './cursor-catalog.js';

export type CatalogListKind = 'skills' | 'agents' | 'all';

export type CatalogListItem = {
  kind: 'skill' | 'agent';
  id: string;
  path: string;
  platform: string[];
  technology: string[];
  utility: string[];
  description?: string;
};

export type ListCursorCatalogParams = {
  project_root?: string;
  kind?: CatalogListKind;
  platform?: string[];
  technology?: string[];
  utility?: string[];
};

export type ListCursorCatalogResult = {
  project_root: string;
  catalog_version: number;
  taxonomy: {
    platform: string[];
    technology: string[];
    utility: string[];
  };
  warnings: string[];
  items: CatalogListItem[];
};

function toFilter(params: ListCursorCatalogParams): CategoryFilter {
  return {
    platform: params.platform,
    technology: params.technology,
    utility: params.utility,
  };
}

function categoriesOf(
  c: CatalogCategories,
): Pick<CatalogListItem, 'platform' | 'technology' | 'utility'> {
  return {
    platform: c.platform ?? [],
    technology: c.technology ?? [],
    utility: c.utility ?? [],
  };
}

export function listCursorCatalog(params: ListCursorCatalogParams = {}): ListCursorCatalogResult {
  const { catalog, projectRoot, warnings } = loadCursorCatalog(params.project_root);
  const kind = params.kind ?? 'all';
  const filter = toFilter(params);
  const items: CatalogListItem[] = [];

  if (kind === 'skills' || kind === 'all') {
    for (const entry of filterSkillEntries(catalog, filter)) {
      const skillMd = path.join(projectRoot, 'cursor-skills', entry.path, 'SKILL.md');
      items.push({
        kind: 'skill',
        id: entry.id,
        path: entry.path,
        ...categoriesOf(entry),
        description: parseFrontmatterDescription(skillMd),
      });
    }
  }

  if (kind === 'agents' || kind === 'all') {
    for (const entry of filterAgentEntries(catalog, filter)) {
      const agentFile = path.join(projectRoot, 'cursor-agents', entry.path);
      items.push({
        kind: 'agent',
        id: entry.id,
        path: entry.path,
        ...categoriesOf(entry),
        description: parseFrontmatterDescription(agentFile),
      });
    }
  }

  items.sort((a, b) => a.id.localeCompare(b.id));

  return {
    project_root: projectRoot,
    catalog_version: catalog.version,
    taxonomy: catalog.taxonomy,
    warnings,
    items,
  };
}
