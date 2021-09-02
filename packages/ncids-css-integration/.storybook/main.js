const path = require('path');

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-scss',
	],

	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						sassOptions: {
							outputStyle: 'compressed',
							includePaths: [
								path.join(__dirname, 'node_modules'),
								path.join(__dirname, '..', '..', 'node_modules'),
							],
						},
					},
				}
			],
			include: path.resolve(__dirname, '../'),
		});

		return config;
	},
};
