module.exports = {
	setupFilesAfterEnv: ["./rtl.setup.js"],
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 85,
			lines: 85,
		},
	},
	coverageReporters: ['cobertura', 'lcov', 'text'],
};
