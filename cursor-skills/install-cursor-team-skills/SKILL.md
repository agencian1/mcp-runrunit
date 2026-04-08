---
name: install-cursor-team-skills
description: >-
  Orienta a sincronizar as Cursor skills empacotadas no mcp-runrunit para ~/.cursor/skills (ou para .cursor/skills de um projeto). Usar quando o usuário ou a equipe pedirem para instalar skills do pacote, configurar o Cursor de outro membro, ou copiar skills da pasta cursor-skills. A cópia é feita pela tool MCP runrunit_install_cursor_skills — chamar essa tool (dry_run true primeiro se quiser só pré-visualizar); não duplicar a lógica com shell manual.
---

# Instalar skills do pacote (mcp-runrunit)

1. **Preferir a tool MCP** `runrunit_install_cursor_skills` com `dry_run: true` para listar origem, destino e pastas afetadas sem escrever.
2. Se o resultado for aceitável, chamar de novo com `dry_run: false` (ou omitir `dry_run`) para copiar de fato.
3. Parâmetros úteis:
   - `skill_names`: só algumas pastas (ex.: `["registrar-evidencias", "create-pr-github"]`).
   - `target`: `"global"` (padrão, `os.homedir()` + `.cursor/skills`) ou `"project"` com `project_root` absoluto.
   - `source_dir`: só se a pasta `cursor-skills` não for encontrada ao lado do pacote instalado.
4. **Nunca** orientar escrita em `skills-cursor` (reservado ao Cursor).

Skills que dependem de Cloudinary continuam exigindo `CLOUDINARY_*` no ambiente do MCP.
