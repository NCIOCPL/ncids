import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import '../../extended-with-mega-menu/auto-init';
import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';
import { headerWithHref } from '../nci-header-dom';

describe('NCI Extended Header - Auto Init', () => {
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

	it('should auto initialize header', async () => {
		const createSpy = jest.spyOn(NCIExtendedHeaderWithMegaMenu, 'create');
		jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		const container = headerWithHref();
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should not bork with no header', async () => {
		const createSpy = jest.spyOn(NCIExtendedHeaderWithMegaMenu, 'create');
		jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});
});
