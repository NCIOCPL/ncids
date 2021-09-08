import { render, screen } from '@testing-library/react';
import React from 'react';
import Icon from '../icon/icon';

describe('Code block', () => {
	it('Check for svg DOM', () => {
		const glyphName = 'twitter';
		const { container } = render(<Icon glyph={glyphName} />);
		expect(container.querySelector('svg')).toBeInTheDocument();
	});
	it('Check for icon aira labels', () => {
		const glyphName = '';
		render(<Icon description="twitter" glyph={glyphName} />);
		expect(screen.getByLabelText('twitter')).toBeInTheDocument();
	});
});
