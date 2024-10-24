import globals from 'globals';
import tseslint from 'typescript-eslint';


export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true, // or path to your tsconfig.json
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
