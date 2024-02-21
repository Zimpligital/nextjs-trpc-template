/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
const config = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  endOfLine: 'lf',
  singleAttributePerLine: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

export default config
