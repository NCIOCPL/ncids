import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Tabs, TabItem } from '../Tabs';

describe('Code block', () => {
	it('renders the contents', () => {
		render(
			<Tabs label="code">
				<TabItem displayText="React" id="react">
					React Example
				</TabItem>
				<TabItem displayText="HTML" id="html">
					HTML Example
				</TabItem>
			</Tabs>
		);
		// check for the React tab to exist
		expect(screen.getByText('React')).toBeInTheDocument();
		// check for parent container
		expect(screen.queryByLabelText('code')).toBeInTheDocument();
		// check for all buttons with role tab
		const testTabs = screen.queryAllByRole('tab');
		// check for two tabs - content in second one
		expect(testTabs[0]).toBeInTheDocument();
		expect(testTabs[1]).toHaveTextContent('HTML');

		const testPanel = screen.queryByRole('tabpanel');
		expect(testPanel).toBeInTheDocument();
		expect(testPanel).toHaveTextContent('React Example');
	});

	it('renders 3 tabs to test data', () => {
		render(
			<Tabs label="code">
				<TabItem displayText="React" id="react">
					React Example
				</TabItem>
				<TabItem displayText="HTML" id="html">
					HTML Example
				</TabItem>
				<TabItem displayText="CSS" id="css">
					CSS Example
				</TabItem>
			</Tabs>
		);
		// check for the React tab to exist
		expect(screen.getByText('React')).toBeInTheDocument();
		// check for all buttons with role tab
		const testTabs = screen.queryAllByRole('tab');
		// check for two tabs - content in second one
		expect(testTabs[0]).toBeInTheDocument();
		expect(testTabs[1]).toHaveTextContent('HTML');
		expect(testTabs[2]).toHaveTextContent('CSS');
	});

	it('renders 1 tabs to test data', () => {
		render(
			<Tabs label="code">
				<TabItem displayText="React" id="react">
					React Example
				</TabItem>
			</Tabs>
		);

		// check for the React tab to exist
		expect(screen.getByText('React')).toBeInTheDocument();
		expect(screen.getByRole('tab')).toBeInTheDocument();
	});

	// test for no data
	it('no test data', () => {
		render(<Tabs label="code"></Tabs>);
		expect(screen.queryByLabelText('code')).toBeInTheDocument();
	});

	it('clicking tab activates content', async () => {
		render(
			<Tabs label="code">
				<TabItem displayText="React" id="react">
					React Example
				</TabItem>
				<TabItem displayText="HTML" id="html">
					HTML Example
				</TabItem>
			</Tabs>
		);
		//Check for the first tab to be there
		expect(screen.queryAllByRole('tab')[0]).toBeInTheDocument();

		// click last tab
		fireEvent.click(screen.getByText('HTML'));
		expect(await screen.findByText('HTML Example')).toBeVisible();
		expect(screen.queryByRole('tabpanel')).toHaveTextContent('HTML Example');
		// click first tab
		fireEvent.click(screen.getByText('React'));
		expect(await screen.findByText('React Example')).toBeVisible();
		expect(screen.queryByRole('tabpanel')).toHaveTextContent('React Example');
	});
});
