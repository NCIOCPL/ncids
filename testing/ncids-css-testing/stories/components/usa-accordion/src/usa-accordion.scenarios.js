module.exports = [
	// default
	{
		label: 'usa-accordion default',
		storyId: 'components-accordion-default--default',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// Multiselectable
	{
		label: 'usa-accordion multiselectable',
		storyId: 'components-accordion-default--multiselectable',
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
		storyId: 'components-accordion-default--multiselectable',
		clickSelector: '.usa-accordion__button[aria-expanded=false]',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
		storyId: 'components-accordion-default--default',
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
	// bordered
	{
		label: 'usa-accordion bordered',
		storyId: 'components-accordion-variants-bordered--bordered',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion bordered multiselectable',
		storyId: 'components-accordion-variants-bordered--bordered-multiselectable',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-accordion bordered multiselectable multiclick',
		storyId: 'components-accordion-variants-bordered--bordered-multiselectable',
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
