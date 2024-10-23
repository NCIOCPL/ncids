module.exports = [
	// ssn
	{
		label: 'usa-input-mask ssn',
		storyId: 'uswds-components-form-inputs-text-input-mask--ssn',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-input-mask ssn focus',
		storyId: 'uswds-components-form-inputs-text-input-mask--ssn',
		focusSelector: '.usa-input',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-input-mask ssn keypress 11',
		storyId: 'uswds-components-form-inputs-text-input-mask--ssn',
		keyPressSelectors: [
			{
				selector: '.usa-input',
				keyPress: '11',
			},
		],
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-input-mask ssn keypress 1a',
		storyId: 'uswds-components-form-inputs-text-input-mask--ssn',
		keyPressSelectors: [
			{
				selector: '.usa-input',
				keyPress: '1a',
			},
		],
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// phone
	{
		label: 'usa-input-mask phone',
		storyId: 'uswds-components-form-inputs-text-input-mask--phone',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// zip
	{
		label: 'usa-input-mask zip',
		storyId: 'uswds-components-form-inputs-text-input-mask--zip',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},

	// alphanumeric
	{
		label: 'usa-input-mask alphanumeric',
		storyId: 'uswds-components-form-inputs-text-input-mask--alphanumeric',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
