module.exports = [
	{
		label: 'usa-character-count default',
		storyId: 'uswds-components-form-inputs-character-count--character-count',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-character-count focus',
		storyId: 'uswds-components-form-inputs-character-count--character-count',
		focusSelector: '#with-hint-input',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-character-count focus textarea',
		storyId: 'uswds-components-form-inputs-character-count--character-count',
		focusSelector: '#with-hint-textarea',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-character-count over max char value',
		storyId: 'uswds-components-form-inputs-character-count--character-count',
		"keyPressSelectors": [
      {
        "selector": "#with-hint-input",
        "keyPress": "this is a string with 25 characters"
      },
      {
        "selector": "#with-hint-textarea",
        "keyPress": "this is a string with 50 characters or more to trip messagex"
      }
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
		label: 'usa-character-count with 20 char value',
		storyId: 'uswds-components-form-inputs-character-count--character-count',
		"keyPressSelectors": [
      {
        "selector": "#with-hint-input",
        "keyPress": "this is just 20 chars t"
      },
      {
        "selector": "#with-hint-textarea",
        "keyPress": "this is just 50 chars for something just hit the"
      }
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
		label: 'usa-character-count with exact char value',
		storyId: 'uswds-components-form-inputs-character-count--character-count',
		"keyPressSelectors": [
      {
        "selector": "#with-hint-input",
        "keyPress": "this is just an example w"
      },
      {
        "selector": "#with-hint-textarea",
        "keyPress": "this is just an example with about 50 chars in its"
      }
    ],
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
