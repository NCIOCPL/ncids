import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from "./package.json";

export default {
	input: "src/index.js",
	output: [
		{
			// This is an easy way to keep your `main` in sync between rollup & the package
			file: packageJson.main,
			format: "cjs",
			sourcemap: true,
		},
	],
	plugins: [
		// This prevents needing an additional `external` prop in this config file by automaticall excluding peer dependencies
		peerDepsExternal(),
		// Convert CommonJS modules to ES6
		commonjs(),
		// "...locates modules using the Node resolution algorithm"
		resolve(),
		// Do Babel transpilation
		babel({
			exclude: "node_modules/**",
			babelHelpers: "bundled",
		}),
	],
};
