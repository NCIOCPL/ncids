import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/ncids.min.js',
				format: 'umd',
				name: 'NCIDS', // window.NCIDS
				sourcemap: true,
			},
			{
				file: 'dist/ncids.esm.min.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig-rollup.json',
			}),
			terser(),
		],
	},
	{
		input: 'src/ncids-minimal.ts',
		output: [
			{
				file: 'dist/ncids-minimal.min.js',
				format: 'umd',
				name: 'NCIDS', // window.NCIDS
				sourcemap: true,
			},
			{
				file: 'dist/ncids-minimal.esm.min.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig-rollup.json',
			}),
			terser(),
		],
	},
	{
		input: 'src/ncids-full.ts',
		output: [
			{
				file: 'dist/ncids-full.min.js',
				format: 'umd',
				name: 'NCIDS', // window.NCIDS
				sourcemap: true,
			},
			{
				file: 'dist/ncids-full.esm.min.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig-rollup.json',
			}),
			terser(),
		],
	},
];

