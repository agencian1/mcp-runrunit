import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { Octokit } from "@octokit/rest";
import { describe, expect, it, vi } from "vitest";
import { shareCursorAgent } from "./share-cursor-github.js";

function mkTmp(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), "mcp-share-gh-"));
}

function mockOctokit(): Octokit {
  return {
    rest: {
      git: {
        getRef: vi.fn().mockResolvedValue({
          data: { object: { sha: "base-sha-1" } },
        }),
        createRef: vi.fn().mockResolvedValue({}),
      },
      repos: {
        createOrUpdateFileContents: vi.fn().mockResolvedValue({}),
      },
      pulls: {
        create: vi.fn().mockResolvedValue({
          data: { html_url: "https://github.com/o/r/pull/99" },
        }),
      },
    },
  } as unknown as Octokit;
}

describe("shareCursorAgent", () => {
  it("calls GitHub APIs and returns pr_url", async () => {
    const root = mkTmp();
    const agents = path.join(root, "cursor-agents");
    fs.mkdirSync(agents, { recursive: true });
    fs.writeFileSync(path.join(agents, "bot.md"), "# Bot", "utf8");

    const octokit = mockOctokit();
    const result = await shareCursorAgent(
      { agent_name: "bot", project_root: root },
      {
        octokit,
        config: {
          token: "test-token",
          owner: "acme",
          repo: "hub",
          baseBranch: "main",
        },
      },
    );

    expect(result.pr_url).toBe("https://github.com/o/r/pull/99");
    expect(result.path).toBe("cursor-agents/bot.md");
    expect(result.bytes).toBeGreaterThan(0);
    expect(result.branch).toMatch(/^feat\/share-agent-/);

    const git = octokit.rest.git;
    expect(git.getRef).toHaveBeenCalledWith({
      owner: "acme",
      repo: "hub",
      ref: "heads/main",
    });
    expect(git.createRef).toHaveBeenCalled();
    expect(octokit.rest.repos.createOrUpdateFileContents).toHaveBeenCalled();
    expect(octokit.rest.pulls.create).toHaveBeenCalled();
  });
});
