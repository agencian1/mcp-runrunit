#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createMcpServer } from "./adapters/driving/app.js";
import { captureExceptionWithContext, flushAndClose, initSentry } from "./observability/sentry.js";

initSentry("stdio");

async function main() {
  const server = createMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("mcp-runrunit: running on stdio");
}

main().catch((error) => {
  captureExceptionWithContext(error, {
    tags: { error_kind: "bootstrap_fatal" },
  });
  console.error("mcp-runrunit fatal error:", error);
  void flushAndClose().finally(() => {
    process.exit(1);
  });
});
