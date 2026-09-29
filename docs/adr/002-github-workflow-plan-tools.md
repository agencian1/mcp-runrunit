# ADR 0002: Ferramentas de fluxo de trabalho do GitHub — planejar antes de executar

| Campo        | Valor                        |
| ------------ | ---------------------------- |
| Status       | Aceito                       |
| Data         | 28/09/2026                   |
| Responsáveis | Mantenedores do mcp-runrunit |

## Contexto

`cursor-skills/platforms/github/` define seis habilidades para o fluxo git do repositório: encaminhar a solicitação, criar `task_[número]`, formatar o assunto do commit, fazer commit de um arquivo por vez, verificar a lista de verificação do PR e abrir um pull request no GitHub. Essas habilidades chamam a próxima habilidade somente quando o usuário solicita essa etapa e impedem o commit, o push ou a PR até que o usuário solicite.

O servidor MCP já abre PRs compartilhadas por meio da API do GitHub. Ele não expunha esse fluxo de trabalho local. Colocar todas as etapas em uma única ferramenta misturaria a criação de branches, commits e pull requests. Executar `git commit` ou `gh pr create` na primeira chamada ignoraria a aprovação do usuário.

## Decisão

1. **Uma ferramenta MCP por skill**, cada uma com uma única responsabilidade. A cadeia de skills é um campo `next_tool` na resposta. A ferramenta chamada não invoca a próxima ferramenta.
2. **Planeje antes de executar.** `runrunit_create_task_branch`, `runrunit_commit_per_file` e `runrunit_create_pr_github` têm como padrão `approved: false` e retornam `status: “awaiting_approval”` sem checkout, commit, push ou `gh pr create`. A execução ocorre somente quando a mesma carga útil é enviada com `approved: true`.
3. **Ferramentas somente de leitura não são executadas.** `runrunit_commits_branches_prs`, `runrunit_format_commit_message` e `runrunit_check_pr` retornam apenas uma rota, um assunto ou uma lista de verificação. `runrunit_check_pr` encerra a cadeia do fluxo (`next_tool: null`) e não abre a solicitação de pull.
4. **Limite hexagonal.** Os casos de uso em `src/application/github-workflow/` dependem de `GitWorkspacePort` em `src/domain/github-workflow.ts`. `src/adapters/driven/git-workspace.ts` implementa a porta com `git` e `gh`. `src/adapters/driving/github-workflow-tools.ts` analisa argumentos e delegados do MCP. Os testes de casos de uso utilizam uma porta na memória e não executam o git.
5. **Destino da solicitação de pull.** `runrunit_create_pr_github` aceita apenas `development` ou `homolog`. `main` e `master` são rejeitados. A captura de evidências, `runrunit_create_comment` e `runrunit_update_task` permanecem como ações de acompanhamento, não como efeitos desta ferramenta.
6. **Segredos.** Caminhos que parecem segredos (`.env`, chaves, `credentials.json`) são excluídos do commit plano.
7. **Secrets.** Paths that look like secrets (`.env`, keys, `credentials.json`) are excluded from the commit plan. Uma lista aprovada que ainda contenha um item é rejeitada sem que haja commit.

## Consequências

- Os agentes devem apresentar o plano e aguardar a aprovação antes de uma segunda chamada com `approved: true`.
- A troca do Git para testes não requer um banco de dados nem um repositório real.
- A abertura de uma solicitação de pull ainda requer que o `gh` esteja autenticado no ambiente em que o servidor MCP é executado, e somente após a aprovação.
