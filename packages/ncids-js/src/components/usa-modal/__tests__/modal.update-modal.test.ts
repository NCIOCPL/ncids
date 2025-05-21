import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { USAModal } from '../modal.component';

const blankDom = `<button class="usa-button" id="modal-01" aria-controls="modal-01" data-open-modal data-async-modal="123">Open Default Modal</button>`;
const secondDom = `<button class="usa-button" id="modal-02" aria-controls="modal-02" data-open-modal data-async-modal="551">Open Second Modal</button>`;
const modalConfig = {
	modalId: 'modal-1',
	title: 'Are you sure you want to continue?',
	content: 'You have unsaved changes that will be lost.',
	footer: [
		{
			label: 'Continue without saving',
			style: 'usa-button--outline',
			closeModal: true,
			cbfunction: () => {
				console.log('this is 1 callback');
			},
		},
		{
			label: 'Go Back',
			style: '',
			closeModal: true,
			cbfunction: () => {
				console.log('this is 2 callback');
			},
		},
	],
};
const modalConfigAlt = {
	modalId: 'modal-2',
	title: 'Second Modal Save Now?',
	content: 'More information would be listed here.',
	footer: [
		{
			label: 'Close Second Modal',
			style: '',
			closeModal: true,
		},
		{
			label: 'Go Back',
			style: 'usa-button--unstyled',
			closeModal: true,
		},
	],
};
describe('USA Modal - Update and Dynamic', () => {
	afterEach(() => {
		jest.restoreAllMocks();
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Open config based modal window', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const modalElement = document.querySelector('[data-async-modal]');
		const component = USAModal.create(modalElement as HTMLButtonElement);
		component.updateDialog(modalConfig);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		const closers = document.querySelectorAll('[data-close-modal]');

		// check for classnames on buttons
		const button = screen.getByText('Continue without saving');
		expect(await button).toHaveClass('usa-button--outline');
		expect(await button).toHaveClass('usa-button');

		await user.click(closers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Create two modal windows', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom + secondDom;
		document.body.append(container);

		const modalElements = Array.from(
			document.querySelectorAll('[data-async-modal]')
		);
		modalElements.map((dom, index) => {
			const modal = USAModal.create(dom as HTMLButtonElement);
			modal.updateDialog(index % 2 == 0 ? modalConfig : modalConfigAlt);
		});

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		const closers = document.querySelectorAll('[data-close-modal]');

		// check for classnames on buttons
		const button = screen.getByText('Continue without saving');
		expect(await button).toHaveClass('usa-button--outline');
		expect(await button).toHaveClass('usa-button');

		await user.click(closers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();

		await user.click(openers[1]);
		expect(
			await screen.queryByText('Second Modal Save Now?')
		).toBeInTheDocument();
	});

	it('Open config with empty title', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const modalElement = document.querySelector('[data-async-modal]');
		const component = USAModal.create(modalElement as HTMLButtonElement);
		const tempConfig = modalConfig;
		tempConfig.title = '';
		component.updateDialog(modalConfig);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Open config with empty footer', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const modalElement = document.querySelector('[data-async-modal]');
		const component = USAModal.create(modalElement as HTMLButtonElement);
		const tempConfig = modalConfig;
		tempConfig.footer = [];
		component.updateDialog(modalConfig);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(
			await screen.queryByText('Continue without saving')
		).not.toBeInTheDocument();
	});
});
