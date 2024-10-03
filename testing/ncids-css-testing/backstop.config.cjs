const glob = require('./util/glob_hack/index.cjs');
const pathUtil = require('path');

const defaultPath =
	process.env.CI === 'true'
		? 'http://localhost:6006/'
		: 'http://host.docker.internal:6006/';

const path = process.env.BACKSTOP_BASE_URL ? process.env.BACKSTOP_BASE_URL : defaultPath;

// Copying environment variables to docker container
const additionalVars = ['CI', 'BACKSTOP_BASE_URL'].reduce(
	(ac, varName) =>
		process.env[varName] ? `${ac}-e ${varName}='${process.env[varName]}' ` : ac,
	' ',
);
const dockerCommandTemplate = `docker run --rm -i --net=host ${additionalVars} --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}`;

// Loop through our list of component scenarios, extract those scenarios,
// and then setup proper urls for each scenario.
const scenarioFiles = glob.sync('src/stories/**/*.scenarios.cjs');

// Ensure labels are all unique.
const labels = new Set();
const checkUniqueLabel = (value) => {
	try {
		if (labels.has(value)) {
			throw new Error(`Label "${value}" already exists`);
		} else {
			labels.add(value);
			return true;
		}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const scenariosExpanded = scenarioFiles.reduce((ac, scenarioFile) => {
	const scenarios = require(pathUtil.resolve(__dirname, scenarioFile));
	const cleanedScenarios = scenarios.map((scenario) => {
		checkUniqueLabel(scenario.label);

		return ({
			...scenario,
			url: `${path}iframe.html?id=${scenario.storyId}&args=&viewMode=story`,
		});
	});
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
		{
			label: 'widescreen',
			width: 1400,
			height: 768,
		},
	],
	onBeforeScript: 'playwright/onBefore.cjs',
	onReadyScript: 'playwright/onReady.cjs',
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
