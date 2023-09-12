import { render, screen } from '@testing-library/react';
import React from 'react';

import MobileNavigation from '../MobileNavigation';
const mockMdxQuery = jest.requireActual(
	'../../../utils/__mocks__/mock-query-mdx-data.js'
);

const data = {
	name: 'Home',
	label: 'Home',
	path: '/',
	children: mockMdxQuery.mockSanitizedNavData,
};

describe('Mobile Navigation', () => {
	beforeEach(() => {
		jest.resetModules();
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: query === '(min-width: 1024px)',
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});
	afterEach(() => {
		global.innerWidth = 600;
		jest.restoreAllMocks();
	});
	it('renders mobile navigation', () => {
		const pathSplit = ['appearance'];
		render(<MobileNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders mobile navigation when path has unknown/bad value', () => {
		const pathSplit = ['bad'];
		render(<MobileNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders the link of the current page with appropriate style', () => {
		const pathSplit = ['fonts'];
		render(<MobileNavigation data={data} path={pathSplit} />);
		expect(screen.getByText('Font Tokens')).toBeInTheDocument();
		expect(screen.getByText('Font Tokens')).toHaveClass('usa-current');
	});
});
