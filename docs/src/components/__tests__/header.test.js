import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import Header from '../header';

const mockData = jest.requireActual('../__mocks__/mock-nav-data');

describe('Header', () => {
	it('renders header', () => {
		render(<Header navData={mockData.mockNavData} currentPath={[]} />);
		expect(screen.getByTestId('nci-header')).toBeInTheDocument();
	});

	it('opens and closes mobile menu', async () => {
		render(<Header navData={mockData.mockNavData} currentPath={[]} />);
		expect(screen.getByText('Menu')).toBeInTheDocument();
		fireEvent.click(screen.getByText('Menu'));
		await expect(screen.getByTestId('mobile-nav-overlay')).toHaveClass(
			'active'
		);
		fireEvent.click(screen.getByTestId('mobile-nav-overlay'));
		await expect(screen.getByTestId('mobile-nav-overlay')).not.toHaveClass(
			'active'
		);
	});
});
