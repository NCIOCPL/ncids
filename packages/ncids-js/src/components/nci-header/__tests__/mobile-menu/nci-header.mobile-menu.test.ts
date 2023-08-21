import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { headerWithDataMenuId } from '../nci-header-id-dom';
import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';
import { MockMobileMenuAdaptor } from './mobile-menu-adaptor.mock';
import { MockMegaMenuAdaptor } from '../mega-menu/mega-menu-adaptor.mock';

describe('NCI Extended Header - Mobile Menu', () => {
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
		global.innerWidth = 600;
		jest.restoreAllMocks();
	});

	it('Mobile menu should load default on open', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(false),
			mobileMenuSource: new MockMobileMenuAdaptor(false),
		});

		const button = await screen.findByText('Menu');
		fireEvent.click(button);
		const query = await screen.findByText('Section One');
		expect(query).toBeInTheDocument();
		header.unregister();
	});

	it('Navigates menus and clicks links', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});

		// Open menu
		const button = await screen.findByText('Menu');
		fireEvent.click(button);
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeInTheDocument();

		// Click second level
		fireEvent.click(query1);
		const query2 = await screen.findByText('Subsection One');
		expect(query2).toBeInTheDocument();

		// check that active state is found
		const query3 = element?.querySelector('.active');
		expect(query3).toBeInTheDocument();

		// Click on subsection
		fireEvent.click(query2);
		const query4 = await screen.findByText('Explore Subsection One');
		expect(query4).toBeInTheDocument();

		// Click back
		const query5 = await screen.findByText('Back');
		fireEvent.click(query5);

		// Click main menu
		const query6 = await screen.findByText('Main Menu');
		fireEvent.click(query6);

		// Click on link
		const query7 = await screen.findByText('Section Two');
		expect(query7).toBeInTheDocument();
		fireEvent.click(query7);

		await waitFor(async () => {
			const query = screen.queryByText('Main Menu');
			expect(query).not.toBeInTheDocument();
		});

		header.unregister();
	});

	it('should hide mobile menu using Escape key', async () => {
		const user = userEvent.setup();
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});

		const button = await screen.findByText('Menu');

		// Open menu
		fireEvent.click(button);
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeInTheDocument();

		// Do nothing if other key pressed
		await user.keyboard('{Shift}');
		expect(query1).toBeInTheDocument();
		fireEvent.click(query1);

		// Close menu on Escape keypress
		await user.keyboard('{Escape}');
		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).not.toBeInTheDocument();
		});
	});

	it('should hide mobile menu using close button', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});

		const button = await screen.findByText('Menu');
		const close = element?.querySelector('.nci-header-mobilenav__close-btn');
		expect(close).toBeInTheDocument();

		// Open menu
		fireEvent.click(button);
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeInTheDocument();
		fireEvent.click(query1);
		// Close menu on Escape keypress
		if (close) fireEvent.click(close);
		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).not.toBeInTheDocument();
		});
	});

	it('should hide mobile menu by clicking overlay', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});

		const button = await screen.findByRole('button', { name: 'Menu' });
		fireEvent.click(button);

		const overlay = (<HTMLElement>element).querySelector(
			'.nci-header-mobilenav__overlay'
		);

		fireEvent.click(overlay as HTMLElement);
		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).not.toBeInTheDocument();
		});
	});

	it('should hide mobile menu when window resizes greater than 1024', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});

		const button = await screen.findByRole('button', { name: 'Menu' });
		fireEvent.click(button);

		global.innerWidth = 1100;
		window.dispatchEvent(new Event('resize'));
		expect(window.innerWidth).toBe(1100);

		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).not.toBeInTheDocument();
		});
	});

	it('sends empty string if Open button trigger is missing text', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});

		const button = await screen.findByText('Menu');
		button.textContent = '';

		// Open menu
		fireEvent.click(button);
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeInTheDocument();
	});
});
