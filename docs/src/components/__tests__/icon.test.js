import { render, screen } from '@testing-library/react';
import React from 'react';
import Icon from '../icon/icon';

describe('Code block', () => {
	it('Check for svg DOM', () => {
		const glyphName = 'twitter';
		const { container } = render(<Icon glyph={glyphName} />);
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.querySelector('svg')).toBeInTheDocument();
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});
	it('Check for icon aira labels', () => {
		const glyphName = '';
		render(<Icon description="twitter" glyph={glyphName} />);
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(screen.getByLabelText('twitter')).toBeInTheDocument();
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});
});
