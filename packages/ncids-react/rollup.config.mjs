import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
		{
				input: 'src/index.ts',
				output: [
						{
								file: './lib/cjs/index.js',
								format: 'cjs',
								sourcemap: true,
						},
						{
								file: './lib/esm/index.js',
								format: 'esm',
								sourcemap: true,
						},
				],
				plugins: [
						peerDepsExternal(),
						commonjs(),
						resolve(),
						typescript({ tsconfig: './tsconfig.json' }),
						babel.babel({
								exclude: 'node_modules/**',
								babelHelpers: 'bundled',
								presets: ['@babel/preset-env'],
						}),
				],
		},
		{
				input: 'lib/esm/types/index.d.ts',
				output: [{ file: 'dist/index.d.ts', format: 'esm' }],
				plugins: [dts()],
		},
];
