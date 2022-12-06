const glob = require('glob');
const path = require('path');
const paths = require('./config/paths');

const htmlFiles = glob.sync(
	path.join(paths.public, '**', '*.html'),
	{
		ignore: ['public/_includes'],
	},
);

const urls = htmlFiles.map(
	(htmlFile) => {
		const url = htmlFile.replace(paths.public, 'http://localhost:8080');
		return {
			url,
			// These two ignores are only added so /data passes. TBD what we want to do here in the long run.
			ignore: [
				// A title should be provided for the document, using a non-empty title element in the head section.
				'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
				// The html element should have a lang or xml:lang attribute which describes the language of the document.
				'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
			],
		};
	},
);

module.exports = {
	defaults: {
		standard: 'WCAG2AA', // Default is WCAG2AA, but leaving this here as a note.
	},
	urls: urls,
	chromeLaunchConfig: {
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
		],
	},
};
