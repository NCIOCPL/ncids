const scenarios = ['match-disabled', 'match-enabled'].reduce(
	(acc, matchSetting) => {
		return [
			...acc,
			// Initial State
			{
				label: `nci-autocomplete default ${matchSetting} initial`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				viewports: [
					{
						label: 'mobile',
						width: 479,
						height: 360,
					},
				],
			},
			// Less than 3 characters text appearing
			{
				label: `nci-autocomplete default ${matchSetting} below-min`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				keyPressSelectors: [
					{
						selector: '#myInput',
						keyPress: 'bi',
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
			// Matches appearing
			{
				label: `nci-autocomplete default ${matchSetting} matches showing`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				keyPressSelectors: [
					{
						selector: '#myInput',
						keyPress: 'bile',
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
			// Matches hovering
			{
				label: `nci-autocomplete default ${matchSetting} option-highlighted`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				keyPressSelectors: [
					{
						selector: '#myInput',
						keyPress: 'bile',
					},
				],
				delay: 100,
				hoverSelector: '#myInput-terms .nci-autocomplete__option:nth-child(2)',
				viewports: [
					{
						label: 'mobile',
						width: 479,
						height: 360,
					},
				],
			},
			// Test X button with no matches and focus
			{
				label: `nci-autocomplete default ${matchSetting} no-match with focus`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				keyPressSelectors: [
					{
						selector: '#myInput',
						keyPress: 'chicken',
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
			// Test no X button with no matches without focus
			{
				label: `nci-autocomplete default ${matchSetting} no-match without focus`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				keyPressSelectors: [
					{
						selector: '#myInput',
						keyPress: 'chicken',
					},
				],
				blurSelector: '#myInput',
				viewports: [
					{
						label: 'mobile',
						width: 479,
						height: 360,
					},
				],
			},
			// Test X button with no matches with hover
			{
				label: `nci-autocomplete default ${matchSetting} no-match with hover`,
				storyId: `components-autocomplete-default--${matchSetting}`,
				keyPressSelectors: [
					{
						selector: '#myInput',
						keyPress: 'chicken',
					},
				],
				blurSelector: '#myInput',
				hoverSelector: '#myInput',
				viewports: [
					{
						label: 'mobile',
						width: 479,
						height: 360,
					},
				],
			},
		];
	},
	[]
);

module.exports = [
	...scenarios,
	{
		label: 'nci-autocomplete test-cases no-js',
		storyId: 'components-autocomplete-test-cases--no-js',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'nci-autocomplete test-cases no-js focus',
		storyId: 'components-autocomplete-test-cases--no-js',
		keyPressSelectors: [
			{
				selector: '#myInput',
				keyPress: 'bile',
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
		label: 'nci-autocomplete test-cases no-js with content blur',
		storyId: 'components-autocomplete-test-cases--no-js',
		keyPressSelectors: [
			{
				selector: '#myInput',
				keyPress: 'bile',
			},
		],
		blurSelector: '#myInput',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'nci-autocomplete test-cases no-js with content hover',
		storyId: 'components-autocomplete-test-cases--no-js',
		keyPressSelectors: [
			{
				selector: '#myInput',
				keyPress: 'bile',
			},
		],
		blurSelector: '#myInput',
		hoverSelector: '#myInput',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
