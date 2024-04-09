import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import MobileNavigation from '../MobileNavigation';

const mockNavData = jest.requireActual('../../__mocks__/mock-nav-data');

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
		const pathSplit = ['foundations', 'typography', 'headings'];
		render(
			<MobileNavigation data={mockNavData.mockNavData} path={pathSplit} />
		);
		expect(screen.getByText('Headings')).toBeInTheDocument();
		expect(screen.getByText('Headings')).toHaveAttribute(
			'href',
			'/foundations/typography/headings'
		);
	});
	it('renders the link of the current page with appropriate style', () => {
		const pathSplit = ['foundations', 'typography', 'headings'];
		render(
			<MobileNavigation data={mockNavData.mockNavData} path={pathSplit} />
		);
		expect(screen.getByText('Headings')).toBeInTheDocument();
		expect(screen.getByText('Headings')).toHaveClass('current');
	});
	it('clicks within the navigation list and navigates the menu', async () => {
		const pathSplit = [];
		render(
			<MobileNavigation data={mockNavData.mockNavData} path={pathSplit} />
		);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		fireEvent.click(screen.getByText('Foundations'));
		await expect(screen.getByText('Color')).toBeInTheDocument();
	});
	it('clicks the back button and navigates the menu', async () => {
		const pathSplit = ['foundations', 'typography'];
		render(
			<MobileNavigation data={mockNavData.mockNavData} path={pathSplit} />
		);
		expect(screen.getByText('Back')).toBeInTheDocument();
		fireEvent.click(screen.getByText('Back'));
		await expect(screen.getByText('Typography')).toBeInTheDocument();
	});
});
