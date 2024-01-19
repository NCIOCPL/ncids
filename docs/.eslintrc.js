module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'@nciocpl/eslint-config-react'
	],
	globals: {
		getFixture: true,
		__PATH_PREFIX__: 'readonly'
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
				TwigCode: 'readonly',
				NciDsJsInit: 'readonly',
			},
		},
	],
};
