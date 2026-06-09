import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export type CategoryFilter = {
  platform?: string[];
  technology?: string[];
  utility?: string[];
};

export type CatalogCategories = {
  platform: string[];
  technology: string[];
  utility: string[];
};

export type SkillCatalogEntry = {
  id: string;
  path: string;
} & CatalogCategories;

export type AgentCatalogEntry = {
  id: string;
  path: string;
} & CatalogCategories;

export type CursorCatalog = {
  version: number;
  taxonomy: {
    platform: string[];
    technology: string[];
    utility: string[];
  };
  skills: SkillCatalogEntry[];
  agents: AgentCatalogEntry[];
};

export type DiscoveredSkill = {
  id: string;
  skillDir: string;
  catalogPath: string;
  inCatalog: boolean;
  categories: CatalogCategories;
};

export type DiscoveredAgent = {
  id: string;
  sourcePath: string;
  destBasename: string;
  catalogPath: string;
  inCatalog: boolean;
  categories: CatalogCategories;
};

const EMPTY_CATEGORIES: CatalogCategories = {
  platform: [],
  technology: [],
  utility: [],
};

function normalizeSlashes(p: string): string {
  return p.replace(/\\/g, '/');
}

function assertSafeRelativePath(rel: string, label: string): void {
  const n = normalizeSlashes(rel);
  if (!n || n.includes('..') || n.startsWith('/')) {
    throw new Error(`${label} path must be a safe relative path: ${rel}`);
  }
}

function isMarkdownFileName(name: string): boolean {
  return name.toLowerCase().endsWith('.md');
}

export function agentIdFromBasename(basename: string): string {
  let stem = basename;
  if (stem.toLowerCase().endsWith('.md')) {
    stem = stem.slice(0, -3);
  }
  if (stem.toLowerCase().endsWith('.agent')) {
    stem = stem.slice(0, -6);
  }
  return stem;
}

export function agentDestBasenameFromCatalogPath(catalogPath: string): string {
  return path.basename(catalogPath);
}

export function findPackageRoot(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (let i = 0; i < 14; i++) {
    const catalog = path.join(dir, 'cursor-catalog.json');
    const skills = path.join(dir, 'cursor-skills');
    try {
      if (fs.existsSync(catalog) && fs.statSync(catalog).isFile()) {
        return dir;
      }
      if (fs.existsSync(skills) && fs.statSync(skills).isDirectory()) {
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

export function resolvePackageRoot(explicitRoot?: string): string {
  if (explicitRoot?.trim()) {
    const root = path.resolve(explicitRoot.trim());
    const marker = path.join(root, 'cursor-skills');
    if (!fs.existsSync(marker)) {
      throw new Error(`project_root does not contain cursor-skills/: ${root}`);
    }
    return root;
  }
  const here = path.dirname(fileURLToPath(import.meta.url));
  const found = findPackageRoot(here);
  if (!found) {
    throw new Error(
      'Could not find mcp-runrunit package root (cursor-catalog.json or cursor-skills/).',
    );
  }
  return found;
}

function readCatalogJson(projectRoot: string): CursorCatalog {
  const catalogPath = path.join(projectRoot, 'cursor-catalog.json');
  if (!fs.existsSync(catalogPath)) {
    throw new Error(`cursor-catalog.json not found at ${catalogPath}`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  } catch (e) {
    throw new Error(`Invalid cursor-catalog.json: ${e instanceof Error ? e.message : String(e)}`);
  }
  return parsed as CursorCatalog;
}

function validateCategoryValues(
  values: string[],
  allowed: string[],
  label: string,
  entryId: string,
): void {
  for (const v of values) {
    if (!allowed.includes(v)) {
      throw new Error(`Unknown ${label} "${v}" on entry "${entryId}"`);
    }
  }
}

export function validateCursorCatalog(catalog: CursorCatalog, projectRoot: string): string[] {
  const warnings: string[] = [];
  const skillIds = new Set<string>();
  const agentIds = new Set<string>();
  const agentDestBasenames = new Map<string, string>();

  for (const entry of catalog.skills ?? []) {
    if (!entry.id?.trim()) {
      throw new Error('Skill catalog entry missing id');
    }
    if (skillIds.has(entry.id)) {
      throw new Error(`Duplicate skill id: ${entry.id}`);
    }
    skillIds.add(entry.id);
  }

  for (const entry of catalog.agents ?? []) {
    if (!entry.id?.trim()) {
      throw new Error('Agent catalog entry missing id');
    }
    if (agentIds.has(entry.id)) {
      throw new Error(`Duplicate agent id: ${entry.id}`);
    }
    agentIds.add(entry.id);
    const destBasename = agentDestBasenameFromCatalogPath(entry.path);
    const prev = agentDestBasenames.get(destBasename);
    if (prev) {
      throw new Error(
        `Duplicate agent destination basename ${destBasename}: ${prev} and ${entry.id}`,
      );
    }
    agentDestBasenames.set(destBasename, entry.id);
  }

  for (const entry of catalog.skills ?? []) {
    assertSafeRelativePath(entry.path, `skill ${entry.id}`);
    validateCategoryValues(entry.platform ?? [], catalog.taxonomy.platform, 'platform', entry.id);
    validateCategoryValues(
      entry.technology ?? [],
      catalog.taxonomy.technology,
      'technology',
      entry.id,
    );
    validateCategoryValues(entry.utility ?? [], catalog.taxonomy.utility, 'utility', entry.id);

    const skillDir = path.join(projectRoot, 'cursor-skills', entry.path);
    const skillMd = path.join(skillDir, 'SKILL.md');
    if (!fs.existsSync(skillMd)) {
      throw new Error(`Skill ${entry.id}: SKILL.md not found at cursor-skills/${entry.path}/`);
    }
    const leaf = path.basename(entry.path);
    if (leaf !== entry.id) {
      warnings.push(
        `Skill ${entry.id}: path leaf "${leaf}" differs from id (allowed but prefer matching names)`,
      );
    }
  }

  for (const entry of catalog.agents ?? []) {
    assertSafeRelativePath(entry.path, `agent ${entry.id}`);
    if (!isMarkdownFileName(entry.path)) {
      throw new Error(`Agent ${entry.id}: path must end with .md`);
    }
    validateCategoryValues(entry.platform ?? [], catalog.taxonomy.platform, 'platform', entry.id);
    validateCategoryValues(
      entry.technology ?? [],
      catalog.taxonomy.technology,
      'technology',
      entry.id,
    );
    validateCategoryValues(entry.utility ?? [], catalog.taxonomy.utility, 'utility', entry.id);

    const sourcePath = path.join(projectRoot, 'cursor-agents', entry.path);
    if (!fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
      throw new Error(`Agent ${entry.id}: file not found at cursor-agents/${entry.path}`);
    }

    const destBasename = agentDestBasenameFromCatalogPath(entry.path);
    const derivedId = agentIdFromBasename(destBasename);
    if (derivedId !== entry.id) {
      warnings.push(
        `Agent ${entry.id}: id does not match filename stem "${derivedId}" (check catalog id)`,
      );
    }
  }

  return warnings;
}

export function loadCursorCatalog(projectRoot?: string): {
  catalog: CursorCatalog;
  projectRoot: string;
  warnings: string[];
} {
  const root = projectRoot ? path.resolve(projectRoot) : resolvePackageRoot();
  const catalog = readCatalogJson(root);
  const warnings = validateCursorCatalog(catalog, root);
  return { catalog, projectRoot: root, warnings };
}

export function tryLoadCursorCatalog(projectRoot: string): CursorCatalog | null {
  const catalogPath = path.join(projectRoot, 'cursor-catalog.json');
  if (!fs.existsSync(catalogPath)) return null;
  try {
    return loadCursorCatalog(projectRoot).catalog;
  } catch {
    return null;
  }
}

export function matchesCategoryFilter(
  categories: CatalogCategories,
  filter: CategoryFilter | undefined,
): boolean {
  if (!filter) return true;
  const dims: (keyof CategoryFilter)[] = ['platform', 'technology', 'utility'];
  for (const dim of dims) {
    const want = filter[dim];
    if (!want || want.length === 0) continue;
    const have = categories[dim] ?? [];
    if (!want.some((w) => have.includes(w))) {
      return false;
    }
  }
  return true;
}

export function filterSkillEntries(
  catalog: CursorCatalog,
  filter: CategoryFilter | undefined,
): SkillCatalogEntry[] {
  return (catalog.skills ?? []).filter((e) =>
    matchesCategoryFilter(
      { platform: e.platform ?? [], technology: e.technology ?? [], utility: e.utility ?? [] },
      filter,
    ),
  );
}

export function filterAgentEntries(
  catalog: CursorCatalog,
  filter: CategoryFilter | undefined,
): AgentCatalogEntry[] {
  return (catalog.agents ?? []).filter((e) =>
    matchesCategoryFilter(
      { platform: e.platform ?? [], technology: e.technology ?? [], utility: e.utility ?? [] },
      filter,
    ),
  );
}

export function resolveSkillEntry(
  projectRoot: string,
  skillId: string,
  catalog?: CursorCatalog | null,
): { id: string; skillDir: string; catalogPath: string; categories: CatalogCategories } {
  const id = skillId.trim();
  if (!id) {
    throw new Error('skill id is empty.');
  }
  if (id.includes('/') || id.includes('..')) {
    throw new Error('skill id must not contain path segments.');
  }

  const cat = catalog ?? tryLoadCursorCatalog(projectRoot);
  const entry = cat?.skills.find((s) => s.id === id);
  if (entry) {
    const skillDir = path.join(projectRoot, 'cursor-skills', entry.path);
    const skillMd = path.join(skillDir, 'SKILL.md');
    if (!fs.existsSync(skillMd)) {
      throw new Error(`SKILL.md not found for catalog skill ${id} at cursor-skills/${entry.path}/`);
    }
    return {
      id: entry.id,
      skillDir,
      catalogPath: normalizeSlashes(entry.path),
      categories: {
        platform: entry.platform ?? [],
        technology: entry.technology ?? [],
        utility: entry.utility ?? [],
      },
    };
  }

  const flatDir = path.join(projectRoot, 'cursor-skills', id);
  const flatMd = path.join(flatDir, 'SKILL.md');
  if (fs.existsSync(flatMd)) {
    return {
      id,
      skillDir: flatDir,
      catalogPath: id,
      categories: EMPTY_CATEGORIES,
    };
  }

  const discovered = discoverSkillsFromFilesystem(path.join(projectRoot, 'cursor-skills'));
  const hit = discovered.find((s) => s.id === id);
  if (hit) {
    return {
      id: hit.id,
      skillDir: hit.skillDir,
      catalogPath: hit.catalogPath,
      categories: hit.categories,
    };
  }

  throw new Error(`Skill "${id}" not found in catalog or cursor-skills/.`);
}

function walkSkillDirs(skillsDir: string, relPrefix: string, out: DiscoveredSkill[]): void {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  } catch {
    return;
  }

  const skillMdHere = path.join(skillsDir, 'SKILL.md');
  if (fs.existsSync(skillMdHere) && fs.statSync(skillMdHere).isFile()) {
    const id = path.basename(skillsDir);
    out.push({
      id,
      skillDir: skillsDir,
      catalogPath: relPrefix ? normalizeSlashes(relPrefix) : id,
      inCatalog: false,
      categories: EMPTY_CATEGORIES,
    });
    return;
  }

  for (const ent of entries) {
    if (!ent.isDirectory() || ent.name.startsWith('.')) continue;
    const rel = relPrefix ? `${relPrefix}/${ent.name}` : ent.name;
    walkSkillDirs(path.join(skillsDir, ent.name), rel, out);
  }
}

export function discoverSkillsFromFilesystem(skillsDir: string): DiscoveredSkill[] {
  const raw: DiscoveredSkill[] = [];
  if (!fs.existsSync(skillsDir)) return raw;
  walkSkillDirs(skillsDir, '', raw);
  return raw;
}

function walkAgentMarkdown(
  agentsDir: string,
  relPrefix: string,
  out: DiscoveredAgent[],
  destSeen: Map<string, string>,
  errors: string[],
): void {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(agentsDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const ent of entries) {
    if (ent.name.startsWith('.')) continue;
    const full = path.join(agentsDir, ent.name);
    const rel = relPrefix ? `${relPrefix}/${ent.name}` : ent.name;

    if (ent.isFile()) {
      if (!isMarkdownFileName(ent.name)) continue;
      const destBasename = ent.name;
      const prev = destSeen.get(destBasename);
      if (prev) {
        errors.push(`duplicate destination ${destBasename}: ${prev} and ${full}`);
        continue;
      }
      destSeen.set(destBasename, full);
      out.push({
        id: agentIdFromBasename(destBasename),
        sourcePath: full,
        destBasename,
        catalogPath: normalizeSlashes(rel),
        inCatalog: false,
        categories: EMPTY_CATEGORIES,
      });
      continue;
    }

    if (ent.isDirectory()) {
      walkAgentMarkdown(full, rel, out, destSeen, errors);
    }
  }
}

export function discoverAgentsFromFilesystem(agentsDir: string): {
  agents: DiscoveredAgent[];
  errors: string[];
} {
  const agents: DiscoveredAgent[] = [];
  const destSeen = new Map<string, string>();
  const errors: string[] = [];
  if (!fs.existsSync(agentsDir)) {
    return { agents, errors };
  }
  walkAgentMarkdown(agentsDir, '', agents, destSeen, errors);
  agents.sort((a, b) => a.destBasename.localeCompare(b.destBasename));
  return { agents, errors };
}

export function mergeDiscoveredSkills(
  catalog: CursorCatalog | null,
  skillsDir: string,
): DiscoveredSkill[] {
  const byId = new Map<string, DiscoveredSkill>();

  if (catalog) {
    for (const entry of catalog.skills) {
      const skillDir = path.join(skillsDir, entry.path);
      byId.set(entry.id, {
        id: entry.id,
        skillDir,
        catalogPath: normalizeSlashes(entry.path),
        inCatalog: true,
        categories: {
          platform: entry.platform ?? [],
          technology: entry.technology ?? [],
          utility: entry.utility ?? [],
        },
      });
    }
  }

  for (const disc of discoverSkillsFromFilesystem(skillsDir)) {
    const existing = byId.get(disc.id);
    if (existing) continue;
    byId.set(disc.id, { ...disc, inCatalog: false });
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

export function mergeDiscoveredAgents(
  catalog: CursorCatalog | null,
  agentsDir: string,
): { agents: DiscoveredAgent[]; errors: string[] } {
  const byDest = new Map<string, DiscoveredAgent>();
  const errors: string[] = [];

  if (catalog) {
    for (const entry of catalog.agents) {
      const sourcePath = path.join(agentsDir, entry.path);
      const destBasename = agentDestBasenameFromCatalogPath(entry.path);
      byDest.set(destBasename, {
        id: entry.id,
        sourcePath,
        destBasename,
        catalogPath: normalizeSlashes(entry.path),
        inCatalog: true,
        categories: {
          platform: entry.platform ?? [],
          technology: entry.technology ?? [],
          utility: entry.utility ?? [],
        },
      });
    }
  }

  const fsResult = discoverAgentsFromFilesystem(agentsDir);
  errors.push(...fsResult.errors);
  for (const disc of fsResult.agents) {
    if (byDest.has(disc.destBasename)) continue;
    byDest.set(disc.destBasename, { ...disc, inCatalog: false });
  }

  const agents = [...byDest.values()].sort((a, b) => a.destBasename.localeCompare(b.destBasename));
  return { agents, errors };
}

export function buildWantDestSet(agentNames: string[] | undefined): Set<string> | null {
  if (!agentNames || agentNames.length === 0) return null;
  const want = new Set<string>();
  for (const raw of agentNames) {
    const t = raw.trim();
    if (!t) continue;
    const base = path.basename(t);
    want.add(base);
    if (!base.toLowerCase().endsWith('.md')) {
      want.add(`${base}.md`);
      want.add(`${base}.agent.md`);
    }
    want.add(agentIdFromBasename(base));
  }
  return want;
}

export function destMatchesWant(destBasename: string, want: Set<string>): boolean {
  if (want.has(destBasename)) return true;
  const id = agentIdFromBasename(destBasename);
  if (want.has(id)) return true;
  const lower = destBasename.toLowerCase();
  for (const w of want) {
    if (w.toLowerCase() === lower) return true;
    if (agentIdFromBasename(w) === id) return true;
  }
  return false;
}

export function agentMatchesWant(agent: DiscoveredAgent, want: Set<string>): boolean {
  if (destMatchesWant(agent.destBasename, want)) return true;
  return want.has(agent.id);
}

export function resolveAgentEntry(
  projectRoot: string,
  agentName: string,
  catalog?: CursorCatalog | null,
): {
  id: string;
  sourcePath: string;
  destBasename: string;
  catalogPath: string;
  categories: CatalogCategories;
} {
  const want = buildWantDestSet([agentName]);
  if (!want || want.size === 0) {
    throw new Error('agent_name is empty.');
  }

  const cat = catalog ?? tryLoadCursorCatalog(projectRoot);
  const { agents, errors } = mergeDiscoveredAgents(cat, path.join(projectRoot, 'cursor-agents'));
  if (errors.length > 0) {
    throw new Error(errors.join('; '));
  }

  const matches = agents.filter((a) => agentMatchesWant(a, want));
  if (matches.length === 0) {
    const available = agents.map((a) => a.id).join(', ');
    throw new Error(
      `No agent matched "${agentName}". Available: ${available.length ? available : '(none)'}`,
    );
  }
  if (matches.length > 1) {
    throw new Error(
      `Ambiguous agent_name "${agentName}": matches ${matches.map((m) => m.id).join(', ')}.`,
    );
  }

  const hit = matches[0];
  return {
    id: hit.id,
    sourcePath: hit.sourcePath,
    destBasename: hit.destBasename,
    catalogPath: hit.catalogPath,
    categories: hit.categories,
  };
}

export function parseFrontmatterDescription(filePath: string): string | undefined {
  let content: string;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    return undefined;
  }
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content);
  if (!match) return undefined;
  const block = match[1];
  const descMatch = /^description:\s*(.+)$/m.exec(block);
  if (!descMatch) return undefined;
  let desc = descMatch[1].trim();
  if (
    (desc.startsWith('"') && desc.endsWith('"')) ||
    (desc.startsWith("'") && desc.endsWith("'"))
  ) {
    desc = desc.slice(1, -1);
  }
  if (desc.startsWith('>-') || desc.startsWith('|')) {
    return undefined;
  }
  return desc;
}

export function resolveSkillIdsForInstall(params: {
  projectRoot: string;
  skillsDir: string;
  catalog: CursorCatalog | null;
  skill_names?: string[];
  categories?: CategoryFilter;
}): { skills: DiscoveredSkill[]; warnings: string[] } {
  const warnings: string[] = [];
  let skills = mergeDiscoveredSkills(params.catalog, params.skillsDir);

  if (params.categories && Object.values(params.categories).some((v) => v && v.length > 0)) {
    skills = skills.filter((s) => matchesCategoryFilter(s.categories, params.categories));
  }

  if (params.skill_names && params.skill_names.length > 0) {
    const want = new Set(params.skill_names.map((s) => s.trim()).filter(Boolean));
    skills = skills.filter((s) => want.has(s.id));
  }

  for (const s of skills) {
    if (!s.inCatalog) {
      warnings.push(`Skill "${s.id}" is not in cursor-catalog.json (orphan)`);
    }
    const skillMd = path.join(s.skillDir, 'SKILL.md');
    if (!fs.existsSync(skillMd)) {
      warnings.push(`Skill "${s.id}" missing SKILL.md at ${s.skillDir}`);
    }
  }

  return { skills, warnings };
}

export function resolveAgentsForInstall(params: {
  projectRoot: string;
  agentsDir: string;
  catalog: CursorCatalog | null;
  agent_names?: string[];
  categories?: CategoryFilter;
}): { agents: DiscoveredAgent[]; errors: string[]; warnings: string[] } {
  const warnings: string[] = [];
  const { agents: merged, errors } = mergeDiscoveredAgents(params.catalog, params.agentsDir);
  let agents = merged;

  if (params.categories && Object.values(params.categories).some((v) => v && v.length > 0)) {
    agents = agents.filter((a) => matchesCategoryFilter(a.categories, params.categories));
  }

  const want = buildWantDestSet(params.agent_names);
  if (want) {
    agents = agents.filter((a) => agentMatchesWant(a, want));
  }

  for (const a of agents) {
    if (!a.inCatalog) {
      warnings.push(`Agent "${a.id}" is not in cursor-catalog.json (orphan)`);
    }
  }

  return { agents, errors, warnings };
}
