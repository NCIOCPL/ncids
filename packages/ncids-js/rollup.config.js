import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

export default {
	input: './lib/index.js',
	output: [
		{
			file: './dist/ncids.js',
			format: 'esm',
		},
		{
			file: './dist/ncids.min.js',
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
