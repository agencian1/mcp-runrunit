import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

export type InstallTarget = "global" | "project";

export type InstallCursorSkillsParams = {
  dry_run?: boolean;
  skill_names?: string[];
  target?: InstallTarget;
  project_root?: string;
  source_dir?: string;
};

export type CopiedEntry = {
  name: string;
  file_count: number;
  files?: string[];
};

export type InstallCursorSkillsResult = {
  source: string;
  destination: string;
  dry_run: boolean;
  copied: CopiedEntry[];
  skipped: { name: string; reason: string }[];
  errors: string[];
};

function findPackageRootWithCursorSkills(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (let i = 0; i < 10; i++) {
    const cs = path.join(dir, "cursor-skills");
    try {
      if (fs.existsSync(cs) && fs.statSync(cs).isDirectory()) {
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

export function resolveBundledCursorSkillsDir(explicitSource?: string): string {
  if (explicitSource?.trim()) {
    const resolved = path.resolve(explicitSource.trim());
    if (!fs.existsSync(resolved)) {
      throw new Error(`source_dir does not exist: ${resolved}`);
    }
    return resolved;
  }
  const here = path.dirname(fileURLToPath(import.meta.url));
  const root = findPackageRootWithCursorSkills(here);
  if (!root) {
    throw new Error(
      "Could not find cursor-skills folder near mcp-runrunit package. Pass source_dir with absolute path to cursor-skills.",
    );
  }
  return path.join(root, "cursor-skills");
}

function assertSafeDestination(dest: string): void {
  const norm = path.normalize(path.resolve(dest));
  const parts = norm.split(path.sep).filter(Boolean);
  const dotCursorIdx = parts.findIndex((p) => p.toLowerCase() === ".cursor");
  if (dotCursorIdx === -1) {
    throw new Error(`Destination must be under .cursor/skills: ${dest}`);
  }
  const next = parts[dotCursorIdx + 1];
  if (!next || next.toLowerCase() !== "skills") {
    throw new Error(`Destination must end at .cursor/skills (not skills-cursor): ${dest}`);
  }
  if (parts.some((p) => p.toLowerCase() === "skills-cursor")) {
    throw new Error("Refusing to write under skills-cursor (reserved by Cursor).");
  }
}

function countFilesRecursive(dir: string): { count: number; relPaths: string[] } {
  const relPaths: string[] = [];
  let count = 0;
  function walk(d: string, prefix: string): void {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const rel = prefix ? `${prefix}/${e.name}` : e.name;
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        walk(full, rel);
      } else {
        count += 1;
        relPaths.push(rel.replace(/\//g, path.sep));
      }
    }
  }
  walk(dir, "");
  return { count, relPaths };
}

export function installCursorSkills(
  params: InstallCursorSkillsParams,
): InstallCursorSkillsResult {
  const dry_run = params.dry_run === true;
  const errors: string[] = [];
  const skipped: { name: string; reason: string }[] = [];
  const copied: CopiedEntry[] = [];

  let source: string;
  try {
    source = resolveBundledCursorSkillsDir(params.source_dir);
  } catch (e) {
    return {
      source: "",
      destination: "",
      dry_run,
      copied: [],
      skipped: [],
      errors: [e instanceof Error ? e.message : String(e)],
    };
  }

  const targetMode = params.target ?? "global";
  let destination: string;
  if (targetMode === "global") {
    destination = path.join(os.homedir(), ".cursor", "skills");
  } else {
    const pr = params.project_root?.trim();
    if (!pr) {
      return {
        source,
        destination: "",
        dry_run,
        copied: [],
        skipped: [],
        errors: [
          "target is 'project' but project_root was not provided (absolute path to project root required).",
        ],
      };
    }
    destination = path.resolve(pr, ".cursor", "skills");
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
      errors: [e instanceof Error ? e.message : String(e)],
    };
  }

  const entries = fs.readdirSync(source, { withFileTypes: true });
  const skillDirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith("."));
  const want =
    params.skill_names && params.skill_names.length > 0
      ? new Set(
          params.skill_names.map((s) => s.trim()).filter(Boolean),
        )
      : null;

  for (const dirEnt of skillDirs) {
    const name = dirEnt.name;
    if (want && !want.has(name)) {
      skipped.push({ name, reason: "not in skill_names filter" });
      continue;
    }
    const skillPath = path.join(source, name);
    const skillMd = path.join(skillPath, "SKILL.md");
    if (!fs.existsSync(skillMd)) {
      skipped.push({ name, reason: "missing SKILL.md" });
      continue;
    }

    const destSkill = path.join(destination, name);

    if (dry_run) {
      const { count, relPaths } = countFilesRecursive(skillPath);
      copied.push({
        name,
        file_count: count,
        files: relPaths.slice(0, 150),
      });
      continue;
    }

    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.rmSync(destSkill, { recursive: true, force: true });
      fs.cpSync(skillPath, destSkill, { recursive: true, force: true });
      const { count } = countFilesRecursive(skillPath);
      copied.push({ name, file_count: count });
    } catch (e) {
      errors.push(`${name}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  if (want) {
    for (const n of want) {
      const seen =
        copied.some((c) => c.name === n) || skipped.some((s) => s.name === n);
      if (!seen) {
        skipped.push({ name: n, reason: "not found in source" });
      }
    }
  }

  return { source, destination, dry_run, copied, skipped, errors };
}
