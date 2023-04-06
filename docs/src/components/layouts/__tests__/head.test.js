import { render } from '@testing-library/react';
import React from 'react';
import Helmet from 'react-helmet';
import Head from './../head';
import { useStaticQuery } from 'gatsby';

describe('default-layout', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('renders the contents in the meta tag', () => {
		useStaticQuery.mockReturnValue({
			site: {
				siteMetadata: {
					title: `Default Starter`,
					description: 'Test Description',
				},
			},
		});

		const title = 'Test Title';
		const description = 'Test Description';

		render(<Head title={title} description={description} />);
		const helmet = Helmet.peek();

		expect(helmet.title).toBe('Test Title | Default Starter');
	});
	it('renders the contents within the meta tag without given props', () => {
		useStaticQuery.mockReturnValue({
			site: {
				siteMetadata: {
					title: `Default Starter`,
					description: 'Test Description',
				},
			},
		});

		render(<Head />);
		const helmet = Helmet.peek();

		expect(helmet.title).toBe('Default Starter');
	});
});
