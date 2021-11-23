module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
	plugins: ['prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': ['error'],
	},
};
