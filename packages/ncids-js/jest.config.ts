import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	testMatch: ['**/?(*.)+(test).[t]s?(x)'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.test.{js,jsx,ts,tsx}',
		'!src/**/*.d.ts',
		'!src/index.ts',
	],
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 85,
			lines: 85,
		},
	},
};
export default config;
