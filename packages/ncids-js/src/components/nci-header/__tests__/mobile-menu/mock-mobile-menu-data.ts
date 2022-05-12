export const rootData = {
	id: '/',
	label: 'Homepage',
	path: '/',
	langcode: 'en',
	hasChildren: true,
	items: [
		{
			id: '1',
			label: 'Section One',
			path: '/section-one',
			langcode: 'es',
			hasChildren: true,
		},
		{
			id: '2',
			label: 'Section Two',
			path: '/section-two',
			langcode: 'en',
			hasChildren: false,
		},
	],
	parent: null,
};

export const sectionData = {
	id: '1',
	label: 'Explore Section One',
	path: '/section-one',
	langcode: 'en',
	hasChildren: true,
	items: [
		{
			id: '776',
			label: 'Subsection One',
			path: '/section-one/sub-one',
			langcode: 'en',
			hasChildren: true,
		},
		{
			id: '4432',
			label: 'Subsection Two',
			path: '/section-one/sub-two',
			langcode: 'en',
			hasChildren: false,
		},
		{
			id: '778',
			label: 'Subsection Three',
			path: '/section-one/sub-three',
			langcode: 'en',
			hasChildren: false,
		},
	],
	parent: {
		id: '/',
		label: 'Homepage',
		path: '/',
		langcode: 'en',
		hasChildren: true,
	},
};

export const subSectionData = {
	id: '776',
	label: 'Explore Subsection One',
	path: '/section-one/sub-one',
	langcode: 'en',
	hasChildren: true,
	items: [
		{
			id: '776',
			label: 'End Link One',
			path: '/section-one/sub-one/end-link-one',
			langcode: 'en',
			hasChildren: false,
		},
		{
			id: '4432',
			label: 'End Link Two',
			path: '/section-one/sub-two/end-link-two',
			langcode: 'en',
			hasChildren: false,
		},
		{
			id: '778',
			label: 'End Link  Three',
			path: '/section-one/sub-three/end-link-three',
			langcode: 'en',
			hasChildren: false,
		},
	],
	parent: {
		id: '776',
		label: 'Section One',
		path: '/section-one',
		langcode: 'en',
		hasChildren: true,
	},
};
