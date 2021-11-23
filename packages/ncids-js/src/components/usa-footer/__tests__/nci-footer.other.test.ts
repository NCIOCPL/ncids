import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIFooter } from '../nci-footer.component';
import { getExampleDOM } from './nci-footer-dom';
import { getExampleDOMWithoutSignup } from './nci-footer-dom-without-signup';

describe('NCI Footer unregister', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIFooter.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should remove event handlers on unregister call', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

		// This is kinda a dirty test cause I know the underlying logic,
		// but I can't think of anything better to ensure we clear out
		// all the event handlers on unregister.
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const footer = NCIFooter.create(<HTMLElement>element, {
			collapseButtonClass: '.usa-footer__nci-primary-link--accordion-header',
		});
		expect(footer).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(4);

		footer.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(4);
	});

	it('should call unregister on new instantiation', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

		// This is kinda a dirty test cause I know the underlying logic,
		// but I can't think of anything better to ensure we clear out
		// all the event handlers on unregister.
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const footer = NCIFooter.create(<HTMLElement>element, {
			collapseButtonClass: '.usa-footer__nci-primary-link--accordion-header',
		});
		expect(footer).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(4);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const footer2 = new NCIFooter(element, {
			collapseButtonClass: '.usa-footer__nci-primary-link--accordion-header',
		});
		expect(footer2).toBeTruthy();
		expect(removeEventListener.mock.calls).toHaveLength(4);
		expect(addEventListener.mock.calls).toHaveLength(8);
	});

	it('should initialize a footer without a form', () => {
		const container = getExampleDOMWithoutSignup();
		document.body.append(container);

		const element = document.getElementById('nci-footer2');

		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const footer = NCIFooter.create(<HTMLElement>element, {
			collapseButtonClass: '.usa-footer__nci-primary-link--accordion-header',
		});
		expect(addEventListener.mock.calls).toHaveLength(3);
		footer.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(3);
	});
});
