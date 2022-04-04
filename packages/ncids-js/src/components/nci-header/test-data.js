/**
 * Mock data for use in megamenu
 * based on NavigationItem type
 */
export const MockData = [
	{
		id: 1,
		label: 'About Example',
		path: '/about-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 2,
				label: 'Child Section',
				path: '/child-section',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 3,
				label: 'Example Child',
				path: '/example-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 4,
				label: 'Big child',
				path: '/big-child',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
];
