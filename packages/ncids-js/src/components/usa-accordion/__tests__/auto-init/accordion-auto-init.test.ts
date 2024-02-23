import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import '../../auto-init';
import { USAAccordion } from '../../usa-accordion.component';
import { exampleAccordionPlain, exampleAccordionBad } from '../example-dom';

describe('USA Accordion - Auto Init', () => {
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

	it('should auto initialize the accordion', async () => {
		const createSpy = jest.spyOn(USAAccordion, 'create');
		jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		const container = exampleAccordionPlain();
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should not bork with no accordion', async () => {
		const createSpy = jest.spyOn(USAAccordion, 'create');
		jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});

	it('should warn the user about multiple open sections without multiselectable option', async () => {
		const createSpy = jest.spyOn(USAAccordion, 'create');
		jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		const container = exampleAccordionBad();
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});
});
