import React from 'react';
import { render, screen } from '@testing-library/react';

import MarkdownHeader from '../markdown-heading';
import { SluggerProvider } from '../../hooks/slugger';

describe('Markdown Header', () => {
	it('renders an h1 with anchor', async () => {
		const H1 = MarkdownHeader(1);

		render(
			<SluggerProvider>
				<H1>This is my title</H1>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h1 a' })
		).toBeInTheDocument();
	});

	it('renders an h2 with anchor', async () => {
		const H2 = MarkdownHeader(2);

		render(
			<SluggerProvider>
				<H2>This is my title</H2>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h2 a' })
		).toBeInTheDocument();
	});

	it('renders an h3 with anchor', async () => {
		const H3 = MarkdownHeader(3);

		render(
			<SluggerProvider>
				<H3>This is my title</H3>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h3 a' })
		).toBeInTheDocument();
	});

	it('renders an h4 with anchor', async () => {
		const H4 = MarkdownHeader(4);

		render(
			<SluggerProvider>
				<H4>This is my title</H4>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h4 a' })
		).toBeInTheDocument();
	});

	it('renders an h5 with anchor', async () => {
		const H5 = MarkdownHeader(5);

		render(
			<SluggerProvider>
				<H5>This is my title</H5>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h5 a' })
		).toBeInTheDocument();
	});

	it('renders an h6 with anchor', async () => {
		const H6 = MarkdownHeader(6);

		render(
			<SluggerProvider>
				<H6>This is my title</H6>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h6 a' })
		).toBeInTheDocument();
	});

	it('handles anchors with html', async () => {
		const H6 = MarkdownHeader(6);

		render(
			<SluggerProvider>
				<H6>
					This is my <em>title</em>
				</H6>
			</SluggerProvider>
		);

		expect(screen.getByText('This is my title')).toBeInTheDocument();
	});

	it('supports having a prefix', async () => {
		const H2 = MarkdownHeader(2);

		render(
			<SluggerProvider>
				<H2 prefix="aaa">This is my title</H2>
			</SluggerProvider>
		);

		expect(
			screen.getByText('This is my title', { selector: 'h2 a' })
		).toBeInTheDocument();
	});

	it('does not blow up with no children', async () => {
		const H2 = MarkdownHeader(2);

		render(
			<SluggerProvider>
				<H2 />
			</SluggerProvider>
		);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('Throws error on unknown level', async () => {
		// React wants to let us know an exception is going to be thrown below
		// and we don't want to see the console error in the output.
		jest.spyOn(console, 'error').mockImplementation(() => null);

		const H22 = MarkdownHeader(22);

		expect(() =>
			render(
				<SluggerProvider>
					<H22>This is my title</H22>
				</SluggerProvider>
			)
		).toThrow('Unknown header level 22');

		console.error.mockRestore();
	});
});
