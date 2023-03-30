module.exports = [
	{
		label: 'usa-button-group default',
		storyId: 'uswds-components-button-group--default',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'mobile-lg',
				width: 480,
				height: 360,
			},
		],
	},
	{
		label: 'usa-button-group default focus',
		storyId: 'uswds-components-button-group--default',
		focusSelector: '.usa-button',
		viewports: [
			{
				label: 'mobile-lg',
				width: 480,
				height: 360,
			},
		],
	},
	{
		label: 'usa-button-group default active',
		storyId: 'uswds-components-button-group--default',
		activeSelector: '.usa-button',
		viewports: [
			{
				label: 'mobile-lg',
				width: 480,
				height: 360,
			},
		],
	},
	{
		label: 'usa-button-group default hover',
		storyId: 'uswds-components-button-group--default',
		hoverSelector: '.usa-button',
		viewports: [
			{
				label: 'mobile-lg',
				width: 480,
				height: 360,
			},
		],
	},
	{
		label: 'usa-button-group segmented',
		storyId: 'uswds-components-button-group--segmented',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'mobile-lg',
				width: 480,
				height: 360,
			},
		],
	},
];
