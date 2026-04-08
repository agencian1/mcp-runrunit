# Changelog

All notable changes to the mcp-runrunit package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.4.0] - 2026-04-08

### Added
- Packaged directory `cursor-agents/` and MCP tool `runrunit_install_cursor_agents` to copy agent markdown files to `~/.cursor/agents` (global) or `<project_root>/.cursor/agents`, with optional `dry_run`, `agent_names`, `source_dir`, and `target` / `project_root`. Basenames are preserved (flat layout).

## [1.3.1] - 2026-04-08
- Move repository for organization Github.

## [1.3.0] - 2026-04-07

### Added
- MCP tool `runrunit_install_cursor_skills` to copy skills from the package `cursor-skills/` to `~/.cursor/skills` (global) or `<project_root>/.cursor/skills`, with optional `dry_run`, `skill_names`, `source_dir`, and `target`/`project_root`.
- Packaged skill `install-cursor-team-skills` pointing agents to that tool instead of manual shell copies.

## [1.2.2] - 2026-03-16
### Update
- Update readme for use this MCP and list tools with descriptions


## [1.2.0] - 2026-03-12

### Added
- Discord application helpers to resolve default guild and get or create a per-client text channel.
- Task application helpers for creating tasks, listing subtasks, starting assignments, listing board stages, and moving tasks between stages.

## [1.1.2] - 2026-03-12

### Fixed
- Release workflow: explicit `.npmrc` in package directory so npm publish authenticates correctly (fixes ENEEDAUTH).
- Release workflow: Node 24 LTS, `id-token: write` for provenance.

### Changed
- Release workflow: separate step for `npm pkg fix`; publish with `--provenance --access public`.

## [1.1.1] - 2026-03-11

### Fixed
- Remove unnecessary whitespace in `updateTask` (tasks application layer).
- package.json: normalize `repository.url` to `git+https://...` and bin path for npm publish.

### Changed
- Release workflow: add NPM_TOKEN check and `npm pkg fix` before publish; document secret requirement.
- Release workflow: trigger on changes to `.github/workflows/release-mcp-runrunit.yml` in addition to `mcp-runrunit/**`.
- Deploy skill: document that publish runs on merge to main (version/changelog only).

## [1.1.0] - 2025-03-10

### Added
- Tool `runrunit_project_detect_platform` to detect platform and dev command from task tags (e.g. node, react, python).
- Tool `runrunit_list_projects` with optional filters (client_id, project_group_id, is_closed, is_active, page, limit).
- Tools `runrunit_list_task_filters`, `runrunit_list_board_stages`, `runrunit_create_workflow`, `runrunit_assignment_play` for workflow and board stages.
- Support for `link_da_branch` in task updates (custom field "Link da branch").
- Cursor skills: comentar-task-runrunit, code-reviewer; docs for evidências + PR flow.
- Optional Cloudinary env vars (CLOUDINARY_*) for image upload in skills.
- Documentation: Fluxos-Tasks-MCP-Runrunit.md, Workflow-Config-Exemplo.md, .env.example.

### Changed
- Rules: project detect platform, link_da_branch usage, and flow for commenting with evidence + PR link.
- README: npx usage, Cloudinary config, Cursor skills section, publish/registry instructions.

## [1.0.1] - 2025-03-01

### Added
- Initial MCP server for Runrun.it API (Tasks, Comments, Projects).
