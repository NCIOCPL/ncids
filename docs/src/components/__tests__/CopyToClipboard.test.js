import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import CopyToClipboard from '../CopyToClipboard';

describe('Copy To Clipboard', () => {
	it('check button exists', () => {
		const testClass = 'usa-button--primary';
		const code = `<Button label="default" classes="${testClass}"/>`;
		const { container } = render(<CopyToClipboard value={code} />);
		// check if button exists
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.querySelector('button')).toBeInTheDocument();
		expect(container.querySelector('button')).toHaveClass('copy-to-clipboard');
		expect(container.querySelector('button')).toHaveTextContent('Copy Code');
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
	});

	it('check copy function', async () => {
		const testClass = 'usa-button--secondary';
		const jsdomPrompt = window.prompt;
		jest.useFakeTimers();
		window.prompt = () => {};
		const code = `<Button label="default" classes="${testClass}"/>`;
		const { container } = render(<CopyToClipboard value={code} />);
		// check button text before
		/* eslint-disable testing-library/no-node-access, testing-library/no-container */
		expect(container.querySelector('button')).toHaveTextContent('Copy Code');
		// fire click on button
		fireEvent.click(container.querySelector('button'));
		// test to see if text changed in button
		expect(container.querySelector('button')).toHaveTextContent('Copied!');
		/* eslint-enable testing-library/no-node-access, testing-library/no-container */
		jest.runAllTimers();
		window.prompt = jsdomPrompt;
	});
});
