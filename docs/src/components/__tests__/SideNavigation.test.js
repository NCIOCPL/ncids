import { render, screen } from '@testing-library/react';
import React from 'react';

import SideNavigation from '../SideNavigation';
const data = [
	{
		name: 'components',
		isRoot: false,
		path: '/components/',
		label: 'Components',
		children: [
			{
				name: 'components',
				isRoot: true,
				path: '/components/',
				label: 'Components',
				children: [],
			},
			{
				name: 'autocomplete',
				isRoot: false,
				path: '/components/autocomplete',
				label: 'Autocomplete',
				children: [],
			},
			{
				name: 'banner',
				isRoot: false,
				path: '/components/banner',
				label: 'Banner',
				children: [],
			},
		],
	},
	{
		name: 'about',
		children: [
			{
				name: 'development',
				children: [
					{
						name: 'index.mdx',
						children: [],
						path: '/about/development/index.mdx',
						label: 'Development',
					},
					{
						name: 'code-examples.mdx',
						children: [],
						path: '/about/development/code-examples.mdx',
						label: 'Component Code Examples',
					},
				],
				path: '/about/development/index.mdx',
				label: 'Development',
			},
		],
		path: '/about/index.mdx',
		label: 'About NCIDS',
	},
];
describe('Header', () => {
	it('renders header', () => {
		const result = data[0];
		const pathSplit = ['components', 'autocomplete'];
		render(<SideNavigation data={result} path={pathSplit} />);
		expect(screen.getByText('Components')).toBeInTheDocument();
		expect(screen.getByText('Components')).toHaveAttribute(
			'href',
			'/components/'
		);
	});
	it('renders header when data has no/bad name', () => {
		const result = data[0];
		const pathSplit = ['bad', 'data'];
		render(<SideNavigation data={result} path={pathSplit} />);
		expect(screen.getByText('Components')).toBeInTheDocument();
		expect(screen.getByText('Components')).toHaveAttribute(
			'href',
			'/components/'
		);
	});
	it('renders header when data has children', () => {
		const result = data[1];
		const pathSplit = ['about', 'development'];
		render(<SideNavigation data={result} path={pathSplit} />);
		expect(screen.getByText('About NCIDS')).toBeInTheDocument();
		expect(screen.getByText('About NCIDS')).toHaveAttribute(
			'href',
			'/about/index.mdx'
		);
	});
});
