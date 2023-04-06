export const mockMdxQueryResponse = {
	allMdx: {
		totalCount: 44,
		edges: [
			{
				node: {
					frontmatter: {
						title: 'Design Principles - NCI Design System',
						name: 'Design Principles',
						nav_order: 2,
					},
					fileAbsolutePath: '/ncids/docs/content/design-principles/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Design Token Appearance',
						name: 'Appearance',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Box Shadow',
						name: 'Box Shadow',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/shadow.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design State Color Tokens',
						name: 'State Color Tokens',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/state-tokens.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Color Tokens',
						name: 'System Color Tokens',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/system-tokens.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design Theme Color Tokens',
						name: 'Theme Color Tokens',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/theme-tokens.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System - Foundations',
						name: 'Foundations',
						nav_order: 3,
					},
					fileAbsolutePath: '/ncids/docs/content/foundations/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Documented Changes from USWDS',
						name: 'NCIDS Token Changes from USWDS',
						nav_order: null,
					},
					fileAbsolutePath: '/ncids/docs/content/foundations/token-changes.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Font Tokens',
						name: 'Font Tokens',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/typography/fonts.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Typography',
						name: 'Typography',
						nav_order: null,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/typography/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'For Designers - NCI Design System',
						name: 'For Designers',
						nav_order: null,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/designers.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'For Developers - NCI Design System',
						name: 'For Developers',
						nav_order: null,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/developers.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'Figma Guide - NCI Design System',
						name: 'Figma Guide',
						nav_order: null,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/figma-guide.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'Get Started - NCI Design System',
						name: 'Get Started with NCIDS',
						nav_order: 1,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Home',
						nav_order: null,
					},
					fileAbsolutePath: '/ncids/docs/content/index.mdx',
				},
			},
		],
	},
};

export const mockSanitizedNavData = [
	{
		name: 'get-started',
		path: '/get-started/',
		navOrder: 1,
		label: 'Get Started with NCIDS',
		children: [
			{
				name: 'designers',
				path: '/get-started/designers',
				navOrder: null,
				label: 'For Designers',
				children: [],
			},
			{
				name: 'developers',
				path: '/get-started/developers',
				navOrder: null,
				label: 'For Developers',
				children: [],
			},
			{
				name: 'figma-guide',
				path: '/get-started/figma-guide',
				navOrder: null,
				label: 'Figma Guide',
				children: [],
			},
		],
	},
	{
		name: 'design-principles',
		path: '/design-principles/',
		navOrder: 2,
		label: 'Design Principles',
		children: [],
	},
	{
		name: 'foundations',
		path: '/foundations/',
		navOrder: 3,
		label: 'Foundations',
		children: [
			{
				name: 'token-changes',
				path: '/foundations/token-changes',
				navOrder: null,
				label: 'NCIDS Token Changes from USWDS',
				children: [],
			},
			{
				name: 'appearance',
				path: '/foundations/appearance/',
				navOrder: null,
				label: 'Appearance',
				children: [
					{
						name: 'shadow',
						path: '/foundations/appearance/shadow',
						navOrder: null,
						label: 'Box Shadow',
						children: [],
					},
					{
						name: 'state-tokens',
						path: '/foundations/appearance/state-tokens',
						navOrder: null,
						label: 'State Color Tokens',
						children: [],
					},
					{
						name: 'system-tokens',
						path: '/foundations/appearance/system-tokens',
						navOrder: null,
						label: 'System Color Tokens',
						children: [],
					},
					{
						name: 'theme-tokens',
						path: '/foundations/appearance/theme-tokens',
						navOrder: null,
						label: 'Theme Color Tokens',
						children: [],
					},
				],
			},
			{
				name: 'typography',
				path: '/foundations/typography/',
				navOrder: null,
				label: 'Typography',
				children: [
					{
						name: 'fonts',
						path: '/foundations/typography/fonts',
						navOrder: null,
						label: 'Font Tokens',
						children: [],
					},
				],
			},
		],
	},
];
