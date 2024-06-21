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
	const pageContext = {
		versionInfo: {
			ncidsVersion: 'v1.0.0',
			uswdsVersion: 'v3.0.0',
		},
		frontmatter: {
			title: 'Page Title',
			description: 'My test description',
		},
		pagePath: '/',
	};

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
			site: {
				siteMetadata: {
					title: `Default Starter`,
					description: 'Test Description',
				},
			},
		}));
		mockUseNavData.mockImplementation(() => mockMdxQuery.mockMdxQueryResponse);
	});
	afterEach(() => {
		process.env = savedEnv;
	});
	it('renders the navigation', () => {
		render(<DefaultLayout pageContext={pageContext} />);

		// Expect Foundations Tab to be rendered
		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
	});
	it('renders the navigation if pagePath from pageContext is empty', () => {
		const context = pageContext;
		context.pagePath = '';
		render(<DefaultLayout pageContext={context} />);

		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
		expect(screen.getAllByText('Foundations')[0]).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders the navigation in different node environments', () => {
		process.env.NODE_ENV = 'production';
		const context = pageContext;
		context.pagePath = '/foundations';
		render(<DefaultLayout pageContext={context} />);

		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
	});
	it('renders the navigation if __PATH_PREFIX__ is undefined', () => {
		const defaultPathPrefix = global.__PATH_PREFIX__;
		global.__PATH_PREFIX__ = undefined;
		const context = pageContext;
		context.pagePath = '';
		render(<DefaultLayout pageContext={context} />);

		expect(screen.getAllByText('Foundations')[0]).toBeInTheDocument();
		expect(screen.getAllByText('Foundations')[0]).toHaveAttribute(
			'href',
			'/foundations/'
		);
		global.__PATH_PREFIX__ = defaultPathPrefix;
	});
	it('renders the mobile overlay when the menu button is clicked on mobile', () => {
		global.innerWidth = 600;
		const context = pageContext;
		context.pagePath = '/foundations';
		render(<DefaultLayout pageContext={context} />);

		const menuButton = screen.getByText('Menu');
		//expand the section
		fireEvent.click(menuButton);
		expect(screen.getByLabelText('Close Menu')).toBeVisible();
	});
	it('should close the mobile overlay when the close button is clicked on mobile', () => {
		global.innerWidth = 600;
		const context = pageContext;
		context.pagePath = '/fonts';
		render(<DefaultLayout pageContext={context} />);

		const menuButton = screen.getByText('Menu');
		//expand the mobile overlay
		fireEvent.click(menuButton);

		const closeButton = screen.getByLabelText('Close Menu');
		expect(closeButton).toBeVisible();

		fireEvent.click(closeButton);
		expect(menuButton).toBeVisible();
	});
});
