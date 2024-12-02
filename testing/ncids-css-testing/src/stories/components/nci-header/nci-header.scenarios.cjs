module.exports = [
	{
		label: 'nci-header default english',
		storyId: 'components-header-default--english',
		viewports: [
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
		label: 'nci-header default spanish',
		storyId: 'components-header-default--spanish',
		viewports: [
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
		label: 'nci-header default english primary nav link hover',
		storyId: 'components-header-default--english',
		hoverSelector: '.nci-header-nav__primary-item a',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header variant mega menu english NCI logo inline SVG',
		storyId: 'components-header-variants-with-mega-menu--english',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header variant mega menu spanish NCI logo inline SVG',
		storyId: 'components-header-variants-with-mega-menu--spanish',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header variant mega menu english primary nav button hover',
		storyId: 'components-header-variants-with-mega-menu--english',
		hoverSelector: '.nci-header-nav__primary-item button',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header variant mega menu english megamenu expanded',
		storyId: 'components-header-variants-with-mega-menu--english',
		clickSelector: '.nci-header-nav__primary-item button',
		postInteractionWait: '.nci-megamenu__primary-link',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header variant mega menu mobile default',
		storyId: 'components-header-variants-with-mega-menu--english',
		clickSelector: '.nci-header-mobilenav__open-btn',
		viewports: [
			{
				label: 'mobile',
				width: 479,
				height: 360,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'nci-header variant mega menu mobile first level',
		storyId: 'components-header-variants-with-mega-menu--english',
		clickSelector: [
			'.nci-header-mobilenav__open-btn',
			'.nci-header-mobilenav__list-label',
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
		label: 'nci-header variant mega menu mobile second level',
		storyId: 'components-header-variants-with-mega-menu--english',
		clickSelector: [
			'.nci-header-mobilenav__open-btn',
			'.nci-header-mobilenav__list-label',
			'.nci-header-mobilenav__list-label',
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
		label: 'nci-header test cases default nojs',
		storyId: 'components-header-test-cases-default--no-js',
		viewports: [
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
		label: 'nci-header test cases default nojs link hover',
		storyId: 'components-header-test-cases-default--no-js',
		hoverSelector: '.nci-header-nav__primary-item a',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test cases default no search field',
		storyId:
			'components-header-test-cases-default--no-search-field',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test cases desktop longer primary link',
		storyId:
			'components-header-test-cases-default--long-primary-link',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test case mega menu longer primary button',
		storyId:
			'components-header-test-cases-header-with-mega-menu--long-primary-button',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test case mega menu longer mega menu content',
		storyId:
			'components-header-test-cases-header-with-mega-menu--long-mega-menu-content',
		clickSelector: '.nci-header-nav__primary-item button',
		postInteractionWait: '.nci-megamenu__primary-link',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test case mega menu no JS',
		storyId:
			'components-header-test-cases-header-with-mega-menu--no-js',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test cases default two primary items',
		storyId:
			'components-header-test-cases-default--two-item-navigation',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test cases default too many primary items',
		storyId:
			'components-header-test-cases-default--too-many-items-navigation',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
		],
	},
	{
		label: 'nci-header test cases default logos CBIIT',
		storyId: 'components-header-test-cases-default-logos--cbiit',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'nci-header test cases default logos DCEG',
		storyId: 'components-header-test-cases-default-logos--dceg',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'nci-header test cases default logos DCCPS',
		storyId: 'components-header-test-cases-default-logos--dccps',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
	{
		label: 'nci-header test cases default logos MyPart',
		storyId: 'components-header-test-cases-default-logos--my-part',
		viewports: [
			{
				label: 'desktop',
				width: 1024,
				height: 768,
			},
			{
				label: 'tablet',
				width: 640,
				height: 360,
			},
		],
	},
];
