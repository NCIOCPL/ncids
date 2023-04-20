module.exports = [
	// default
	{
		label: 'usa-date-picker default',
		storyId: 'uswds-components-form-inputs-date-picker--default',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-date-picker default input focus',
		storyId: 'uswds-components-form-inputs-date-picker--default',
		focusSelector: '.usa-label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-date-picker default button focus',
		storyId: 'uswds-components-form-inputs-date-picker--default',
		focusSelector: '.usa-date-picker__button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-date-picker default button click',
		storyId: 'uswds-components-form-inputs-date-picker--default',
		mockDate: '1992-05-11',
		clickSelector: '.usa-date-picker__button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-date-picker default button hover',
		storyId: 'uswds-components-form-inputs-date-picker--default',
		hoverSelector: '.usa-date-picker__button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// default-date
	{
		label: 'usa-date-picker default-date',
		storyId: 'uswds-components-form-inputs-date-picker--default-date',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-date-picker default-date button click',
		storyId: 'uswds-components-form-inputs-date-picker--default-date',
		clickSelector: '.usa-date-picker__button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},


	// disabled
	{
		label: 'usa-date-picker disabled',
		storyId: 'uswds-components-form-inputs-date-picker--disabled',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// range-date
	{
		label: 'usa-date-picker range-date button click',
		storyId: 'uswds-components-form-inputs-date-picker--range-date',
		mockDate: '1992-05-11',
		clickSelector: '.usa-date-picker__button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// restricted-date
	{
		label: 'usa-date-picker restricted-date button click',
		storyId: 'uswds-components-form-inputs-date-picker--restricted-date',
		clickSelector: '.usa-date-picker__button',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
