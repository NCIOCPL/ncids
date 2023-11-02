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
};
