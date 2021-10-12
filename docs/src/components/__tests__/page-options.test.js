import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import PageOptions from '../page-options';

describe('Page Options', () => {
	it('renders with two options', () => {
		const title = 'example title';
		render(<PageOptions pageTitle={title} />);

		const pageOption = screen.queryAllByRole('button');

		expect(pageOption[0]).toBeInTheDocument();
		expect(pageOption[1]).toBeInTheDocument();
	});

	it('clicking button activates option', async () => {
		const jsdomPrompt = window.print();
		jest.useFakeTimers();

		const title = 'example title';
		render(<PageOptions pageTitle={title} />);

		const pageOption = screen.queryAllByRole('button');
		fireEvent.click(pageOption[0]);
		fireEvent.click(pageOption[1]);
		await waitFor(() => screen.queryAllByRole('button'));

		jest.runAllTimers();
		window.print = jsdomPrompt;
	});
});
