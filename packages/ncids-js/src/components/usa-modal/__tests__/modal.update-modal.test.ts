import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { USAModal } from '../modal.component';

const blankDom = `<button class="usa-button" id="modal-01" data-async-modal="123">Open First Modal</button>`;
const secondDom = `<button class="usa-button" id="modal-02" data-async-modal="551">Open Second Modal</button>`;

const modalConfig = {
	id: 'modal-callback',
	forced: false,
	modifier: '',
	title: 'some example',
};

const modalConfigAlt = {
	id: 'modal-callback',
	forced: false,
	modifier: 'usa-modal--lg',
	title: 'some example',
};

const modalContent = {
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

const modalContentAlt = {
	title: 'Second Modal Save Now?',
	content: '<div>More <i>information</i> would be listed here.</div>',
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
		const consoleSpy = jest.spyOn(console, 'log');
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const modalElement = document.querySelectorAll('[data-async-modal]')[0];
		const component = USAModal.createConfig(modalConfig);
		component.updateDialog(modalContent);
		const htmlContent = document.createElement('div');
		const innerContent = document.createElement('p');
		innerContent.innerHTML = 'test';
		htmlContent.appendChild(innerContent);
		component.updateBody(htmlContent);
		modalElement.addEventListener(
			'click',
			(e) => component.handleModalOpen(e),
			false
		);

		await user.click(modalElement);

		expect(await screen.queryByText('test')).toBeInTheDocument();

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		component.updateBody('test2');

		expect(await screen.queryByText('test2')).toBeInTheDocument();

		const closers = document.querySelectorAll('[data-close-modal]');

		// check for classnames on buttons
		const button = screen.getByText('Continue without saving');
		expect(await button).toHaveClass('usa-button--outline');
		expect(await button).toHaveClass('usa-button');

		await user.click(closers[0]);
		expect(consoleSpy).toHaveBeenCalledWith('this is 1 callback');
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
			const modal = USAModal.createConfig(modalConfig);
			modal.updateDialog(index % 2 == 0 ? modalContent : modalContentAlt);
			dom.addEventListener('click', (e) => modal.handleModalOpen(e), false);
		});

		await user.click(modalElements[0]);

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

		await user.click(modalElements[1]);
		expect(
			await screen.queryByText('Second Modal Save Now?')
		).toBeInTheDocument();
	});

	it('Open config with empty title', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const modalElement = document.querySelectorAll('[data-async-modal]')[0];
		const component = USAModal.createConfig(modalConfigAlt);
		const tempConfig = modalContent;
		tempConfig.title = '';
		component.updateDialog(tempConfig);
		modalElement.addEventListener(
			'click',
			(e) => component.handleModalOpen(e),
			false
		);

		await user.click(modalElement);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).not.toBeInTheDocument();
	});

	it('Heading with DOM elements', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = blankDom;
		document.body.append(container);

		const modalElement = document.querySelectorAll('[data-async-modal]')[0];
		const component = USAModal.createConfig(modalConfigAlt);
		const heading = document.createElement('h2');
		const span = document.createElement('span');
		span.innerHTML = 'test heading';
		heading.appendChild(span);

		component.updateDialog(modalContent);
		component.updateHeading(heading);
		modalElement.addEventListener(
			'click',
			(e) => component.handleModalOpen(e),
			false
		);

		await user.click(modalElement);

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

		modalConfigAlt.forced = true;
		const modalElement = document.querySelectorAll('[data-async-modal]')[0];
		const component = USAModal.createConfig(modalConfigAlt);
		const tempConfig = modalContent;
		tempConfig.footer = [];
		component.updateDialog(modalContent);
		modalElement.addEventListener(
			'click',
			(e) => component.handleModalOpen(e),
			false
		);

		await user.click(modalElement);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(
			await screen.queryByText('Continue without saving')
		).not.toBeInTheDocument();
	});
});
