---
name: registrar-evidencias
description: Captura screenshots de páginas web em múltiplos viewports (mobile, tablet, desktop) a partir de URLs "antes" e "depois". Usar quando precisar registrar evidências visuais, comparar antes/depois, documentar mudanças de UI ou preparar imagens para PRs e relatórios.
---

# Registrar Evidências (Antes/Depois)

Captura prints de tela a partir de **duas URLs** (antes e depois), em mobile, tablet e desktop.

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

4. **Usar as evidências:**
   - **PR/documentação (Markdown):** referenciar os arquivos locais ou URLs disponíveis com `![Antes - Desktop](<url>)`, `![Depois - Desktop](<url>)`.
   - **Runrun.it (comentários):** não aceita Markdown; usar apenas texto simples com a URL ou referência ao arquivo: ex. `Antes: <url>` e `Depois: <url>`.

## Viewports sugeridos

| Dispositivo | Largura (px) |
|-------------|--------------|
| Mobile      | 425          |
| Tablet      | 768          |
| Desktop     | 1280 ou 1920 |

## Saída

- Arquivos de screenshot locais para uso em PRs, documentação ou comentários no Runrun.it.

Quando o usuário pedir apenas "registrar evidências" ou "tirar prints antes/depois", use esta skill com as duas URLs fornecidas ou solicite-as.
