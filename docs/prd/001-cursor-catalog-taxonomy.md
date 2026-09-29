# PRD: Cursor catalog and taxonomy for mcp-runrunit skills and agents

## 1. Executive Summary

We will introduce `cursor-catalog.json` as the machine-readable source of truth for bundled Cursor skills and agents, reorganize repo folders into a nested layout by primary category, and extend MCP tools so teams can **discover** and **install filtered subsets** (e.g. all Runrun.it platform skills) while keeping **stable public ids** (`comentar-task-runrunit`, not `platforms/runrunit/...`). Local Cursor install paths remain flat (`~/.cursor/skills/{id}/`, `~/.cursor/agents/{basename}.md`). This reduces maintainer confusion, fixes README drift, and enables agents and developers to choose the right assets without manual table maintenance.

## 2. Problem Statement

### Who has this problem?

- **Package maintainers** adding or moving skills/agents in `mcp-runrunit`.
- **Developers** syncing team skills via `runrunit_install_cursor_skills` / `runrunit_install_cursor_agents`.
- **Cursor agents** deciding which skill to invoke for a task (Runrun.it workflow vs React performance vs security review).

### What is the problem?

There is no formal taxonomy or catalog. Assets sit in a flat or ad hoc folder structure. Discovery code only scans the first level of `cursor-skills/`. Documentation is hand-written and out of date. Install and share tools cannot filter by platform or utility.

### Why is it painful?

- **Discovery:** Finding “all Runrun.it-related” assets requires reading the README or grepping the repo.
- **Maintenance:** Moving or adding a skill risks breaking share paths hardcoded as `cursor-skills/{skill_name}/`.
- **Scale:** As skills grow by platform (Runrun.it, GitHub, Shopify) and concern (evidence, quality, security), a flat root becomes unreadable.
- **Agent ergonomics:** No MCP tool returns structured metadata (path, categories, description) for programmatic selection.

### Evidence

- **Inventory today:** 8 skills and 7 agents under flat `cursor-skills/` and `cursor-agents/` (June 2026).
- **README drift:** `performance-optimizer` agent listed in README but not on disk; `security-auditor.md` on disk but README says `security-reviewer`.
- **Code constraint:** `install-cursor-skills.ts` discovers only first-level directories with `SKILL.md`.
- **Share constraint:** `share-cursor-paths.ts` assumes `cursor-skills/{name}/` at tree root.

## 3. Target Users & Personas

### Primary: Package maintainer

- **Goals:** Add skills/agents in the right place; keep catalog and disk in sync; ship share PRs to correct paths.
- **Pain:** Unclear where new Runrun.it vs GitHub skills belong; no validation that README matches disk.

### Secondary: Developer installing team assets

- **Goals:** Install only what they need (e.g. Runrun.it workflow skills) on a new machine via MCP.
- **Pain:** Must know exact `skill_names` list or install everything.

### Secondary: Cursor agent (MCP client)

- **Goals:** List catalog, read descriptions, pick install set by category before calling install with `dry_run: true`.
- **Pain:** No structured list tool; relies on user rules or README excerpts.

### Jobs-to-be-done

- “When onboarding, I want Runrun.it skills only, so I don’t clutter my global Cursor skills.”
- “When adding a Shopify agent, I want one catalog entry and a clear folder, so share PRs land in the right path.”
- “When acting as an agent, I want to query the catalog, so I choose the correct skill without guessing ids.”

## 4. Strategic Context

### Business goals

- `mcp-runrunit` is the shared npm package for Runrun.it MCP plus team Cursor assets.
- Growth is expected along **platform** lines (Runrun.it, GitHub, Shopify, Cursor meta) and **utility** lines (workflow, evidence, quality, security).

### Why now?

- Enough bundled assets (15 total) that manual README tables and flat folders are already drifting.
- Install/share tools are stable; extending them with catalog resolution is lower risk than splitting into multiple npm packages.

### Competitive / alternative context

- Cursor itself does not expose categories in the skills UI; our taxonomy is for **repo organization** and **MCP discovery**, not IDE grouping.

## 5. Solution Overview

### 5.1 Catalog file

`cursor-catalog.json` at package root (included in npm `files`):

- `version`, `taxonomy` (allowed values per dimension).
- `skills[]` and `agents[]` with `id`, `path` (relative under `cursor-skills/` or `cursor-agents/`), and category arrays: `platform`, `technology`, `utility`.

Public **id** = leaf name (unchanged MCP API). **path** = nested repo location (e.g. `platforms/runrunit/comentar-task-runrunit`).

### 5.2 Nested repo layout (target)

**Skills** (primary axis examples):

```
cursor-skills/
  platforms/runrunit/comentar-task-runrunit/
  platforms/github/create-pr-github/
  technologies/react/react-best-practices/
  utilities/evidence/registrar-evidencias/
  utilities/quality/code-reviewer/
  utilities/quality/setup-code-quality/
  utilities/meta/install-cursor-team-skills/
```

**Agents:**

```
cursor-agents/
  platforms/shopify/shopify-expert.agent.md
  technologies/typescript/kieran-typescript-reviewer.md
  utilities/security/security-auditor.md
  utilities/accessibility/toph.agent.md
  utilities/product/prd.agent.md
  utilities/mentoring/mentor.agent.md
  utilities/documentation/context-bridge.agent.md
```

### 5.3 Application module

`src/application/cursor-catalog.ts`:

- `loadCursorCatalog(projectRoot)` — read + validate JSON.
- `resolveSkillEntry(id)` / `resolveAgentEntry(id)` — repo path, categories, dest basename for agents.
- `filterEntries({ platform?, technology?, utility? })` — AND across provided dimensions.
- `discoverSkillsFromFilesystem()` / agent equivalent — recursive fallback for orphans.

### 5.4 MCP surface

| Tool                                                          | Change                                                                                                                                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runrunit_list_cursor_catalog`                                | **New.** Params: `kind` (`skills` \| `agents` \| `all`), optional category filters. Returns `id`, `path`, categories, description (from YAML frontmatter when present). |
| `runrunit_install_cursor_skills`                              | Optional `categories: { platform?, technology?, utility? }`. Intersect with `skill_names` when both set.                                                                |
| `runrunit_install_cursor_agents`                              | Same `categories` extension.                                                                                                                                            |
| `runrunit_share_cursor_skill` / `runrunit_share_cursor_agent` | Resolve repo path from catalog; share nested paths. `skill_name` / `agent_name` still id-only.                                                                          |

### 5.5 User flow (developer)

1. Call `runrunit_list_cursor_catalog` with `platform: ["runrunit"]`.
2. Call `runrunit_install_cursor_skills` with `categories: { platform: ["runrunit"] }`, `dry_run: true`.
3. Review `copied` / `skipped`; call again with `dry_run: false`.

### 5.6 Architecture reference

Detailed decision record: `docs/adr/0001-cursor-catalog-taxonomy.md`.

## 6. Success Metrics

### Primary metric

**Time to correct install set** — developer or agent can obtain the right skill list in one catalog call plus one dry-run install, without reading README tables.

Target: catalog + dry-run path documented and used as the recommended flow in `install-cursor-team-skills` skill.

### Secondary metrics

- **Catalog coverage:** 100% of bundled skills/agents have catalog entries after migration (orphans = 0 in release).
- **Filtered installs:** track adoption via optional logging or maintainer feedback (% installs using `categories` vs full install).
- **API stability:** zero regressions for existing `skill_name` / `agent_name` parameters in share and install.

### Guardrail metrics

- Install and share success rate unchanged for explicit `skill_names` / `agent_names` (backward compatibility).
- No increase in failed share PRs due to path resolution errors (covered by tests).

### README accuracy

After release, agent table matches disk (remove `performance-optimizer` until added; fix `security-auditor` naming).

## 7. User Stories & Requirements

### Epic hypothesis

We believe that a validated `cursor-catalog.json`, nested repo folders, and `runrunit_list_cursor_catalog` will reduce maintainer friction and let teams install platform-specific subsets because discovery and paths are centralized—without breaking existing MCP id parameters.

### US-001: List catalog

**As a** Cursor agent, **I want** to list skills and agents with categories and descriptions **so that** I can choose what to install.

**Acceptance criteria:**

- [ ] MCP tool `runrunit_list_cursor_catalog` registered in `app.ts`.
- [ ] Optional `kind`, `platform`, `technology`, `utility` filters; AND logic across dimensions.
- [ ] Each entry includes `id`, `path`, category arrays, and `description` when available.

### US-002: Install skills by category

**As a** developer, **I want** to install only skills tagged `platform: runrunit` **so that** my global skills folder stays minimal.

**Acceptance criteria:**

- [ ] `runrunit_install_cursor_skills` accepts `categories` object.
- [ ] With `categories` only, installs all matching catalog skills.
- [ ] With `categories` + `skill_names`, installs intersection.
- [ ] Destination remains `~/.cursor/skills/{id}/` (leaf id).
- [ ] `dry_run: true` lists planned copies without writing.

### US-003: Install agents by category

**As a** developer, **I want** the same category filters for agents **so that** I can install e.g. security and a11y agents only.

**Acceptance criteria:**

- [ ] `runrunit_install_cursor_agents` accepts `categories`.
- [ ] Flat destination `~/.cursor/agents/{destBasename}.md` preserved.
- [ ] Catalog validation rejects duplicate agent dest basenames.

### US-004: Share skill to nested path

**As a** maintainer, **I want** `runrunit_share_cursor_skill` to open a PR under the catalog path **so that** repo layout stays consistent.

**Acceptance criteria:**

- [ ] Share writes to `cursor-skills/{entry.path}/` (full folder).
- [ ] `skill_name` parameter remains leaf id (no slashes).
- [ ] Existing size/count limits unchanged.

### US-005: Share agent to nested path

**As a** maintainer, **I want** agent share to use `cursor-agents/{entry.path}` **so that** agents align with taxonomy folders.

**Acceptance criteria:**

- [ ] Share resolves agent by id via catalog.
- [ ] PR contains single file at nested path.

### US-006: Catalog validation in CI

**As a** maintainer, **I want** catalog validation tests **so that** broken paths or duplicate ids fail the build.

**Acceptance criteria:**

- [ ] `cursor-catalog.test.ts` covers validation, filters, duplicate id, missing `SKILL.md`, agent basename collision.
- [ ] Optional JSON Schema file for catalog shape.

### US-007: Orphan filesystem fallback

**As a** maintainer, **I want** skills on disk without catalog entries to still be installable with a warning **so that** migration can be gradual.

**Acceptance criteria:**

- [ ] Recursive discovery finds folders with `SKILL.md` not in catalog.
- [ ] `dry_run` / result `skipped` or warnings mention orphan status.
- [ ] Install-all does not fail solely due to orphans.

### Constraints

- Cursor does not support nested install destinations; ids must remain basename/leaf.
- `mcpName` in `package.json` unchanged (same MCP registration).
- GitHub credentials only via MCP host env (not tool parameters).

## 8. Out of Scope

- **Grouped skills UI in Cursor IDE** — taxonomy is for repo + MCP only.
- **Separate npm packages per platform** — deferred; single package remains.
- **Auto-generated README from catalog in v1** — optional `npm run catalog:docs` may follow; initial release may update README manually.
- **Changing public skill/agent ids** — ids stay leaf names; no `platforms/runrunit/...` in MCP params.
- **Multi-primary physical folders** — one primary path per entry; extra categories live only in catalog tags.

## 9. Dependencies & Risks

### Dependencies

- Existing install/share modules: `install-cursor-skills.ts`, `install-cursor-agents.ts`, `share-cursor-paths.ts`, `share-cursor-github.ts`.
- MCP registration in `src/adapters/driving/app.ts`.
- `package.json` `files` field must include `cursor-catalog.json`.

### Risks and mitigations

| Risk                                              | Mitigation                                                |
| ------------------------------------------------- | --------------------------------------------------------- |
| Agent basename collision in nested layout         | Catalog validation at load; test fixture with nested tree |
| Breaking GitHub paths for open PRs / bookmarks    | CHANGELOG + minor/major bump; document migration          |
| README/catalog drift after release                | US-006 CI validation; update README in same release       |
| Wrong primary folder when skill has multiple tags | Document rule in catalog README; open question below      |
| Orphan skills confuse consumers                   | Prefer catalog entries; warnings on orphan install        |

### Migration sequence (engineering)

1. ADR + PRD review (this document gate).
2. Add `cursor-catalog.json` + `cursor-catalog.ts` with flat paths initially.
3. Recursive discovery + tests with nested fixtures.
4. Move files to nested layout; update catalog paths.
5. Wire share/install + new list tool.
6. Update README, `AGENTS.md`, `install-cursor-team-skills` skill, CHANGELOG.

## 10. Open Questions

1. **Primary folder axis** when a skill spans multiple categories (e.g. Runrun.it + workflow): default to `platforms/{platform}` when any platform tag exists, else `utilities/{utility}`?
2. **Orphan policy after v1:** warn only, or fail CI if disk asset missing from catalog?
3. **Frontmatter sync:** enforce YAML fields on all assets or keep optional with catalog-only warnings?
4. **`performance-optimizer` agent:** add to bundle and catalog, or remove from README only?
5. **JSON Schema:** ship `cursor-catalog.schema.json` in v1 or add in follow-up?

## 11. References

- ADR: `docs/adr/0001-cursor-catalog-taxonomy.md`
- Plan: `.cursor/plans/skills_agents_taxonomy_8153206a.plan.md`
- Install: `src/application/install-cursor-skills.ts`, `src/application/install-cursor-agents.ts`
- Share: `src/application/share-cursor-paths.ts`, `src/application/share-cursor-github.ts`
- Team install skill: `cursor-skills/install-cursor-team-skills/SKILL.md`
- PRD style reference: `docs/PRD-discord-integration.md`
