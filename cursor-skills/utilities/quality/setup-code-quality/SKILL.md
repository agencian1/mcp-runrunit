---
name: setup-code-quality
description: >-
  Instala e configura Husky, lint-staged, ESLint, Prettier e .vscode para validar
  código antes de commit e push. Usar quando o usuário pedir husky, eslint, prettier,
  lint-staged, pre-commit, pre-push, padronizar editor, .vscode ou qualidade de código.
disable-model-invocation: false
---

# Setup de qualidade de código (Husky, ESLint, Prettier, VS Code)

Padroniza validação local e editor em projetos Node/JS/TS. **Sempre usar npm** (não pnpm/yarn).

## Checklist de progresso

```
- [ ] 1. Detectar stack e configs existentes
- [ ] 2. Instalar dependências
- [ ] 3. Criar ESLint (flat config)
- [ ] 4. Criar Prettier e .editorconfig
- [ ] 5. Configurar Husky + lint-staged
- [ ] 6. Criar .vscode/
- [ ] 7. Adicionar scripts no package.json
- [ ] 8. Validar (lint, format, hooks)
```

## 1. Detectar stack

Ler antes de instalar:

- `package.json` — `type`, scripts (`test`, `build`, `prepare`), `dependencies` / `devDependencies`
- `tsconfig.json`, `next.config.*`, `vite.config.*`
- Arquivos existentes: `.eslintrc*`, `eslint.config.*`, `.husky/`, `.vscode/`

**Não sobrescrever** configs existentes sem confirmar com o usuário. Se já houver setup parcial, **estender** em vez de substituir.

| Sinal | Pacotes extras | Template ESLint |
|-------|----------------|-----------------|
| Só JavaScript | (base) | [eslint.config.js](templates/eslint.config.js) |
| TypeScript | `typescript-eslint` | [eslint.config.node-ts.js](templates/eslint.config.node-ts.js) |
| React (`react` em deps) | `eslint-plugin-react`, `eslint-plugin-react-hooks` | [eslint.config.react.js](templates/eslint.config.react.js) |
| Next.js (`next` em deps) | `@next/eslint-plugin-next` | [eslint.config.next.js](templates/eslint.config.next.js) |

Prioridade: **Next > React > TypeScript > JavaScript**. Next já cobre TS; não misturar template React com Next.

## 2. Instalar dependências

Pacotes base (sempre):

```bash
npm install -D husky lint-staged eslint prettier eslint-config-prettier @eslint/js
```

Pacotes condicionais:

```bash
# TypeScript (ou Next/React com TS)
npm install -D typescript-eslint

# React (sem Next)
npm install -D eslint-plugin-react eslint-plugin-react-hooks

# Next.js
npm install -D @next/eslint-plugin-next
```

Inicializar Husky:

```bash
npx husky init
```

## 3. ESLint (flat config)

- Projeto ESM (`"type": "module"`): copiar template adaptado para `eslint.config.js`
- Projeto CJS (sem `"type": "module"`): usar `eslint.config.mjs` com o mesmo conteúdo

Regras:

- `eslint-config-prettier` **sempre por último** no array de configs
- Ajustar `ignores` aos diretórios de build do projeto (`dist/`, `.next/`, `out/`, etc.)
- Manter setup **básico** — não adicionar regras enterprise sem pedido

## 4. Prettier e EditorConfig

Copiar da pasta [templates/](templates/):

- [`.prettierrc`](templates/.prettierrc)
- [`.prettierignore`](templates/.prettierignore) — adaptar ignores ao projeto
- [`.editorconfig`](templates/.editorconfig) — recomendado para alinhar editores sem VS Code

## 5. Husky e lint-staged

### Hooks

| Arquivo | Conteúdo | Quando |
|---------|----------|--------|
| `.husky/pre-commit` | `npx lint-staged` | sempre |
| `.husky/commit-msg` | `node scripts/validate-commit-msg.mjs "$1"` | validar formato `task<ID>: descrição` |
| `.husky/pre-push` | `npm test` | só se `package.json` tiver script `test` não vazio |

Em Unix, garantir hooks executáveis: `chmod +x .husky/pre-commit` (e `pre-push` / `commit-msg` se criados).

Copiar [`scripts/validate-commit-msg.mjs`](../../../../scripts/validate-commit-msg.mjs) e [`src/infrastructure/validate-commit-message.ts`](../../../../src/infrastructure/validate-commit-message.ts) para o repositório alvo (ou recriar com a mesma lógica). O hook depende do build (`dist/infrastructure/validate-commit-message.js`); incluir `npm run build` no `prepare` se ainda não existir.

### lint-staged no package.json

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml,css,scss}": ["prettier --write"]
}
```

### Mesclar script prepare

Se já existir `prepare`, **não apagar**. Concatenar com `&&`:

```json
"prepare": "husky && npm run build"
```

Se não existir, Husky define `"prepare": "husky"` no `husky init`.

## 6. VS Code (padronizar o time)

Criar na raiz do repositório (commitável):

- [`.vscode/settings.json`](templates/.vscode/settings.json) — remover `typescript.tsdk` se o projeto não usar TypeScript
- [`.vscode/extensions.json`](templates/.vscode/extensions.json)

Verificar `.gitignore`: `.vscode/` **não** deve estar ignorado (remover entrada ou adicionar exceção `!.vscode/`).

## 7. Scripts no package.json

Adicionar (ajustar globs se o projeto não usar `src/`):

```json
"lint": "eslint .",
"lint:fix": "eslint . --fix",
"format": "prettier --write .",
"format:check": "prettier --check ."
```

Se o lint ficar lento em monorepos, restringir globs (ex.: `"lint": "eslint src/"`).

## 8. Validação obrigatória

1. `npm run lint` — corrigir issues reais; não desligar regras em massa
2. `npm run format:check` — rodar `npm run format` se necessário
3. Staging de um arquivo e commit de teste dispara `lint-staged` via pre-commit
4. Se criou `pre-push`, confirmar que `npm test` passa

## Guardrails

- **npm only** — não usar pnpm/yarn
- Não commitar secrets (`.env`, tokens)
- Setup básico — sem regras extras sem pedido explícito
- Config existente — estender, não substituir sem confirmação
- `prepare` existente — sempre mesclar com `&&`

## Referência adicional

- Matriz completa de stacks, troubleshooting e CI opcional: [reference.md](reference.md)
- Templates ESLint/Prettier/VS Code: [templates/](templates/)
