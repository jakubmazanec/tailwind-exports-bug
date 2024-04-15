module.exports = {
  root: true,
  extends: [
    '@jakubmazanec/eslint-config',
    '@jakubmazanec/eslint-config/nodejs',
    '@jakubmazanec/eslint-config/prettier',
  ],
  ignorePatterns: [
    '*.d.ts',
    '*.json',
    '*.md',
    '*.mdx',
    '.cache/',
    '.turbo/',
    'bin/',
    'build/',
    'coverage/',
    'node_modules/',
    'public/',
  ],
};
