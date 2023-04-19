module.exports = [
	// default
	{
		label: 'usa-radio default',
		storyId: 'uswds-components-form-inputs-radio--default',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// default input states
	{
		label: 'usa-radio default option focus',
		storyId: 'uswds-components-form-inputs-radio--default',
		focusSelector: '.usa-radio__input:not(:checked) + .usa-radio__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-radio default option click',
		storyId: 'uswds-components-form-inputs-radio--default',
		clickSelector: '.usa-radio__input:not(:checked) + .usa-radio__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// tile
	{
		label: 'usa-radio tile',
		storyId: 'uswds-components-form-inputs-radio--radio-tile',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// radio tile input states
	{
		label: 'usa-radio tile option focus',
		storyId: 'uswds-components-form-inputs-radio--radio-tile',
		focusSelector: '.usa-radio__input:not(:checked) + .usa-radio__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-radio tile option click',
		storyId: 'uswds-components-form-inputs-radio--radio-tile',
		clickSelector: '.usa-radio__input:not(:checked) + .usa-radio__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
