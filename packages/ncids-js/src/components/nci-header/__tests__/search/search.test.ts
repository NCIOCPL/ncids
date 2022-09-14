import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, waitFor, screen } from '@testing-library/dom';

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

	it('should apply the appropriate classes when searchbar focus changes', async () => {
		const container = headerWithHref();
		document.body.append(container);
		const element = document.getElementById('nci-header');
		const header = new Search(<HTMLElement>element);
		const searchContainer = document.querySelector(
			'.nci-header-nav__secondary'
		);
		const inputArea = <HTMLInputElement>(
			document.getElementById('nci-header-search__field')
		);
		await fireEvent.focus(inputArea);
		await waitFor(() => {
			expect(searchContainer).toHaveClass('search-focused');
		});
		await fireEvent.focusOut(inputArea);
		await waitFor(() => {
			expect(searchContainer).not.toHaveClass('search-focused');
		});
		header.unregister();
	});

	it('check that event listeners are added and removed', async () => {
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
		await waitFor(() => {
			expect(addEventListener.mock.calls).toHaveLength(2);
		});

		header.unregister();
		await waitFor(() => {
			const submitButton = <HTMLInputElement>(
				document.querySelector('.nci-header-search__search-button')
			);
			expect(submitButton).toBeTruthy();

			expect(removeEventListener.mock.calls).toHaveLength(2);
		});
	});
});
