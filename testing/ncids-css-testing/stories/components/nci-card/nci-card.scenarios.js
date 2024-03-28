module.exports = [
	{
		label: 'nci-card default',
		storyId: 'components-card-default--default',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
			{
				label: 'tablet-lg',
				width: 880,
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
		label: 'nci-card default card-group',
		storyId: 'components-card-default--card-group',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
			{
				label: 'tablet-lg',
				width: 880,
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
		label: 'nci-card test-case card-in-text-left',
		storyId: 'components-card-test-cases--card-in-text-left',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
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
		label: 'nci-card test-case card-in-text-right',
		storyId: 'components-card-test-cases--card-in-text-right',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
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
		label: 'nci-card test-case card-group without description',
		storyId: 'components-card-test-cases--card-group-without-description',
		viewports: [
			{
				label: 'mobile',
				width: 360,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	/* PostInteractWait Accounts for Image Zoom Transition */
	{
		label: 'nci-card hover',
		storyId: 'components-card-default--default',
		hoverSelector: '.nci-card a',
		postInteractionWait: 500,
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	},
	{
		label: 'nci-card focus',
		storyId: 'components-card-default--default',
		focusSelector: '.nci-card a',
		postInteractionWait: 500,
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	},
	{
		label: 'nci-card active',
		storyId: 'components-card-default--default',
		activeSelector: '.nci-card a',
		postInteractionWait: 500,
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	}
];
