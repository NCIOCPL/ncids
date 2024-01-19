// NOTE: We set the default linting to be Javascript, and then use an
// override for TS files to use our TS linter rules. This is because the TS
// linting rules throw all sorts of errors for the config files when we
// require instead of importing. I tried to make TS the default and override
// for JS, but that did not work.
module.exports = {
	root: true,
	extends: '@nciocpl/eslint-config-vanilla-js',
	rules: {},
	overrides: [
		{
			files: ['**/*.ts'],
			extends: '@nciocpl/eslint-config-vanilla-ts',
			rules: {},
		},
	],
};
