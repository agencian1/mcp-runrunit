import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist/', 'node_modules/', 'coverage/', 'build/'] },
  eslint.configs.recommended,
  eslintConfigPrettier,
];
