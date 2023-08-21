const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');
const glob = require('glob');

// We don't want all the junk in index.ts for the auto init example page.
const customEntry = {
	autoInit: path.resolve(
		__dirname,
		'../public/example-pages/auto-init-example.html'
	),
};
const excluded = Object.values(customEntry);

// HTML Files for HTMLWebpackPlugin. We need to add a plugin instance for
// each file.
const htmlFiles = glob.sync(path.join(paths.public, '**', '*.html'), {
	ignore: ['public/_includes', ...excluded],
});

module.exports = {
	// Where webpack looks to start building the bundle
	entry: {
		main: paths.src + '/index.ts',
		autoInit: paths.src + '/auto-init.ts',
	},

	// Where webpack outputs the assets and bundles
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/',
		clean: true,
	},

	// Customize the webpack build process
	plugins: [
		// Copies files from target to destination folder
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.public,
					to: 'assets',
					globOptions: {
						ignore: ['*.DS_Store'],
					},
					noErrorOnMissing: true,
				},
			],
		}),

		// Generates HTML files from a template
		// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
		...htmlFiles.map(
			(htmlFile) =>
				new HtmlWebpackPlugin({
					inject: true,
					template: htmlFile.replace(paths.public, 'public'),
					filename: htmlFile.replace(paths.public + '/', ''),
					minify: false,
					meta: {
						charset: { charset: 'UTF-8' },
					},
					chunks: ['main'],
				})
		),
		new HtmlWebpackPlugin({
			inject: true,
			template: customEntry.autoInit.replace(paths.public, 'public'),
			filename: customEntry.autoInit.replace(paths.public + '/', ''),
			minify: false,
			meta: {
				charset: { charset: 'UTF-8' },
			},
			chunks: ['autoInit'],
		}),
	],

	// Determine how modules within the project are treated
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				use: {
					loader: 'babel-loader',
				},
				include: paths.src,
			},

			// Images: Copy image files to build folder
			// { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

			// Fonts and SVGs: Inline files
			{
				test: /\.svg/,
				type: 'asset/inline',
			},
		],
	},

	resolve: {
		modules: [paths.src, 'node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
};
