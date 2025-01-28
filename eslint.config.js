import eslintJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  // Базовые правила ESLint
  eslintJs.configs.recommended,

  // TypeScript правила
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-unused-vars': 'warn',
    },
  },

  // Prettier интеграция
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  // Общие настройки
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        ...globals.node,
        ...globals.browser,
      },
    },
    ignores: ['build/**', 'node_modules/**'],
    rules: {
      // Ваши кастомные правила
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-unused-vars': 'warn',
    },
  },
];
