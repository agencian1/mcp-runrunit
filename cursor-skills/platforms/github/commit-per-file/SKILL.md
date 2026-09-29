---
name: commit-per-file
description: >-
  Cria um commit por arquivo alterado, na ordem de dependência, com a
  mensagem no padrão do repositório. Use ao commitar neste repositório. Antes
  de cada commit, leia format-commit-message. Se o pedido incluir PR,
  chame check-pr.
---

# Um commit por arquivo

Só criar commit, PR ou push quando o usuário pedir. Não versionar secrets (`.env`, tokens, chaves). Escopo: só a mudança pedida — sem refactors oportunistas nem arquivos não relacionados.

Este formato prevalece sobre Conventional Commits genérico (`.cursorrules` ou regras globais).

## Um commit por arquivo

Cada arquivo alterado vai em um commit separado, na **ordem de dependência**: arquivos que outros consomem (interfaces, schemas, loaders, configurações) antes dos que deles dependem (componentes, seções, blocos).

Antes de commitar: `git status`, `git diff` e `git log` (seguir o estilo recente, no formato acima). Não commitar arquivos que pareçam secrets.

## Mensagem

Antes de cada `git commit`, leia e siga [format-commit-message](../format-commit-message/SKILL.md) só para o formato da mensagem. Não execute o handoff de volta para esta skill.

## Próxima skill

Se o pedido do usuário incluir PR, chamar a skill [check-pr](../check-pr/SKILL.md). Leia o SKILL.md e siga-o.
