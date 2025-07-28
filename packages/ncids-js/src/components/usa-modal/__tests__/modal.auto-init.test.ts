import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '../auto-init';

import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('Modal - Auto init', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('Should auto initialize modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);
		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('Does not bork when missing modal', () => {
		const createSpy = jest.spyOn(USAModal, 'create');

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});
});
