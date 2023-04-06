import { render, screen } from '@testing-library/react';
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
	it('renders the top navigation in order', () => {
		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
			pagePath: '/',
		};

		render(<DefaultLayout pageContext={context} />);
		// Expect Foundations Tab to be rendered
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		// Expect the Foundations Tab to be in appropriate order
		const listItems = screen.getAllByRole('listitem');
		expect(listItems[2]).toHaveTextContent('Foundations');
	});
	it('renders the side navigation if there are children', () => {
		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
			pagePath: 'foundations/',
		};

		render(<DefaultLayout pageContext={context} />);
		expect(screen.getByText('Appearance')).toBeInTheDocument();
		expect(screen.getByText('Appearance')).toHaveAttribute(
			'href',
			'/foundations/appearance/'
		);
	});
	it('renders the top navigation if pagePath from pageContext is empty', () => {
		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
			pagePath: '',
		};

		render(<DefaultLayout pageContext={context} />);

		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
	});
	it('renders the top navigation in different node environments', () => {
		process.env.NODE_ENV = 'production';
		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
			pagePath: '',
		};

		render(<DefaultLayout pageContext={context} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
	});
	it('renders the top navigation if __PATH_PREFIX__ is undefined', () => {
		const defaultPathPrefix = global.__PATH_PREFIX__;
		global.__PATH_PREFIX__ = undefined;
		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
			pagePath: '',
		};

		render(<DefaultLayout pageContext={context} />);
		expect(screen.getByText('Foundations')).toBeInTheDocument();
		expect(screen.getByText('Foundations')).toHaveAttribute(
			'href',
			'/foundations/'
		);
		global.__PATH_PREFIX__ = defaultPathPrefix;
	});
});
