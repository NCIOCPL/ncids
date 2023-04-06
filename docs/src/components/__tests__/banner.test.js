import { render, screen } from '@testing-library/react';
import React from 'react';

import Banner from '../banner';

describe('Banner', () => {
	it('renders Banner', () => {
		render(<Banner />);
		expect(
			screen.getByText('An official website of the United States government')
		).toBeInTheDocument();
	});
});
