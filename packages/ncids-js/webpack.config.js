const path = require('path');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		//output bundled files to dist
		path: path.resolve(__dirname, 'dist'),
		filename: 'ncids.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						comments: false,
					},
				},
			},
		],
	},
};
