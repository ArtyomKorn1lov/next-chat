import { Config } from '@eslint/config-helpers';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';
import json from '@eslint/json';

const eslintConfig: Config[] = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/public/**', '**/*.min.js', '**/index.html', '**/package-lock.json'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: ['ts/recommended', prettierConfig],
    plugins: {
      prettier: prettierPlugin,
      ts: tsEslint,
    },
    rules: {
      // @ts-expect-error
      ...prettierPlugin?.configs?.recommended?.rules,
      'vue/multi-word-component-names': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'no-console': 'off',
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      eqeqeq: 'warn',
      curly: 'warn',
      'no-else-return': 'warn',
      'object-property-newline': 'warn',
      'no-irregular-whitespace': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTernary: true,
          allowShortCircuit: true,
          allowTaggedTemplates: true,
        },
      ],
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
