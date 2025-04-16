import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
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
};

/*
 * todo
 *  - js doc
 *  - gatsby
 *  - ncids-minimal.min...
 *  - ncids-full.min...
 */

/*
//<script src="dist/ncids.min.js"></script>
<script src="http://designsystem.cancer.gov/cdn/ncids-vX.Y.Z/ncids.min.js"></script>
---
<script>
	const result = NCIDS.someFunction();
	console.log(result);
</script>
*/

/*
<script type="module">
  //import { someFunction } from './dist/ncids.esm.min.js';
	import { someFunction } from 'http://designsystem.cancer.gov/cdn/ncids-vX.Y.Z/ncids.esm.min.js';

	const result = someFunction();
	console.log(result);
</script>
*/
