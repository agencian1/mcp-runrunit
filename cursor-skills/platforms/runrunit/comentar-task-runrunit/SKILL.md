---
name: comentar-task-runrunit
description: Orquestra evidências e comentário na tarefa do Runrun.it. Captura screenshots antes/depois, opcionalmente abre PR (development ou branch informada) e cria comentário na task no template padrão (escopo, como foi feito, arquivos, como validar e links); se houver link da PR, inclui em links e grava na task. Usar quando o usuário enviar link da task Runrun.it e URLs antes/depois para registrar evidências na task.
---

# Comentar na tarefa do Runrun.it (evidências + PR)

Fluxo: **evidências (antes/depois)** → **(opcional)** abrir PR → **comentar na task** com as seções do template (escopo, como foi feito, arquivos, como validar e links). Se houver link da PR, incluir em `links` e gravar na task.

## Input

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| **Link da task** | Sim | URL da tarefa no Runrun.it (ex.: `https://app.runrun.it/.../tasks/12345`) ou o **ID numérico** da task. Extrair o ID do link quando for URL. |
| **URL antes** | Sim | Página no estado anterior (homologação, branch base). |
| **URL depois** | Sim | Página no estado alterado (branch de feature, localhost). |
| **Branch da PR** | Não | Branch de destino da PR. Padrão: `development`. O usuário pode informar no chat (ex.: `homolog`, `main`). |

Solicitar link da task e as duas URLs quando não forem fornecidos.

## Ordem do fluxo

1. **Identificar a task**
   - Se o usuário enviar URL da task, extrair o **ID numérico** (ex.: de `.../tasks/12345` → `12345`). Se enviar só o número, usar como `task_id`.

2. **Registrar evidências**
   - Chamar a skill [registrar-evidencias](skills/registrar-evidencias/SKILL.md) com **URL antes** e **URL depois**.
   - Resultado: screenshots (antes/depois, por viewport). Guardar os arquivos ou caminhos para referência no comentário.

3. **Abrir a PR (opcional)**
   - Se o usuário quiser PR: chamar a skill [create-pr-github](skills/create-pr-github/SKILL.md) para abrir a PR na branch **development** (ou na branch informada) e obter o **link da PR**. Se não abrir PR ou falhar, seguir sem o link.

4. **Montar e publicar o comentário na task**
   - Usar **runrunit_create_comment** com `task_id` (numérico) e as cinco seções abaixo. A tool monta o texto a partir desses campos.
   - Colocar o link da PR em `links` somente se ele tiver sido obtido no passo 3.
   - **Runrun.it não aceita Markdown:** texto simples e URLs cruas.

5. **Gravar o link da branch na task (obrigatório quando houver PR)**
   - Se houver link da PR ou da branch, usar **runrunit_update_task** com:
     - `task: { link_da_branch: "<url_da_pr>" }` (mapeado para o custom field "Link da branch", `custom_32`)
     - `task: { link_da_branch_relatorio: "<url_da_branch>" }` (mapeado para `custom_12`; usar ao publicar o relatório do que foi feito na tarefa)

## Formato do comentário na task

A tool publica o texto nesta ordem. Preencha cada campo em texto simples, sem Markdown.

| Campo | Conteúdo |
|-------|----------|
| `escopo` | Contexto da implementação ou correção. Ex.: correção no checkout. |
| `como_foi_feito` | Se foi código ou configuração de painel. Ex.: Atualizei o código X do arquivo xyz.ts. |
| `arquivos_configuracoes` | Caminho ou link do que mudou. Ex.: src/checkout/xyz.ts. |
| `como_validar` | Passo a passo, pelo menos duas linhas. Ex.: acesse o preview, navegue até a seção e valide o slider. |
| `links` | Preview, PR/MR e URLs das evidências, uma referência por linha. |

`url_antes` e `url_depois` são opcionais. Se enviados, a tool acrescenta `Antes: <url>` e `Depois: <url>` no final de Links.

Exemplo do texto publicado:

```
Escopo:
correção no checkout.

Como foi feito:
Atualizei o código do slider no arquivo xyz.ts

Quais arquivos/configurações foram afetadas:
src/checkout/xyz.ts

Como validar:
1. Acesse o link de preview.
2. Navegue até a sessão Y.
3. Faça o scroll lateral no slider.

Links:
https://github.com/org/repo/pull/1
Antes (Desktop): https://exemplo/antes-desktop.png
Depois (Desktop): https://exemplo/depois-desktop.png
```

Agrupe evidências por tipo (Antes/Depois) e por viewport (Desktop, Mobile, Tablet) dentro de `links`.

## Resumo de dependências

- **registrar-evidencias:** URLs antes e depois.
- **create-pr-github:** branch commitada e pushed; branch de destino = `development` ou a informada pelo usuário.
- **Runrun.it:** `RUNRUNIT_APP_KEY` e `RUNRUNIT_USER_TOKEN` configurados no MCP.

Se a criação da PR falhar (ex.: `gh` não disponível), informar o erro e seguir com o comentário na task preenchendo as cinco seções, sem a URL da PR em `links`.
