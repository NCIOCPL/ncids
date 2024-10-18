module.exports = [
	// Default English
	{
		label: 'usa-footer nci-big',
		storyId: 'components-footer-variants-nci-big--english',
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
				height: 360,
			},
		],
	},

	// Default Spanish
	{
		label: 'usa-footer nci-big spanish',
		storyId: 'components-footer-variants-nci-big--spanish',
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
				height: 360,
			},
		],
	},

	// Primary links, mobile only
	{
		label: 'usa-footer nci-big primary-link click',
		storyId: 'components-footer-variants-nci-big--english',
		clickSelector: '.usa-footer__nci-collapse-header',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// Secondary links, mobile
	{
		label: 'usa-footer nci-big primary-link then secondary-link click',
		storyId: 'components-footer-variants-nci-big--english',
		clickSelector: [
			'.usa-footer__nci-collapse-header',
			'.usa-footer__secondary-link a',
		],
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// Secondary links, desktop
	{
		label: 'usa-footer nci-big secondary-link hover',
		storyId: 'components-footer-variants-nci-big--english',
		hoverSelector: '.usa-footer__secondary-link a',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 360,
			},
		],
	},
	{
		label: 'usa-footer nci-big secondary-link click',
		storyId: 'components-footer-variants-nci-big--english',
		clickSelector: '.usa-footer__secondary-link a',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 360,
			},
		],
	},

	// Contact us links
	{
		label: 'usa-footer nci-big contact-links hover',
		storyId: 'components-footer-variants-nci-big--english',
		hoverSelector: '.usa-footer__contact-links a',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 360,
			},
		],
	},
	{
		label: 'usa-footer nci-big contact-links click',
		storyId: 'components-footer-variants-nci-big--english',
		clickSelector: '.usa-footer__contact-links a',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 360,
			},
		],
	},

	// Sign up form
	{
		label: 'usa-footer nci-big signup hover',
		storyId: 'components-footer-variants-nci-big--english',
		hoverSelector: '.usa-button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 360,
			},
		],
	},
	{
		label: 'usa-footer nci-big signup click',
		storyId: 'components-footer-variants-nci-big--english',
		clickSelector: '.usa-button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 360,
			},
		],
	},
	{
		label: 'usa-footer nci-big signup error',
		storyId: 'components-footer-variants-nci-big--english',
		clickSelector: '.usa-button--accent-warm',
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
				height: 360,
			},
		],
	},

	// Test cases
	// No JS
	{
		label: 'usa-footer nci-big no-js',
		storyId: 'components-footer-test-cases--no-js',
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
				height: 360,
			},
		],
	},
	// No Form
	{
		label: 'usa-footer nci-big no-form',
		storyId: 'components-footer-test-cases--no-form',
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
				height: 360,
			},
		],
	},
	// Back to top testing
	{
		label: 'usa-footer nci-big back-to-top',
		storyId: 'components-footer-test-cases--back-to-top',
		scrollAmount: {x: 0, y: 10},
		nextSelectorGroup: {
			postInteractionWait: 500,
		},
	selectors: 'viewport',
		viewports: [
			{
				label: 'mobile',
				width: 320,
				height: 300,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 300,
			},
		],
	},
];
