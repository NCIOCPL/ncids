module.exports = async (
	page,
	scenario,
	viewport,
	isReference,
	browserContext
) => {
	console.log('SCENARIO > ' + scenario.label);
	await require('./clickAndHoverHelper')(page, scenario);
  await require('./overrideCSS')(page, scenario);

	if (scenario.mockFileUpload) {
		await require('./mockFileUpload')(page, scenario);
	}
};
