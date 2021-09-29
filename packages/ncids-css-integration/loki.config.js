module.exports = {
	diffingEngine: 'pixelmatch',
	configurations: {
		desktop: {
			target: 'chrome.app',
			width: 1024,
			height: 768,
			deviceScaleFactor: 1,
			mobie: false,
		},
		tablet: {
			target: 'chrome.app',
			width: 640,
			height: 360,
			deviceScaleFactor: 1,
			mobie: false,
		},
		'mobile-lg': {
			target: 'chrome.app',
			width: 480,
			height: 360,
			deviceScaleFactor: 1,
			mobie: false,
		},
		mobile: {
			target: 'chrome.app',
			width: 479,
			height: 360,
			deviceScaleFactor: 1,
			mobie: false,
		},
	},
	fileNameFormatter: ({ configurationName, kind, story }) =>
		`${configurationName}/${kind}/${story}`.toLowerCase(),
};
