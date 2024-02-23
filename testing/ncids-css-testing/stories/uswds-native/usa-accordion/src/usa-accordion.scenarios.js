module.exports = [
	// default
	{
		label: 'usa-accordion uswds default',
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
		label: 'usa-accordion uswds default button expanded focus',
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
		label: 'usa-accordion uswds default button expanded active',
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
		label: 'usa-accordion uswds default button expanded hover',
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
		label: 'usa-accordion uswds default button expanded click',
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
		label: 'usa-accordion uswds default button collapsed focus',
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
		label: 'usa-accordion uswds default button collapsed active',
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
		label: 'usa-accordion uswds default button collapsed hover',
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
		label: 'usa-accordion uswds default button collapsed click',
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

	// variants
	{
		label: 'usa-accordion uswds bordered',
		storyId: 'uswds-components-accordion--bordered',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// modifiers
	{
		label: 'usa-accordion uswds multiselectable',
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
		label: 'usa-accordion uswds multiselectable multiclick',
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
