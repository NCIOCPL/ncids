import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';

import { NCIBigFooter } from '../nci-big';
import { getExampleDOM } from './nci-footer-dom';
import { getExampleDOMWithoutSignup } from './nci-footer-dom-without-signup';

describe('NCI Footer', () => {
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

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIBigFooter.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should render footer landmark', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element);

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});

	it('should render footer landmark with options', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element, {
			subscribeInvalidEmailAlert: 'chicken',
		});

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});

	it('should render footer landmark without form', () => {
		const container = getExampleDOMWithoutSignup();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element);

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});
});
