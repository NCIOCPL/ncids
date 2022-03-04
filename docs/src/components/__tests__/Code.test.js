import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Code from '../Code';

describe('Code block', () => {
	it('should be defined', () => {
		expect(Code).toBeDefined();
	});

	it('renders the contents', () => {
		const testClass = 'usa-button--primary';
		const context = {
			language: 'language-js',
			code: `<Button label="default" classes="${testClass}"/>`,
		};

		const { container } = render(
			<Code className={context.language}>{context.code}</Code>
		);

		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.querySelector('pre')).toBeInTheDocument();
		expect(container.querySelector('pre').firstChild).toHaveClass('token-line');
		expect(container.querySelector('pre')).toHaveClass('language-js');
		expect(container.querySelector('pre').firstChild).toHaveClass('token-line');
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});

	it('modifies the highlighting language when passed in', () => {
		const context = {
			language: '',
			code: `<Button label="default" classes="test-class"/>`,
		};
		const { container } = render(
			<Code className={context.language}>{context.code}</Code>
		);

		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.querySelector('pre')).not.toHaveClass('language-ts');
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});

	it('defaults to javascript as language when not passed in', () => {
		const context = {
			code: `<Button label="default" classes="test-class"/>`,
		};
		const { container } = render(<Code>{context.code}</Code>);

		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.querySelector('pre')).toHaveClass('language-//js');
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
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

	it('renders the preview for React', async () => {
		await act(async () => {
			render(
				<Code className="language-jsx">{`
				<section aria-label="chicken">Some Section</section>
			`}</Code>
			);
		});
		expect(screen.getByLabelText('chicken')).toHaveTextContent('Some Section');
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
});
