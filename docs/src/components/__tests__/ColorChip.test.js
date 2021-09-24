import { render } from '@testing-library/react';
import React from 'react';
import { ColorChip } from '../ColorChip';

describe('Color Chip', () => {
	it('renders the color correctly', () => {
		const hexcolor = '#f1c5d2';
		const { container } = render(<ColorChip color={hexcolor} />);
		expect(container.firstChild).toHaveStyle(`background-color: ${hexcolor}`);
	});
	it('renders with no value', () => {
		const hexcolor = '#000000';
		const { container } = render(<ColorChip color="" />);
		expect(container.firstChild).toHaveStyle(`background-color: ${hexcolor}`);
	});
});
