module.exports = [
	{
		label: 'usa-combo-box default',
		storyId: 'components-forms-combo-box-default--default',
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
		label: 'usa-combo-box default active toggle button',
		storyId: 'components-forms-combo-box-default--default',
		readySelector: '.usa-combo-box__toggle-list',
		activeSelector: '.usa-combo-box__toggle-list',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	}, {
		label: 'usa-combo-box default active',
		storyId: 'components-forms-combo-box-default--default',
		readySelector: '.usa-combo-box__toggle-list',
		activeSelector: '.usa-combo-box__input',
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
		storyId: 'components-forms-combo-box-default--default',
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
	{
		label: 'usa-combo-box default filtered results',
		storyId: 'components-forms-combo-box-default--default',
		readySelector: '.usa-combo-box__toggle-list',
		keyPressSelectors: [
			{
				selector: '.usa-combo-box__input',
				keyPress: 'appl',
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
		label: 'usa-combo-box default no results',
		storyId: 'components-forms-combo-box-default--default',
		readySelector: '.usa-combo-box__toggle-list',
		keyPressSelectors: [
			{
				selector: '.usa-combo-box__input',
				keyPress: 'asdfsdf',
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
		label: 'usa-combo-box default nojs',
		storyId: 'components-forms-combo-box-default--no-js',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
	{
		label: 'usa-combo-box default disabled',
		storyId: 'components-forms-combo-box-default--disabled',
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
		label: 'usa-combo-box default error',
		storyId: 'components-forms-combo-box-default--error',
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
		label: 'usa-combo-box test cases cgov',
		storyId: 'components-forms-combo-box-test-cases-cgov--cancer-types',
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
		label: 'usa-combo-box test cases cgov error',
		storyId: 'components-forms-combo-box-test-cases-cgov--cancer-types-error',
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
		label: 'usa-combo-box test cases cgov error click',
		storyId: 'components-forms-combo-box-test-cases-cgov--cancer-types-error',
		readySelector: '.usa-combo-box__toggle-list',
		clickSelector: '.usa-combo-box__toggle-list',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
		],
	},
];
