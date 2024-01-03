import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { getExampleDOM } from './focustrap-dom';
import { FocusTrap } from '../../utils/focus-trap';

describe('Focus trap test', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('FocusTrap should init', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.container');
		const testTrap = new FocusTrap(<HTMLElement>element);
		expect(testTrap).toBeTruthy();
	});

	it('Activate Focus Trap on Element', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.container');
		const testTrap = new FocusTrap(<HTMLElement>element);
		const trapArea = document.querySelector('.nci-nav');

		const PrimaryButtons = document.querySelectorAll('.button');
		const firstButton = <HTMLElement>PrimaryButtons[0];

		testTrap.toggleTrap(true, <HTMLElement>trapArea);
		// first tab
		firstButton.focus();
		expect(<HTMLElement>PrimaryButtons[0]).toHaveFocus();
	});

	it('Toggle Focus Trap on/off', async () => {
		const user = userEvent.setup();
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.container');
		const testTrap = new FocusTrap(<HTMLElement>element);
		const trapArea = document.querySelector('.nci-nav');

		const PrimaryButtons = document.querySelectorAll('.button');
		const total = PrimaryButtons.length - 1;

		const lastButton = <HTMLElement>PrimaryButtons[total];

		testTrap.toggleTrap(true, <HTMLElement>trapArea);
		// last button
		lastButton.focus();
		expect(<HTMLElement>PrimaryButtons[5]).toHaveFocus();
		await user.tab();
		// trap to 1st while active
		expect(<HTMLElement>PrimaryButtons[1]).toHaveFocus();

		testTrap.toggleTrap(false, <HTMLElement>trapArea);
		// last button
		lastButton.focus();
		expect(<HTMLElement>PrimaryButtons[5]).toHaveFocus();
		// tab off menu to body
		await user.tab();
		// tab to first element
		await user.tab();
		// no trap - jump to first in array
		expect(<HTMLElement>PrimaryButtons[0]).toHaveFocus();
	});

	it('Test Focus Trap Loop Forward', async () => {
		const user = userEvent.setup();
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.container');
		const testTrap = new FocusTrap(<HTMLElement>element);
		const trapArea = document.querySelector('.nci-nav');

		const PrimaryButtons = document.querySelectorAll('.button');
		const firstButton = <HTMLElement>PrimaryButtons[0];

		testTrap.toggleTrap(true, <HTMLElement>trapArea);
		// first button is outside our trap
		firstButton.focus();
		expect(<HTMLElement>PrimaryButtons[0]).toHaveFocus();
		// start tabbing
		await user.tab();
		// inside trap
		expect(<HTMLElement>PrimaryButtons[1]).toHaveFocus();
		await user.tab();
		expect(<HTMLElement>PrimaryButtons[2]).toHaveFocus();
		await user.tab();
		expect(<HTMLElement>PrimaryButtons[3]).toHaveFocus();
		await user.tab();
		expect(<HTMLElement>PrimaryButtons[4]).toHaveFocus();
		await user.tab();
		expect(<HTMLElement>PrimaryButtons[5]).toHaveFocus();
		await user.tab();
		// First element in the trap
		expect(<HTMLElement>PrimaryButtons[1]).toHaveFocus();
	});

	it('Test Focus Trap Loop Backwards', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.container');
		const testTrap = new FocusTrap(<HTMLElement>element);
		const trapArea = document.querySelector('.nci-nav');

		const PrimaryButtons = document.querySelectorAll('.button');
		const total = PrimaryButtons.length - 1;

		const lastButton = <HTMLElement>PrimaryButtons[total];
		testTrap.toggleTrap(true, <HTMLElement>trapArea);
		// first button is outside our trap
		lastButton.focus();
		expect(<HTMLElement>PrimaryButtons[5]).toHaveFocus();
		// start tabbing

		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await waitFor(() => {
			expect(<HTMLElement>PrimaryButtons[4]).toHaveFocus();
		});
		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await waitFor(() => {
			expect(<HTMLElement>PrimaryButtons[3]).toHaveFocus();
		});
		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await waitFor(() => {
			expect(<HTMLElement>PrimaryButtons[2]).toHaveFocus();
		});
		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await waitFor(() => {
			expect(<HTMLElement>PrimaryButtons[1]).toHaveFocus();
		});
		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		await waitFor(() => {
			expect(<HTMLElement>PrimaryButtons[5]).toHaveFocus();
		});
	});

	it('should add and remove event handlers on toggle call', () => {
		const container = getExampleDOM();
		document.body.append(container);

		// This is kinda a dirty test cause I know the underlying logic,
		// but I can't think of anything better to ensure we clear out
		// all the event handlers on unregister.
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const element = document.querySelector('.container');
		const testTrap = new FocusTrap(<HTMLElement>element);
		const trapArea = document.querySelector('.nci-nav');

		testTrap.toggleTrap(true, <HTMLElement>trapArea);
		expect(testTrap).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(1);

		testTrap.toggleTrap(false, <HTMLElement>trapArea);
		expect(removeEventListener.mock.calls).toHaveLength(1);
	});
});
