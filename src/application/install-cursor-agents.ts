import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import {
  agentMatchesWant,
  buildWantDestSet,
  findPackageRoot,
  resolveAgentsForInstall,
  tryLoadCursorCatalog,
  type CategoryFilter,
} from './cursor-catalog.js';

export type InstallTarget = 'global' | 'project';

export type InstallCursorAgentsParams = {
  dry_run?: boolean;
  agent_names?: string[];
  categories?: CategoryFilter;
  target?: InstallTarget;
  project_root?: string;
  source_dir?: string;
};

export type CopiedEntry = {
  name: string;
  file_count: number;
  files?: string[];
};

export type InstallCursorAgentsResult = {
  source: string;
  destination: string;
  dry_run: boolean;
  copied: CopiedEntry[];
  skipped: { name: string; reason: string }[];
  warnings: string[];
  errors: string[];
};

function findPackageRootWithCursorAgents(startDir: string): string | null {
  return findPackageRoot(startDir);
}

export function resolveBundledCursorAgentsDir(explicitSource?: string): string {
  if (explicitSource?.trim()) {
    const resolved = path.resolve(explicitSource.trim());
    if (!fs.existsSync(resolved)) {
      throw new Error(`source_dir does not exist: ${resolved}`);
    }
    return resolved;
  }
  const here = path.dirname(fileURLToPath(import.meta.url));
  const root = findPackageRootWithCursorAgents(here);
  if (!root) {
    throw new Error(
      'Could not find cursor-agents folder near mcp-runrunit package. Pass source_dir with absolute path to cursor-agents.',
    );
  }
  return path.join(root, 'cursor-agents');
}

function assertSafeDestination(dest: string): void {
  const norm = path.normalize(path.resolve(dest));
  const parts = norm.split(path.sep).filter(Boolean);
  const dotCursorIdx = parts.findIndex((p) => p.toLowerCase() === '.cursor');
  if (dotCursorIdx === -1) {
    throw new Error(`Destination must be under .cursor/agents: ${dest}`);
  }
  const next = parts[dotCursorIdx + 1];
  if (!next || next.toLowerCase() !== 'agents') {
    throw new Error(`Destination must be under .cursor/agents: ${dest}`);
  }
}

export function installCursorAgents(params: InstallCursorAgentsParams): InstallCursorAgentsResult {
  const dry_run = params.dry_run === true;
  const errors: string[] = [];
  const skipped: { name: string; reason: string }[] = [];
  const warnings: string[] = [];
  const copied: CopiedEntry[] = [];

  let source: string;
  try {
    source = resolveBundledCursorAgentsDir(params.source_dir);
  } catch (e) {
    return {
      source: '',
      destination: '',
      dry_run,
      copied: [],
      skipped: [],
      warnings: [],
      errors: [e instanceof Error ? e.message : String(e)],
    };
  }

  const packageRoot = path.dirname(source);
  const catalog = tryLoadCursorCatalog(packageRoot);

  const targetMode = params.target ?? 'global';
  let destination: string;
  if (targetMode === 'global') {
    destination = path.join(os.homedir(), '.cursor', 'agents');
  } else {
    const pr = params.project_root?.trim();
    if (!pr) {
      return {
        source,
        destination: '',
        dry_run,
        copied: [],
        skipped: [],
        warnings: [],
        errors: [
          "target is 'project' but project_root was not provided (absolute path to project root required).",
        ],
      };
    }
    destination = path.resolve(pr, '.cursor', 'agents');
  }

  try {
    assertSafeDestination(destination);
  } catch (e) {
    return {
      source,
      destination,
      dry_run,
      copied: [],
      skipped: [],
      warnings: [],
      errors: [e instanceof Error ? e.message : String(e)],
    };
  }

  const {
    agents,
    errors: collectErrors,
    warnings: resolveWarnings,
  } = resolveAgentsForInstall({
    projectRoot: packageRoot,
    agentsDir: source,
    catalog,
    agent_names: params.agent_names,
    categories: params.categories,
  });
  errors.push(...collectErrors);
  warnings.push(...resolveWarnings);

  for (const item of agents) {
    if (!fs.existsSync(item.sourcePath)) {
      skipped.push({ name: item.destBasename, reason: 'source file missing' });
      continue;
    }

    if (dry_run) {
      copied.push({
        name: item.destBasename,
        file_count: 1,
        files: [path.relative(source, item.sourcePath)],
      });
      continue;
    }

    try {
      fs.mkdirSync(destination, { recursive: true });
      const destFile = path.join(destination, item.destBasename);
      fs.copyFileSync(item.sourcePath, destFile);
      copied.push({ name: item.destBasename, file_count: 1 });
    } catch (e) {
      errors.push(`${item.destBasename}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  if (params.agent_names && params.agent_names.length > 0) {
    const reported = new Set<string>();
    for (const raw of params.agent_names) {
      const t = raw.trim();
      if (!t) continue;
      if (reported.has(t)) continue;
      reported.add(t);
      const oneWant = buildWantDestSet([t]);
      if (!oneWant) continue;
      const hit = agents.some((a) => agentMatchesWant(a, oneWant));
      if (!hit) {
        skipped.push({ name: t, reason: 'not found in source' });
      }
    }
  }

  return { source, destination, dry_run, copied, skipped, warnings, errors };
}
