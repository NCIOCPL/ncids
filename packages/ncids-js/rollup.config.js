import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import babel from '@rollup/plugin-babel';

export default {
	input: './lib/esm/index.js',
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
		cleaner({
			targets: ['./dist/'],
		}),
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/preset-env'],
		}),
	],
};
