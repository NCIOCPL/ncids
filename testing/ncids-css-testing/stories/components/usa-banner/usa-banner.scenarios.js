module.exports = [
	{
		label: 'usa-banner default',
		storyId: 'components-usa-banner--nci-banner',
	},
	{
		label: 'usa-banner default with language toggle',
		storyId: 'components-usa-banner--nci-banner-with-language-toggle',
	},
	{
		label: 'usa-banner default with language toggle hover',
		storyId: 'components-usa-banner--nci-banner-with-language-toggle',
		hoverSelector: '.usa-button',
	},
	{
		label: 'usa-banner default with language toggle click',
		storyId: 'components-usa-banner--nci-banner-with-language-toggle',
		clickSelector: '.usa-button',
	},
	{
		label: 'usa-banner spanish',
		storyId: 'components-usa-banner--spanish-nci-banner-with-language-toggle',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		]
	},
];
