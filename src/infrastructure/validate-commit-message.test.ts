import { describe, expect, it } from 'vitest';
import { validateCommitMessage, validateCommitSubject } from './validate-commit-message.js';

describe('validateCommitSubject', () => {
  it('accepts task ID with description', () => {
    expect(
      validateCommitSubject('task14379: remove Cloudinary and map branch link to custom_12'),
    ).toBeNull();
    expect(validateCommitSubject('TASK123: descrição da alteração')).toBeNull();
  });

  it('rejects empty subject', () => {
    expect(validateCommitSubject('')).toMatch(/vazia/i);
    expect(validateCommitSubject('   ')).toMatch(/vazia/i);
  });

  it('rejects missing task prefix', () => {
    expect(validateCommitSubject('feat: add login')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('remove Cloudinary')).toMatch(/Formato esperado/);
  });

  it('rejects task without description', () => {
    expect(validateCommitSubject('task14379:')).toMatch(/Formato esperado/);
    expect(validateCommitSubject('task14379: ')).toMatch(/Formato esperado/);
  });

  it('exempts merge commits', () => {
    expect(validateCommitSubject('Merge branch main into development')).toBeNull();
    expect(validateCommitSubject('Merge pull request #19 from org/branch')).toBeNull();
  });

  it('exempts revert commits', () => {
    expect(validateCommitSubject('Revert "task14379: remove Cloudinary"')).toBeNull();
  });

  it('exempts fixup and squash commits', () => {
    expect(validateCommitSubject('fixup! task14379: previous message')).toBeNull();
    expect(validateCommitSubject('squash! task14379: previous message')).toBeNull();
    expect(validateCommitSubject('amend! task14379: previous message')).toBeNull();
  });
});

describe('validateCommitMessage', () => {
  it('validates only the first line', () => {
    expect(validateCommitMessage('task14379: descrição\n\nCorpo opcional do commit.')).toBeNull();
  });
});
