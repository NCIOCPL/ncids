import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';

import { NCIBigFooter } from '../nci-big';
import { getExampleDOM } from './nci-footer-dom';

describe('NCI Footer resize', () => {
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
		jest.resetAllMocks();
	});

	it('matchMedia has no matches on desktop', () => {
		global.innerWidth = 1200;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(1200);

		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		NCIBigFooter.create(<HTMLElement>element);

		const buttons = screen.queryByRole('button', { name: 'Primary link 1' });
		expect(buttons).not.toBeInTheDocument();
	});

	it('matchMedia has match on resize from desktop to mobile', () => {
		global.innerWidth = 1200;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(1200);

		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element);

		global.innerWidth = 400;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(400);

		// jestdom doesn't do resizing very well, we shouldn't need to re-register here
		footer.unregister();
		NCIBigFooter.create(<HTMLElement>element);

		const buttons = screen.queryByRole('button', { name: 'Primary link 1' });
		expect(buttons).toBeInTheDocument();
	});

	it('matchMedia has matches on mobile', () => {
		global.innerWidth = 400;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(400);

		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		NCIBigFooter.create(<HTMLElement>element);

		const buttons = screen.queryByRole('button', { name: 'Primary link 1' });
		expect(buttons).toBeInTheDocument();
	});

	it('matchMedia has no matches on resize from mobile to desktop', () => {
		global.innerWidth = 400;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(400);

		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element);

		global.innerWidth = 1200;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(1200);

		// jestdom doesn't do resizing very well, we shouldn't need to re-register here
		footer.unregister();
		NCIBigFooter.create(<HTMLElement>element);

		const buttons = screen.queryByRole('button', { name: 'Primary link 1' });
		expect(buttons).not.toBeInTheDocument();
	});
});
