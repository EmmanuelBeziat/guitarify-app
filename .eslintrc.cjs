/* eslint-env node */
module.exports = {
  root: true,
	env: {
		browser: true,
		node: true
	},
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
	rules: {
		indent: ['error', 'tab', { 'SwitchCase': 1 }],
		'no-console': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-return-assign': 0,
		'no-tabs': 0,
		'no-undef': 0,
		'brace-style': 0,
		'comma-dangle': ['error', 'only-multiline'],
		'no-irregular-whitespace': 0,
		'vue/multi-word-component-names': 0
	}
}
