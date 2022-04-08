import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, waitFor, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { Search } from '../../utils/search';
import { headerWithHref } from '../nci-header-dom';

describe('NCI Search', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should render', () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = new Search(<HTMLElement>element);
		expect(header).toBeTruthy();
		const query = screen.queryByRole('search');

		expect(query).toBeInTheDocument();
		header.unregister();
	});

	it('open and check elements have been changed for mobile', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = new Search(<HTMLElement>element);

		const cancelButton = document.querySelector('.search-button__cancel');
		expect(cancelButton).not.toBeTruthy();

		const menuButton = document.querySelector(
			'.nci-header-mobilenav__open-btn'
		);
		expect(menuButton).toBeTruthy();
		const submitButton = document.querySelector(
			'.nci-header-search__search-button'
		);
		expect(submitButton).toBeTruthy();
		const inputArea = <HTMLInputElement>(
			document.getElementById('nci-header-search__field')
		);

		fireEvent.focus(inputArea);
		waitFor(() => {
			const cancelButton = document.querySelector('.search-button__cancel');
			expect(cancelButton).toBeTruthy();
			const menuButton = document.querySelector(
				'.nci-header-mobilenav__open-btn'
			);
			expect(menuButton).not.toBeTruthy();
			const submitButton = document.querySelector(
				'.nci-header-search__search-button'
			);
			expect(submitButton).not.toBeTruthy();
		});

		header.unregister();
	});

	it('open search and cancel', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = new Search(<HTMLElement>element);
		expect(header).toBeTruthy();
		const inputArea = <HTMLInputElement>(
			document.getElementById('nci-header-search__field')
		);
		fireEvent.focus(inputArea);
		userEvent.keyboard('cancer');
		userEvent.tab();
		userEvent.keyboard('{Enter}');
		waitFor(() => {
			const overlay = <Element>(
				document.querySelector('.nci-header-search__mobile-overlay')
			);
			expect(overlay).not.toBeTruthy();
		});

		header.unregister();
	});

	it('open click cancel', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = new Search(<HTMLElement>element);
		expect(header).toBeTruthy();
		const inputArea = <HTMLInputElement>(
			document.getElementById('nci-header-search__field')
		);
		inputArea.focus();
		userEvent.keyboard('cancer');
		const cancelButton = <Element>(
			document.querySelector('.search-button__cancel')
		);
		fireEvent.click(cancelButton);
		waitFor(() => {
			const overlay = <Element>(
				document.querySelector('.nci-header-search__mobile-overlay')
			);
			expect(overlay).not.toBeTruthy();
		});

		header.unregister();
	});

	it('check event listners', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const element = document.getElementById('nci-header');
		const header = new Search(<HTMLElement>element);
		expect(header).toBeTruthy();

		const inputArea = <HTMLInputElement>(
			document.getElementById('nci-header-search__field')
		);

		fireEvent.focus(inputArea);

		expect(addEventListener.mock.calls).toHaveLength(3);
		userEvent.keyboard('cancer');
		userEvent.tab();
		userEvent.keyboard('{Enter}');
		waitFor(() => {
			const submitButton = <HTMLInputElement>(
				document.querySelector('.nci-header-search__search-button')
			);
			expect(submitButton).toBeTruthy();

			expect(removeEventListener.mock.calls).toHaveLength(3);
		});

		header.unregister();
	});
});
