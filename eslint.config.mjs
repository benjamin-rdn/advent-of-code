import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      sonarjs,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      curly: 2,
      'sonarjs/no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      //'brace-style': [2, '1tbs', { allowSingleLine: false }]
    },
  },
];
