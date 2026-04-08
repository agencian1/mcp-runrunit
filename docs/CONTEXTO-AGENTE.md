# Contexto para uso assertivo das tools MCP Runrun.it

Este documento define regras e convenções para que o agente (Cursor/IA) use as tools do MCP Runrun.it de forma **assertiva** e **inteligente**, reduzindo erros e escolhendo a tool correta em cada situação.

---

## 1. Visão geral

- Caminho do arquivo de índice da documentação dos endpoints: `docs/indíce.md` (relativo à raiz da pasta Cursor Plugin)
- Rules e code styles: `mcp-runrunit/docs/standard.md` Arquivo com regras de código padrão de nomenclatura, declaração de funções
- **Board Kanban padrão (coluna Task):** `board_id: 96356` (Ongoing). Necessário para a tool de sugestão de devs do MCP Sentinel.

---

## 2. Quando usar cada tool

### Tasks

| Intenção do usuário | Tool recomendada | Observação |
|---------------------|------------------|------------|
| Listar tarefas (minhas, do projeto, fechadas etc.) | `runrunit_list_tasks` | Use filtros: `project_id`, `is_closed`, `user_id`, `page`, `limit`. |
| Ver detalhes de **uma** tarefa | `runrunit_get_task` | Exige `id` (número). Preferir após listar quando precisar de detalhes. |
| Ver subtarefas de uma tarefa | `runrunit_list_subtasks` | Exige `task_id` (número). |
| **Criar** tarefa | `runrunit_create_task` | Obrigatório: `title`, `type_id`. Opcional: `project_id`, `desired_date` (ISO), `assignments`. |
| **Alterar** tarefa (título, data, link da branch etc.) | `runrunit_update_task` | Exige `id` e `task` (objeto com apenas os campos a atualizar). Para mover entre colunas do board, use `runrunit_move_task_stage`. |
| **Mover** tarefa de etapa/coluna (Task, Ongoing, Manager Validation) | `runrunit_move_task_stage` | Exige `task_id`; use `board_stage_id` ou `board_stage_name`. **Regra:** tarefas só avançam; retorno permitido apenas para "Task" ou "Blocked Task" (impedimento/não finalizado). Para etapas que exigem "Link da branch", preencher antes com `runrunit_update_task` (link_da_branch). |
| **Excluir** tarefa | `runrunit_delete_task` | Exige `id`. Operação irreversível; confirmar com o usuário se fizer sentido. |

### Comments

| Intenção do usuário | Tool recomendada | Observação |
|---------------------|------------------|------------|
| Ver comentários de uma tarefa | `runrunit_list_task_comments` | Exige `task_id`. |
| Ver um comentário específico | `runrunit_get_comment` | Exige `id` do comentário. |
| **Criar** comentário em tarefa | `runrunit_create_comment` | Exige `task_id` e `text`. |
| **Criar** comentário na sessão externa (compartilhada com clientes) | `runrunit_create_external_comment` | Exige `task_id` e `text`. Envia `channel_name: "guest"` para a API. |
| **Editar** texto do comentário | `runrunit_update_comment` | Exige `id` e `text`. |
| **Excluir** comentário | `runrunit_delete_comment` | Exige `id`. |
| Adicionar reação (emoji) | `runrunit_comment_reaction` | Exige `comment_id` e `emoji` (ex.: `"👍"`). |

### Sugestão de desenvolvedor (MCP Sentinel)

| Intenção do usuário | Tool recomendada | Observação |
|---------------------|------------------|------------|
| Encontrar dev com fila mais livre / sugerir quem pode pegar tarefa | `runrunit_suggest_devs_with_free_queue` (Sentinel) | **Obrigatório** informar `board_id` e/ou `task_stage_ids` para identificar a coluna "Task" do Kanban. Usar `board_id: 96356` (Ongoing) se não houver outro definido. Por padrão inclui **todos** os devs elegíveis (incl. quem tem **zero** tarefas na coluna Task, que aparecem primeiro); o critério "menos tarefas" só ordena entre quem tem tarefas. Por padrão considera **somente desenvolvedores** (`only_developers: true`), excluindo Gestor, Social, Inovação e outras áreas não-dev. Opcionais: `team_id`, `tribe_id`, `squad_id`, `project_id`, `project_tag`, `limit` (1–10), `include_zero_tasks` (padrão true), `only_developers` (padrão true), `only_active_devs`. |

### Discord (histórico por projeto / 1 canal por cliente)

| Intenção do usuário | Tool recomendada | Observação |
|---------------------|------------------|------------|
| Enviar mensagem em um canal Discord | `runrunit_discord_send_message` | Exige `channel_id` e `content`. Opcional: `task_id`, `project_id` para contexto. Requer `BOT_RUNRUNIT_REPORT` no env. |
| Criar canal de texto no servidor Discord | `runrunit_discord_create_channel` | Exige `name`. Opcional: `guild_id` (ou use `DISCORD_GUILD_ID`), `parent_id` (categoria), `topic`. |
| Listar canais do servidor Discord | `runrunit_discord_list_channels` | Opcional: `guild_id` (senão usa `DISCORD_GUILD_ID` ou resolve por `DISCORD_CHANNEL_ID`). |
| Garantir canal por cliente (1 canal por cliente) | `runrunit_discord_get_or_create_channel` | Passar `client_id` e/ou `client_name` (Runrun.it). Retorna `channel_id` e `channel_name`; cria o canal se não existir. Usar antes de `runrunit_discord_send_message` para enviar no canal do cliente. |

**Regra – Categoria Tasks:** Na categoria **Tasks** do Discord, **só criar um novo canal se o projeto ainda não existir**. Sempre fazer a **busca por nome do projeto** (ex.: via `runrunit_discord_list_channels`, filtrar canais na categoria Tasks pelo nome do projeto). Se já existir canal com o nome do projeto, usar esse canal; caso contrário, criar o novo canal na categoria Tasks.

Variáveis de ambiente para Discord: `BOT_RUNRUNIT_REPORT` (token do bot), `DISCORD_CHANNEL_ID` (canal padrão), `DISCORD_GUILD_ID` (ID do servidor para listar/criar canais). Ver `.env.example`.

---

## 3. Parâmetros: tipos e formatos

- **IDs:** sempre **números** (`number`). Não enviar como string (ex.: `id: 123`, não `id: "123"`).
- **Datas:** sempre **ISO 8601** (ex.: `desired_date: "2025-03-15"` ou `"2025-03-15T14:00:00Z"`).
- **Lista de IDs em filtro:** em `runrunit_list_tasks`, o parâmetro `ids` é **string** com IDs separados por vírgula (ex.: `"1,2,3"`).
- **assignments (criar tarefa):** array de objetos `{ assignee_id: string, team_id?: number }`. `assignee_id` é obrigatório em cada item.
- **sort_dir:** apenas `"asc"` ou `"desc"`.
- **limit:** entre 1 e 100; usar paginação (`page`, `limit`) para listas grandes.

---

## 4. Fluxos recomendados

1. **Atualizar uma tarefa**
   - Se o usuário não informar o ID: usar `runrunit_list_tasks` com filtros (ex.: `project_id`, `is_closed: false`) e depois `runrunit_get_task(id)` se precisar confirmar o contexto.
   - Em `runrunit_update_task`, enviar em `task` **apenas os campos que mudam** (ex.: `{ title: "Novo título" }` ou `{ desired_date: "2025-03-20" }`).

2. **Criar comentário**
   - Garantir que `task_id` existe (ex.: usuário acabou de listar/abrir a tarefa, ou chamar antes `runrunit_get_task` para validar).

3. **Comentar na tarefa com evidências e link da PR (fluxo completo)**
   - **Ordem obrigatória:**  
     1. Chamar a skill [registrar-evidencias](skills/registrar-evidencias/SKILL.md) (URL antes, URL depois) para capturar screenshots.  
     2. Chamar a skill [upload-image-cloudinary](skills/upload-image-cloudinary/SKILL.md) com as imagens de evidências e obter as `secure_url`.  
     3. **Chamar a skill [create-pr-github](skills/create-pr-github/SKILL.md) para abrir a PR e obter a URL da PR — passo obrigatório; o link é necessário para os passos 5 e 6. Nunca pule este passo.**  
     4. Com as URLs das evidências (antes/depois) e **a URL da PR**, montar um resumo do que foi feito (ex.: histórico do que foi alterado, alinhado aos comentários do GitHub).  
     5. Criar o comentário na task com `runrunit_create_comment`: texto do resumo + **Link da PR: \<url_da_pr>** + evidências em texto simples (Runrun.it não aceita Markdown), ex.: `Antes: <secure_url>` e `Depois: <secure_url>`.  
     6. Atualizar a task com o link da PR: `runrunit_update_task(id, { task: { link_da_branch: "<url_da_pr>" } })`. O campo `link_da_branch` é mapeado internamente para o custom field "Link da branch" (ex.: `custom_32`). **Sempre** preencher com a URL obtida no passo 3.  
     7. Se for mover a task para outra etapa (ex.: Manager Validation), usar **depois** do passo 6: `runrunit_move_task_stage(task_id, { board_stage_name: "Manager Validation" })`. Etapas que exigem "Link da branch" só aceitam a mudança após o link estar preenchido.

4. **Evitar muitas chamadas**
   - Preferir `runrunit_list_tasks` com `limit` e filtros em vez de várias `runrunit_get_task` em sequência quando só precisar de resumo.
   - Para “listar e depois atualizar uma”, usar: `list_tasks` (ou `get_task` se já tiver o ID) → `update_task`.

---

## 5. Erros comuns e como evitar

| Situação | Causa provável | Ação |
|----------|----------------|------|
| "Missing RUNRUNIT_APP_KEY or RUNRUNIT_USER_TOKEN" | Credenciais não configuradas no cliente MCP. | Orientar o usuário a configurar `env` no MCP (ex.: `.cursor/mcp.json`) com `RUNRUNIT_APP_KEY` e `RUNRUNIT_USER_TOKEN`. |
| API retorna 4xx/5xx | ID inexistente, permissão, ou payload inválido. | Verificar se `id`/`task_id`/`comment_id` existem; em update, enviar só campos suportados pela API. |
| Resposta vazia ou inesperada | Filtros muito restritivos ou recurso não encontrado. | Ajustar filtros em `list_tasks` ou confirmar com `get_task`/`get_comment` se o recurso existe. |
| Rate limit (429) | Muitas requisições em pouco tempo. | Reduzir chamadas; agrupar lógica; não fazer loops grandes sem necessidade. |
| TASK_STAGE_NOT_RESOLVED (Sentinel) | Coluna "Task" não identificada na sugestão de devs. | Informar `board_id` (ex.: `96356` para Ongoing) e/ou `task_stage_ids` ao chamar `runrunit_suggest_devs_with_free_queue`. |
| "Missing BOT_RUNRUNIT_REPORT" / "Missing DISCORD_GUILD_ID or DISCORD_CHANNEL_ID" | Credenciais Discord não configuradas. | Configurar no env do MCP: `BOT_RUNRUNIT_REPORT` (token do bot) e `DISCORD_GUILD_ID` ou `DISCORD_CHANNEL_ID` para o servidor alvo. |
| Discord rate limit (429) | Muitas requisições à API Discord. | Reduzir chamadas; aguardar o tempo indicado na mensagem de erro. |

---

## 6. Glossário rápido (Runrun.it)

- **task:** tarefa no Runrun.it; tem `id`, `title`, `type_id`, `project_id`, `desired_date`, etc.
- **type_id:** tipo da tarefa (ex.: bug, feature); ID numérico definido no workspace.
- **project_id:** ID do projeto ao qual a tarefa pertence (opcional em criação).
- **assignments:** responsáveis pela tarefa; cada item tem `assignee_id` (e opcionalmente `team_id`).
- **is_closed:** tarefa entregue/fechada (true/false).
- **Comments:** comentários podem ser em uma **task** (`task_id`) ou em um **project** (API suporta `project_id` + `text`; a tool atual expõe apenas comentário em tarefa com `task_id` + `text`).
- **board_id:** ID do board Kanban no Runrun.it; usado pela tool de sugestão de devs (Sentinel) para localizar a coluna "Task". Ex.: `96356` (Ongoing).
- **task_stage_ids:** IDs dos estágios/colunas do Kanban que representam a coluna "Task". Se não informado, o Sentinel tenta inferir por nome (ex.: stage com "Task" no nome) quando `board_id` é informado.
- **custom_fields / link_da_branch:** A API usa chaves opacas (ex.: `custom_32`) para campos customizados. O MCP expõe o campo "Link da branch" (URL da PR) como **link_da_branch** em `runrunit_update_task`: ao enviar `task: { link_da_branch: "https://github.com/..." }`, o valor é gravado no custom field correspondente (ex.: `custom_32`).

---

## 7. Resumo para o agente

- **Sempre** usar IDs numéricos e datas em ISO 8601.
- **Escolher** a tool pelo verbo (listar → list_*, ver um → get_*, criar → create_*, alterar → update_*, excluir → delete_*).
- **Em updates**, enviar só os campos que mudam dentro de `task`.
- **Respeitar** rate limit: evitar muitas chamadas seguidas; usar filtros e paginação em listagens.
- Em caso de **erro da API**, informar ao usuário de forma clara e sugerir verificar ID, permissões e credenciais MCP.
- Para **sugerir dev com fila livre** (Sentinel), sempre passar `board_id` (ex.: `96356`) ou `task_stage_ids` para evitar erro TASK_STAGE_NOT_RESOLVED.
