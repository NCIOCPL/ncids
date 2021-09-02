import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import grade from '../utils/grade';

afterEach(cleanup);

describe('grade ', () => {
	it('should be defined', () => {
		expect(grade).toBeDefined();
	});

	it('finds correct value', () => {
		const colorGrade = grade(0.9734);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('1')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.9473);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('2')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.9216);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('3')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.8963);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('4')).toBeInTheDocument();
	});

	it('finds correct value', () => {
		const colorGrade = grade(0.8547);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('5')).toBeInTheDocument();
	});

	it('finds correct value', () => {
		const colorGrade = grade(0.7756);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('10')).toBeInTheDocument();
	});

	it('finds correct value', () => {
		const colorGrade = grade(0.5461);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('20')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.3839);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('30')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.2646);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('40')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.1784);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('50')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.1097);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('60')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.0596);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('70')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.0273);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('80')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.011);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('90')).toBeInTheDocument();
	});
	it('finds correct value', () => {
		const colorGrade = grade(0.0);
		render(<div>{!colorGrade ? 'invalid' : <div>{colorGrade}</div>}</div>);
		expect(screen.getByText('100')).toBeInTheDocument();
	});
});
