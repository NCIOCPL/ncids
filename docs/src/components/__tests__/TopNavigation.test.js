import { render, screen } from '@testing-library/react';
import React from 'react';

import TopNavigation from '../TopNavigation';

describe('Header', () => {
	it('renders header', () => {
		const data = [
			{
				name: 'home',
				path: '/',
				label: 'Home',
				children: [],
			},
			{
				name: 'design-tokens',
				path: '/design-tokens/',
				label: 'Design Tokens',
				children: [
					{
						name: 'design-tokens',
						path: '/design-tokens/',
						label: 'Design Tokens',
						children: [],
					},
				],
			},
			{
				name: 'components',
				path: '/components/',
				label: 'Components',
				children: [
					{
						name: 'components',
						path: '/components/',
						label: 'Components',
						children: [],
					},
					{
						name: 'autocomplete',
						path: '/components/autocomplete',
						label: 'Autocomplete',
						children: [],
					},
				],
			},
		];
		const pathSplit = ['components'];
		render(<TopNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Components')).toBeInTheDocument();
		expect(screen.getByText('Components')).toHaveAttribute(
			'href',
			'/components/'
		);
	});

	it('renders selected section', () => {
		const data = [
			{
				name: 'home',
				path: '/',
				label: 'Home',
				children: [],
			},
			{
				name: 'design-tokens',
				path: '/design-tokens/',
				label: 'Design Tokens',
				children: [
					{
						name: 'design-tokens',
						path: '/design-tokens/',
						label: 'Design Tokens',
						children: [],
					},
				],
			},
			{
				name: 'components',
				path: '/components/',
				label: 'Components',
				children: [
					{
						name: 'components',
						path: '/components/',
						label: 'Components',
						children: [],
					},
				],
			},
		];
		const pathSplit = [''];
		render(<TopNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Home')).toHaveAttribute('href', '/');
	});
});
