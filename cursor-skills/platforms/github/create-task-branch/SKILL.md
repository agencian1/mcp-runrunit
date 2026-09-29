---
name: create-task-branch
description: >-
  Cria a branch no padrão `task_[número]`. Use ao criar branch
  neste repositório. Se o pedido incluir commit, chame commit-per-file.
---

# Branch

Só criar commit, PR ou push quando o usuário pedir. Não versionar secrets (`.env`, tokens, chaves). Escopo: só a mudança pedida — sem refactors oportunistas nem arquivos não relacionados.

Este formato prevalece sobre Conventional Commits genérico (`.cursorrules` ou regras globais).

## Branches

Padrão `task_[número da task]`. Exemplos: `task_12345`, `task_9876`.

Não criar branches com nomes pessoais, datas ou descrições livres sem o prefixo `task_`.

```bash
git checkout -b task_12345
```

## Próxima skill

Se o pedido do usuário incluir commit, chamar a skill [commit-per-file](../commit-per-file/SKILL.md). Leia o SKILL.md e siga-o.
