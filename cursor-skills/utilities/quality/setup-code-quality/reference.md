# Referência — setup-code-quality

## Matriz de detecção (detalhada)

| Sinal no projeto | Como detectar | Pacotes npm -D |
|------------------|---------------|----------------|
| JavaScript puro | Sem `typescript` e sem `tsconfig.json` | `@eslint/js` (já no base) |
| TypeScript | `typescript` em deps ou `tsconfig.json` | `typescript-eslint` |
| React | `react` em dependencies | `eslint-plugin-react`, `eslint-plugin-react-hooks`, `typescript-eslint` se TS |
| Next.js | `next` em dependencies | `@next/eslint-plugin-next`, `typescript-eslint` |
| Node ESM | `"type": "module"` em package.json | Usar `eslint.config.js`; `sourceType` vem do parser TS |
| Vite + React | `vite` + `react` | Template React; ignores podem incluir `dist/` |
| Monorepo | `workspaces` em package.json | ESLint na raiz; considerar `ignores` para pacotes não migrados |

### Escolha do template ESLint

1. `next` em deps → `eslint.config.next.js`
2. Senão, `react` em deps → `eslint.config.react.js`
3. Senão, TypeScript → `eslint.config.node-ts.js`
4. Senão → `eslint.config.js`

## Mesclar script prepare

Exemplos comuns:

```json
"prepare": "husky"
```

```json
"prepare": "husky && npm run build"
```

```json
"prepare": "husky && npm run postinstall"
```

Ordem recomendada: `husky` primeiro (instala hooks após `npm install`), depois build ou outros scripts.

## ESM vs CJS para eslint.config

| package.json | Arquivo de config |
|--------------|-------------------|
| `"type": "module"` | `eslint.config.js` |
| Sem `"type": "module"` | `eslint.config.mjs` |

Conteúdo idêntico; apenas a extensão muda para o Node resolver imports ESM.

## lint-staged — variações

Monorepo com pastas separadas:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

Incluir arquivos na raiz:

```json
"lint-staged": {
  "*.{js,mjs,cjs}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

## .vscode/settings.json — ajustes por stack

**Sem TypeScript** — remover:

```json
"typescript.tsdk": "node_modules/typescript/lib"
```

**Só JavaScript** — reduzir `eslint.validate`:

```json
"eslint.validate": ["javascript", "javascriptreact"]
```

**Monorepo** — opcional `eslint.workingDirectories`:

```json
"eslint.workingDirectories": [{ "mode": "auto" }]
```

## Troubleshooting

### `eslint.config.js` — "module not found"

- Confirmar `"type": "module"` ou renomear para `eslint.config.mjs`
- Rodar `npm install` após adicionar pacotes

### Husky hook não roda

- Verificar `prepare` no package.json
- Rodar `npm run prepare` ou `npx husky`
- Unix: `chmod +x .husky/pre-commit` (e `commit-msg` / `pre-push` se existirem)
- Windows: exige Git Bash / sh do Git instalado

### Commit rejeitado pelo hook commit-msg

- Formato exigido: `task123456: descrição da alteração`
- Exceções automáticas: merges, reverts, `fixup!` / `squash!` / `amend!`
- Testar manualmente: `node scripts/validate-commit-msg.mjs .git/COMMIT_EDITMSG`

### Conflito ESLint + Prettier

- `eslint-config-prettier` deve ser o **último** item do array em flat config
- Não usar `eslint-plugin-prettier` neste setup básico (Prettier roda separado via lint-staged)

### Muitos erros no primeiro lint

1. Rodar `npm run format` primeiro
2. Rodar `npm run lint:fix`
3. Corrigir manualmente o que restar
4. Não desabilitar `@typescript-eslint` ou `recommended` em massa

### `.vscode` ignorado pelo git

Se `.gitignore` tiver `.vscode/`:

```
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json
```

Ou remover a entrada que ignora `.vscode/` inteiro.

## Próximo passo opcional: CI

Após setup local, o time pode espelhar no GitHub Actions:

```yaml
- run: npm ci
- run: npm run lint
- run: npm run format:check
- run: npm test
```

Isso não faz parte do setup Husky, mas evita que código que passou hooks locais desabilitados quebre o pipeline.
