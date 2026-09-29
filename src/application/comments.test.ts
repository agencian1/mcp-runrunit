import { describe, expect, it } from 'vitest';
import { buildTaskComment, type TaskCommentSections } from './comments.js';

const validSections: TaskCommentSections = {
  escopo: 'correção no checkout.',
  como_foi_feito: 'Atualizei o código X do arquivo xyz.ts',
  arquivos_configuracoes: 'src/checkout/xyz.ts',
  como_validar: '1. Acesse o link de preview.\n2. Navegue até a sessão Y.',
  links: 'https://github.com/org/repo/pull/1',
};

describe('buildTaskComment', () => {
  it('monta o texto na ordem e com os rótulos do template', () => {
    expect(buildTaskComment(validSections)).toBe(
      [
        'Escopo:',
        'correção no checkout.',
        '',
        'Como foi feito:',
        'Atualizei o código X do arquivo xyz.ts',
        '',
        'Quais arquivos/configurações foram afetadas:',
        'src/checkout/xyz.ts',
        '',
        'Como validar:',
        '1. Acesse o link de preview.',
        '2. Navegue até a sessão Y.',
        '',
        'Links:',
        'https://github.com/org/repo/pull/1',
      ].join('\n'),
    );
  });

  it('anexa Antes e Depois no final de Links', () => {
    const text = buildTaskComment(validSections, {
      url_antes: ' https://exemplo/antes.png ',
      url_depois: 'https://exemplo/depois.png',
    });

    expect(
      text.endsWith(
        [
          'Links:',
          'https://github.com/org/repo/pull/1',
          'Antes: https://exemplo/antes.png',
          'Depois: https://exemplo/depois.png',
        ].join('\n'),
      ),
    ).toBe(true);
  });

  it('anexa só a evidência que foi informada', () => {
    const text = buildTaskComment(validSections, { url_depois: 'https://exemplo/depois.png' });
    expect(text).toContain('Depois: https://exemplo/depois.png');
    expect(text).not.toContain('Antes:');
  });

  it('aceita URL crua com fragmento', () => {
    expect(() =>
      buildTaskComment({
        ...validSections,
        links: 'https://preview.exemplo/checkout#pagamento',
      }),
    ).not.toThrow();
  });

  it('rejeita seção vazia', () => {
    expect(() => buildTaskComment({ ...validSections, escopo: '   ' })).toThrow(
      /Seção obrigatória vazia: Escopo/,
    );
  });

  it('rejeita Markdown', () => {
    expect(() =>
      buildTaskComment({ ...validSections, escopo: '**correção** no checkout' }),
    ).toThrow(/negrito/);
    expect(() => buildTaskComment({ ...validSections, como_foi_feito: '# título' })).toThrow(
      /título com #/,
    );
    expect(() =>
      buildTaskComment({ ...validSections, arquivos_configuracoes: 'arquivo `xyz.ts`' }),
    ).toThrow(/crase/);
    expect(() =>
      buildTaskComment({
        ...validSections,
        links: '[PR](https://github.com/org/repo/pull/1)',
      }),
    ).toThrow(/link Markdown/);
  });

  it('rejeita como validar com um único passo', () => {
    expect(() =>
      buildTaskComment({ ...validSections, como_validar: '1. Acesse o link de preview.' }),
    ).toThrow(/pelo menos dois passos/);
  });
});
