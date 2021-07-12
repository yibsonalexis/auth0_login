module.exports = {
  root: true,
  // extends: '@react-native-community',
  extends: ['@react-native-community', 'plugin:react-hooks/recommended'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
