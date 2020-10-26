const pkg = require('./package')

module.exports = {
  mode: 'modules',
  out: 'docs',
  exclude: ['**/node_modules/**', '**/rollup.*.*(ts|js)', '**/*+(.spec|.test|.e2e).ts'],
  name: pkg.name,
  excludePrivate: true,
  readme: 'README.md'
}
