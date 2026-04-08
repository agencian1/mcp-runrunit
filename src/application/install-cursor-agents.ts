import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

export type InstallTarget = "global" | "project";

export type InstallCursorAgentsParams = {
  dry_run?: boolean;
  agent_names?: string[];
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
  errors: string[];
};

type CopyPlanItem = {
  destBasename: string;
  sourcePath: string;
};

function findPackageRootWithCursorAgents(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (let i = 0; i < 10; i++) {
    const ca = path.join(dir, "cursor-agents");
    try {
      if (fs.existsSync(ca) && fs.statSync(ca).isDirectory()) {
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
      "Could not find cursor-agents folder near mcp-runrunit package. Pass source_dir with absolute path to cursor-agents.",
    );
  }
  return path.join(root, "cursor-agents");
}

function assertSafeDestination(dest: string): void {
  const norm = path.normalize(path.resolve(dest));
  const parts = norm.split(path.sep).filter(Boolean);
  const dotCursorIdx = parts.findIndex((p) => p.toLowerCase() === ".cursor");
  if (dotCursorIdx === -1) {
    throw new Error(`Destination must be under .cursor/agents: ${dest}`);
  }
  const next = parts[dotCursorIdx + 1];
  if (!next || next.toLowerCase() !== "agents") {
    throw new Error(`Destination must be under .cursor/agents: ${dest}`);
  }
}

function isMarkdownFileName(name: string): boolean {
  const lower = name.toLowerCase();
  return lower.endsWith(".md");
}

/** Expand filter tokens to possible destination basenames for matching. */
function buildWantDestSet(agent_names: string[] | undefined): Set<string> | null {
  if (!agent_names || agent_names.length === 0) return null;
  const want = new Set<string>();
  for (const raw of agent_names) {
    const t = raw.trim();
    if (!t) continue;
    const base = path.basename(t);
    want.add(base);
    if (!base.toLowerCase().endsWith(".md")) {
      want.add(`${base}.md`);
    }
  }
  return want;
}

function destMatchesWant(destBasename: string, want: Set<string>): boolean {
  if (want.has(destBasename)) return true;
  const lower = destBasename.toLowerCase();
  for (const w of want) {
    if (w.toLowerCase() === lower) return true;
  }
  const stem = lower.endsWith(".md") ? lower.slice(0, -3) : lower;
  for (const w of want) {
    const wl = w.toLowerCase();
    const wstem = wl.endsWith(".md") ? wl.slice(0, -3) : wl;
    if (stem === wstem) return true;
  }
  return false;
}

function collectCopyPlans(source: string): {
  plans: CopyPlanItem[];
  skipped: { name: string; reason: string }[];
  errors: string[];
} {
  const plans: CopyPlanItem[] = [];
  const skipped: { name: string; reason: string }[] = [];
  const errors: string[] = [];
  const destSeen = new Map<string, string>();

  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const ent of entries) {
    if (ent.name.startsWith(".")) continue;

    const full = path.join(source, ent.name);

    if (ent.isFile()) {
      if (!isMarkdownFileName(ent.name)) continue;
      const destBasename = ent.name;
      const prev = destSeen.get(destBasename);
      if (prev) {
        errors.push(
          `duplicate destination ${destBasename}: ${prev} and ${full}`,
        );
        continue;
      }
      destSeen.set(destBasename, full);
      plans.push({ destBasename, sourcePath: full });
      continue;
    }

    if (!ent.isDirectory()) continue;

    const dirPath = full;
    let inner: fs.Dirent[];
    try {
      inner = fs.readdirSync(dirPath, { withFileTypes: true });
    } catch (e) {
      errors.push(
        `${ent.name}: ${e instanceof Error ? e.message : String(e)}`,
      );
      continue;
    }

    const mdFiles = inner.filter(
      (e) => e.isFile() && !e.name.startsWith(".") && isMarkdownFileName(e.name),
    );

    if (mdFiles.length === 0) {
      skipped.push({
        name: ent.name,
        reason: "subfolder has no .md / .agent.md file",
      });
      continue;
    }
    if (mdFiles.length > 1) {
      skipped.push({
        name: ent.name,
        reason: "subfolder has more than one markdown file",
      });
      continue;
    }

    const mdName = mdFiles[0].name;
    const sourcePath = path.join(dirPath, mdName);
    const destBasename = mdName;
    const prev = destSeen.get(destBasename);
    if (prev) {
      errors.push(
        `duplicate destination ${destBasename}: ${prev} and ${sourcePath}`,
      );
      continue;
    }
    destSeen.set(destBasename, sourcePath);
    plans.push({ destBasename, sourcePath });
  }

  plans.sort((a, b) => a.destBasename.localeCompare(b.destBasename));
  return { plans, skipped, errors };
}

export function installCursorAgents(
  params: InstallCursorAgentsParams,
): InstallCursorAgentsResult {
  const dry_run = params.dry_run === true;
  const errors: string[] = [];
  const skipped: { name: string; reason: string }[] = [];
  const copied: CopiedEntry[] = [];

  let source: string;
  try {
    source = resolveBundledCursorAgentsDir(params.source_dir);
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
    destination = path.join(os.homedir(), ".cursor", "agents");
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
    destination = path.resolve(pr, ".cursor", "agents");
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

  const want = buildWantDestSet(params.agent_names);
  const { plans, skipped: collectSkipped, errors: collectErrors } =
    collectCopyPlans(source);
  skipped.push(...collectSkipped);
  errors.push(...collectErrors);

  for (const item of plans) {
    if (want && !destMatchesWant(item.destBasename, want)) {
      skipped.push({
        name: item.destBasename,
        reason: "not in agent_names filter",
      });
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
      errors.push(
        `${item.destBasename}: ${e instanceof Error ? e.message : String(e)}`,
      );
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
      const hitPlan = plans.some((p) => destMatchesWant(p.destBasename, oneWant));
      if (!hitPlan) {
        skipped.push({ name: t, reason: "not found in source" });
      }
    }
  }

  return { source, destination, dry_run, copied, skipped, errors };
}
