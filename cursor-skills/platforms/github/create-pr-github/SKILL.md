---
name: create-pr-github
description: Create a well-structured pull request with description, labels, reviewers and visual evidence
disable-model-invocation: true
---

# 🧩 Criar Pull Request (PR)

## 🎯 Visão Geral
Cria um **pull request bem estruturado**, com descrição adequada, rótulos, revisores e evidências visuais.

---

## 🚀 Etapas

### 1. **Preparar a Branch**
- Garante que **todas as alterações estejam commitadas**.
- O **nome da branch deve conter o `{id}` da tarefa** (ex: `fix/ajuste-header-{id}`).
- Faz **push da branch para o remoto**.
- Verifica se a branch está **atualizada com a `development`** (ou `homolog`, dependendo do ambiente).
- ⚠️ **Nunca abra PR diretamente para as branches de produção (`main` ou `master`).**

---

### 2. **Escrever a Descrição do PR**
- Resuma as alterações de forma clara e objetiva.
- Explique o **contexto e a motivação** da mudança.
- Liste **quaisquer breaking changes** ou impactos relevantes.
- Inclua **evidências visuais** se houver mudanças na UI:
  - Utilize o **MCP do Chrome DevTools** para navegar até a página e tirar prints da seção que foi modificada.
  - Mostre o **antes e depois** da alteração visual.
  - Se estiver rodando localmente, use o **browser interno do Cursor** para navegar e capturar as imagens.

> 💡 Solicite a **URL da página** afetada para poder acessar e capturar as evidências de antes com o MCP Chrome DevTools.

---

### 3. **Configurar e Abrir a PR** (obrigatório — nunca pule este passo)
- Crie o PR com um **título descritivo** contendo o nome da task:  
  **Exemplo:** `task0123: feat: Adiciona login social com Google`
- Adicione **rótulos apropriados** (Feature, Fix, Refactor, Docs, etc.).
- Inclua **revisores** adequados para o tipo de mudança.
- Após abrir a PR, **é obrigatório obter e devolver o link da PR**. Esse link será usado no comentário da tarefa no Runrun.it e no campo "Link da branch" da task.
- **Output obrigatório** (sempre informar):
  - O **link da PR** (URL completa, ex.: `https://github.com/org/repo/pull/123`) — **obrigatório**
  - O **nome da branch**
  - O **ambiente de destino** (`development` ou `homolog`)
- Se a criação da PR falhar (ex.: `gh` não instalado, branch não pushed, sem permissão), informe o erro claramente e não prossiga para comentar/atualizar a task sem o link; o usuário precisa do link para rastreabilidade.

---

### 4. **Evidências**
- Escolha sempre que possível o MCP do **Playwright**, depois o MCP do Chrome DevTools.
- Tirar prints da tela toda simulando `mobile`, `tablet` e `desktop` (e **antes/depois** quando aplicável).
- **O GitHub CLI (`gh`) não anexa arquivos ao body da PR.** Para as evidências aparecerem:
  1. **Usar a skill [upload-image-cloudinary](skills/upload-image-cloudinary/SKILL.md)** para fazer upload de cada screenshot e obter a URL pública (`secure_url`).
  2. Inserir essas URLs na seção **Evidências Visuais** do body da PR em Markdown: `![Antes](<secure_url>)` e `![Depois](<secure_url>)`.
- **Configuração obrigatória** para evidências visuais: a skill de upload exige `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` e `CLOUDINARY_API_SECRET` (nunca expor o API Secret no client-side).
- Seguir o template de pull-request da documentação evidenciando tipo de alteração/implementação (ex.: `fix`, `feature`, `chore` e outras do flow conventional).

### 5. **Comentar na tarefa (Runrun.it) com evidências e link da PR**
Ordem obrigatória do fluxo:

1. **Registrar evidências**  
   Chamar a skill [registrar-evidencias](skills/registrar-evidencias/SKILL.md) com as URLs **antes** e **depois** para capturar os screenshots.

2. **Upload das imagens**  
   Chamar a skill [upload-image-cloudinary](skills/upload-image-cloudinary/SKILL.md) com as URLs/arquivos das evidências e obter as `secure_url` (uma por evidência: antes/depois).

3. **Abrir a PR e obter a URL** (obrigatório)  
   Chamar esta skill (create-pr-github) para abrir a PR no repositório. **Sempre obter a URL da PR** — sem ela os passos 4 e 5 não podem ser concluídos corretamente. Nunca pule este passo.

4. **Montar resumo e comentar**  
   Com as URLs das evidências (antes e depois) **e a URL da PR**, criar um **resumo do que foi feito** (ex.: histórico alinhado aos comentários no GitHub).  
   Usar **runrunit_create_comment** com: texto do resumo + **link da PR** + evidências em **texto simples** (Runrun.it não aceita Markdown), ex.: `Link da PR: <url_da_pr>`, `Antes: <secure_url>` e `Depois: <secure_url>`.

5. **Gravar o link da PR na task** (obrigatório)  
   Usar **runrunit_update_task** com `task: { link_da_branch: "<url_da_pr>" }`. O campo `link_da_branch` é mapeado para o custom field "Link da branch" na task (ex.: `custom_32`). **Sempre** preencher com a URL obtida no passo 3.

- **Runrun.it não aceita Markdown** nos comentários: use **links como texto simples** (URLs puras), não sintaxe `![desc](url)`.

## 🧾 Template de Pull Request (Utilize como padrão)

# Título do PR: (Ex: task0123: feat: Adiciona login social com Google)

## 🎯 Tipo de Mudança
> Marque o tipo de mudança que este PR introduz

- [ ] 🐛 **Correção de bug** (alteração que corrige um problema)
- [ ] ✨ **Novo recurso** (alteração que adiciona uma funcionalidade)
- [ ] ♻️ **Refatoração** (uma alteração de código que não corrige um bug nem adiciona um recurso)
- [ ] 📖 **Documentação** (atualizações na documentação)
- [ ] 🎨 **Alteração de layout** (Mudança no layout sem alterar o comportamento de uma funcionalidade existente)
---

## 📝 Descrição
> Descreva suas mudanças em detalhes. Qual o problema que está sendo resolvido? Qual a solução implementada? _Se aplicável, adicione o contexto que motivou esta mudança._

---

## 📸 Evidências Visuais (Se aplicável)
> Use as **URLs públicas (`secure_url`)** retornadas pelo upload na Cloudinary. Formato Markdown: `![Antes](url)` e `![Depois](url)`. Se houver vários viewports, agrupe por dispositivo (ex.: **Mobile – Antes/Depois**, **Desktop – Antes/Depois**).

**Antes:**
![Antes](<secure_url_do_upload_antes>)

**Depois:**
![Depois](<secure_url_do_upload_depois>)

---

## ✅ Checklist de Qualidade

- [ ] Meu código segue as diretrizes deste projeto.
- [ ] Realizei uma revisão do meu próprio código.
- [ ] Testei o fluxo de navegação.
- [ ] Comentei meu código nas áreas de difícil compreensão.
- [ ] Minhas alterações não geram novos warnings.

---

## 🔗 Referências
> Adicione links para tarefas, épicos ou outras referências.

- **Tarefa:** [TASK-0123](https://link-da-tarefa.com)
- **Design no Figma:** [Link para o design](https://figma.com/...)
- **Documento:** [Link](https://...)
