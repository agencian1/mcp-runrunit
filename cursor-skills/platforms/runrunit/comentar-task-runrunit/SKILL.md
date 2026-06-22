---
name: comentar-task-runrunit
description: Orquestra evidências e comentário na tarefa do Runrun.it. Captura screenshots antes/depois, opcionalmente abre PR (development ou branch informada) e cria comentário na task com resumo, passo a passo de teste e referências às evidências; se houver link da PR, inclui no comentário e grava na task. Usar quando o usuário enviar link da task Runrun.it e URLs antes/depois para registrar evidências na task.
---

# Comentar na tarefa do Runrun.it (evidências + PR)

Fluxo: **evidências (antes/depois)** → **(opcional)** abrir PR → **comentar na task** com resumo, passo a passo de teste e referências às evidências. Se houver link da PR, incluir no comentário e gravar na task.

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
   - Usar **runrunit_create_comment** com `task_id` (numérico) e `text` no formato abaixo.
   - Incluir **Link da PR** no comentário somente se o link tiver sido obtido no passo 3.
   - **Runrun.it não aceita Markdown:** usar texto simples; evidências como URLs ou referências aos arquivos.

5. **Gravar o link da branch na task (obrigatório quando houver PR)**
   - Se houver link da PR ou da branch, usar **runrunit_update_task** com:
     - `task: { link_da_branch: "<url_da_pr>" }` (mapeado para o custom field "Link da branch", `custom_32`)
     - `task: { link_da_branch_relatorio: "<url_da_branch>" }` (mapeado para `custom_12`; usar ao publicar o relatório do que foi feito na tarefa)

## Formato do comentário na task

Seguir o padrão do projeto (AGENTS.md): **contexto do que foi alterado** + **passo a passo para testar**.

Use texto simples (sem Markdown). Exemplo de estrutura:

```
Resumo do que foi feito:
[Contexto das alterações. Ex.: O slider da home foi alterado para exibir 5 itens.]

Passo a passo para testar:
1. Acesse [URL ou descrição].
2. [Ação]. Ex.: Role até a área abaixo do topo.
3. [O que validar]. Ex.: Teste a funcionalidade e a responsividade do elemento.

[Se houver link da PR:] Link da PR: [url_completa_da_pr]

Evidências:
Antes (Desktop): [url_ou_caminho]
Depois (Desktop): [url_ou_caminho]
Antes (Mobile): [url_ou_caminho]
Depois (Mobile): [url_ou_caminho]
[repetir para cada viewport que tiver referência]
```

Se houver muitas referências, agrupar por tipo (Antes/Depois) e por viewport (Desktop, Mobile, Tablet) para manter legível.

## Resumo de dependências

- **registrar-evidencias:** URLs antes e depois.
- **create-pr-github:** branch commitada e pushed; branch de destino = `development` ou a informada pelo usuário.
- **Runrun.it:** `RUNRUNIT_APP_KEY` e `RUNRUNIT_USER_TOKEN` configurados no MCP.

Se a criação da PR falhar (ex.: `gh` não disponível), informar o erro e seguir com o comentário na task apenas com resumo, passo a passo e referências às evidências (sem link da PR).
