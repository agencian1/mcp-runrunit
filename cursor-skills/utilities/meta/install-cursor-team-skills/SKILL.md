---
name: install-cursor-team-skills
description: >-
  Orienta a sincronizar as Cursor skills empacotadas no mcp-runrunit para ~/.cursor/skills (ou para .cursor/skills de um projeto). Usar quando o usuário ou a equipe pedirem para instalar skills do pacote, configurar o Cursor de outro membro, ou copiar skills da pasta cursor-skills. A cópia é feita pela tool MCP runrunit_install_cursor_skills — chamar essa tool (dry_run true primeiro se quiser só pré-visualizar); não duplicar a lógica com shell manual.
---

# Instalar skills do pacote (mcp-runrunit)

## Copiar para o Cursor local (máquina do utilizador)

1. **Tool** `runrunit_list_cursor_catalog` para ver ids, categorias e descrições (ex.: `platform: ["runrunit"]`).
2. **Tool** `runrunit_install_cursor_skills` com `dry_run: true` para listar origem, destino e pastas afetadas sem escrever.
3. Se o resultado for aceitável, chamar de novo com `dry_run: false` (ou omitir `dry_run`) para copiar de fato.
4. Parâmetros úteis:
   - `categories`: instalar por tag (ex.: `{ "platform": ["runrunit"] }` ou `{ "utility": ["evidence"] }`).
   - `skill_names`: só alguns ids (ex.: `["registrar-evidencias", "create-pr-github"]`); intersecta com `categories` se ambos forem passados.
   - `target`: `"global"` (padrão, `os.homedir()` + `.cursor/skills`) ou `"project"` com `project_root` absoluto.
   - `source_dir`: só se a pasta `cursor-skills` não for encontrada ao lado do pacote instalado.
5. **Nunca** orientar escrita em `skills-cursor` (reservado ao Cursor).

## Compartilhar / dividir com o time (GitHub)

Quando o utilizador falar em **compartilhar**, **dividir com o time**, **propor ao repositório**, **publicar a skill para a equipa**, ou equivalente em inglês (**share with the team**), **não** usar `runrunit_install_cursor_skills`. Usar **`runrunit_share_cursor_skill`** com `skill_name` igual ao **id** no catálogo (ex.: `react-best-practices`, sem path aninhado). Essa tool abre um PR com a **pasta completa** no path do catálogo (ex.: `cursor-skills/technologies/react/react-best-practices/`); requisitos `GITHUB_*` no servidor MCP. A instalação local copia para `~/.cursor/skills/{id}/` (destino plano no Cursor).
