export const rootData = {
	id: '/',
	label: 'Homepage',
	path: '/',
	langcode: 'es',
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
			langcode: 'es',
			hasChildren: false,
		},
	],
	parent: null,
};

export const sectionData = {
	id: '1',
	label: 'Explora Section One',
	path: '/section-one',
	langcode: 'es',
	hasChildren: true,
	items: [
		{
			id: '776',
			label: 'Subsection One',
			path: '/section-one/sub-one',
			langcode: 'es',
			hasChildren: true,
		},
		{
			id: '4432',
			label: 'Subsection Two',
			path: '/section-one/sub-two',
			langcode: 'es',
			hasChildren: false,
		},
		{
			id: '778',
			label: 'Subsection Three',
			path: '/section-one/sub-three',
			langcode: 'es',
			hasChildren: false,
		},
	],
	parent: {
		id: '/',
		label: 'Homepage',
		path: '/',
		langcode: 'es',
		hasChildren: true,
	},
};

export const subSectionData = {
	id: '776',
	label: 'Explora Subsection One',
	path: '/section-one/sub-one',
	langcode: 'es',
	hasChildren: true,
	items: [
		{
			id: '776',
			label: 'End Link One',
			path: '/section-one/sub-one/end-link-one',
			langcode: 'es',
			hasChildren: false,
		},
		{
			id: '4432',
			label: 'End Link Two',
			path: '/section-one/sub-two/end-link-two',
			langcode: 'es',
			hasChildren: false,
		},
		{
			id: '778',
			label: 'End Link  Three',
			path: '/section-one/sub-three/end-link-three',
			langcode: 'es',
			hasChildren: false,
		},
	],
	parent: {
		id: '776',
		label: 'Section One',
		path: '/section-one',
		langcode: 'es',
		hasChildren: true,
	},
};
