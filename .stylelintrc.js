module.exports = {
  processors: ['stylelint-processor-html'],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  extends: 'stylelint-config-standard',
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
