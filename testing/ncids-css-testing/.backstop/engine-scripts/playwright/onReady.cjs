module.exports = async (
	page,
	scenario,
	viewport,
	isReference,
	browserContext
) => {
	console.log('SCENARIO > ' + scenario.label);

	// Wait until there are no more than network connections for at least 500ms
	await page.waitForLoadState('networkidle');
	await require('./clickAndHoverHelper.cjs')(page, scenario);
  await require('./overrideCSS.cjs')(page, scenario);

	if (scenario.mockFileUpload) {
		await require('./mockFileUpload.cjs')(page, scenario);
	}
};
