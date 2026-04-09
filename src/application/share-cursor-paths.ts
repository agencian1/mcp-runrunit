import fs from "node:fs";
import path from "node:path";

/** Same limit as submit-documents MAX_MARKDOWN_BYTES default. */
export const MAX_SHARE_FILE_BYTES = 512 * 1024;

export type AgentMarkdownPlan = {
  destBasename: string;
  sourcePath: string;
};

function isMarkdownFileName(name: string): boolean {
  const lower = name.toLowerCase();
  return lower.endsWith(".md");
}

function collectAgentMarkdownPlans(agentsDir: string): {
  plans: AgentMarkdownPlan[];
  errors: string[];
} {
  const plans: AgentMarkdownPlan[] = [];
  const errors: string[] = [];
  const destSeen = new Map<string, string>();

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(agentsDir, { withFileTypes: true });
  } catch (e) {
    return {
      plans: [],
      errors: [
        `cursor-agents not readable: ${e instanceof Error ? e.message : String(e)}`,
      ],
    };
  }

  for (const ent of entries) {
    if (ent.name.startsWith(".")) continue;

    const full = path.join(agentsDir, ent.name);

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

    let inner: fs.Dirent[];
    try {
      inner = fs.readdirSync(full, { withFileTypes: true });
    } catch (e) {
      errors.push(
        `${ent.name}: ${e instanceof Error ? e.message : String(e)}`,
      );
      continue;
    }

    const mdFiles = inner.filter(
      (e) => e.isFile() && !e.name.startsWith(".") && isMarkdownFileName(e.name),
    );

    if (mdFiles.length === 0) continue;
    if (mdFiles.length > 1) continue;

    const mdName = mdFiles[0].name;
    const sourcePath = path.join(full, mdName);
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
  return { plans, errors };
}

function buildWantDestSet(agentName: string): Set<string> {
  const want = new Set<string>();
  const t = agentName.trim();
  if (!t) return want;
  const base = path.basename(t);
  want.add(base);
  if (!base.toLowerCase().endsWith(".md")) {
    want.add(`${base}.md`);
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

export function findProjectRootWithSubdir(
  startDir: string,
  subdirName: string,
): string | null {
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
  subdir: "cursor-agents" | "cursor-skills",
): string {
  if (projectRootInput?.trim()) {
    const root = path.resolve(projectRootInput.trim());
    const marker = path.join(root, subdir);
    if (!fs.existsSync(marker) || !fs.statSync(marker).isDirectory()) {
      throw new Error(
        `project_root does not contain ${subdir}/: ${root}`,
      );
    }
    return root;
  }
  const found = findProjectRootWithSubdir(process.cwd(), subdir);
  if (!found) {
    throw new Error(
      `Could not find ${subdir}/ from cwd (${process.cwd()}). Pass project_root.`,
    );
  }
  return found;
}

export function assertPathInsideProjectRoot(
  projectRoot: string,
  filePath: string,
): void {
  const root = path.resolve(projectRoot);
  const file = path.resolve(filePath);
  const rootWithSep = root.endsWith(path.sep) ? root : root + path.sep;
  if (file !== root && !file.startsWith(rootWithSep)) {
    throw new Error("Resolved path escapes project_root (path traversal).");
  }
}

export function resolveAgentMarkdownForShare(
  projectRoot: string,
  agentName: string,
): { sourcePath: string; destBasename: string; availableBasenames: string[] } {
  const agentsDir = path.join(projectRoot, "cursor-agents");
  const { plans, errors } = collectAgentMarkdownPlans(agentsDir);
  if (errors.length > 0) {
    throw new Error(errors.join("; "));
  }
  const want = buildWantDestSet(agentName);
  if (want.size === 0) {
    throw new Error("agent_name is empty.");
  }
  const matches = plans.filter((p) => destMatchesWant(p.destBasename, want));
  const availableBasenames = plans.map((p) => p.destBasename);
  if (matches.length === 0) {
    throw new Error(
      `No agent markdown matched "${agentName}". Available in cursor-agents: ${availableBasenames.length ? availableBasenames.join(", ") : "(none)"}`,
    );
  }
  if (matches.length > 1) {
    throw new Error(
      `Ambiguous agent_name "${agentName}": matches ${matches.map((m) => m.destBasename).join(", ")}. Use a more specific name.`,
    );
  }
  const hit = matches[0];
  assertPathInsideProjectRoot(projectRoot, hit.sourcePath);
  return {
    sourcePath: hit.sourcePath,
    destBasename: hit.destBasename,
    availableBasenames,
  };
}

const SKILL_FOLDER_NAME_RE = /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/;

export function assertValidSkillFolderName(skillName: string): string {
  const s = skillName.trim();
  if (!s) {
    throw new Error("skill_name is empty.");
  }
  if (s.includes("..") || s.includes("/") || s.includes("\\")) {
    throw new Error("skill_name must not contain path segments or '..'.");
  }
  if (!SKILL_FOLDER_NAME_RE.test(s)) {
    throw new Error(
      "skill_name must be a single folder name (letters, numbers, . _ -).",
    );
  }
  return s;
}

export function resolveSkillMarkdownForShare(
  projectRoot: string,
  skillName: string,
): { sourcePath: string; repoPath: string; folder: string } {
  const folder = assertValidSkillFolderName(skillName);
  const sourcePath = path.join(
    projectRoot,
    "cursor-skills",
    folder,
    "SKILL.md",
  );
  assertPathInsideProjectRoot(projectRoot, sourcePath);
  if (!fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
    throw new Error(
      `SKILL.md not found at cursor-skills/${folder}/SKILL.md under project root.`,
    );
  }
  const repoPath = `cursor-skills/${folder}/SKILL.md`;
  return { sourcePath, repoPath, folder };
}
