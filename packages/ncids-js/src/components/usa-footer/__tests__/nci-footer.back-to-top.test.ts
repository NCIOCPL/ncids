import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, waitFor } from '@testing-library/dom';

import { getExampleDOM } from './nci-footer-dom';
import { getExampleDOM as getLegacyBTTDom } from './nci-footer-dom-legacy-btt';
import { NCIBigFooter } from '../nci-big/nci-big-footer.component';

describe('NCIBigFooter - Back to Top', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: query === '(min-width: 480px)',
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('adds the back to top to the dom on component creation and scroll', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		NCIBigFooter.create(<HTMLElement>footer);

		// We should not find a back to top element in the dom.
		const backToTopPreScroll = document.querySelector(
			'.usa-footer__nci-return-to-top'
		);
		expect(backToTopPreScroll).not.toBeTruthy();

		// Scroll to y: 300. Check the BTT is showing.
		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const updated = document.querySelector(
				'.usa-footer__nci-return-to-top.show'
			);
			expect(updated?.textContent).toBe('Back to Top');
		});
	});

	it('adds the back to top to the dom with the provided backToTopText', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		NCIBigFooter.create(<HTMLElement>footer, {
			backToTopText: 'Chicken',
		});

		// Scroll to y: 300. Check the BTT is showing.
		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const updated = document.querySelector(
				'.usa-footer__nci-return-to-top.show'
			);
			expect(updated?.textContent).toBe('Chicken');
		});
	});

	it('removes the back to top on unregistering if backToTopText is not null', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		const footerComponent = NCIBigFooter.create(<HTMLElement>footer, {
			backToTopText: null,
		});

		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const backToTopElement = document.querySelector(
				'.usa-footer__nci-return-to-top'
			);
			expect(backToTopElement).not.toBeTruthy();
		});

		// This should be testing lines 190-191, but they are still marked as uncovered.
		// However, we are ensuring that the back to top element is removed from the dom.
		footerComponent.unregister();
		const backToTopElement = document.querySelector(
			'.usa-footer__nci-return-to-top'
		);
		expect(backToTopElement).not.toBeTruthy();
	});

	it('does not add the back to top to the dom if the backToTopText is null', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		NCIBigFooter.create(<HTMLElement>footer, { backToTopText: null });

		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const backToTopElement = document.querySelector(
				'.usa-footer__nci-return-to-top'
			);
			expect(backToTopElement).not.toBeTruthy();
		});
	});

	it('removes the legacy back to top when initializing the footer', async () => {
		const container = getLegacyBTTDom();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		NCIBigFooter.create(<HTMLElement>footer);

		const backToTopElement = document.querySelector(
			'.usa-footer__return-to-top'
		);
		expect(backToTopElement).not.toBeTruthy();
	});
});
