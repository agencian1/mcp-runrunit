import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  buildPrBody,
  buildShareAgentPr,
  extractPrBodyTemplate,
  formatPrTitle,
  getPrTemplate,
  readPrTemplateRaw,
} from './pr-template.js';

function writeTemplate(root: string): void {
  fs.writeFileSync(
    path.join(root, 'PR_template.md'),
    `# Título do PR: (Ex: task0123: feat: Adiciona login social com Google)

## 🎯 Tipo de Mudança
> Marque o tipo de mudança que este PR introduz

- [ ] 🐛 **Correção de bug** (alteração que corrige um problema)
- [ ] ✨ **Novo recurso** (alteração que adiciona uma funcionalidade)
- [ ] ♻️ **Refatoração** (uma alteração de código que não corrige um bug nem adiciona um recurso)
- [ ] 📖 **Documentação** (atualizações na documentação)
- [ ] 🎨 **Alteração de layout** (Mudança no layout sem alterar o comportamento de uma funcionalidade existente)
---

## 📝 Descrição
> Descreva suas mudanças em detalhes. Qual o problema que está sendo resolvido? Qual a solução implementada? _Se aplicável, adicione o contexto que motivou esta mudança._

---

## 📸 Evidências Visuais (Se aplicável)
> Adicione capturas de tela, GIFs ou vídeos para demonstrar as mudanças de UI/UX.

**Antes:**
![Antes](link-da-imagem-antes.png)

**Depois:**
![Depois](link-da-imagem-depois.png)

---

## ✅ Checklist de Qualidade

- [ ] Meu código segue as diretrizes deste projeto.
- [ ] Realizei uma revisão do meu próprio código.
- [ ] Testei o fluxo de navegação.
- [ ] Comentei meu código nas áreas de difícil compreensão.
- [ ] Minhas alterações não geram novos warnings.

---

## 🔗 Referências
> Adicione links para tarefas, épicos ou outras referências.

- **Tarefa:** [TASK-0123](https://link-da-tarefa.com)
- **Design no Figma:** [Link para o design](https://figma.com/...)
- **Documento:** [Link](https://...)
`,
    'utf8',
  );
}

describe('pr-template', () => {
  it('reads and extracts body from PR_template.md', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pr-template-'));
    writeTemplate(root);

    const raw = readPrTemplateRaw(root);
    const body = extractPrBodyTemplate(raw);

    expect(raw).toContain('task0123: feat:');
    expect(body).toContain('## 🎯 Tipo de Mudança');
    expect(body).not.toContain('# Título do PR');
  });

  it('formats title with and without task id', () => {
    expect(
      formatPrTitle({
        taskId: 'task0123',
        type: 'feat',
        description: 'Adiciona login social com Google',
      }),
    ).toBe('task0123: feat: Adiciona login social com Google');

    expect(formatPrTitle({ type: 'fix', description: 'Corrige timeout na API' })).toBe(
      'fix: Corrige timeout na API',
    );
  });

  it('builds PR body with selected change type and description', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pr-template-'));
    writeTemplate(root);

    const body = buildPrBody({
      changeType: 'feature',
      description: 'Implementa compartilhamento de agentes.',
      includeVisualEvidence: false,
      projectRoot: root,
    });

    expect(body).toContain('- [x] ✨ **Novo recurso**');
    expect(body).toContain('- [ ] 🐛 **Correção de bug**');
    expect(body).toContain('Implementa compartilhamento de agentes.');
    expect(body).not.toContain('## 📸 Evidências Visuais');
    expect(body).toContain('## ✅ Checklist de Qualidade');
  });

  it('builds share agent PR using template', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pr-template-'));
    writeTemplate(root);

    const { title, body } = buildShareAgentPr({
      repoPath: 'cursor-agents/bot.md',
      correlationId: 'corr-1',
      destBasename: 'bot.md',
      projectRoot: root,
    });

    expect(title).toBe('feat: Partilha agente bot.md');
    expect(body).toContain('- [x] ✨ **Novo recurso**');
    expect(body).toContain('corr-1');
    expect(body).toContain('`cursor-agents/bot.md`');
  });

  it('returns filled template via getPrTemplate', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pr-template-'));
    writeTemplate(root);

    const result = getPrTemplate({
      projectRoot: root,
      changeType: 'docs',
      description: 'Atualiza README.',
      type: 'docs',
      titleDescription: 'Atualiza README',
      taskId: 'task9999',
    });

    expect(result.title).toBe('task9999: docs: Atualiza README');
    expect(result.body).toContain('- [x] 📖 **Documentação**');
    expect(result.body).toContain('Atualiza README.');
  });
});
