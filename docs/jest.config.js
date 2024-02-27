const path = require('path');
module.exports = {
	collectCoverage: true,
	// This needs to be turned on and the coverage
	// improved.
	// collectCoverageFrom: [
	// 	'src/**/*.{js,jsx,ts,tsx}',
	// 	'!src/**/*.test.{js,jsx,ts,tsx}',
	// 	'!**/__tests__/**',
	// 	'!src/**/*.d.ts',
	// 	'!src/**/*.mock.ts',
	// 	'!src/**/index.ts',
	// 	'!src/index.ts',
	// ],
	coverageReporters: ['cobertura', 'lcov', 'text'],
	coverageDirectory: path.join(__dirname, '..', 'reports', 'coverage', 'docs'),
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 85,
			lines: 85,
		},
	},
	transform: {
		'^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
	},
	testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``,
	},
	testEnvironment: 'jsdom',
	setupFiles: [`<rootDir>/loadershim.js`],
	setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
};
