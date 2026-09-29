import { describe, expect, it } from 'vitest';
import { parseCommitLog, parsePorcelainZ } from './git-workspace.js';

describe('parsePorcelainZ', () => {
  it('reads modified, untracked and renamed paths', () => {
    const raw = [' M src/app.ts', '?? .env', 'R  src/old.ts', 'src/new.ts'].join('\0') + '\0';

    expect(parsePorcelainZ(raw)).toEqual([
      { path: 'src/app.ts', status: ' M', untracked: false },
      { path: '.env', status: '??', untracked: true },
      { path: 'src/new.ts', status: 'R ', untracked: false },
    ]);
  });
});

describe('parseCommitLog', () => {
  it('reads subjects and file names separated by record markers', () => {
    const raw = [
      '\x1eabc1234\x1f10 - feat - adiciona cupom',
      'src/domain/coupon.ts',
      '\x1edef5678\x1f10 - fix - corrige preco',
      'src/ui/Price.tsx',
      '',
    ].join('\n');

    expect(parseCommitLog(raw)).toEqual([
      {
        sha: 'abc1234',
        subject: '10 - feat - adiciona cupom',
        files: ['src/domain/coupon.ts'],
      },
      {
        sha: 'def5678',
        subject: '10 - fix - corrige preco',
        files: ['src/ui/Price.tsx'],
      },
    ]);
  });
});
