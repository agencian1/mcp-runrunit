## Learned User Preferences

- Prefer git commit messages and GitHub PR bodies without marketing or footer lines such as "Made with..."; keep commits and descriptions minimal.
- Use npm (not pnpm) for installing dependencies and running scripts in this repository.
- When the user wants to share agents or skills with the team (e.g. compartilhar, dividir com o time, share with the team), use `runrunit_share_cursor_agent` or `runrunit_share_cursor_skill` to propose changes via GitHub PR; use `runrunit_install_cursor_agents` and `runrunit_install_cursor_skills` only for copying bundled assets to the local machine.

## Learned Workspace Facts

- Local Cursor custom agents are stored as a flat list of Markdown files under `~/.cursor/agents/` (filenames may be `*.md` or `*.agent.md`). Tooling that installs bundled agents should copy into that directory and preserve each source file's basename, not create per-agent subfolders.
- For `mcp-runrunit`, `package.json` `mcpName` is the MCP stable public identifier: changing it implies treating the integration as a new MCP and re-registering. Transferring the repository to an organization does not by itself require changing `mcpName` if the identifier should stay the same.
- GitHub credentials for MCP features that open PRs (for example `GITHUB_TOKEN` and related repo env vars) must be supplied only via the MCP host environment, not as tool parameters, and must not appear in user-facing responses or logs.
