import { describe, expect, it } from 'vitest';
import { validateCommitMessage, validateCommitSubject } from './validate-commit-message.js';

describe('validateCommitSubject', () => {
  it('accepts task number, type and description', () => {
    expect(validateCommitSubject('12345 - feat - adiciona suporte a cupom no carrinho')).toBeNull();
    expect(validateCommitSubject('14751 - fix - corrige seleção de SKU na PDP')).toBeNull();
    expect(validateCommitSubject('14751 - chore - atualiza dependências do manifest')).toBeNull();
    expect(validateCommitSubject('1 - docs - documenta o hook de commit')).toBeNull();
    expect(validateCommitSubject('1 - refactor - extrai validação da mensagem')).toBeNull();
    expect(validateCommitSubject('1 - test - cobre formato da mensagem')).toBeNull();
    expect(validateCommitSubject('1 - perf - reduz leituras no hook')).toBeNull();
  });

  it('rejects empty subject', () => {
    expect(validateCommitSubject('')).toMatch(/vazia/i);
    expect(validateCommitSubject('   ')).toMatch(/vazia/i);
  });

  it('rejects messages outside the skill format', () => {
    expect(validateCommitSubject('feat: add login')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('task14379: remove Cloudinary')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('12345 - feature - adiciona login')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('12345 - Feat - adiciona login')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('12345 - feat -')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('12345 - feat -   ')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('12345-feat-adiciona login')).toMatch(/Formato esperado/);
  });

  it('exempts merge commits', () => {
    expect(validateCommitSubject('Merge branch main into development')).toBeNull();
    expect(validateCommitSubject('Merge pull request #19 from org/branch')).toBeNull();
  });

  it('exempts revert commits', () => {
    expect(validateCommitSubject('Revert "12345 - feat - adiciona cupom"')).toBeNull();
  });

  it('exempts fixup and squash commits', () => {
    expect(validateCommitSubject('fixup! 12345 - feat - mensagem anterior')).toBeNull();
    expect(validateCommitSubject('squash! 12345 - feat - mensagem anterior')).toBeNull();
    expect(validateCommitSubject('amend! 12345 - feat - mensagem anterior')).toBeNull();
  });
});

describe('validateCommitMessage', () => {
  it('validates only the first line', () => {
    expect(
      validateCommitMessage('12345 - feat - adiciona cupom\n\nCorpo opcional do commit.'),
    ).toBeNull();
  });
});
