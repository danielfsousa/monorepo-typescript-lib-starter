module.exports = {
  extends: [
    'standard-with-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard'
  ],
  parserOptions: {
    project: require('path').join(__dirname, 'tsconfig.base.json'),
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-redeclare': ['off']
  }
}
