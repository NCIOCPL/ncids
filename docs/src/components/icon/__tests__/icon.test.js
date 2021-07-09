import { render, screen } from '@testing-library/react';
import React from 'react';
import Icon from '../icon';

describe('Icon component', () => {
	it('renders icon (hidden)', () => {
		render(<Icon icon="paint-roller" />);
		expect(() => screen.getByRole('img')).toThrow();
	});

	it('renders icon with size (hidden)', () => {
		render(<Icon icon="paint-roller" size={4} />);
		expect(() => screen.getByRole('img')).toThrow();
	});

	it('renders icon with color (hidden)', () => {
		render(<Icon icon="paint-roller" color="red" />);
		expect(() => screen.getByRole('img')).toThrow();
	});

	it('renders brand icon (hidden)', () => {
		render(<Icon icon="twitter" variant="brand" />);
		expect(() => screen.getByRole('img')).toThrow();
	});
});
