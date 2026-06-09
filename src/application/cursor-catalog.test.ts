import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  discoverAgentsFromFilesystem,
  discoverSkillsFromFilesystem,
  filterSkillEntries,
  loadCursorCatalog,
  matchesCategoryFilter,
  mergeDiscoveredSkills,
  resolveAgentEntry,
  resolveSkillEntry,
  validateCursorCatalog,
} from './cursor-catalog.js';

function mkTmp(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-catalog-'));
}

function writeCatalog(root: string, skills: unknown[], agents: unknown[]): void {
  fs.mkdirSync(path.join(root, 'cursor-skills'), { recursive: true });
  fs.mkdirSync(path.join(root, 'cursor-agents'), { recursive: true });
  const catalog = {
    version: 1,
    taxonomy: {
      platform: ['runrunit'],
      technology: ['typescript'],
      utility: ['workflow', 'quality'],
    },
    skills,
    agents,
  };
  fs.writeFileSync(path.join(root, 'cursor-catalog.json'), JSON.stringify(catalog), 'utf8');
}

describe('loadCursorCatalog', () => {
  it('validates nested skill and agent paths', () => {
    const root = mkTmp();
    const skillDir = path.join(root, 'cursor-skills', 'platforms', 'runrunit', 'demo-skill');
    fs.mkdirSync(skillDir, { recursive: true });
    fs.writeFileSync(path.join(skillDir, 'SKILL.md'), '# demo', 'utf8');

    const agentsDir = path.join(root, 'cursor-agents', 'utilities', 'security');
    fs.mkdirSync(agentsDir, { recursive: true });
    fs.writeFileSync(path.join(agentsDir, 'guard.md'), '# guard', 'utf8');

    writeCatalog(
      root,
      [
        {
          id: 'demo-skill',
          path: 'platforms/runrunit/demo-skill',
          platform: ['runrunit'],
          technology: [],
          utility: ['workflow'],
        },
      ],
      [
        {
          id: 'guard',
          path: 'utilities/security/guard.md',
          platform: [],
          technology: [],
          utility: ['quality'],
        },
      ],
    );

    const { catalog } = loadCursorCatalog(root);
    expect(catalog.skills).toHaveLength(1);
    expect(catalog.agents).toHaveLength(1);
  });

  it('rejects duplicate skill ids', () => {
    const root = mkTmp();
    writeCatalog(
      root,
      [
        {
          id: 'dup',
          path: 'a/dup',
          platform: [],
          technology: [],
          utility: [],
        },
        {
          id: 'dup',
          path: 'b/dup',
          platform: [],
          technology: [],
          utility: [],
        },
      ],
      [],
    );
    expect(() =>
      validateCursorCatalog(
        JSON.parse(fs.readFileSync(path.join(root, 'cursor-catalog.json'), 'utf8')),
        root,
      ),
    ).toThrow(/Duplicate skill id/);
  });

  it('rejects duplicate agent destination basenames', () => {
    const root = mkTmp();
    const a = path.join(root, 'cursor-agents', 'one');
    const b = path.join(root, 'cursor-agents', 'two');
    fs.mkdirSync(a, { recursive: true });
    fs.mkdirSync(b, { recursive: true });
    fs.writeFileSync(path.join(a, 'same.md'), '# a', 'utf8');
    fs.writeFileSync(path.join(b, 'same.md'), '# b', 'utf8');

    writeCatalog(
      root,
      [],
      [
        {
          id: 'one-agent',
          path: 'one/same.md',
          platform: [],
          technology: [],
          utility: [],
        },
        {
          id: 'two-agent',
          path: 'two/same.md',
          platform: [],
          technology: [],
          utility: [],
        },
      ],
    );

    expect(() => loadCursorCatalog(root)).toThrow(/Duplicate agent destination basename/);
  });
});

describe('filterSkillEntries', () => {
  it('AND-filters across dimensions', () => {
    const catalog = {
      version: 1,
      taxonomy: { platform: ['runrunit'], technology: [], utility: ['workflow'] },
      skills: [
        {
          id: 'a',
          path: 'a',
          platform: ['runrunit'],
          technology: [],
          utility: ['workflow'],
        },
        {
          id: 'b',
          path: 'b',
          platform: ['runrunit'],
          technology: [],
          utility: [],
        },
      ],
      agents: [],
    };
    const filtered = filterSkillEntries(catalog, {
      platform: ['runrunit'],
      utility: ['workflow'],
    });
    expect(filtered.map((s) => s.id)).toEqual(['a']);
  });
});

describe('discoverSkillsFromFilesystem', () => {
  it('finds nested skill folders', () => {
    const root = mkTmp();
    const skillDir = path.join(root, 'platforms', 'runrunit', 'nested-skill');
    fs.mkdirSync(skillDir, { recursive: true });
    fs.writeFileSync(path.join(skillDir, 'SKILL.md'), '# x', 'utf8');

    const found = discoverSkillsFromFilesystem(root);
    expect(found).toHaveLength(1);
    expect(found[0].id).toBe('nested-skill');
    expect(found[0].catalogPath).toBe('platforms/runrunit/nested-skill');
  });
});

describe('discoverAgentsFromFilesystem', () => {
  it('finds nested agent markdown files', () => {
    const root = mkTmp();
    const dir = path.join(root, 'utilities', 'security');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'auditor.md'), '# a', 'utf8');

    const { agents, errors } = discoverAgentsFromFilesystem(root);
    expect(errors).toHaveLength(0);
    expect(agents).toHaveLength(1);
    expect(agents[0].id).toBe('auditor');
    expect(agents[0].catalogPath).toBe('utilities/security/auditor.md');
  });
});

describe('resolveSkillEntry', () => {
  it('resolves by catalog path', () => {
    const root = mkTmp();
    const skillDir = path.join(root, 'cursor-skills', 'utilities', 'meta', 'team');
    fs.mkdirSync(skillDir, { recursive: true });
    fs.writeFileSync(path.join(skillDir, 'SKILL.md'), '# team', 'utf8');
    writeCatalog(
      root,
      [
        {
          id: 'team',
          path: 'utilities/meta/team',
          platform: [],
          technology: [],
          utility: [],
        },
      ],
      [],
    );

    const hit = resolveSkillEntry(root, 'team');
    expect(hit.catalogPath).toBe('utilities/meta/team');
    expect(hit.skillDir).toBe(skillDir);
  });
});

describe('resolveAgentEntry', () => {
  it('matches id without extension', () => {
    const root = mkTmp();
    const dir = path.join(root, 'cursor-agents', 'platforms', 'shopify');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'shopify-expert.agent.md'), '# s', 'utf8');
    writeCatalog(
      root,
      [],
      [
        {
          id: 'shopify-expert',
          path: 'platforms/shopify/shopify-expert.agent.md',
          platform: ['runrunit'],
          technology: [],
          utility: [],
        },
      ],
    );

    const hit = resolveAgentEntry(root, 'shopify-expert');
    expect(hit.destBasename).toBe('shopify-expert.agent.md');
    expect(hit.catalogPath).toBe('platforms/shopify/shopify-expert.agent.md');
  });
});

describe('matchesCategoryFilter', () => {
  it('returns true when filter dimension is omitted', () => {
    expect(
      matchesCategoryFilter(
        { platform: [], technology: [], utility: ['workflow'] },
        { platform: ['runrunit'] },
      ),
    ).toBe(false);
    expect(matchesCategoryFilter({ platform: ['runrunit'], technology: [], utility: [] }, {})).toBe(
      true,
    );
  });
});

describe('mergeDiscoveredSkills', () => {
  it('includes orphan skills not in catalog', () => {
    const root = mkTmp();
    const skillsDir = path.join(root, 'cursor-skills');
    const orphanDir = path.join(skillsDir, 'orphan-skill');
    fs.mkdirSync(orphanDir, { recursive: true });
    fs.writeFileSync(path.join(orphanDir, 'SKILL.md'), '# orphan', 'utf8');
    writeCatalog(root, [], []);

    const merged = mergeDiscoveredSkills(null, skillsDir);
    expect(merged.some((s) => s.id === 'orphan-skill' && !s.inCatalog)).toBe(true);
  });
});
