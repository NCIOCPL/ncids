module.exports = [
	{
		label: 'nci-card default',
		storyId: 'components-nci-card--default',
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
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	},
	{
		label: 'nci-card card-row',
		storyId: 'components-nci-card--card-row',
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
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	},
	{
		label: 'nci-card card-in-text-left',
		storyId: 'components-nci-card--card-in-text-left',
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
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	},
	{
		label: 'nci-card card-in-text-right',
		storyId: 'components-nci-card--card-in-text-right',
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
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
		],
	},
	/* PostInteractWait Accounts for Image Zoom Transition */
	{
		label: 'nci-card hover',
		storyId: 'components-nci-card--default',
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
		storyId: 'components-nci-card--default',
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
		storyId: 'components-nci-card--default',
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
