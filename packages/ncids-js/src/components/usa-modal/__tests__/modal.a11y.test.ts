import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
//import fireEvent from '@testing-library/user-event';

import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('Modal - Accessibility', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Aria on overlay and wrapper elements', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');

		const openbutton = screen.getByRole('link', { name: 'Open default modal' });
		expect(openbutton).toHaveAttribute('aria-controls', 'example-modal-1');

		USAModal.create(<HTMLElement>element);

		const openers = document.querySelectorAll('[data-open-modal]');

		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		expect(openers[0]).not.toHaveAttribute('aria-controls', 'example-modal-1');

		expect(openbutton).not.toHaveAttribute('aria-controls');
		const wrapper = document.querySelector('.usa-modal-wrapper');
		const overlay = document.querySelector('.usa-modal-overlay');
		const closeButton = document.querySelector('.usa-modal__close');

		expect(overlay).toHaveAttribute('aria-controls', 'example-modal-1');
		expect(wrapper).toHaveAttribute('aria-labelledby', 'modal-1-heading');
		expect(wrapper).toHaveAttribute('aria-describedby', 'modal-1-description');
		expect(closeButton).toHaveAttribute('data-close-modal', '');
	});
});
