---
name: check-pr
description: >-
  Confere o checklist de PR no padrão do repositório: branch `task_[número]`
  e commits `[task] - [tipo] - [descrição]`, um por arquivo, na ordem
  de dependência. Use ao preparar o PR neste repositório. Fim da cadeia.
---

# Checklist de PR

Só criar commit, PR ou push quando o usuário pedir. Não versionar secrets (`.env`, tokens, chaves). Escopo: só a mudança pedida — sem refactors oportunistas nem arquivos não relacionados.

Este formato prevalece sobre Conventional Commits genérico (`.cursorrules` ou regras globais).

## Checklist de PR

- Branch `task_[número da task]`
- Commits no formato `[task] - [tipo] - [descrição]`, um por arquivo, na ordem de dependência

## Próxima skill

Fim da cadeia. Não chame outra skill deste fluxo.
