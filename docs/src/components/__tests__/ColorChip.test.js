import { render } from '@testing-library/react';
import React from 'react';
import { ColorChip } from '../ColorChip';

describe('Color Chip', () => {
	it('renders the color correctly', () => {
		const hexcolor = '#f1c5d2';
		const { container } = render(<ColorChip color={hexcolor} />);
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.firstChild).toHaveStyle(`background-color: ${hexcolor}`);
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});
	it('renders with no value', () => {
		const hexcolor = '#000000';
		const { container } = render(<ColorChip color="" />);
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.firstChild).toHaveStyle(`background-color: ${hexcolor}`);
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});
});
