module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
  plugins: ['prettier-plugin-packagejson'],
};
