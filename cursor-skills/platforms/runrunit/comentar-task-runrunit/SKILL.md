---
name: comentar-task-runrunit
description: Orquestra evidências e comentário na tarefa do Runrun.it. Captura screenshots antes/depois, faz upload no Cloudinary, opcionalmente abre PR (development ou branch informada) e cria comentário na task com resumo, passo a passo de teste e links das evidências; se houver link da PR, inclui no comentário e grava na task. Usar quando o usuário enviar link da task Runrun.it e URLs antes/depois para registrar evidências na task.
---

# Comentar na tarefa do Runrun.it (evidências + PR)

Fluxo: **evidências (antes/depois)** → **upload das imagens** → **(opcional)** abrir PR → **comentar na task** com resumo, passo a passo de teste e links das evidências. Se houver link da PR, incluir no comentário e gravar na task.

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
   - Resultado: screenshots (antes/depois, por viewport). Guardar os arquivos ou caminhos para o próximo passo.

3. **Upload das imagens**
   - Chamar a skill [upload-image-cloudinary](skills/upload-image-cloudinary/SKILL.md) para cada screenshot e obter **secure_url** de cada uma.

4. **Abrir a PR (opcional)**
   - Se o usuário quiser PR: chamar a skill [create-pr-github](skills/create-pr-github/SKILL.md) para abrir a PR na branch **development** (ou na branch informada) e obter o **link da PR**. Se não abrir PR ou falhar, seguir sem o link.

5. **Montar e publicar o comentário na task**
   - Usar **runrunit_create_comment** com `task_id` (numérico) e `text` no formato abaixo.
   - Incluir **Link da PR** no comentário somente se o link tiver sido obtido no passo 4.
   - **Runrun.it não aceita Markdown:** usar texto simples; evidências como URLs puras.

6. **Gravar o link da PR na task (opcional)**
   - Se houver link da PR, usar **runrunit_update_task** com `task: { link_da_branch: "<url_da_pr>" }` (mapeado para o custom field "Link da branch").

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
Antes (Desktop): [secure_url]
Depois (Desktop): [secure_url]
Antes (Mobile): [secure_url]
Depois (Mobile): [secure_url]
[repetir para cada viewport que tiver URL]
```

Se houver muitas URLs, agrupar por tipo (Antes/Depois) e por viewport (Desktop, Mobile, Tablet) para manter legível.

## Resumo de dependências

- **registrar-evidencias:** URLs antes e depois.
- **upload-image-cloudinary:** variáveis `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.
- **create-pr-github:** branch commitada e pushed; branch de destino = `development` ou a informada pelo usuário.
- **Runrun.it:** `RUNRUNIT_APP_KEY` e `RUNRUNIT_USER_TOKEN` configurados no MCP.

Se a criação da PR falhar (ex.: `gh` não disponível), informar o erro e seguir com o comentário na task apenas com resumo, passo a passo e links das evidências (sem link da PR).
