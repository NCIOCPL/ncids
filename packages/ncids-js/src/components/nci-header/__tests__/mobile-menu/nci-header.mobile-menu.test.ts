import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { mockViewport } from 'jsdom-testing-mocks';

import { headerWithDataMenuId } from '../nci-header-id-dom';
import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';
import { MockMobileMenuAdapter } from './mobile-menu-adapter.mock';
import { MockMobileMenuAdapterLocation } from './mobile-menu-adapter.getInitialMenuId.mock';
import { MockMegaMenuAdapter } from '../mega-menu/mega-menu-adapter.mock';

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
		jest.restoreAllMocks();
	});

	it('Mobile menu should load default on open', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const button = await screen.findByText('Menu');
		fireEvent.click(button);
		const query = await screen.findByText('Section One');
		expect(query).toBeInTheDocument();
		header.unregister();
	});

	it('Mobile menu should load with page location specific data', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapterLocation(false),
		});

		const button = await screen.findByText('Menu');
		fireEvent.click(button);
		const query = await screen.findByText('Explore Section One');
		expect(query).toBeInTheDocument();
		header.unregister();
	});

	it('Mobile menu should load with a link marked current', async () => {
		Object.defineProperty(window, 'location', {
			configurable: true,
			enumerable: true,
			value: {
				pathname: '/section-two',
			},
		});
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const button = await screen.findByText('Menu');
		fireEvent.click(button);
		const query = await screen.findByText('Section Two');
		expect(query).toHaveClass('current');
		header.unregister();
	});

	it('Navigates menus and clicks links', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
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
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
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
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		// Open Menu
		const button = await screen.findByText('Menu');
		fireEvent.click(button);

		// Trigger Menu Redraw
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeVisible();
		fireEvent.click(query1);

		const close = await (<HTMLElement>element).querySelector(
			'.nci-header-mobilenav__close-btn'
		);
		expect(close).toBeInTheDocument();

		// Close menu on Escape keypress
		fireEvent.click(close as HTMLElement);
		await waitFor(async () => {
			const query3 = screen.queryByText('Subsection One');
			expect(query3).not.toBeVisible();
		});
	});

	it('should hide mobile menu by clicking overlay', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		const button = await screen.findByRole('button', { name: 'Menu' });
		fireEvent.click(button);

		const overlay = (<HTMLElement>element).querySelector(
			'.nci-header-mobilenav__overlay'
		);

		fireEvent.click(overlay as HTMLElement);
		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).not.toBeVisible();
		});
	});

	it('should hide mobile menu when window resizes greater than 1024', async () => {
		const viewport = mockViewport({ width: '320px', height: '568px' });
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		const button = await screen.findByRole('button', { name: 'Menu' });
		fireEvent.click(button);
		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).toBeVisible();
		});

		viewport.set({ width: '1024px', height: '900px' });
		await waitFor(async () => {
			const query3 = screen.queryByText('Section One');
			expect(query3).not.toBeVisible();
		});
	});

	it('sends empty string if Open button trigger is missing text', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		const button = await screen.findByText('Menu');
		button.textContent = '';

		// Open menu
		fireEvent.click(button);
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeInTheDocument();
	});

	it('should reopen the mobile menu after being closed', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		// Open Menu
		const button = await screen.findByText('Menu');
		fireEvent.click(button);

		// Trigger Menu Redraw/Navigation
		const query1 = await screen.findByText('Section One');
		expect(query1).toBeVisible();
		fireEvent.click(query1);

		const close = await (<HTMLElement>element).querySelector(
			'.nci-header-mobilenav__close-btn'
		);
		expect(close).toBeInTheDocument();

		// Close menu on Escape keypress
		fireEvent.click(close as HTMLElement);
		await waitFor(async () => {
			const query3 = screen.queryByText('Subsection One');
			expect(query3).not.toBeVisible();
		});

		// Reopen the Menu with button click
		fireEvent.click(button);
		const newMenu = await screen.findByText('Section One');
		expect(newMenu).toBeVisible();
	});
});
