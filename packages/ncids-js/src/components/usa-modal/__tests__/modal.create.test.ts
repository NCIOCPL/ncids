import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import { USAModal } from '../modal.component';
import modalDom from './default.dom';
import forcedDom from './forced.dom';

describe('USA Modal - Create Test', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			USAModal.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should create a default modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should create aforced modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		container.innerHTML = forcedDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(2);
	});

	it('check classnames on generated objects', async () => {
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
});
