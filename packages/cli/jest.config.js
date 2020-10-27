const path = require('path')
const pkg = require('./package')

module.exports = {
  preset: 'ts-jest',
  displayName: pkg.name,
  name: pkg.name,
  transformIgnorePatterns: ['/node_modules/', './dist'],
  rootDir: './',
  globals: {
    'ts-jest': {
      tsconfig: path.join(__dirname, './tsconfig.json')
    }
  }
}
