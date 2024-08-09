import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import DefaultLayout from '../default-layout';

jest.mock('../../../hooks/use-site-metadata', () => jest.fn());
const mockUseSiteMetadata = require('../../../hooks/use-site-metadata');
jest.mock('../../../hooks/use-nav-data', () => jest.fn());
const mockUseNavData = require('../../../hooks/use-nav-data');

const mockMdxQuery = jest.requireActual(
	'../../../utils/__mocks__/mock-query-mdx-data.js'
);

describe('default-layout', () => {
	const savedEnv = process.env;

	beforeEach(() => {
		jest.resetModules();
		process.env = { ...savedEnv };
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
		mockUseSiteMetadata.mockImplementation(() => ({
			title: `Default Starter`,
			description: 'Test Description',
			versionInfo: {
				ncidsVersion: '1.0.0',
				uswdsVersion: '2.0.0',
			},
		}));
		mockUseNavData.mockImplementation(() => mockMdxQuery.mockMdxQueryResponse);
	});
	afterEach(() => {
		process.env = savedEnv;
	});
	it('renders the navigation', () => {
		const pageContext = { navPath: '/' };
		render(<DefaultLayout pageContext={pageContext} />);

		// Expect Foundations Tab to be rendered
		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
	});
	it('renders the navigation if path is empty', () => {
		const pageContext = { navPath: '' };
		render(<DefaultLayout pageContext={pageContext} />);

		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
		expect(screen.getAllByText('Foundations')[0]).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders the navigation in different node environments', () => {
		process.env.NODE_ENV = 'production';
		const pageContext = { navPath: '/foundations' };
		render(<DefaultLayout pageContext={pageContext} />);

		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
	});
	it('renders the navigation if __PATH_PREFIX__ is undefined', () => {
		const defaultPathPrefix = global.__PATH_PREFIX__;
		global.__PATH_PREFIX__ = undefined;
		const pageContext = { navPath: '' };
		render(<DefaultLayout pageContext={pageContext} />);

		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
		expect(screen.getAllByText('Foundations')[0]).toHaveAttribute(
			'href',
			'/foundations/'
		);
		global.__PATH_PREFIX__ = defaultPathPrefix;
	});
	it('renders the mobile overlay when the menu button is clicked on mobile', () => {
		global.innerWidth = 600;
		const pageContext = { navPath: '/foundations' };
		render(<DefaultLayout pageContext={pageContext} />);

		const menuButton = screen.getByText('Menu');
		//expand the section
		fireEvent.click(menuButton);
		expect(screen.getByLabelText('Close Menu')).toBeVisible();
	});
	it('should close the mobile overlay when the close button is clicked on mobile', () => {
		global.innerWidth = 600;
		const pageContext = { navPath: '/fonts' };
		render(<DefaultLayout pageContext={pageContext} />);

		const menuButton = screen.getByText('Menu');
		//expand the mobile overlay
		fireEvent.click(menuButton);

		const closeButton = screen.getByLabelText('Close Menu');
		expect(closeButton).toBeVisible();

		fireEvent.click(closeButton);
		expect(menuButton).toBeVisible();
	});
});
