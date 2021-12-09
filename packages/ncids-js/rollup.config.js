import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

export default {
	input: './src/index.js',
	output: [
		{
			file: 'ncids.js',
			format: 'esm',
		},
		{
			file: 'ncids.min.js',
			format: 'esm',
			plugins: [terser()],
		},
	],
	plugins: [
		eslint({}),
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/preset-env'],
		}),
	],
};
