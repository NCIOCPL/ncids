import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '../auto-init';

import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('Combo box - Auto init', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should auto initialize combo box', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('does not bork when missing usa-modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});
});
