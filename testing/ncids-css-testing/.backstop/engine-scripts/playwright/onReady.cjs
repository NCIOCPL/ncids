module.exports = async (
	page,
	scenario,
	viewport,
	isReference,
	browserContext
) => {
	console.log('SCENARIO > ' + scenario.label);
	await require('./clickAndHoverHelper.cjs')(page, scenario);
  await require('./overrideCSS.cjs')(page, scenario);

	if (scenario.mockFileUpload) {
		await require('./mockFileUpload.cjs')(page, scenario);
	}
};
