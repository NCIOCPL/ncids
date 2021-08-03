module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	globals: {
		getFixture: true,
	},
	overrides: [
		{
			files: ['*.md', '*.mdx'],
			// parser: "eslint-mdx", // this is set by `plugin:mdx/recommended` automatically
			extends: ['plugin:mdx/recommended'],
			// If you add any ShortCodes to the MDXProvider in wrap-root-element, then add them
			// here.
			globals: {
				Tabs: 'readonly',
				TabItem: 'readonly',
				Code: 'readonly',
			},
		},
	],
};
