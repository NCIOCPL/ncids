module.exports = async (
	page,
	scenario,
	viewport,
	isReference,
	browserContext
) => {
	console.log('SCENARIO > ' + scenario.label);
	// Wait until there are no more than network connections for at least 500ms
	// TODO: See if adding an element to our React testing component with a waitfor selector here would be better.
	await page.waitForLoadState('networkidle');

	await require('./clickAndHoverHelper.cjs')(page, scenario);
  await require('./overrideCSS.cjs')(page, scenario);

	if (scenario.mockFileUpload) {
		await require('./mockFileUpload.cjs')(page, scenario);
	}
};
