const path = require('path');

const addRuleForSassToString = (config) => {
	// Add rendering of sass files to CSS strings for our storybook testing.
	// This config will allow you to do `import css from './yourfile.scss';`
	// and css will be a string. THIS IS ONLY FOR THE COMPONENTS FOLDER.
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			// This gets the output from the extract loader as a string. NOTE: newer
			// css-loaders allow you to setup the extractType to be just a string, but
			// we don't have it so deal with this.
			'raw-loader',
			// This knows how to get the css out from the "javascript" the css-loader
			// returns. (Loaders only return javascript modules)
			'extract-loader',
			// This takes the css output from sass and fiddles with it.
			'css-loader',
			// This is required to add vendor prefixes to stuff like mask styles. See
			// postcss.config.js to see the postcss plugins and browserslist in the
			// package.json for supported browsers.
			'postcss-loader',
			// This processes the sass file that is being handled by this test.
			{
				loader: 'sass-loader',
				options: {
					// sourceMap is required by resolve-url-loader to know what sass referenced
					// a url().
					sourceMap: true,
					sassOptions: {
						quietDeps: true,
						includePaths: [
							path.join(
								__dirname,
								'../../../node_modules/@nciocpl/ncids-css/packages'
							),
							path.join(
								__dirname,
								'../../../node_modules/@nciocpl/ncids-css/uswds-packages'
							),
						],
					},
				},
			},
		],
		include: [
			path.resolve(__dirname, '../stories/components'),
			path.resolve(__dirname, '../stories/design-tokens'),
			path.resolve(__dirname, '../stories/templates'),
			path.resolve(__dirname, '../stories/uswds-native'),
		],
	},
	{
		test: /\.twig$/,
		use: 'twigjs-loader',
	});
	config.resolve.extensions.push('.scss', '.twig');
	config.resolve.alias = {
		...config.resolve.alias,
		// TODO: This should be a resolve.alias object under the twig loader.
		// Webpack 4 does not support setting this on the rule, USWDS did it for
		// webpack 5.
		...{
			'@components': path.resolve(__dirname, '../stories/uswds-native'),
			'@templates': path.resolve(__dirname, '../stories/uswds-native/templates'),
			// Just in case USWDS updates paths, we only need to update one line here
			'@uswds-js': '@nciocpl/ncids-css/node_modules/@uswds/uswds/packages/uswds-core/src/js/index',
		},
	};
};

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: async (config, { configType }) => {
		addRuleForSassToString(config);

		config.stats = 'verbose';

		return config;
	},
	previewHead: (head) => (`
	 ${head}
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
   <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Poppins:wght@300;400;600&family=Roboto+Mono:wght@300;400;600&display=swap" rel="stylesheet" />
  `)
};
