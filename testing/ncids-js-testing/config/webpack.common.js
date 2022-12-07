const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');
var fs = require('fs');
const glob = require('glob');

// HTML Files for HTMLWebpackPlugin. We need to add a plugin instance for
// each file.
const htmlFiles = glob.sync(
	path.join(paths.public,  '**', '*.html'),
	{
		ignore: [ 'public/_includes' ],
	}
);

module.exports = {
	// Where webpack looks to start building the bundle
	entry: [paths.src + '/index.ts'],

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
				})
		),
	],

	// Determine how modules within the project are treated
	module: {
		rules: [
			// JavaScript: Use Babel to transpile JavaScript files
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-typescript', { allowNamespaces: true }],
							],
						},
					},
				],
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
		alias: {
			'@': paths.src,
			assets: paths.public,
			// Stupid hack cause USWDS does not list all the icons in the exports of
			// their package.json. Maybe stupid webpack handling these. :|
			uswds: path.join(__dirname, '..', '..', '..', 'node_modules/uswds'),
		},
	},
};
