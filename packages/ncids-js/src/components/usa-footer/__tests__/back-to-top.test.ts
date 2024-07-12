import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, waitFor } from '@testing-library/dom';

import { getExampleDOM } from './nci-footer-dom';
import { NCIBackToTop } from '../utils/footer-back-to-top';

const BACK_TO_TOP_TEXT = 'Back to Top';

describe('Back To Top Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Back To Top is added to the dom on initialization', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		new NCIBackToTop(<HTMLElement>footer, BACK_TO_TOP_TEXT);

		// Note it shows whenever it is added to the dom. The footer will not
		// add unless the scroll is greater than 0.
		const backToTopElement = document.querySelector(
			'.usa-footer__nci-return-to-top'
		);
		expect(backToTopElement?.textContent).toBe(BACK_TO_TOP_TEXT);
		expect(backToTopElement?.classList.contains('show')).toBe(true);
	});

	it('should show/hide on scroll', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');

		// Set the scroll position to be in a state that a footer would have added
		// the back to top element.
		fireEvent.scroll(window, { target: { scrollY: 50 } });

		new NCIBackToTop(<HTMLElement>footer, BACK_TO_TOP_TEXT);
		const backToTopElement = document.querySelector(
			'.usa-footer__nci-return-to-top'
		);
		expect(backToTopElement?.textContent).toBe(BACK_TO_TOP_TEXT);
		expect(backToTopElement?.classList.contains('show')).toBe(true);

		// Scroll back to y: 0. Check the BTT is hidden.
		fireEvent.scroll(window, { target: { scrollY: -50 } });
		await waitFor(async () => {
			const updated = document.querySelector(
				'.usa-footer__nci-return-to-top.hide'
			);
			expect(updated).toBeTruthy();
		});

		// Scroll to y: 300. Check the BTT is showing.
		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const updated = document.querySelector(
				'.usa-footer__nci-return-to-top.show'
			);
			expect(updated).toBeTruthy();
		});
	});

	it('Back To Top should unregister', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const footer = document.querySelector('#nci-footer');
		const backToTop = new NCIBackToTop(<HTMLElement>footer, BACK_TO_TOP_TEXT);

		backToTop.unregister();
		const updated = document.querySelector('.usa-footer__nci-return-to-top');
		expect(updated).not.toBeTruthy();
	});
});
