#!/usr/bin/env node
import { validateCommitMessageFile } from '../dist/infrastructure/validate-commit-message.js';

const msgFile = process.argv[2];
if (!msgFile) {
  console.error('Uso: node scripts/validate-commit-msg.mjs <ficheiro-da-mensagem>');
  process.exit(1);
}

const error = validateCommitMessageFile(msgFile);
if (error) {
  console.error(`\nCommit rejeitado:\n${error}\n`);
  process.exit(1);
}
