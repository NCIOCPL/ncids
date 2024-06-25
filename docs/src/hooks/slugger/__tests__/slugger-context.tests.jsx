import React from 'react';
import PropTypes from 'prop-types';

import { render, screen } from '@testing-library/react';

import { SluggerProvider, useSlugger } from '../slugger-context';

const TestComponent = ({ text }) => {
	const slugger = useSlugger();
	const sluggedText = slugger.slug(text);

	return (
		<>
			<h2>{sluggedText}</h2>
		</>
	);
};

describe('slugger-context', () => {
	it('correctly uses a single slugger instance', async () => {
		const App = () => (
			<SluggerProvider>
				<TestComponent text="test cow" />
				<TestComponent text="test cow" />
			</SluggerProvider>
		);

		TestComponent.propTypes = {
			text: PropTypes.string,
		};

		render(<App />);

		expect(await screen.findByText('test-cow')).toBeInTheDocument();
		expect(await screen.findByText('test-cow-1')).toBeInTheDocument();
	});

	it('throws a meaningful error if there is no provider', async () => {
		// React wants to let us know an exception is going to be thrown below
		// and we don't want to see the console error in the output.
		jest.spyOn(console, 'error').mockImplementation(() => null);

		expect(() => render(<TestComponent text="a" />)).toThrow(
			'useSlugger must be used within a SluggerProvider'
		);

		console.error.mockRestore();
	});
});
