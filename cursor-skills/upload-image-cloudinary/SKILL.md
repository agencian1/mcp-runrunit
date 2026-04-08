---
name: upload-image-cloudinary
description: Upload images to Cloudinary and get public URLs. Use when screenshots, evidence images, or any image file need to be hosted for sharing (e.g. PR body, docs, reports). Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET.
---

# Upload de imagem para Cloudinary

## Quando usar
- Publicar imagens (screenshots, evidências, assets) e obter uma URL HTTPS pública.
- Útil para PRs, documentação, relatórios ou qualquer fluxo que exija imagens hospedadas.

## Configuração
Variáveis de ambiente obrigatórias (nunca expor o API Secret no client-side):
Variaveis de ambiente configuradas no MCP
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## Como fazer o upload

1. **Endpoint:** `POST https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload`
2. **Autenticação:** Basic Auth com `CLOUDINARY_API_KEY` e `CLOUDINARY_API_SECRET`.
3. **Body (multipart):**
   - `file` = arquivo da imagem (obrigatório).
   - `public_id` = opcional (ex.: `pr-evidencia-antes-mobile`, `docs-screenshot-1`).
4. **Resposta:** Da resposta JSON do upload, usar **apenas o campo `secure_url`** (URL HTTPS pública) para referenciar a imagem.

## Uso da URL
Inserir `secure_url` onde for necessário (Markdown, HTML, etc.), por exemplo: `![Descrição](<secure_url>)`.
