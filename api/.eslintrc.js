// To install packages could be like that:
// npm install --save-dev eslint@8.57.0 eslint-config-airbnb-base@15.0.0 eslint-plugin-import@2.29.1
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
