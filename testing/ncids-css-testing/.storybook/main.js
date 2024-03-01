const path = require('path');

/**
 * This gets the package.json of ncids-js and generates an array of webpack
 * aliases for our NCIDS exports.
 */
const getNCIDSAliases = () => {
	const ncidsJsMainPath = path.join(
		path.dirname(require.resolve('@nciocpl/ncids-js')),
		'../..'
	);

	// The irony here is node, where this config is running, *will* honor the
	// exports of a package, so we need to load the package without requiring it.
	const packageJsonPath = path.join(
		ncidsJsMainPath,
		'package.json'
	);

	const { exports: packageExports } = require(packageJsonPath);

	// Transform the exports into aliases.
	const aliases = Object.entries(packageExports).reduce(
		(ac, [key, info]) => {
			if (key !== '.' && info.import) {
				return {
					...ac,
					[ path.join('@nciocpl/ncids-js/' + key) ]: path.join(ncidsJsMainPath, info.import),
				};
			}
		},
		{}
	);

	return aliases;
}

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
			require.resolve('raw-loader'),
			// This knows how to get the css out from the "javascript" the css-loader
			// returns. (Loaders only return javascript modules)
			require.resolve('extract-loader'),
			// This takes the css output from sass and fiddles with it.
			require.resolve('css-loader'),
			// This is required to add vendor prefixes to stuff like mask styles. See
			// postcss.config.js to see the postcss plugins and browserslist in the
			// package.json for supported browsers.
			require.resolve('postcss-loader'),
			// This processes the sass file that is being handled by this test.
			{
				loader: require.resolve('sass-loader'),
				options: {
					// sourceMap is required by resolve-url-loader to know what sass referenced
					// a url().
					sourceMap: true,
					sassOptions: {
						quietDeps: true,
						includePaths: [
							path.join(
								__dirname,
								'../node_modules/@nciocpl/ncids-css/packages'
							),
							path.join(
								__dirname,
								'../node_modules/@nciocpl/ncids-css/uswds-packages'
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
			path.resolve(__dirname, '../stories/uswds-undocumented'),
		],
	},
	{
		test: /\.twig$/,
		use: require.resolve('twigjs-loader'),
	});

	config.resolve.extensions.push('.scss', '.twig');
	config.resolve.alias = {
		...config.resolve.alias,
		...{
			// This block is for twig resolution, which should be set on
			// the twig rule with "resolve.alias" when we move to webpack 5. WP4
			// does not support doing this. (See USWDS storybook for a working
			// version.)
			'@components': path.resolve(__dirname, '../stories/uswds-native'),
			'@templates': path.resolve(__dirname, '../stories/uswds-native/templates'),
		},
		...{
			// This block is because Webpack 4 does not know how to use the "exports"
			// key in package.json. So we need to setup the aliases for USWDS and
			// NCIDS. When we move to webpack 5, this entire block should go away.
			'@uswds/uswds/src/js/components': '@uswds/uswds/packages/uswds-core/src/js/index',
			...getNCIDSAliases(),
		}
	};
};

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	staticDirs: ['../public'],
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
