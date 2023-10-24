import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	verbose: true,
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	testMatch: ['**/?(*.)+(test).[t]s?(x)'],
	testPathIgnorePatterns: ['lib'],
	setupFilesAfterEnv: ['./rtl.setup.ts'],
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 85,
			lines: 85,
		},
	},
};

export default config;
