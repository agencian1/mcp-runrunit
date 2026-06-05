import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  collectSkillFilesForShare,
  MAX_SHARE_FILE_BYTES,
  resolveAgentMarkdownForShare,
  resolveShareProjectRoot,
  resolveSkillMarkdownForShare,
} from './share-cursor-paths.js';

function mkTmp(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-share-'));
}

describe('resolveShareProjectRoot', () => {
  it('uses explicit project_root when cursor-agents exists', () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, 'cursor-agents'), { recursive: true });
    expect(resolveShareProjectRoot(root, 'cursor-agents')).toBe(path.resolve(root));
  });
});

describe('resolveAgentMarkdownForShare', () => {
  it('matches basename with or without .md', () => {
    const root = mkTmp();
    const agents = path.join(root, 'cursor-agents');
    fs.mkdirSync(agents, { recursive: true });
    fs.writeFileSync(path.join(agents, 'hello.md'), '# hi', 'utf8');
    const a = resolveAgentMarkdownForShare(root, 'hello');
    expect(a.destBasename).toBe('hello.md');
    const b = resolveAgentMarkdownForShare(root, 'hello.md');
    expect(b.sourcePath).toBe(a.sourcePath);
  });

  it('throws when no match', () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, 'cursor-agents'), { recursive: true });
    expect(() => resolveAgentMarkdownForShare(root, 'missing')).toThrow(/No agent markdown/);
  });
});

describe('resolveSkillMarkdownForShare', () => {
  it('resolves SKILL.md under folder', () => {
    const root = mkTmp();
    const dir = path.join(root, 'cursor-skills', 'my-skill');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'SKILL.md'), 'x', 'utf8');
    const r = resolveSkillMarkdownForShare(root, 'my-skill');
    expect(r.repoPath).toBe('cursor-skills/my-skill/SKILL.md');
    expect(r.folder).toBe('my-skill');
  });

  it('rejects path traversal in skill name', () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, 'cursor-skills'), { recursive: true });
    expect(() => resolveSkillMarkdownForShare(root, '../etc')).toThrow(/path segments/);
  });
});

describe('collectSkillFilesForShare', () => {
  it('collects SKILL.md and nested files with correct repo paths', () => {
    const root = mkTmp();
    const dir = path.join(root, 'cursor-skills', 'my-skill');
    fs.mkdirSync(path.join(dir, 'rules'), { recursive: true });
    fs.mkdirSync(path.join(dir, 'templates'), { recursive: true });
    fs.writeFileSync(path.join(dir, 'SKILL.md'), '# skill', 'utf8');
    fs.writeFileSync(path.join(dir, 'rules', 'a.md'), 'rule', 'utf8');
    fs.writeFileSync(path.join(dir, 'templates', 'x.js'), 'tpl', 'utf8');

    const r = collectSkillFilesForShare(root, 'my-skill');
    expect(r.folder).toBe('my-skill');
    expect(r.repoFolderPath).toBe('cursor-skills/my-skill/');
    expect(r.files).toHaveLength(3);
    const paths = r.files.map((f) => f.repoPath).sort();
    expect(paths).toEqual([
      'cursor-skills/my-skill/SKILL.md',
      'cursor-skills/my-skill/rules/a.md',
      'cursor-skills/my-skill/templates/x.js',
    ]);
  });

  it('rejects path traversal in skill name', () => {
    const root = mkTmp();
    fs.mkdirSync(path.join(root, 'cursor-skills'), { recursive: true });
    expect(() => collectSkillFilesForShare(root, '../etc')).toThrow(/path segments/);
  });

  it('rejects file larger than per-file limit', () => {
    const root = mkTmp();
    const dir = path.join(root, 'cursor-skills', 'big');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'SKILL.md'), 'x', 'utf8');
    fs.writeFileSync(path.join(dir, 'huge.bin'), Buffer.alloc(MAX_SHARE_FILE_BYTES + 1));

    expect(() => collectSkillFilesForShare(root, 'big')).toThrow(/exceeds maximum size/);
  });

  it('rejects total size over skill limit', () => {
    const root = mkTmp();
    const dir = path.join(root, 'cursor-skills', 'total-big');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'SKILL.md'), 'x', 'utf8');
    const chunk = Math.floor(MAX_SHARE_FILE_BYTES * 0.9);
    for (let i = 0; i < 5; i++) {
      fs.writeFileSync(path.join(dir, `part-${i}.bin`), Buffer.alloc(chunk));
    }

    expect(() => collectSkillFilesForShare(root, 'total-big')).toThrow(/maximum total size/);
  });

  it('rejects symlinks inside skill folder', () => {
    const root = mkTmp();
    const dir = path.join(root, 'cursor-skills', 'link-skill');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'SKILL.md'), 'x', 'utf8');
    const target = path.join(dir, 'real.txt');
    fs.writeFileSync(target, 'real', 'utf8');
    try {
      fs.symlinkSync(target, path.join(dir, 'linked.txt'));
    } catch {
      // skip on platforms without symlink support
      return;
    }

    expect(() => collectSkillFilesForShare(root, 'link-skill')).toThrow(/Symlinks are not allowed/);
  });
});
