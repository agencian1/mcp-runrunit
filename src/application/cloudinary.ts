import fs from "node:fs";
import path from "node:path";

/**
 * Upload de imagem para Cloudinary.
 * Usa variáveis de ambiente já definidas no processo (ex.: em mcp.json):
 * CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.
 */
export async function uploadImage(
  filePath: string,
  publicId?: string
): Promise<{ secure_url: string }> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Variáveis de ambiente ausentes: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET (configure em mcp.json ou no ambiente do MCP)."
    );
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`Arquivo não encontrado: ${filePath}`);
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const body = new FormData();
  body.append(
    "file",
    new Blob([fs.readFileSync(filePath)]),
    path.basename(filePath)
  );
  if (publicId) {
    body.append("public_id", publicId);
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Basic ${auth}` },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Cloudinary upload failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as { secure_url: string };
  return { secure_url: data.secure_url };
}
