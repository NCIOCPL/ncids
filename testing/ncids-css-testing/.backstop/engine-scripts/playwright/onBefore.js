module.exports = async (
	page,
	scenario,
	viewport,
	isReference,
	browserContext
) => {
	await require('./loadCookies')(browserContext, scenario);

	if (scenario.mockDate) {
		await require('./mockDate')(page, scenario);
	}
};
