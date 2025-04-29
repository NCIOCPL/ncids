import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
//import fireEvent from '@testing-library/user-event';

import { USAModal } from '../modal.component';
import modalDom from './default.dom';

describe('USA Modal - Accessibility', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Aria on overlay and wrapper elements', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = modalDom;
		document.body.append(container);

		const element = document.querySelector('.usa-modal');
		const component = USAModal.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('Are you sure you want to continue?')
		).toBeInTheDocument();

		const wrapper = document.querySelector('.usa-modal-wrapper');
		const overlay = document.querySelector('.usa-modal-overlay');
		expect(overlay).toHaveAttribute('aria-controls', 'example-modal-1');
		expect(wrapper).toHaveAttribute('aria-labelledby', 'modal-1-heading');
		expect(wrapper).toHaveAttribute('aria-describedby', 'modal-1-description');
	});
});
