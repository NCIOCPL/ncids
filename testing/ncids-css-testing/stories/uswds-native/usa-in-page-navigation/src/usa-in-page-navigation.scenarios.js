module.exports = [
	{
		label: 'usa-in-page-navigation default',
		storyId: 'uswds-components-in-page-navigation--default',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'usa-in-page-navigation link focus',
		storyId: 'uswds-components-in-page-navigation--default',
		focusSelector: '.usa-in-page-nav__link',
		viewports: [
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'usa-in-page-navigation link active',
		storyId: 'uswds-components-in-page-navigation--default',
		activeSelector: '.usa-in-page-nav__link',
		viewports: [
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'usa-in-page-navigation link hover',
		storyId: 'uswds-components-in-page-navigation--default',
		hoverSelector: '.usa-in-page-nav__link',
		viewports: [
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
];
