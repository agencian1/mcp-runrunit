import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import express from "express";
import type { Request, Response } from "express";
import { createMcpServer } from "./adapters/driving/app.js";
import type { Server } from "@modelcontextprotocol/sdk/server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const streamableHttpPath = path.join(__dirname, "..", "node_modules", "@modelcontextprotocol", "sdk", "dist", "esm", "server", "streamableHttp.js");
const { StreamableHTTPServerTransport } = require(streamableHttpPath);

const PORT = Number(process.env.MCP_HTTP_PORT) || 3000;
const MCP_PATH = process.env.MCP_HTTP_PATH || "/mcp";

type SessionEntry = { server: Server; transport: InstanceType<typeof StreamableHTTPServerTransport> };
const sessions = new Map<string, SessionEntry>();

const DEBUG_LOG_PATH = path.join(__dirname, "..", "mcp-debug.log");
function debugLog(msg: string): void {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.error(msg);
  try {
    fs.appendFileSync(DEBUG_LOG_PATH, line);
  } catch (e) {
    console.error("debugLog err", e);
  }
}

function isInitializeRequest(body: unknown): boolean {
  return (
    typeof body === "object" &&
    body !== null &&
    "method" in body &&
    (body as { method?: string }).method === "initialize"
  );
}

async function main() {
  const app = express();
  app.use(express.json());

  app.post(MCP_PATH, async (req: Request, res: Response) => {
    const sessionId = req.headers["mcp-session-id"] as string | undefined;
    const bodyMethod = typeof req.body === "object" && req.body !== null && "method" in req.body ? (req.body as { method?: string }).method : undefined;
    const isInit = isInitializeRequest(req.body);
    debugLog(`POST /mcp sessionId=${sessionId ?? "(nenhum)"} body.method=${bodyMethod ?? "(vazio)"} isInit=${isInit}`);

    try {
      // Sempre que vier initialize, criar nova sessão (evita "Server already initialized" em reconexões)
      if (isInitializeRequest(req.body)) {
        const newSessionId = crypto.randomUUID();
        if (sessionId && sessions.has(sessionId)) {
          try {
            sessions.get(sessionId)?.transport.close();
          } catch {
            /* ignore */
          }
          sessions.delete(sessionId);
        }
        // Remove session id do request para o SDK tratar como conexão nova (evita reuso interno)
        const prevSessionId = req.headers["mcp-session-id"];
        delete req.headers["mcp-session-id"];
        const transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => newSessionId,
        });
        const server = createMcpServer();
        await server.connect(transport);

        transport.onclose = () => {
          sessions.delete(newSessionId);
        };

        sessions.set(newSessionId, { server, transport });
        debugLog(`nova sessão ${newSessionId} (initialize)`);
        try {
          await transport.handleRequest(req, res, req.body);
        } finally {
          if (prevSessionId !== undefined) req.headers["mcp-session-id"] = prevSessionId;
        }
        return;
      }

      // Só reutilizar sessão se temos session id, body presente e body NÃO é initialize
      if (
        sessionId &&
        sessions.has(sessionId) &&
        req.body != null &&
        !isInitializeRequest(req.body)
      ) {
        const { transport } = sessions.get(sessionId)!;
        await transport.handleRequest(req, res, req.body);
        return;
      }

      // Sem sessão válida, ou body é initialize, ou body vazio → criar nova sessão (evita "already initialized")
      if (!sessionId || isInitializeRequest(req.body) || req.body == null) {
        const newSessionId = crypto.randomUUID();
        if (sessionId && sessions.has(sessionId)) {
          try {
            sessions.get(sessionId)?.transport.close();
          } catch {
            /* ignore */
          }
          sessions.delete(sessionId);
        }
        const prevSessionId = req.headers["mcp-session-id"];
        delete req.headers["mcp-session-id"];
        const transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => newSessionId,
        });
        const server = createMcpServer();
        await server.connect(transport);
        transport.onclose = () => sessions.delete(newSessionId);
        sessions.set(newSessionId, { server, transport });
        debugLog(`nova sessão (fallback) ${newSessionId}`);
        try {
          await transport.handleRequest(req, res, req.body);
        } finally {
          if (prevSessionId !== undefined) req.headers["mcp-session-id"] = prevSessionId;
        }
        return;
      }

      res.status(400).json({
        jsonrpc: "2.0",
        error: { code: -32600, message: "Invalid Request: No valid session ID provided" },
        id: null,
      });
    } catch (err) {
      console.error("mcp-runrunit: request error", err);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
  });

  app.get(MCP_PATH, async (req: Request, res: Response) => {
    const sessionId = req.headers["mcp-session-id"] as string | undefined;
    if (!sessionId || !sessions.has(sessionId)) {
      res.status(400).send("Invalid or missing session ID");
      return;
    }
    const { transport } = sessions.get(sessionId)!;
    await transport.handleRequest(req, res);
  });

  app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", mcp: "runrunit" });
  });

  app.listen(PORT, () => {
    console.error(`mcp-runrunit: HTTP server at http://127.0.0.1:${PORT}${MCP_PATH}`);
    console.error(`  Health: http://127.0.0.1:${PORT}/health`);
  });
}

main().catch((error) => {
  console.error("mcp-runrunit HTTP server fatal error:", error);
  process.exit(1);
});
