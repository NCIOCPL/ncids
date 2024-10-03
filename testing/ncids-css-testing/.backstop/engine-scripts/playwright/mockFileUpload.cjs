const fs = require('fs');
module.exports = async (page, scenario) => {
	// Create temp file
	const filePath = './file.txt';
	const fileContent = 'chicken';
	fs.writeFileSync(filePath, fileContent);

	// Click input
	await page.locator(scenario.mockFileUpload).click();

	// Upload temp file
	await page.locator(scenario.mockFileUpload).setInputFiles(filePath);

	// Remove the temp file
	fs.unlinkSync(filePath);
};
