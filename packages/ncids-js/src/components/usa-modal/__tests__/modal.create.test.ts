import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import { USAModal } from '../modal.component';
import modalDom from './default.dom';
import forcedDom from './forced.dom';
import longTextDom from './longtext.dom';

describe('Modal - Create Test', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			USAModal.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('Should search for data-open-modal attribute and fail', () => {
		const container = document.createElement('buton');
		container.innerHTML = 'Dummy Link without Open Modal';
		document.body.append(container);

		const element = document.querySelector('[data-open-modal]');
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			USAModal.create(<HTMLElement>element);
		}).toThrow('Element is not an HTMLElement');
	});

	it('Should create a default modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('Should create aforced modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		container.innerHTML = forcedDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(2);
	});

	it('Create all modals on a page', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const modalContainer1 = document.createElement('div');
		modalContainer1.innerHTML = forcedDom;
		document.body.append(modalContainer1);

		const modalContainer2 = document.createElement('div');
		modalContainer2.innerHTML = forcedDom;
		document.body.append(modalContainer2);

		USAModal.createAll();

		expect(modalContainer1).toBeTruthy();
		expect(modalContainer2).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(4);
	});

	it('Validate elements behind get hidden aria', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		const pageContent = document.createElement('div');
		const contentBehind = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		pageContent.innerHTML = contentBehind;
		container.innerHTML = modalDom;
		document.body.append(pageContent);
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		let contents = document.querySelector('div');
		expect(contents).toHaveAttribute('aria-hidden');
		expect(contents).toHaveAttribute('data-modal-hidden');

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[0]);

		contents = document.querySelector('div');
		expect(contents).not.toHaveAttribute('aria-hidden');
		expect(contents).not.toHaveAttribute('data-modal-hidden');
	});

	it('Check classnames on generated objects', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		const closers = document.querySelectorAll('[data-close-modal]');
		expect(await closers[0]).toHaveClass('usa-button');
	});

	it('Make long text modal and check for class', async () => {
		const user = userEvent.setup();

		const container = document.createElement('div');
		container.innerHTML = longTextDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		const modal = document.querySelector('.usa-modal');
		expect(modal).toBeTruthy();
		expect(modal).toHaveClass('usa-modal--nci-maxh');
	});

	it('Generate ID if aria-controls not provided', () => {
		const container = document.createElement('div');
		container.innerHTML = `
            <div class="usa-modal"></div>
            <div class="usa-modal"></div>
            <div class="usa-modal"></div>
						<button data-async-modal></button>
        `;
		document.body.append(container);

		const modals = USAModal.createAll();

		expect(modals).toHaveLength(4);

		modals.forEach((modal) => {
			expect(modal).toBeInstanceOf(USAModal);
		});
	});

	it('Test body Class and padding', async () => {
		Object.defineProperty(document.body.style, 'backgroundColor', {
			writable: true,
			value: '',
		});

		const setPropertySpy = jest.spyOn(
			CSSStyleDeclaration.prototype,
			'setProperty'
		);
		const removePropertySpy = jest.spyOn(
			CSSStyleDeclaration.prototype,
			'removeProperty'
		);
		setPropertySpy.mockImplementation(() => {
			return '31px';
		});
		removePropertySpy.mockImplementation(() => {
			return '';
		});
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');

		// Initial state: no padding and no modal class
		expect(document.body).not.toHaveClass('usa-js-modal--active');
		expect(document.body).not.toHaveStyle({});
		await user.click(openers[0]);

		// Check if the class for active set
		expect(document.body).toHaveClass('usa-js-modal--active');

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[0]);

		// Check if the padding and class are removed
		expect(document.body).not.toHaveStyle({});
		expect(document.body).not.toHaveClass('usa-js-modal--active');
	});
});
