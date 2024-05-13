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

	// Test cases
	// Basic HTML
	// NoJs
	{
		label: 'usa-accordion test-cases basic-html no-js',
		storyId: 'components-accordion-test-cases-basic-html--no-js',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// Nested
	{
		label: 'usa-accordion test-cases basic-html nested',
		storyId: 'components-accordion-test-cases-basic-html--nested',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// Cgov HTML
	// NoJs
	{
		label: 'usa-accordion test-cases cgov no-js',
		storyId: 'components-accordion-test-cases-cancer-gov--no-js',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// Nested
	{
		label: 'usa-accordion test-cases cgov nested',
		storyId: 'components-accordion-test-cases-cancer-gov--nested',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// Sample Article
	{
		label: 'usa-accordion test-cases cgov sample-article',
		storyId: 'components-accordion-test-cases-cancer-gov--sample-article',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// USWDS HTML
	// Default
	{
		label: 'usa-accordion test-cases uswds-html default',
		storyId: 'components-accordion-test-cases-uswds--default',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// Bordered
	{
		label: 'usa-accordion test-cases uswds-html bordered',
		storyId: 'components-accordion-test-cases-uswds--bordered',
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
		label: 'usa-accordion test-cases uswds-html multiselectable',
		storyId: 'components-accordion-test-cases-uswds--multiselectable',
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
