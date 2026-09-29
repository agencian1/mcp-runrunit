---
name: commits-branches-prs
description: >-
  Cria commits, branches e PRs no padrão do repositório: mensagem em PT-BR
  `[task] - [tipo] - [descrição]`, um commit por arquivo na ordem de
  dependência e branches `task_[número]`. Use ao criar commit, branch, PR
  ou push neste repositório.
---

# Commits, branches e PRs

Escolha a skill de entrada. Leia o SKILL.md e siga-o. Cada skill chama a próxima só se o pedido incluir esse passo.

- Só branch → [create-task-branch](../create-task-branch/SKILL.md)
- Só redigir a mensagem → [format-commit-message](../format-commit-message/SKILL.md)
- Commit (já na branch certa) → [commit-per-file](../commit-per-file/SKILL.md). Essa skill chama format-commit-message antes de cada `git commit`.
- Branch e commit → [create-task-branch](../create-task-branch/SKILL.md), que chama commit-per-file se o pedido incluir commit.
- PR → [check-pr](../check-pr/SKILL.md) depois dos commits, se o pedido incluir PR.
