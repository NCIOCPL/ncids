module.exports = [
	// default
	{
		label: 'usa-accordion default',
		storyId: 'uswds-components-accordion--default',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// default button states
	{
		label: 'usa-accordion default button expanded focus',
		storyId: 'uswds-components-accordion--default',
		focusSelector: '.usa-accordion__button[aria-expanded=true]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button expanded active',
		storyId: 'uswds-components-accordion--default',
		activeSelector: '.usa-accordion__button[aria-expanded=true]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button expanded hover',
		storyId: 'uswds-components-accordion--default',
		hoverSelector: '.usa-accordion__button[aria-expanded=true]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button expanded click',
		storyId: 'uswds-components-accordion--default',
		clickSelector: '.usa-accordion__button[aria-expanded=true]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button collapsed focus',
		storyId: 'uswds-components-accordion--default',
		focusSelector: '.usa-accordion__button[aria-expanded=false]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button collapsed active',
		storyId: 'uswds-components-accordion--default',
		activeSelector: '.usa-accordion__button[aria-expanded=false]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button collapsed hover',
		storyId: 'uswds-components-accordion--default',
		hoverSelector: '.usa-accordion__button[aria-expanded=false]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion default button collapsed click',
		storyId: 'uswds-components-accordion--default',
		clickSelector: '.usa-accordion__button[aria-expanded=false]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// other variants
	{
		label: 'usa-accordion bordered',
		storyId: 'uswds-components-accordion--bordered',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion multiselectable',
		storyId: 'uswds-components-accordion--multiselectable',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion multiselectable multiclick',
		storyId: 'uswds-components-accordion--multiselectable',
		clickSelector: '.usa-accordion__button[aria-expanded=false]',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
