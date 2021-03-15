const path = require("path");
module.exports = {
	mode: "development",
	entry: "/index.jsx",
	output: {
		//output bundled files to dist
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						comments: false,
					},
				},
			},
		],
	},
};
