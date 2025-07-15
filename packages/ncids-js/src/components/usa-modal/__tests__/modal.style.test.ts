import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { USAModal } from '../modal.component';
import defaultDom from './default.dom';

jest.mock('../../utils/scrollbar-width', () => {
	return {
		scrollbarWidth: jest.fn().mockImplementation(() => ({
			getWidth: () => '31px',
		})),
	};
});

describe('USA Modal - Events', () => {
	beforeEach(() => {
		document.body.style.paddingRight = '0px';
	});

	it('Check right padding on body', async () => {
		const container = document.createElement('div');
		container.innerHTML = defaultDom;
		document.body.append(container);

		const user = userEvent.setup();

		const element = document.querySelector('.usa-modal');
		USAModal.create(<HTMLElement>element);

		expect(document.body.style.paddingRight).toBe('0px');

		const openers = document.querySelectorAll('[data-open-modal]');
		await user.click(openers[0]);

		expect(
			await screen.queryByText('You have unsaved changes that will be lost.')
		).toBeInTheDocument();

		expect(document.body.style.paddingRight).toBe('31px');

		const closer = document.querySelectorAll('[data-modal-close]');
		await user.click(closer[0]);
		expect(document.body.style.paddingRight).toBe('');
	});
});
