import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('Modal - Body Style', () => {
	beforeEach(() => {
		document.getElementsByTagName('body')[0].style.paddingRight = '31px';
		jest.resetAllMocks();
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('On open check body class', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(document.querySelector('.usa-js-modal--active')).toBeInTheDocument();
	});

	it('Test body padding', async () => {
		Object.defineProperty(document.body.style, 'paddingRight', {
			writable: true,
			value: '',
		});

		jest.mock('../utils/scrollbar-width', () => {
			return {
				scrollbarWidth: jest.fn().mockImplementation(() => ({
					getWidth: () => '31px',
				})),
			};
		});

		const removePropertySpy = jest.spyOn(
			CSSStyleDeclaration.prototype,
			'removeProperty'
		);

		removePropertySpy.mockImplementation(() => {
			return '';
		});

		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const toggleBodyClass = jest.spyOn(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			USAModal.prototype as any,
			'toggleBodyClass'
		);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(document.body).toHaveStyle('padding-right: 31px');

		const closers = document.querySelectorAll('[data-close-modal]');
		await user.click(closers[0]);

		expect(toggleBodyClass).toHaveBeenCalled();
		expect(document.body).not.toHaveStyle({});
	});
});
