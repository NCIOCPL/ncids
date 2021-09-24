import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import hexToRgb from '../utils/hexToRgb';

afterEach(cleanup);

describe('hexToRgb ', () => {
	it('should be defined', () => {
		expect(hexToRgb).toBeDefined();
	});

	it('renders the hex to rgb', () => {
		const color = hexToRgb('#226467');
		render(
			<div>
				{!color
					? 'invalid'
					: color.map((color) => <div key={`${color}`}>{color}</div>)}
			</div>
		);

		// check for the rgb colors exist
		expect(screen.getByText('34')).toBeInTheDocument();
		expect(screen.getByText('100')).toBeInTheDocument();
		expect(screen.getByText('103')).toBeInTheDocument();
	});

	it('check for empty response', () => {
		const color = hexToRgb(' ');
		render(<div>{!color ? 'invalid' : color}</div>);

		// check for the rgb colors is invalid
		expect(screen.getByText('invalid')).toBeInTheDocument();
	});
});
