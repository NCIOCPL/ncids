const path = require('path');

module.exports = {
	setupFilesAfterEnv: ["./rtl.setup.js"],
	testEnvironment: 'jsdom',
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 85,
			lines: 85,
		},
	},
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.test.{js,jsx,ts,tsx}',
		'!**/__tests__/**',
		'!src/**/*.d.ts',
		'!src/**/*.mock.ts',
		'!src/**/index.ts',
		'!src/index.ts',
	],
	coverageReporters: ['cobertura', 'lcov', 'text'],
	coverageDirectory: path.join(
		__dirname,
		'..',
		'..',
		'reports',
		'coverage',
		'ncids-react'
	),
};
