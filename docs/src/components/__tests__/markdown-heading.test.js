import React from 'react';
import { render, screen } from '@testing-library/react';

import MarkdownHeader from '../markdown-heading';

describe('Markdown Header', () => {
	it('renders an h2 with anchor', async () => {
		const H2 = MarkdownHeader(2);

		render(<H2>This is my title</H2>);

		expect(
			screen.getByText('This is my title', { selector: 'h2 a' })
		).toBeInTheDocument();
	});

	it('renders an h3 with anchor', async () => {
		const H3 = MarkdownHeader(3);

		render(<H3>This is my title</H3>);

		expect(
			screen.getByText('This is my title', { selector: 'h3 a' })
		).toBeInTheDocument();
	});

	it('renders an h4 with anchor', async () => {
		const H4 = MarkdownHeader(4);

		render(<H4>This is my title</H4>);

		expect(
			screen.getByText('This is my title', { selector: 'h4 a' })
		).toBeInTheDocument();
	});

	it('renders an h5 with anchor', async () => {
		const H5 = MarkdownHeader(5);

		render(<H5>This is my title</H5>);

		expect(
			screen.getByText('This is my title', { selector: 'h5 a' })
		).toBeInTheDocument();
	});

	it('renders an h6 with anchor', async () => {
		const H6 = MarkdownHeader(6);

		render(<H6>This is my title</H6>);

		expect(
			screen.getByText('This is my title', { selector: 'h6 a' })
		).toBeInTheDocument();
	});

	it('handles anchors with html', async () => {
		const H6 = MarkdownHeader(6);

		render(
			<H6>
				This is my <em>title</em>
			</H6>
		);

		expect(screen.getByText('This is my title')).toBeInTheDocument();
	});

	it('Throws error on unknown level', async () => {
		const H22 = MarkdownHeader(22);

		expect(() => render(<H22>This is my title</H22>)).toThrow(
			'Unknown header level 22'
		);
	});
});
