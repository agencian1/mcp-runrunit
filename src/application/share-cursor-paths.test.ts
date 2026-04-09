import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  resolveAgentMarkdownForShare,
  resolveShareProjectRoot,
  resolveSkillMarkdownForShare,
} from "./share-cursor-paths.js";

function mkTmp(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), "mcp-share-"));
}

describe("resolveShareProjectRoot", () => {
  it("uses explicit project_root when cursor-agents exists", () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, "cursor-agents"), { recursive: true });
    expect(resolveShareProjectRoot(root, "cursor-agents")).toBe(
      path.resolve(root),
    );
  });
});

describe("resolveAgentMarkdownForShare", () => {
  it("matches basename with or without .md", () => {
    const root = mkTmp();
    const agents = path.join(root, "cursor-agents");
    fs.mkdirSync(agents, { recursive: true });
    fs.writeFileSync(path.join(agents, "hello.md"), "# hi", "utf8");
    const a = resolveAgentMarkdownForShare(root, "hello");
    expect(a.destBasename).toBe("hello.md");
    const b = resolveAgentMarkdownForShare(root, "hello.md");
    expect(b.sourcePath).toBe(a.sourcePath);
  });

  it("throws when no match", () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, "cursor-agents"), { recursive: true });
    expect(() =>
      resolveAgentMarkdownForShare(root, "missing"),
    ).toThrow(/No agent markdown/);
  });
});

describe("resolveSkillMarkdownForShare", () => {
  it("resolves SKILL.md under folder", () => {
    const root = mkTmp();
    const dir = path.join(root, "cursor-skills", "my-skill");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "SKILL.md"), "x", "utf8");
    const r = resolveSkillMarkdownForShare(root, "my-skill");
    expect(r.repoPath).toBe("cursor-skills/my-skill/SKILL.md");
    expect(r.folder).toBe("my-skill");
  });

  it("rejects path traversal in skill name", () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, "cursor-skills"), { recursive: true });
    expect(() =>
      resolveSkillMarkdownForShare(root, "../etc"),
    ).toThrow(/path segments/);
  });
});
