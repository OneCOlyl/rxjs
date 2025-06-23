import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import xss from "eslint-plugin-xss";
import log from "eslint-plugin-log";
import html from "eslint-plugin-html";
import github from "eslint-plugin-github";
import eqeqeqFix from "eslint-plugin-eqeqeq-fix";
import preferArrow from "eslint-plugin-prefer-arrow";
import react from "eslint-plugin-react";

export default defineConfig([
  {
    ignores: ["node_modules/**", ".angular/**"],
  },
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    plugins: {
      js,
      import: importPlugin,
      promise,
      unicorn,
      sonarjs,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      xss,
      log,
      html,
      github,
      "eqeqeq-fix": eqeqeqFix,
      "prefer-arrow": preferArrow,
      react,
      prettier: prettierPlugin,
    },
    extends: [
      js.configs.recommended,
      prettier,
    ],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'warn',
        {
          allowNumber: true,
          allowBoolean: false,
          allowAny: false,
          allowNullish: false,
          allowRegExp: false,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        {
          allowArgumentsExplicitlyTypedAsAny: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowedNames: ['clearSStatuses', 'clearTypes'],
        },
      ],
      '@typescript-eslint/no-shadow': [
        'warn',
        {
          hoist: 'all',
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/naming-convention': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
      '@typescript-eslint/lines-between-class-members': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'no-unused-vars': 'off',
      'curly': ['error', 'all'],
      'arrow-body-style': 'error',
      'arrow-parens': ['error', 'always'],
      'brace-style': 'off',
      'max-len': [
        'warn',
        {
          code: 140,
          tabWidth: 2,
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'no-restricted-syntax': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-invalid-this': 'off',
      'no-underscore-dangle': 'off',
      'no-redeclare': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-irregular-whitespace': ['warn', { skipComments: true }],
      'no-console': [
        'warn',
        {
          allow: [
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context',
          ],
        },
      ],
      'class-methods-use-this': 'off',
      'max-classes-per-file': 'off',
      'camelcase': 'off',
      'consistent-return': 'off',
      'no-useless-return': 'off',
      'prettier/prettier': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'warn',
      'import/no-deprecated': 'off',
      'promise/catch-or-return': [
        'warn',
        {
          allowFinally: true,
        },
      ],
      'promise/always-return': [
        'error',
        {
          ignoreLastCallback: true,
        },
      ],
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-negated-condition': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-switch': 'off',
      'unicorn/prefer-add-event-listener': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/no-array-reduce': 'warn',
      'unicorn/no-array-for-each': 'warn',
      'unicorn/prefer-array-some': 'warn',
      'unicorn/prefer-spread': 'warn',
      'unicorn/prefer-array-find': 'warn',
      'unicorn/prefer-array-flat': 'warn',
      'unicorn/prefer-array-flat-map': 'warn',
      'unicorn/prefer-array-index-of': 'warn',
      'unicorn/prefer-string-slice': 'warn',
      'unicorn/prefer-string-starts-ends-with': 'warn',
      'unicorn/prefer-string-trim-start-end': 'warn',
      'unicorn/require-array-join-separator': 'warn',
      'sonarjs/no-same-line-conditional': 'off',
      'sonarjs/prefer-immediate-return': 'off',
      'sonarjs/cognitive-complexity': ['error', 20],
      'github/no-then': 'off',
      'github/array-foreach': 'off',
      eqeqeq: ['error', 'always'],
      'prefer-arrow/prefer-arrow-functions': 'warn',
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
]);
