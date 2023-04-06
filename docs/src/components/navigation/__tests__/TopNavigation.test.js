import { render, screen } from '@testing-library/react';
import React from 'react';

import TopNavigation from '../TopNavigation';
const mockMdxQuery = jest.requireActual(
	'../../../utils/__mocks__/mock-query-mdx-data.js'
);

describe('Top Navigation', () => {
	let data = mockMdxQuery.mockSanitizedNavData;
	afterEach(() => {
		data = mockMdxQuery.mockSanitizedNavData;
	});

	it('renders top navigation', () => {
		const pathSplit = ['/'];
		render(<TopNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders top navigation in order', () => {
		const pathSplit = ['/'];
		const dataLabels = data.map((item) => item.label);
		render(<TopNavigation data={data} path={pathSplit} />);
		const listElements = screen.getAllByRole('listitem');
		const linkText = listElements.map((item) => item.textContent);
		expect(linkText).toEqual(dataLabels);
	});
	it('renders top navigation with appropriate current link styles', () => {
		const pathSplit = ['foundations'];
		render(<TopNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders top navigation with a working home link if data includes such', () => {
		const pathSplit = ['/'];
		data = [
			{
				name: 'home',
				path: '/',
				navOrder: 0,
				label: 'Home',
				children: mockMdxQuery.mockSanitizedNavData,
			},
		];
		render(<TopNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Home')).toHaveAttribute('href', '/');
	});
	it('renders top navigation appropriately if path is empty', () => {
		const pathSplit = [''];
		render(<TopNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
});
