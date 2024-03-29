module.exports = {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-prettier/recommended',
	],
	rules: {
		'no-descending-specificity': null,
		'no-duplicate-selectors': null,
		'selector-class-pattern': [
			'^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
			{
				message:
					'Class selectors should be named using Two Dashes Style BEM format. See: https://en.bem.info/methodology/naming-convention/#two-dashes-style',
			},
		],
	},
};
