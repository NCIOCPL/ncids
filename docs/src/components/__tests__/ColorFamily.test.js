import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ColorFamily, ColorSwatch } from '../ColorFamily';

afterEach(cleanup);

describe('ColorFamily ', () => {
	it('should be defined', () => {
		expect(ColorFamily).toBeDefined();
	});

	it('renders family colors', () => {
		render(
			<ColorFamily label="Info">
				<ColorSwatch name="lighter" family="cerulean" hex="#d4e7f2" />
				<ColorSwatch name="light" family="cerulean" hex="#66afd7" />
				<ColorSwatch name="base" family="cerulean" hex="#007bbd" />
				<ColorSwatch name="dark" family="cerulean" hex="#006297" />
				<ColorSwatch name="darker" family="cerulean" hex="#6e8491" />
			</ColorFamily>
		);

		expect(screen.getByText('Info')).toBeInTheDocument();
		expect(screen.getByText('cerulean-30')).toBeInTheDocument();
		expect(screen.getByText('rgb(212, 231 ,242)')).toBeInTheDocument();
		expect(screen.getByText('darker')).toBeInTheDocument();
		expect(screen.getByText('lighter')).toBeInTheDocument();
		expect(screen.getByText('invalid')).toBeInTheDocument();
	});
	/*
	it('renders single color', () => {
		render(
			<ColorFamily label="Info">
				<ColorSwatch name="light" family="cerulean" hex="#66afd7" />
			</ColorFamily>
		);
		expect(screen.getByText('Info')).toBeInTheDocument();
		expect(screen.getByText('rgb(102, 175, 215)')).toBeInTheDocument();
	});
	*/
	it('renders empty family', () => {
		render(<ColorFamily label="Info"></ColorFamily>);
		expect(screen.getByText('Info')).toBeInTheDocument();
	});
});
