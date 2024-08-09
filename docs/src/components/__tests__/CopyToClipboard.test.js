import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import copy from 'copy-to-clipboard'; // Mocked dependency
import CopyToClipboard from '../CopyToClipboard'; // Update with the correct path

// Mock the copy-to-clipboard library
jest.mock('copy-to-clipboard', () => jest.fn());

describe('CopyToClipboard', () => {
	it('renders button and handles copy', () => {
		const value = 'Hello, world!';
		copy.mockImplementation(() => true); // Mock the copy function

		render(<CopyToClipboard value={value} />);

		const button = screen.getByRole('button', {
			name: 'Copy code to clipboard',
		});

		// Initial state assertions
		expect(button).toBeInTheDocument();
		expect(screen.queryByText('Copied!')).not.toBeInTheDocument();

		// Simulate click on the button
		fireEvent.click(button);

		// Assertions after click
		expect(copy).toHaveBeenCalledWith(value);
		expect(screen.queryByText('Copied!')).toBeInTheDocument();
	});
});
