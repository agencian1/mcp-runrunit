---
name: registrar-evidencias
description: Captura screenshots de páginas web em múltiplos viewports (mobile, tablet, desktop) a partir de URLs "antes" e "depois". Usar quando precisar registrar evidências visuais, comparar antes/depois, documentar mudanças de UI ou preparar imagens para PRs e relatórios.
---

# Registrar Evidências (Antes/Depois)

Captura prints de tela a partir de **duas URLs** (antes e depois), em mobile, tablet e desktop. Mesmo input, devolvendo as URLs da imagem após utilizar a skill [upload-image-cloudinary](skills/upload-image-cloudinary/SKILL.md) para fazer o upload de cada imagem.

## Input obrigatório

- **URL antes:** endereço da página no estado anterior (ex.: homologação, branch base).
- **URL depois:** endereço da página no estado alterado (ex.: branch de feature, localhost).

Solicite essas duas URLs ao usuário quando não forem fornecidas.

## Fluxo

1. **Escolher ferramenta de captura** (ordem de preferência):
   - MCP Playwright (Prioridade)
   - MCP Chrome DevTools
   - cursor-ide-browser (se estiver rodando localmente, aguardar a página carregar e tirar print da tela toda)

2. **Capturar "Antes":**
   - Navegar até a **URL antes**.
   - Tirar screenshot da tela inteira em **mobile 425px**, **tablet 768px** e **desktop 1440px** (ou pelo menos desktop se o contexto for limitado).
   - Guardar arquivos com nome que identifique viewport e momento, ex.: `antes-desktop.png`, `antes-mobile.png`, `antes-tablet.png`.

3. **Capturar "Depois":**
   - Navegar até a **URL depois**.
   - Repetir os mesmos viewports: mobile, tablet, desktop.
   - Nomear ex.: `depois-desktop.png`, `depois-mobile.png`, `depois-tablet.png`.

4. **Publicar imagens (opcional):**
   - Se as evidências forem para PR ou documentação, usar a skill [upload-image-cloudinary](skills/upload-image-cloudinary/SKILL.md) para cada screenshot e obter `secure_url`.
   - **PR/documentação (Markdown):** `![Antes - Desktop](<secure_url>)`, `![Depois - Desktop](<secure_url>)`.
   - **Runrun.it (comentários):** não aceita Markdown; usar apenas texto simples com a URL: ex. `Antes: <secure_url>` e `Depois: <secure_url>`.

## Viewports sugeridos

| Dispositivo | Largura (px) |
|-------------|--------------|
| Mobile      | 425          |
| Tablet      | 768          |
| Desktop     | 1280 ou 1920 |

## Saída

- Arquivos de screenshot locais **e/ou**
- URLs públicas (via Cloudinary): em Markdown para PR/docs; em texto simples (só a URL) para comentários no Runrun.it.

Quando o usuário pedir apenas "registrar evidências" ou "tirar prints antes/depois", use esta skill com as duas URLs fornecidas ou solicite-as.
