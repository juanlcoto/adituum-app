const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
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
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,
    quotes: [RULES.OFF, 'double'],
    camelcase: RULES.OFF,

    'no-var': RULES.OFF,
    'no-tabs': RULES.OFF,
    'brace-style': RULES.OFF,
    'no-template-curly-in-string': RULES.OFF
  }
}
