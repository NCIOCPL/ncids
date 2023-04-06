export const mockMdxQueryResponse = {
	allMdx: {
		totalCount: 44,
		edges: [
			{
				node: {
					frontmatter: {
						title: 'Design Principles - NCI Design System',
						nav_label: 'Design Principles',
						nav_order: 2,
					},
					fileAbsolutePath: '/ncids/docs/content/design-principles/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Design Token Appearance',
						nav_label: 'Appearance',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Box Shadow',
						nav_label: 'Box Shadow',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/shadow.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design State Color Tokens',
						nav_label: 'State Color Tokens',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/state-tokens.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Color Tokens',
						nav_label: 'System Color Tokens',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/system-tokens.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design Theme Color Tokens',
						nav_label: 'Theme Color Tokens',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/appearance/theme-tokens.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System - Foundations',
						nav_label: 'Foundations',
						nav_order: 3,
					},
					fileAbsolutePath: '/ncids/docs/content/foundations/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Documented Changes from USWDS',
						nav_label: 'NCIDS Token Changes from USWDS',
						nav_order: 10000000,
					},
					fileAbsolutePath: '/ncids/docs/content/foundations/token-changes.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Font Tokens',
						nav_label: 'Font Tokens',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/typography/fonts.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Typography',
						nav_label: 'Typography',
						nav_order: 10000000,
					},
					fileAbsolutePath:
						'/ncids/docs/content/foundations/typography/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'For Designers - NCI Design System',
						nav_label: 'For Designers',
						nav_order: 10000000,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/designers.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'For Developers - NCI Design System',
						nav_label: 'For Developers',
						nav_order: 10000000,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/developers.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'Figma Guide - NCI Design System',
						nav_label: 'Figma Guide',
						nav_order: 10000000,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/figma-guide.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'Get Started - NCI Design System',
						nav_label: 'Get Started',
						nav_order: 1,
					},
					fileAbsolutePath: '/ncids/docs/content/get-started/index.mdx',
				},
			},
			{
				node: {
					frontmatter: {
						title: 'NCI Design System Home',
						nav_order: 10000000,
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
		label: 'Get Started',
		children: [
			{
				name: 'designers',
				path: '/get-started/designers',
				navOrder: 10000000,
				label: 'For Designers',
				children: [],
			},
			{
				name: 'developers',
				path: '/get-started/developers',
				navOrder: 10000000,
				label: 'For Developers',
				children: [],
			},
			{
				name: 'figma-guide',
				path: '/get-started/figma-guide',
				navOrder: 10000000,
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
				navOrder: 10000000,
				label: 'NCIDS Token Changes from USWDS',
				children: [],
			},
			{
				name: 'appearance',
				path: '/foundations/appearance/',
				navOrder: 10000000,
				label: 'Appearance',
				children: [
					{
						name: 'shadow',
						path: '/foundations/appearance/shadow',
						navOrder: 10000000,
						label: 'Box Shadow',
						children: [],
					},
					{
						name: 'state-tokens',
						path: '/foundations/appearance/state-tokens',
						navOrder: 10000000,
						label: 'State Color Tokens',
						children: [],
					},
					{
						name: 'system-tokens',
						path: '/foundations/appearance/system-tokens',
						navOrder: 10000000,
						label: 'System Color Tokens',
						children: [],
					},
					{
						name: 'theme-tokens',
						path: '/foundations/appearance/theme-tokens',
						navOrder: 10000000,
						label: 'Theme Color Tokens',
						children: [],
					},
				],
			},
			{
				name: 'typography',
				path: '/foundations/typography/',
				navOrder: 10000000,
				label: 'Typography',
				children: [
					{
						name: 'fonts',
						path: '/foundations/typography/fonts',
						navOrder: 10000000,
						label: 'Font Tokens',
						children: [],
					},
				],
			},
		],
	},
];
