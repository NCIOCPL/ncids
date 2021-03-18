import { render } from '@testing-library/react';
import React from 'react';
import DefaultLayout from '../default-layout';
import { useStaticQuery } from 'gatsby';

describe('default-layout', () => {
	beforeEach(() => {
		useStaticQuery.mockReturnValue({
			site: {
				siteMetadata: {
					title: `Default Starter`,
					description: 'Test Description',
				},
			},
		});
	});

	test('renders the contents', () => {
		const context = {
			frontmatter: {
				title: 'Page Title',
				description: 'My test description',
			},
		};

		const { container } = render(
			<DefaultLayout pageContext={context}>
				<h1>Hello World</h1>
			</DefaultLayout>
		);

		expect(container.querySelector('h1')).toBeInTheDocument();
		expect(container.querySelector('h1')).toHaveTextContent('Hello World');
	});

	test('renders the contents no front matter', () => {
		const context = {
			frontmatter: {},
		};

		const { container } = render(
			<DefaultLayout pageContext={context}>
				<h1>Hello World</h1>
			</DefaultLayout>
		);

		// TODO: Test helmet, but it is tricky and not in the
		// rendered content.

		expect(container.querySelector('h1')).toBeInTheDocument();
		expect(container.querySelector('h1')).toHaveTextContent('Hello World');
	});
});
