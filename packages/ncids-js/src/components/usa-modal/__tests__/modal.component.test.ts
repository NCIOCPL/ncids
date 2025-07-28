import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
//import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
//import fireEvent from '@testing-library/user-event';

import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('USA Modal - Events', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('On open check body class/style', async () => {
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

	it('Check Overlay and Wrapper appear on open', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(document.querySelector('.usa-modal-overlay')).toBeInTheDocument();
		expect(document.querySelector('.usa-modal-wrapper')).toBeInTheDocument();
	});

	it('Expect close button in modal', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(document.querySelector('.usa-modal__close')).toBeInTheDocument();
	});

	it('unregister modal from document', () => {
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		const openers = document.querySelectorAll('[data-open-modal]');

		expect(element).not.toHaveAttribute(
			'aria-describedby',
			'modal-1-description'
		);
		expect(element).not.toHaveAttribute('aria-labelledby', 'modal-1-heading');
		expect(openers[0]).not.toHaveAttribute('aria-controls', 'example-modal-1');

		component.unregister();

		expect(openers[0]).toHaveAttribute('aria-controls', 'example-modal-1');

		const originalDom = document.querySelector('#example-modal-1');
		expect(originalDom).toHaveAttribute('aria-labelledby', 'modal-1-heading');
		expect(originalDom).toHaveAttribute(
			'aria-describedby',
			'modal-1-description'
		);
	});
});
