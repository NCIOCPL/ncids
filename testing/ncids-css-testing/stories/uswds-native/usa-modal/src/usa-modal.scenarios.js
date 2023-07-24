module.exports = [
	{
		label: 'usa-modal default click',
		storyId: 'uswds-components-modal--default',
		clickSelector: '.usa-button',
		postInteractionWait: 150, // waits for css transition
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-modal forced-action click',
		storyId: 'uswds-components-modal--forced-action',
		clickSelector: '.usa-button',
		postInteractionWait: 150, // waits for css transition
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-modal large click',
		storyId: 'uswds-components-modal--large',
		clickSelector: '.usa-button',
		postInteractionWait: 150, // waits for css transition
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	}
];
