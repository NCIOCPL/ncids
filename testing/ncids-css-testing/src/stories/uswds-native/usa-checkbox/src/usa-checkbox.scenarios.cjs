module.exports = [
	// default
	{
		label: 'usa-checkbox default',
		storyId: 'uswds-components-form-inputs-checkbox--default',
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
		label: 'usa-checkbox default option focus',
		storyId: 'uswds-components-form-inputs-checkbox--default',
		focusSelector: '.usa-checkbox__input:not(:checked) + .usa-checkbox__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-checkbox default option click',
		storyId: 'uswds-components-form-inputs-checkbox--default',
		clickSelector: '.usa-checkbox__input:not(:checked) + .usa-checkbox__label',
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
		label: 'usa-checkbox tile',
		storyId: 'uswds-components-form-inputs-checkbox--checkbox-tile',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	// checkbox tile input states
	{
		label: 'usa-checkbox tile option focus',
		storyId: 'uswds-components-form-inputs-checkbox--checkbox-tile',
		focusSelector: '.usa-checkbox__input:not(:checked) + .usa-checkbox__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-checkbox tile option click',
		storyId: 'uswds-components-form-inputs-checkbox--checkbox-tile',
		clickSelector: '.usa-checkbox__input:not(:checked) + .usa-checkbox__label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
