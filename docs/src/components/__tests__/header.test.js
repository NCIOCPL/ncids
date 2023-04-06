import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from '../header';

describe('Header', () => {
	it('renders header', () => {
		render(
			<Header>
				<p>test</p>
			</Header>
		);
		expect(screen.getByTestId('nci-header')).toBeInTheDocument();
	});
});
