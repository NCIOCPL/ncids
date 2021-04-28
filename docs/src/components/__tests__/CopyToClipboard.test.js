import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import CopyToClipboard from '../CopyToClipboard';

describe('Copy To Clipboard', () => {
	it('check button exists', () => {
		const testClass = 'usa-button--primary';
		const code = `<Button label="default" classes="${testClass}"/>`;
		const { container } = render(<CopyToClipboard value={code} />);
		// check if button exists
		expect(container.querySelector('button')).toBeInTheDocument();
		expect(container.querySelector('button')).toHaveClass('copy-to-clipboard');
		expect(container.querySelector('button')).toHaveTextContent('Copy Code');
	});

	it('check copy function', async () => {
		const testClass = 'usa-button--secondary';
		const jsdomPrompt = window.prompt;
		jest.useFakeTimers();
		window.prompt = () => {};
		const code = `<Button label="default" classes="${testClass}"/>`;
		const { container } = render(<CopyToClipboard value={code} />);
		// check button text before
		expect(container.querySelector('button')).toHaveTextContent('Copy Code');
		// fire click on button
		fireEvent.click(container.querySelector('button'));
		// test to see if text changed in button
		expect(container.querySelector('button')).toHaveTextContent('Copied!');
		jest.runAllTimers();
		window.prompt = jsdomPrompt;
	});
});
