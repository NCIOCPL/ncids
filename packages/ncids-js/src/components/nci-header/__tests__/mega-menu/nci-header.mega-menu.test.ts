import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { headerWithDataMenuId } from '../nci-header-id-dom';
import { headerWithDataMenuMissingId } from '../nci-header-id-dom-missing-id';
import { headerWithHref } from '../nci-header-dom';
import { headerWithMissingHref } from '../nci-header-dom-missing-href';
import { MockMegaMenuAdapter } from './mega-menu-adapter.mock';
import { MockMobileMenuAdapter } from '../mobile-menu/mobile-menu-adapter.mock';
import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';

describe('NCI Extended Header - Mega Menu', () => {
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

	it('should change links to buttons', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(true),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const buttons = screen.queryAllByRole('button', { expanded: false });
		expect(buttons[0]).toBeInTheDocument();
	});

	it('should change keep nav item as link when MM is disabled', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const clickEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(false),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		element?.addEventListener(
			'nci-header:primary-nav:linkclick',
			clickEventHandler
		);

		const buttons = screen.queryAllByRole('button', { expanded: false });
		const labels = buttons.map((button: HTMLElement) =>
			(button.textContent ?? '').trim()
		);
		expect(labels).toEqual([
			'First section',
			'Second Section',
			'Fourth Section',
			'Fifth Section',
		]);
		const noMMLink = screen.getByText('Third Section', {
			selector: 'a.nci-header-nav__primary-link',
		});
		expect(noMMLink).toBeInTheDocument();

		fireEvent.click(noMMLink);

		expect(clickEventHandler).toHaveBeenCalledTimes(1);
		expect(clickEventHandler.mock.calls[0][0].detail).toEqual({
			label: 'Third Section',
			href: 'http://localhost/#',
			link: noMMLink,
		});
	});

	it('should error menu items without a data-menu-id', async () => {
		const container = headerWithDataMenuMissingId();
		document.body.append(container);

		const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {
			return null;
		});

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(false),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const buttons = screen.queryAllByRole('button', { expanded: false });
		const labels = buttons.map((button: HTMLElement) =>
			(button.textContent ?? '').trim()
		);
		expect(labels).toEqual([
			'First section',
			'Second Section',
			'Fifth Section',
		]);
		const noMMLink = screen.getByText('Fourth Section', {
			selector: 'a.nci-header-nav__primary-link',
		});
		expect(noMMLink).toBeInTheDocument();
		expect(consoleError).toHaveBeenCalledWith(
			'Navigation item, http://localhost/#, does not have a data-menu-id element and adapter is set to use ID.'
		);
	});

	it('should error menu items without a href', async () => {
		const container = headerWithMissingHref();
		document.body.append(container);

		const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {
			return null;
		});

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(true),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const buttons = screen.queryAllByRole('button', { expanded: false });
		const labels = buttons.map((button: HTMLElement) =>
			(button.textContent ?? '').trim()
		);
		expect(labels).toEqual([
			'Current section',
			'Second Section',
			'Third Section',
			'Fifth Section',
		]);
		const noMMLink = screen.getByText('Fourth Section', {
			selector: 'a.nci-header-nav__primary-link',
		});
		expect(noMMLink).toBeInTheDocument();
		expect(consoleError).toHaveBeenCalledWith(
			'Navigation item, Fourth Section, does not have a data-menu-id element and adapter is set to use ID.'
		);
	});

	it('should load content from href on click', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(true),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });
		fireEvent.click(buttons[0]);
		const query = await screen.findByText('hello world');
		expect(query).toBeInTheDocument();
	});

	it('should load content from id on click', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(false),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		element?.addEventListener(
			'nci-header:mega-menu:expand',
			expandEventHandler
		);
		element?.addEventListener(
			'nci-header:mega-menu:collapse',
			collapseEventHandler
		);

		const buttons = await screen.findAllByRole('button', { expanded: false });
		fireEvent.click(buttons[0]);
		const query = await screen.findByText('hello world');
		expect(query).toBeInTheDocument();
		expect(expandEventHandler).toHaveBeenCalledTimes(1);
		expect(expandEventHandler.mock.calls[0][0].detail).toEqual({
			label: 'First section',
			id: '1',
			button: buttons[0],
		});
	});

	it('should toggle menu visibility on click', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(true),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		element?.addEventListener(
			'nci-header:mega-menu:expand',
			expandEventHandler
		);
		element?.addEventListener(
			'nci-header:mega-menu:collapse',
			collapseEventHandler
		);

		const buttons = await screen.findAllByRole('button', { expanded: false });

		// Open menu 1
		fireEvent.click(buttons[0]);
		const query1 = await screen.findByText('hello world');
		expect(query1).toBeInTheDocument();
		expect(expandEventHandler).toHaveBeenCalledTimes(1);
		expect(expandEventHandler.mock.calls[0][0].detail).toEqual({
			label: 'Current section',
			id: 'https://mocki.io/v1/f561a18e-d1aa-4c20-bde6-52099ad91502',
			button: buttons[0],
		});

		// Closes menu 1 if clicked again
		fireEvent.click(buttons[0]);
		await waitFor(async () => {
			const query2 = screen.queryByText('hello world');
			expect(query2).not.toBeInTheDocument();
			expect(collapseEventHandler).toHaveBeenCalledTimes(1);
			expect(collapseEventHandler.mock.calls[0][0].detail).toEqual({
				label: 'Current section',
				id: 'https://mocki.io/v1/f561a18e-d1aa-4c20-bde6-52099ad91502',
				button: buttons[0],
			});
		});

		// Open menu 1, open separate menu
		fireEvent.click(buttons[0]);
		const query3 = await screen.findByText('hello world');
		expect(query3).toBeInTheDocument();
		expect(expandEventHandler).toHaveBeenCalledTimes(2);
		expect(expandEventHandler.mock.calls[1][0].detail).toEqual({
			label: 'Current section',
			id: 'https://mocki.io/v1/f561a18e-d1aa-4c20-bde6-52099ad91502',
			button: buttons[0],
		});

		fireEvent.click(buttons[1]);
		const query4 = await screen.findByText('hello world');
		expect(query4).toBeInTheDocument();
		expect(expandEventHandler).toHaveBeenCalledTimes(3);
		expect(expandEventHandler.mock.calls[2][0].detail).toEqual({
			label: 'Second Section',
			id: 'https://mocki.io/v1/28ef3169-9d47-4e0c-a3b3-fd42df2b52c5',
			button: buttons[1],
		});
		expect(collapseEventHandler).toHaveBeenCalledTimes(2);
		expect(collapseEventHandler.mock.calls[1][0].detail).toEqual({
			label: 'Current section',
			id: 'https://mocki.io/v1/f561a18e-d1aa-4c20-bde6-52099ad91502',
			button: buttons[0],
		});

		// Don't close menu if clicked inside nav boundaries
		fireEvent.click(query4);
		const query5 = await screen.findByText('hello world');
		expect(query5).toBeInTheDocument();

		// Close menu if clicked outside of nav boundaries
		const banner = screen.queryAllByRole('banner');
		fireEvent.click(banner[0]);
		await waitFor(async () => {
			const query6 = screen.queryByText('hello world');
			expect(query6).not.toBeInTheDocument();
			expect(collapseEventHandler).toHaveBeenCalledTimes(3);
			expect(collapseEventHandler.mock.calls[2][0].detail).toEqual({
				label: 'Second Section',
				id: 'https://mocki.io/v1/28ef3169-9d47-4e0c-a3b3-fd42df2b52c5',
				button: buttons[1],
			});
		});
	});

	it('should hide mega menu using Escape key', async () => {
		const user = userEvent.setup();
		const container = headerWithHref();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(true),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		element?.addEventListener(
			'nci-header:mega-menu:expand',
			expandEventHandler
		);
		element?.addEventListener(
			'nci-header:mega-menu:collapse',
			collapseEventHandler
		);

		const buttons = await screen.findAllByRole('button', { expanded: false });

		// Open menu
		fireEvent.click(buttons[0]);
		const query1 = await screen.findByText('hello world');
		expect(query1).toBeInTheDocument();
		expect(expandEventHandler).toHaveBeenCalledTimes(1);
		expect(expandEventHandler.mock.calls[0][0].detail).toEqual({
			label: 'Current section',
			id: 'https://mocki.io/v1/f561a18e-d1aa-4c20-bde6-52099ad91502',
			button: buttons[0],
		});

		// Do not close menu on any keypress
		await user.keyboard('{ShiftLeft}');
		const query2 = await screen.findByText('hello world');
		expect(query2).toBeInTheDocument();

		// Close menu on Escape keypress
		await user.keyboard('{Escape}');
		await waitFor(async () => {
			const query3 = screen.queryByText('hello world');
			expect(query3).not.toBeInTheDocument();
			expect(collapseEventHandler).toHaveBeenCalledTimes(1);
			expect(collapseEventHandler.mock.calls[0][0].detail).toEqual({
				label: 'Current section',
				id: 'https://mocki.io/v1/f561a18e-d1aa-4c20-bde6-52099ad91502',
				button: buttons[0],
			});
		});
	});

	it('set timeout state', async () => {
		jest.useFakeTimers();

		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(false),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });

		fireEvent.click(buttons[0]);

		jest.advanceTimersByTime(1000);

		expect(
			(<HTMLElement>element).querySelector('.nci-is-loading')
		).toBeVisible();

		jest.useRealTimers();
	});
});
