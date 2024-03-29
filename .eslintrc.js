module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 'off',
    'max-len': 'off',
    '@next/next/no-img-element': 'off',
  },
};
