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
			url:
				'http://localhost:6006/iframe.html?id=components-usa-list-usa-list--default&args=&viewMode=story',
		},
		{
			label: 'usa-list unstyled',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-list-unstyled--unstyled&args=&viewMode=story',
		},
		{
			label: 'usa-button default',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-button-button--primary&args=&viewMode=story',
		},
		{
			label: 'usa-button default hover',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-button-button--primary&args=&viewMode=story',
			hoverSelector: 'button',
		},
		{
			label: 'usa-button default click',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-button-button--primary&args=&viewMode=story',
			clickSelector: 'button',
		},
		{
			label: 'usa-button secondary',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-button-button--secondary&args=&viewMode=story',
		},
		{
			label: 'usa-button secondary hover',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-button-button--secondary&args=&viewMode=story',
			hoverSelector: 'button',
		},
		{
			label: 'usa-button secondary click',
			url:
				'http://localhost:6006/iframe.html?id=components-usa-button-button--secondary&args=&viewMode=story',
			clickSelector: 'button',
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
};
