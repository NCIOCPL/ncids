const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./scss/ncids.scss'],
	resolve: {
		symlinks: false,
		modules: [
			path.resolve(__dirname, 'node_modules'),
			'node_modules',
			'../../node_modules',
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: 'static',
          to: 'static'
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: 'css/', name: '[name].min.css' },
					},
					'extract-loader',
					'css-loader?-url',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									path.join(__dirname, 'node_modules'),
									path.join(__dirname, '..', '..', 'node_modules'),
								],
							},
						},
					},
				],
			},
		],
	},
};
