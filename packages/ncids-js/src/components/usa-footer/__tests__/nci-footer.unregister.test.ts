import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIBigFooter } from '../nci-big';
import { getExampleDOM } from './nci-footer-dom';
import { getExampleDOMWithoutSignup } from './nci-footer-dom-without-signup';

describe('NCI Footer unregister', () => {
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
		jest.restoreAllMocks();
		global.innerWidth = 1200;
	});

	it('should remove event handlers on unregister call for larger screens', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);

		const desktopFooter = NCIBigFooter.create(<HTMLElement>element);

		// 1 email submit onclick
		expect(addEventListener.mock.calls).toHaveLength(1);

		desktopFooter.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(1);
	});

	it('should remove event handlers on unregister call for smaller screens', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);

		global.innerWidth = 400;
		global.dispatchEvent(new Event('resize'));

		const mobileFooter = NCIBigFooter.create(<HTMLElement>element);

		// 1 submit onclick, 3 collapse buttons
		expect(addEventListener.mock.calls).toHaveLength(4);

		mobileFooter.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(4);
	});

	it('should call unregister on new instantiation', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const footer = NCIBigFooter.create(<HTMLElement>element);
		expect(footer).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(1);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const footer2 = new NCIBigFooter(element);
		expect(footer2).toBeTruthy();
		expect(removeEventListener.mock.calls).toHaveLength(1);
		expect(addEventListener.mock.calls).toHaveLength(2);
	});

	it('should return existing component if called more than once', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const component = NCIBigFooter.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const component2 = NCIBigFooter.create(<HTMLElement>element);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCIBigFooter(<HTMLElement>element);
		expect(component3).toBeTruthy();
	});

	it('should return existing component without form if called more than once', () => {
		const container = getExampleDOMWithoutSignup();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const component = NCIBigFooter.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const component2 = NCIBigFooter.create(<HTMLElement>element);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCIBigFooter(<HTMLElement>element);
		expect(component3).toBeTruthy();
	});
});
