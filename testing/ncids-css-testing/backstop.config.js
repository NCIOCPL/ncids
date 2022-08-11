const glob = require('./util/glob_hack');
const pathUtil = require('path');

const path =
	process.env.CI === 'true' || process.platform === 'linux'
		? 'http://localhost:6006/'
		: 'http://host.docker.internal:6006/';

// Copying environment variables to docker container
const additionalVars = ['CI'].reduce(
	(ac, varName) =>
		process.env[varName] ? `${ac}-e ${varName}='${process.env[varName]}' ` : ac,
	' '
);
const dockerCommandTemplate = `docker run --rm -i --net=host ${additionalVars} --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}`;

// Loop through our list of component scenarios, extract those scenarios,
// and then setup proper urls for each scenario.
const scenarioFiles = glob.sync('stories/**/*.scenarios.js');

const scenariosExpanded = scenarioFiles.reduce((ac, scenarioFile) => {
	const scenarios = require(pathUtil.resolve(__dirname, scenarioFile));
	const cleanedScenarios = scenarios.map((scenario) => ({
		...scenario,
		url: `${path}iframe.html?id=${scenario.storyId}&args=&viewMode=story`,
	}));
	return [...ac, ...cleanedScenarios];
}, []);

module.exports = {
	id: 'ncids',
	viewports: [
		{
			label: 'mobile',
			width: 479,
			height: 360,
		},
		{
			label: 'mobile-lg',
			width: 480,
			height: 360,
		},
		{
			label: 'tablet',
			width: 640,
			height: 360,
		},
		{
			label: 'desktop',
			width: 1024,
			height: 768,
		},
	],
	onBeforeScript: 'playwright/onBefore.js',
	onReadyScript: 'playwright/onReady.js',
	scenarios: [...scenariosExpanded],
	paths: {
		bitmaps_reference: '.backstop/reference',
		bitmaps_test: '.backstop/test',
		engine_scripts: '.backstop/engine-scripts',
		html_report: '.backstop/html-report',
		ci_report: '.backstop/ci-report',
	},
	report: ['browser'],
	engine: 'playwright',
	engineOptions: {
		browser: 'chromium',
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	},
	asyncCaptureLimit: 5,
	asyncCompareLimit: 50,
	debug: false,
	debugWindow: false,
	dockerCommandTemplate,
	misMatchThreshold: 0,
	resembleOutputOptions: {
		usePreciseMatching: true,
	},
};
