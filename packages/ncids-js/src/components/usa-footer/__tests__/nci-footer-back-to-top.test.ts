import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, waitFor } from '@testing-library/dom';

import { getExampleDOM } from './nci-footer-dom';
import { NCIBackToTop } from '../utils/footer-back-to-top';

describe('Back To Top Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Back To Top returns object', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.usa-footer__return-to-top');
		const backToTop = new NCIBackToTop(<HTMLElement>element);
		expect(backToTop).toBeTruthy();

		const updated = document.querySelector('.usa-footer__return-to-top');
		expect(updated).not.toBeTruthy();
	});

	it('Back To Top should change className and hide on load', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.usa-footer__return-to-top');
		new NCIBackToTop(<HTMLElement>element);

		const updatedState = document.querySelector(
			'.usa-footer__nci-return-to-top'
		);
		expect(updatedState).toBeTruthy();

		const hiddenState = document.querySelector('.hide');
		expect(hiddenState).toBeTruthy();
	});

	it('Back To Top should show on scroll', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		const element = document.querySelector('.usa-footer__return-to-top');
		const backToTop = new NCIBackToTop(<HTMLElement>element);
		expect(backToTop).toBeTruthy();

		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const updated = document.querySelector('.show');
			expect(updated).toBeTruthy();
		});
	});

	it('use class show/hide on scroll', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		const element = document.querySelector('.usa-footer__return-to-top');
		const backToTop = new NCIBackToTop(<HTMLElement>element);
		expect(backToTop).toBeTruthy();

		fireEvent.scroll(window, { target: { scrollY: 300 } });
		await waitFor(async () => {
			const updated = document.querySelector('.show');
			expect(updated).toBeTruthy();
		});

		fireEvent.scroll(window, { target: { scrollY: -300 } });
		await waitFor(async () => {
			const updated = document.querySelector('.hide');
			expect(updated).toBeTruthy();
		});
	});

	it('Back To Top should unregister', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.usa-footer__return-to-top');
		const backToTop = new NCIBackToTop(<HTMLElement>element);

		backToTop.unregister();
		const updated = document.querySelector('.usa-footer__nci-return-to-top');
		expect(updated).not.toBeTruthy();
	});
});
