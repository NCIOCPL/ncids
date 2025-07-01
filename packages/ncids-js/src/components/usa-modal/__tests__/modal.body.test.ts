import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('Modal - Create Test', () => {
	beforeEach(() => {
		// Object.defineProperty(document.body, 'style', {
		//   value: {
		//     paddingRight: '',
		//   },
		//   writable: true,
		// });
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Test body Class and padding', async () => {
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

		Object.defineProperty(document.body.style, 'backgroundColor', {
			writable: true,
			value: '',
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

		await user.click(openers[0]);

		// Check if the padding and class are set
		//const computedStyle = window.getComputedStyle(document.body);
		//const padding = computedStyle.getPropertyValue('padding-right');
		const padding = document.body.style.paddingRight;
		expect(padding).toBeTruthy;
		expect(document.body).toHaveClass('usa-js-modal--active');

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[0]);

		// Check if the padding and class are removed
		expect(document.body.style.paddingRight).toBe('');
		expect(document.body).not.toHaveStyle({});
		expect(document.body).not.toHaveClass('usa-js-modal--active');
	});
});
