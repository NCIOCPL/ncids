const path = require('path');
const executeCommand = require('backstopjs/core/command');
const makeConfig = require('backstopjs/core/util/makeConfig');
const mockCreateBitmaps = require('./mock-create-bitmaps');

/**
 * This is the script entry point and it will mimick the code
 * that would be run by backstopjs/core/runner + the steps
 * leading up to an execution of _report.
 */
const main = async () => {

	// Loads the config as if we are running test, which is what would normally
	// run for a comparison.
	const config = makeConfig('test', {
		config: path.join(__dirname, '..', '..', 'backstop.config.js'),
	});

	// Don't open the browser window with the report when this is done.
	config.openReport = false;

	// This is going to write out a config file for comparison, because Docker.
	await mockCreateBitmaps(config);

	try {
		await executeCommand('_report', config);
	} catch (err) {
		if (err.message === 'Mismatch errors found.') {
			// This is a good error. We can leave for the workflow to carry on.
			process.exit(0);
		} else {
			// This is bad and should stop the process.
			console.error(`NCIDS Backstop Ref Approval failed`);
			console.error(err);
			process.exit(1);
		}
	}
};

main();
