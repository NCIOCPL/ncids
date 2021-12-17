import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Button from '../button';

afterEach(cleanup);

describe('Button component', () => {
	it('should be defined', () => {
		expect(Button).toBeDefined();
	});

	it('renders a uswds button by default', () => {
		const btn = render(<Button label="test" />);
		expect(btn).toMatchSnapshot();
	});

	it('renders label through as button content', () => {
		const mockChildText = 'chicken';
		const { queryByText } = render(<Button label={mockChildText} />);
		expect(queryByText('chicken')).toBeTruthy();
	});

	it('renders a button of proper type when specified', () => {
		const { getByText } = render(<Button type="submit" label="Submit" />);
		expect(getByText(/submit/i)).toHaveAttribute('type', 'submit');
	});

	it("renders a 'secondary' variant", () => {
		const { getByText } = render(<Button label="test" variant="secondary" />);
		expect(getByText(/test/i)).toHaveClass('usa-button--secondary');
	});

	it("renders a 'outline' variant", () => {
		const { getByText } = render(<Button label="test" variant="outline" />);
		expect(getByText(/test/i)).toHaveClass('usa-button--outline');
	});

	it("renders a 'big' variant", () => {
		const { getByText } = render(<Button label="test" variant="big" />);
		expect(getByText(/test/i)).toHaveClass('usa-button--big');
	});

	it("renders a 'unstyled' variant", () => {
		const { getByText } = render(<Button label="test" variant="unstyled" />);
		expect(getByText(/test/i)).toHaveClass('usa-button--unstyled');
	});

	it('renders a disabled button when passed disabled', () => {
		const { getByText } = render(<Button disabled label="Disabled Button" />);
		expect(getByText(/disabled button/i)).toBeDisabled();
	});

	it('adds classes when specified', () => {
		const { getByText } = render(
			<Button
				classes="usa-button--outline usa-button--inverse ncids-btn-class"
				label="myClasses"
			/>
		);
		expect(getByText(/myclasses/i)).toHaveClass('ncids-btn-class');
	});

	it('passes otherProps through when provided', () => {
		const { queryByText } = render(<Button id="testid" label="test" />);
		expect(queryByText('test')).toHaveAttribute('id', 'testid');
	});

	it('calls "clickAction" function when clicked', () => {
		const mockFn = jest.fn();
		const { getByText } = render(<Button onClick={mockFn} label="test" />);
		fireEvent.click(getByText(/test/));
		expect(mockFn).toHaveBeenCalled();
	});
});
