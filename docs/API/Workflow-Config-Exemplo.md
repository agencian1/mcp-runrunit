# Configuração do fluxo de trabalho Runrunit

Este documento descreve como obter os IDs necessários para personalizar a regra `runrunit-workflow.mdc` conforme seu projeto no Runrunit.

## IDs dos board stages

Os board stages (Task, Ongoing, Manager Validation) são colunas do board Kanban do projeto.

**Como obter:**

1. Acesse o Runrun.it e abra o board do projeto.
2. Cada coluna tem um ID interno. Você pode obter via API:
   - `GET /api/v1.0/boards/{board_id}/stages` — lista os stages do board.
   - O `board_id` está na tarefa (`task.board_id`).
   - Cada stage retornado tem `id` e `name`; use o `name` para identificar Task, Ongoing e Manager Validation.

**Exemplo de resposta:**

```json
[
  { "id": 1, "name": "Task", "stage_group": "opened", ... },
  { "id": 2, "name": "Ongoing", "stage_group": "opened", ... },
  { "id": 3, "name": "Manager Validation", "stage_group": "opened", ... }
]
```

## ID do custom field "Link da branch ou GTM"

O campo "Link da branch ou GTM" é um custom field configurado no board ou no projeto.

**Como obter:**

1. Ao editar uma tarefa, o custom field aparece nos detalhes.
2. Na API, os custom fields aparecem em `task.custom_fields` ou nos `board_stage_data.fields_data`.
3. O ID costuma ter formato como `custom_1`, `custom_2`, etc. Consulte a documentação de custom fields do Runrunit ou inspecione a resposta de uma tarefa que tenha o campo preenchido.

## ID do filtro "Minhas partes abertas"

O filtro "Minhas partes abertas" é um filtro de tarefas que lista apenas as demandas onde você é o responsável.

**Como obter:**

1. `GET /api/v1.0/tasks/filters` — lista todos os filtros de tarefas disponíveis.
2. Procure na lista o filtro com `name` igual a "Minhas partes abertas" (ou nome equivalente no seu ambiente).
3. Use o `id` desse filtro ao chamar `runrunit_list_tasks` com `filter_id`.

**Exemplo:**

```json
{
  "id": 42,
  "name": "Minhas partes abertas",
  "restriction": [...],
  ...
}
```

## Exemplo de preenchimento da regra

Após obter os IDs, você pode documentá-los na regra ou em um arquivo de configuração:

| Variável | Valor de exemplo |
|----------|------------------|
| `board_stage_id_task` | 1 |
| `board_stage_id_ongoing` | 2 |
| `board_stage_id_manager_validation` | 3 |
| `custom_field_link_branch` | custom_4 |
| `filter_id_minhas_partes` | 42 |

Cada pessoa deve ajustar esses valores conforme seu projeto e board no Runrunit.
