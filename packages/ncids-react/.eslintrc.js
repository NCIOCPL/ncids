module.exports = {
	extends: ["@nciocpl/eslint-config-react", "plugin:storybook/recommended"],
	// Plugins are configured by the recommended extensions above
	rules: {
		"react/display-name": "off",
		"react-hooks/exhaustive-deps": "off",
	},
};
