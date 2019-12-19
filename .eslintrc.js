/** @format */

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    // Admit use of console.log and derivates in app
    'no-console': 0,
    'prettier/prettier': 'error',
  },
  globals: {
    graphql: true,
    window: true,
  },
  env: {
    browser: true,
  },
};
