---
name: format-commit-message
description: >-
  Formata a mensagem de commit no padrão do repositório, em PT-BR:
  `[numero da task] - [tipo] - [descrição]`. Use ao redigir a mensagem
  de commit. Se o pedido incluir commitar, chame commit-per-file.
---

# Mensagem

Só criar commit, PR ou push quando o usuário pedir. Não versionar secrets (`.env`, tokens, chaves). Escopo: só a mudança pedida — sem refactors oportunistas nem arquivos não relacionados.

Este formato prevalece sobre Conventional Commits genérico (`.cursorrules` ou regras globais).

## Mensagem

PT-BR, imperativo:

```text
[numero da task] - [tipo do commit] - [descrição]
```

Tipos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`.

Se o número da task não for informado, derive-o da branch atual (`task_[número]`). Branch `task_14751` → `14751`.

```text
12345 - feat - adiciona suporte a cupom no carrinho
12345 - fix - corrige seleção de SKU na PDP
12345 - chore - atualiza dependências do manifest
```

```bash
git commit -m "$(cat <<'EOF'
12345 - feat - adiciona suporte a cupom no carrinho
EOF
)"
```

## Hook

O script [`validate-commit-msg.sh`](validate-commit-msg.sh) rejeita o commit quando a primeira linha foge deste formato. O hook Husky `commit-msg` chama esse script. Merges, reverts e `fixup!` / `squash!` / `amend!` passam direto. Em branch `task_[número]`, o número da mensagem tem de ser o da branch.

## Próxima skill

Se o pedido incluir commitar e esta skill não foi chamada por [commit-per-file](../commit-per-file/SKILL.md), chamar a skill [commit-per-file](../commit-per-file/SKILL.md). Leia o SKILL.md e siga-o.

Se chegou aqui a partir de commit-per-file, aplique só o formato da mensagem e retorne. Não chame commit-per-file de novo.
