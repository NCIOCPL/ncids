import { render, screen } from '@testing-library/react';
import React from 'react';
import IconCatalog from '../icon/icon-catalog';

const glyphs = [
	'angle-arrow-down',
	'angle-arrow-right',
	'angle-arrow-up',
	'arrow-left-solid',
	'envelope',
	'facebook',
	'print',
	'rss',
	'twitter',
	'volume-up',
	'youtube',
];

describe('Code block', () => {
	it('Check that icons are listed out', () => {
		render(<IconCatalog glyphList={glyphs} />);
		expect(screen.getByText('facebook')).toBeInTheDocument();
		expect(screen.getByText('twitter')).toBeInTheDocument();
		expect(screen.getByText('print')).toBeInTheDocument();
		expect(screen.getByText('rss')).toBeInTheDocument();
	});
});
