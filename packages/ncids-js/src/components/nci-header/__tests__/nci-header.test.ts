import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import { headerWithHref } from './nci-header-dom';
import { headerWithDataMenuId } from './nci-header-id-dom';
import { headerWithoutForm } from './nci-header-dom-missing-form';
import { headerWithoutInput } from './nci-header-dom-missing-search-input';
import { NCIExtendedHeaderWithMegaMenu } from '../extended-with-mega-menu';
import { MockMegaMenuAdapter } from './mega-menu/mega-menu-adapter.mock';
import { MockMobileMenuAdapter } from './mobile-menu/mobile-menu-adapter.mock';

describe('NCI Extended Header', () => {
	beforeEach(() => {
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

	it('Header component should render', () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		expect(header).toBeTruthy();
		expect(header.searchDiv).toBeTruthy();
		const query = screen.queryByLabelText('Primary navigation');
		expect(query).toBeInTheDocument();
	});

	it('Header component with data-menu-id should render', () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		expect(header).toBeTruthy();
		const query = screen.queryByLabelText('Primary navigation');
		expect(query).toBeInTheDocument();
	});

	it('Should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIExtendedHeaderWithMegaMenu.create('lemur');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should return existing component if called more than once', () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = <HTMLElement>document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});
		expect(header).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const header2 = new NCIExtendedHeaderWithMegaMenu(element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});
		expect(header2).toBeTruthy();
	});

	it('should add event listeners', () => {
		const container = headerWithHref();
		document.body.append(container);

		// This is kinda a dirty test cause I know the underlying logic,
		// but I can't think of anything better to ensure we clear out
		// all the event handlers on unregister.
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});
		expect(header).toBeTruthy();
		// check to see if event listeners added
		expect(addEventListener.mock.calls).toHaveLength(13);
	});

	it('should unregister', () => {
		const container = headerWithHref();
		document.body.append(container);
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		expect(header).toBeTruthy();
		header.unregister();
		// check to see if event listeners removed
		expect(removeEventListener.mock.calls).toHaveLength(14);
	});

	it('header component should render with no search form', () => {
		const container = headerWithoutForm();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		expect(header).toBeTruthy();
		expect(header.searchDiv).toBeUndefined();
		const query = screen.queryByLabelText('Primary navigation');
		expect(query).toBeInTheDocument();
	});

	it('header component should render with no input box', () => {
		const container = headerWithoutInput();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		expect(header).toBeTruthy();
		expect(header.searchDiv).toBeUndefined();
		const query = screen.queryByLabelText('Primary navigation');
		expect(query).toBeInTheDocument();
	});
});
