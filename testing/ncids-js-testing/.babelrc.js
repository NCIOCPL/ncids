module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-typescript'],
	comments: false,
	env: {
		test: {
			plugins: ['@babel/plugin-transform-runtime'],
		},
	},
};
