module.exports = [
	{
		label: 'usa-sidenav',
		storyId: 'components-sidenav--default',
	},
	{
		label: 'usa-sidenav current item ancestor hover',
		storyId: 'components-sidenav--default',
		hoverSelector: '.usa-current--nci-ancestor',
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav current item ancestor focus',
		storyId: 'components-sidenav--default',
		focusSelector: '.usa-current--nci-ancestor',
		postInteractionWait: 200,
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav current item hover',
		storyId: 'components-sidenav--default',
		hoverSelector: '.usa-current:not(.usa-current--nci-ancestor)',
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav current item focus',
		storyId: 'components-sidenav--default',
		focusSelector: '.usa-current:not(.usa-current--nci-ancestor)',
		postInteractionWait: 200,
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav not current item with children hover',
		storyId: 'components-sidenav--default',
		hoverSelector: '.nci-has-children:not(.usa-current)',
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav not current item with children focus',
		storyId: 'components-sidenav--default',
		focusSelector: '.nci-has-children:not(.usa-current)',
		postInteractionWait: 200,
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav long titles',
		storyId: 'components-sidenav-test-cases--long-titles',
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'usa-sidenav cancergov full',
		storyId: 'components-sidenav-test-cases--cancergov-full',
		viewports: [
			{
				label: 'widescreen',
				width: 1400,
				height: 768,
			},
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
];
