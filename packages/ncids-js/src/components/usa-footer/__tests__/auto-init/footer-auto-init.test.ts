import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import '../../nci-big/auto-init';
import { NCIBigFooter } from '../../nci-big';
import { getExampleDOM } from '../nci-footer-dom';

describe('Footer - Auto Init', () => {
	beforeEach(() => {
		jest.resetAllMocks();
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: query === '(min-width: 1024px)',
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

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should auto initialize footer', async () => {
		const createSpy = jest.spyOn(NCIBigFooter, 'create');

		const container = getExampleDOM();
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should not bork with no footer', async () => {
		const createSpy = jest.spyOn(NCIBigFooter, 'create');

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});
});
