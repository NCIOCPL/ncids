const path =
	process.env.CI === 'true'
		? 'http://localhost:6006/'
		: 'http://host.docker.internal:6006/';

// Copying environment variables to docker container
const additionalVars = ['CI'].reduce(
	(ac, varName) =>
		process.env[varName] ? `${ac}-e ${varName}='${process.env[varName]}' ` : ac,
	' '
);
const dockerCommandTemplate = `docker run --rm -i --net=host ${additionalVars} --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}`;

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
	onBeforeScript: 'puppet/onBefore.js',
	onReadyScript: 'puppet/onReady.js',
	scenarios: [
		{
			label: 'usa-list default',
			url: `${path}iframe.html?id=components-usa-list--default&args=&viewMode=story`,
		},
		{
			label: 'usa-list unstyled',
			url: `${path}iframe.html?id=components-usa-list--unstyled&args=&viewMode=story`,
		},
		{
			label: 'usa-footer slim',
			url: `${path}iframe.html?id=components-usa-footer--slim&viewMode=story`,
		},
		{
			label: 'usa-footer medium',
			url: `${path}iframe.html?id=components-usa-footer--medium&viewMode=story`,
		},
		{
			label: 'usa-footer big',
			url: `${path}iframe.html?id=components-usa-footer--big&viewMode=story`,
		},
		{
			label: 'usa-footer nci-big',
			url: `${path}iframe.html?id=components-usa-footer--nci-big&viewMode=story`,
		},
	],
	paths: {
		bitmaps_reference: '.backstop/reference',
		bitmaps_test: '.backstop/test',
		engine_scripts: '.backstop/engine-scripts',
		html_report: '.backstop/html-report',
		ci_report: '.backstop/ci-report',
	},
	report: ['browser'],
	engine: 'puppeteer',
	engineOptions: {
		args: ['--no-sandbox'],
	},
	asyncCaptureLimit: 5,
	asyncCompareLimit: 50,
	debug: false,
	debugWindow: false,
	dockerCommandTemplate,
};