import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { USAModal } from '../modal.component';
import { ModalConfig } from '../modal-config';
import { ModalButtons } from '../modal-buttons';

const blankDom = `<a href="#" class="usa-button" id="modal-1" data-open-modal="" aria-controls="modal-1">Open default modal</a>`;
const modalConfig = {
	modalId: 'modal-1',
	title: 'Are you sure you want to continue?',
	content: 'You have unsaved changes that will be lost.',
	footer: [
		{
			label: 'Continue without saving',
			style: 'usa-button--outline',
			closeModal: true,
		},
		{
			label: 'Go Back',
			style: '',
			closeModal: true,
		},
	],
};
const buttonConfig = [
	{
		label: 'Updated Button Text',
		style: '',
		closeModal: true,
	},
	{
		label: 'New Text',
		style: 'usa-button--outline',
		closeModal: true,
	},
];
describe('USA Modal - Events', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Open config based modal window', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const component = USAModal.create(modalConfig as ModalConfig);
		expect(component).toBeTruthy();

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

	it('Update header in modal', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const component = USAModal.create(modalConfig as ModalConfig);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		component.updateHeading('Testing Header Change');

		expect(
			await screen.queryByText('Testing Header Change')
		).toBeInTheDocument();
	});

	it('Update body copy in modal', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const component = USAModal.create(modalConfig as ModalConfig);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		component.updateHeading('<p>Changing the body copy text only</p>');

		expect(
			await screen.queryByText('Changing the body copy text only')
		).toBeInTheDocument();
	});

	it('Update buttons copy in modal', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const component = USAModal.create(modalConfig as ModalConfig);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		component.updateButtons(buttonConfig as ModalButtons[]);

		expect(await screen.queryByText('Updated Button Text')).toBeInTheDocument();

		expect(await screen.queryByText('New Text')).toBeInTheDocument();
	});
});
