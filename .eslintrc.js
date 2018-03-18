module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'max-len': [1, 120, 2, { 'ignoreComments': true }],
    'quote-props': [1, 'consistent-as-needed'],
    'radix': 0,
    'no-param-reassign': [2, {'props': false }],
    'no-bitwise': 0,
    'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  globals: {},
}
