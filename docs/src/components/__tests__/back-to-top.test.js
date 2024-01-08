import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import BackToTop from '../footer/back-to-top';

describe('BackToTop', () => {
	it('renders component', () => {
		render(<BackToTop />);
		expect(screen.getByText('Back To Top')).toBeInTheDocument();
	});

	it('test visibility', () => {
		render(<BackToTop />);

		fireEvent.scroll(window, { target: { scrollY: 100 } });
		expect(screen.getByText('Back To Top')).toBeVisible();
	});
});
