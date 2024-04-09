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
		await expect(screen.getByRole('presentation')).toHaveClass('active');
		fireEvent.click(screen.getByRole('presentation'));
		await expect(screen.getByRole('presentation')).not.toHaveClass('active');
	});
});
