import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { USAModal } from '../modal.component';
import modalDom from './default.dom';
import forcedDom from './forced.dom';

describe('USA Modal - Events', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Open default modal window', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();
	});

	it('Closes modal by top right button', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Closes modal by first footer button', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[1]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Closes modal by second footer button', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[2]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Closes modal by the escape key', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		await user.keyboard('[Escape]');

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Closes modal offscreen by the overlay', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		const overlay = document.querySelectorAll('.usa-modal-overlay');
		await user.click(overlay[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Test forced modal doesnt close offscreen by the overlay', async () => {
		const container = document.createElement('div');
		container.innerHTML = forcedDom;
		document.body.append(container);

		const user = userEvent.setup();

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		const overlay = document.querySelectorAll('.usa-modal-overlay');
		await user.click(overlay[0]);

		expect(
			await screen.queryByText('Your session will end soon.')
		).toBeInTheDocument();
	});

	it('Tab between modal button', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');

		await user.click(openers[0]);

		const closers = document.querySelectorAll('[data-close-modal]');

		expect(closers[0]).toHaveFocus();

		await user.keyboard('[Tab]');
		expect(closers[1]).toHaveFocus();

		await user.keyboard('[Tab]');
		expect(closers[2]).toHaveFocus();

		await user.keyboard('[Tab]');
		expect(closers[0]).toHaveFocus();

		await user.click(closers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Check dispatched events', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const modalOpenedEvent = jest.fn();
		const modalClosedEvent = jest.fn();
		const ModalCloseEscapeEvent = jest.fn();
		const ModalCloseOverlayEvent = jest.fn();

		const element = document.querySelector('.usa-modal') as HTMLElement;
		USAModal.create(<HTMLElement>element);

		element.addEventListener('usa-modal:open', modalOpenedEvent);

		element.addEventListener('usa-modal:open', modalClosedEvent);

		element.addEventListener('usa-modal:close:escape', ModalCloseEscapeEvent);

		element.addEventListener('usa-modal:close:outside', ModalCloseOverlayEvent);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);
		await expect(modalOpenedEvent).toHaveBeenCalledTimes(1);

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[0]);

		expect(modalClosedEvent).toHaveBeenCalledTimes(1);

		await user.click(openers[0]);
		await expect(modalOpenedEvent).toHaveBeenCalledTimes(2);

		const overlay = document.querySelectorAll('.usa-modal-overlay');
		await user.click(overlay[0]);
		await expect(ModalCloseOverlayEvent).toHaveBeenCalledTimes(1);

		await user.click(openers[0]);
		await expect(modalOpenedEvent).toHaveBeenCalledTimes(3);

		await user.keyboard('[Escape]');
		await expect(ModalCloseEscapeEvent).toHaveBeenCalledTimes(1);
	});
});
