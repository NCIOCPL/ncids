import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../button';

describe('Button component', () => {
	it('should be defined', () => {
		expect(Button).toBeDefined();
	});

	it('renders a uswds button by default', () => {
		const { asFragment } = render(<Button label="test" />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders label through as button content', () => {
		const mockChildText = 'chicken';
		render(<Button label={mockChildText} />);
		expect(screen.getByRole('button')).toHaveTextContent('chicken');
	});

	it('renders a button of proper type when specified', () => {
		render(<Button type="submit" label="Submit" />);
		expect(screen.getByText(/submit/i)).toHaveAttribute('type', 'submit');
	});

	it("renders a 'secondary' variant", () => {
		render(<Button label="test" variant="secondary" />);
		expect(screen.getByText(/test/i)).toHaveClass('usa-button--secondary');
	});

	it("renders a 'outline' variant", () => {
		render(<Button label="test" variant="outline" />);
		expect(screen.getByRole('button')).toHaveTextContent('test');
		expect(screen.getByRole('button')).toHaveClass('usa-button--outline');
	});

	it("renders a 'big' variant", () => {
		render(<Button label="test" variant="big" />);
		expect(screen.getByText(/test/i)).toHaveClass('usa-button--big');
	});

	it("renders a 'unstyled' variant", () => {
		render(<Button label="test" variant="unstyled" />);
		expect(screen.getByText(/test/i)).toHaveClass('usa-button--unstyled');
	});

	it('renders a disabled button when passed disabled', () => {
		render(<Button disabled label="Disabled Button" />);
		expect(screen.getByText(/disabled button/i)).toBeDisabled();
	});

	it('adds classes when specified', () => {
		render(
			<Button
				classes="usa-button--outline usa-button--inverse ncids-btn-class"
				label="myClasses"
			/>
		);
		expect(screen.getByText(/myclasses/i)).toHaveClass('ncids-btn-class');
	});

	it('passes otherProps through when provided', () => {
		render(<Button id="testid" label="test" />);
		expect(screen.queryByText('test')).toHaveAttribute('id', 'testid');
	});

	it('calls "clickAction" function when clicked', () => {
		const mockFn = jest.fn();
		render(<Button onClick={mockFn} label="test" />);
		fireEvent.click(screen.getByText(/test/));
		expect(mockFn).toHaveBeenCalled();
	});
});
