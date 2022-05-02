const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'js/[name].[contenthash].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: false,
							//modules: false,
							url: {
								filter: (uri) => {
									// Ignore absolute paths. (Legacy stuff)
									if (uri.startsWith('/')) {
										return false;
									} else if (uri.includes('/usa-icons-bg/')) {
										// Temp hack for ncids
										return false;
									}
									return true;
								},
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									path.join(__dirname, 'node_modules'),
									path.join(__dirname, '..', '..', '..', 'node_modules'),
								],
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		// Extracts CSS into separate files
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[contenthash].css',
			chunkFilename: '[id].css',
			// This little fella is required unless you want to spend hours figuring out
			// why css-loader/webpack does not generate correct paths for sprites.
			experimentalUseImportModule: false,
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), '...'],
		runtimeChunk: {
			name: 'runtime',
		},
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
