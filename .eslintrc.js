module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'

  ],
  rules: {

    semi: 'error',
    properties: 0,
    camelcase: 0,
    'react/prop-types': 0,
    'multiline-ternary': 0,
    'func-call-spacing': 0,
    indent: 0,
    'no-unexpected-multiline': 0

  }
}
