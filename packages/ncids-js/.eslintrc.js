module.exports = {
	extends: [
		'@nciocpl/eslint-config-vanilla-js',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: true,
		ecmaVersion: 8,
	},
	// Plugins are configured by the recommended extensions above
	rules: {},
};
