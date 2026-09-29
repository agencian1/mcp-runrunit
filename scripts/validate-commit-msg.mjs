#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const msgFile = process.argv[2];
if (!msgFile) {
  console.error('Uso: node scripts/validate-commit-msg.mjs <ficheiro-da-mensagem>');
  process.exit(1);
}

const script = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../cursor-skills/platforms/github/format-commit-message/validate-commit-msg.sh',
);

const result = spawnSync('bash', [script, msgFile], { stdio: 'inherit' });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
