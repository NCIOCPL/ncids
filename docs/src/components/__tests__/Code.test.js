import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import Code from '../Code';

describe('Code Component', () => {
	it('renders code correctly', () => {
		render(<Code>console.log(&apos;Hello, world!&apos;);</Code>);

		expect(
			screen.getByText("console.log('Hello, world!');")
		).toBeInTheDocument();
	});

	it('inline code rendering', () => {
		render(<Code inline>console.log(&apos;Hello, inline!&apos;);</Code>);

		expect(
			screen.getByText("console.log('Hello, inline!');")
		).toBeInTheDocument();
	});

	it('expands and collapses code block when code is more than five lines', () => {
		render(<Code>{`console.log('Hello, world!');\n`.repeat(10)}</Code>);

		const showMoreButton = screen.getByText('Show More');

		//expand the section
		fireEvent.click(showMoreButton);
		expect(showMoreButton).toHaveTextContent('Show Less');

		//re-collapse the section
		fireEvent.click(showMoreButton);
		expect(showMoreButton).toHaveTextContent('Show More');
	});

	it('does not render when nopreview is true', async () => {
		await act(async () => {
			render(
				<Code className="language-html" nopreview={true}>{`
				<section aria-label="chicken">Some Section</section>
			`}</Code>
			);
		});
		expect(screen.queryByLabelText('chicken')).not.toBeInTheDocument();
	});

	it('renders the preview for HTML', async () => {
		await act(async () => {
			render(
				<Code className="language-html">{`
				<section aria-label="chicken">Some Section</section>
			`}</Code>
			);
		});
		expect(screen.getByLabelText('chicken')).toHaveTextContent('Some Section');
	});
});
