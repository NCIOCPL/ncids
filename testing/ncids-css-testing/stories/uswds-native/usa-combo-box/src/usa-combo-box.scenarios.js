module.exports = [
	{
		label: 'usa-combo-box default',
		storyId: 'uswds-components-form-inputs-combo-box--default',
		readySelector: '.usa-combo-box__toggle-list',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-combo-box default focus',
		storyId: 'uswds-components-form-inputs-combo-box--default',
		focusSelector: '.usa-select',
		readySelector: '.usa-combo-box__toggle-list',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-combo-box default click',
		storyId: 'uswds-components-form-inputs-combo-box--default',
		readySelector: '.usa-combo-box__toggle-list',
		clickSelector: '.usa-label',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
