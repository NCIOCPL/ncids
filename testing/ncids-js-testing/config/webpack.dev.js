const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
	// Set the mode to development or production
	mode: 'development',

	// Control how source maps are generated
	devtool: 'inline-source-map',

	// Spin up a server for quick development
	devServer: {
		historyApiFallback: true,
		static: paths.public,
		open: true,
		compress: true,
		hot: true,
		liveReload: false,
		port: 8080,
		// The watch should not be needed?
		// watchFiles: ['src/**/*.ts', 'src/**/*.scss', 'public/**/*.html'],
	},

	module: {
		rules: [
			// Styles: Inject CSS into the head with source maps
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
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
						options: {
							sourceMap: true,
						},
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
							sourceMap: true,
						},
					},
				],
			},
		],
	},
});
