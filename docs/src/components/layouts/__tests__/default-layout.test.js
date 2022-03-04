import { render, screen } from '@testing-library/react';
import React from 'react';
import DefaultLayout from '../default-layout';
import { useStaticQuery } from 'gatsby';

describe('default-layout', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders the contents', () => {
		useStaticQuery.mockReturnValue({
			site: {
				siteMetadata: {
					title: `Default Starter`,
					description: 'Test Description',
				},
			},
		});

		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
		};

		render(
			<DefaultLayout pageContext={context}>
				<h1>Hello World</h1>
			</DefaultLayout>
		);

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Hello World'
		);
	});

	it('renders without site title', () => {
		useStaticQuery.mockReturnValue({
			site: {
				siteMetadata: {
					description: 'Test Description',
				},
			},
		});

		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
		};

		render(
			<DefaultLayout pageContext={context}>
				<h1>Hello World</h1>
			</DefaultLayout>
		);

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Hello World'
		);
	});

	it('renders the contents no front matter', () => {
		useStaticQuery.mockReturnValue({
			site: {
				siteMetadata: {
					title: `Default Starter`,
					description: 'Test Description',
				},
			},
		});

		const context = {
			frontmatter: {},
		};

		render(
			<DefaultLayout pageContext={context}>
				<h1>Hello World</h1>
			</DefaultLayout>
		);

		// TODO: Test helmet, but it is tricky and not in the
		// rendered content.

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Hello World'
		);
	});
});
