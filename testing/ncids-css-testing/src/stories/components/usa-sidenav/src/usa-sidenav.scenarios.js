module.exports = [
	{
		label: 'usa-sidenav',
		storyId: 'components-usa-sidenav--default',
	},
	{
		label: 'usa-sidenav current item ancestor hover',
		storyId: 'components-usa-sidenav--default',
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
		storyId: 'components-usa-sidenav--default',
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
		storyId: 'components-usa-sidenav--default',
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
		storyId: 'components-usa-sidenav--default',
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
		storyId: 'components-usa-sidenav--default',
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
		storyId: 'components-usa-sidenav--default',
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
		storyId: 'components-usa-sidenav-test-cases--long-titles',
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
		storyId: 'components-usa-sidenav-test-cases--cancergov-full',
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
