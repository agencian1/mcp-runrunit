import fs from 'node:fs';
import path from 'node:path';
import {
  mergeDiscoveredAgents,
  resolveAgentEntry,
  resolveSkillEntry,
  tryLoadCursorCatalog,
} from './cursor-catalog.js';

/** Same limit as submit-documents MAX_MARKDOWN_BYTES default. */
export const MAX_SHARE_FILE_BYTES = 512 * 1024;

/** Total bytes across all files in a skill folder share. */
export const MAX_SHARE_SKILL_TOTAL_BYTES = 2 * 1024 * 1024;

/** Maximum number of files in a skill folder share. */
export const MAX_SHARE_SKILL_FILE_COUNT = 200;

export type SkillFileForShare = {
  repoPath: string;
  content: Buffer;
};

export type CollectSkillFilesResult = {
  folder: string;
  repoFolderPath: string;
  files: SkillFileForShare[];
};

export type AgentMarkdownPlan = {
  destBasename: string;
  sourcePath: string;
};

export function findProjectRootWithSubdir(startDir: string, subdirName: string): string | null {
  let dir = path.resolve(startDir);
  for (let i = 0; i < 14; i++) {
    const sub = path.join(dir, subdirName);
    try {
      if (fs.existsSync(sub) && fs.statSync(sub).isDirectory()) {
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

export function resolveShareProjectRoot(
  projectRootInput: string | undefined,
  subdir: 'cursor-agents' | 'cursor-skills',
): string {
  if (projectRootInput?.trim()) {
    const root = path.resolve(projectRootInput.trim());
    const marker = path.join(root, subdir);
    if (!fs.existsSync(marker) || !fs.statSync(marker).isDirectory()) {
      throw new Error(`project_root does not contain ${subdir}/: ${root}`);
    }
    return root;
  }
  const found = findProjectRootWithSubdir(process.cwd(), subdir);
  if (!found) {
    throw new Error(`Could not find ${subdir}/ from cwd (${process.cwd()}). Pass project_root.`);
  }
  return found;
}

export function assertPathInsideProjectRoot(projectRoot: string, filePath: string): void {
  const root = path.resolve(projectRoot);
  const file = path.resolve(filePath);
  const rootWithSep = root.endsWith(path.sep) ? root : root + path.sep;
  if (file !== root && !file.startsWith(rootWithSep)) {
    throw new Error('Resolved path escapes project_root (path traversal).');
  }
}

export function resolveAgentMarkdownForShare(
  projectRoot: string,
  agentName: string,
): { sourcePath: string; destBasename: string; availableBasenames: string[]; repoPath: string } {
  const catalog = tryLoadCursorCatalog(projectRoot);
  const agentsDir = path.join(projectRoot, 'cursor-agents');
  const { agents, errors } = mergeDiscoveredAgents(catalog, agentsDir);
  if (errors.length > 0) {
    throw new Error(errors.join('; '));
  }

  const hit = resolveAgentEntry(projectRoot, agentName, catalog);
  assertPathInsideProjectRoot(projectRoot, hit.sourcePath);
  return {
    sourcePath: hit.sourcePath,
    destBasename: hit.destBasename,
    availableBasenames: agents.map((a) => a.destBasename),
    repoPath: `cursor-agents/${hit.catalogPath}`,
  };
}

const SKILL_FOLDER_NAME_RE = /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/;

export function assertValidSkillFolderName(skillName: string): string {
  const s = skillName.trim();
  if (!s) {
    throw new Error('skill_name is empty.');
  }
  if (s.includes('..') || s.includes('/') || s.includes('\\')) {
    throw new Error("skill_name must not contain path segments or '..'.");
  }
  if (!SKILL_FOLDER_NAME_RE.test(s)) {
    throw new Error('skill_name must be a single folder name (letters, numbers, . _ -).');
  }
  return s;
}

export function resolveSkillMarkdownForShare(
  projectRoot: string,
  skillName: string,
): { sourcePath: string; repoPath: string; folder: string; catalogPath: string } {
  const id = assertValidSkillFolderName(skillName);
  const catalog = tryLoadCursorCatalog(projectRoot);
  const hit = resolveSkillEntry(projectRoot, id, catalog);
  const sourcePath = path.join(hit.skillDir, 'SKILL.md');
  assertPathInsideProjectRoot(projectRoot, sourcePath);
  if (!fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
    throw new Error(`SKILL.md not found for skill ${id}.`);
  }
  const repoPath = `cursor-skills/${hit.catalogPath}/SKILL.md`;
  return { sourcePath, repoPath, folder: id, catalogPath: hit.catalogPath };
}

function walkSkillFilesForShare(
  projectRoot: string,
  skillDir: string,
  catalogPath: string,
  relPrefix: string,
  acc: SkillFileForShare[],
  totalBytes: { value: number },
): void {
  if (acc.length >= MAX_SHARE_SKILL_FILE_COUNT) {
    throw new Error(
      `Skill folder exceeds maximum file count (${MAX_SHARE_SKILL_FILE_COUNT}). Split the skill or share manually.`,
    );
  }

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(skillDir, { withFileTypes: true });
  } catch (e) {
    throw new Error(`Could not read skill folder: ${e instanceof Error ? e.message : String(e)}`);
  }

  for (const ent of entries) {
    if (ent.name.startsWith('.')) continue;

    const absPath = path.join(skillDir, ent.name);
    assertPathInsideProjectRoot(projectRoot, absPath);

    let st: fs.Stats;
    try {
      st = fs.lstatSync(absPath);
    } catch (e) {
      throw new Error(`Could not stat ${ent.name}: ${e instanceof Error ? e.message : String(e)}`);
    }

    if (st.isSymbolicLink()) {
      throw new Error(`Symlinks are not allowed in skill folders: ${ent.name}`);
    }

    const relPath = relPrefix ? `${relPrefix}/${ent.name}` : ent.name;

    if (st.isDirectory()) {
      walkSkillFilesForShare(projectRoot, absPath, catalogPath, relPath, acc, totalBytes);
      continue;
    }

    if (!st.isFile()) continue;

    if (st.size > MAX_SHARE_FILE_BYTES) {
      throw new Error(`File ${relPath} exceeds maximum size (${MAX_SHARE_FILE_BYTES} bytes).`);
    }

    let content: Buffer;
    try {
      content = fs.readFileSync(absPath);
    } catch (e) {
      throw new Error(`Could not read ${relPath}: ${e instanceof Error ? e.message : String(e)}`);
    }

    totalBytes.value += content.length;
    if (totalBytes.value > MAX_SHARE_SKILL_TOTAL_BYTES) {
      throw new Error(
        `Skill folder exceeds maximum total size (${MAX_SHARE_SKILL_TOTAL_BYTES} bytes). Split the skill or share manually.`,
      );
    }

    if (acc.length >= MAX_SHARE_SKILL_FILE_COUNT) {
      throw new Error(
        `Skill folder exceeds maximum file count (${MAX_SHARE_SKILL_FILE_COUNT}). Split the skill or share manually.`,
      );
    }

    const repoPath = `cursor-skills/${catalogPath}/${relPath.replace(/\\/g, '/')}`;
    acc.push({ repoPath, content });
  }
}

/**
 * Collects all regular files under the catalog-resolved skill folder for multi-file GitHub share.
 */
export function collectSkillFilesForShare(
  projectRoot: string,
  skillName: string,
): CollectSkillFilesResult {
  const id = assertValidSkillFolderName(skillName);
  const catalog = tryLoadCursorCatalog(projectRoot);
  const hit = resolveSkillEntry(projectRoot, id, catalog);
  const skillDir = hit.skillDir;
  assertPathInsideProjectRoot(projectRoot, skillDir);

  const skillMd = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillMd) || !fs.statSync(skillMd).isFile()) {
    throw new Error(`SKILL.md not found for skill ${id}.`);
  }

  const files: SkillFileForShare[] = [];
  const totalBytes = { value: 0 };
  walkSkillFilesForShare(projectRoot, skillDir, hit.catalogPath, '', files, totalBytes);

  if (files.length === 0) {
    throw new Error(`No files found for skill ${id}.`);
  }

  files.sort((a, b) => a.repoPath.localeCompare(b.repoPath));

  return {
    folder: id,
    repoFolderPath: `cursor-skills/${hit.catalogPath}/`,
    files,
  };
}
