import { render, screen } from '@testing-library/react';
import React from 'react';
import { Head } from './../head';
import { useStaticQuery } from 'gatsby';

describe('default-layout', () => {
	beforeEach(() => {
		// We should not render <html> inside of a div, but that is the way
		// to test, so let's shut up the console error.
		jest.spyOn(console, 'error').mockImplementation(() => null);
	});

	afterEach(() => {
		console.error.mockRestore();
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

		const pageContext = {
			frontmatter: {
				browser_title: title,
				description: description,
			},
		};

		render(<Head pageContext={pageContext} />);

		expect(
			screen.getByText('Test Title - Default Starter')
		).toBeInTheDocument();
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

		expect(screen.getByText('Default Starter')).toBeInTheDocument();
	});
});
