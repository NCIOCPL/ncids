import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { headerWithDataMenuId } from '../nci-header-id-dom';
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
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const buttons = screen.queryAllByRole('button', { expanded: false });
		expect(buttons[0]).toBeInTheDocument();
	});

	it('should preserve usa-current class when converting to button', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
		});

		const button = await screen.findByRole('button', {
			name: 'Current section',
		});
		expect(button).toHaveClass('usa-current');
	});

	it('should change keep nav item as link when MM is disabled or id is not set', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const clickEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
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
			'Current section',
			'Second Section',
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
			href: 'http://localhost/#section-3',
			link: noMMLink,
		});
	});

	it('should load content from id on click', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
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
			label: 'Current section',
			id: '1',
			button: buttons[0],
		});
	});

	it('should not break events if dom has been manipulated', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();
		const clickEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
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

		element?.addEventListener(
			'nci-header:primary-nav:linkclick',
			clickEventHandler
		);

		const firstButton = await screen.findByRole('button', {
			expanded: false,
			name: 'Current section',
		});

		// Tests that the id will be empty string if the data-menu-id is not
		// present in the dom.
		firstButton.attributes.removeNamedItemNS(null, 'data-menu-id');

		// Tests that the label will be an empty string if there are no child
		// text nodes.

		fireEvent.click(firstButton);
		await screen.findByText('hello world');
		expect(expandEventHandler).toHaveBeenCalledTimes(1);
		expect(expandEventHandler.mock.calls[0][0].detail).toEqual({
			label: 'Current section',
			id: '',
			button: firstButton,
		});
	});

	it('should toggle menu visibility on click', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
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
			id: '1',
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
				id: '1',
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
			id: '1',
			button: buttons[0],
		});

		fireEvent.click(buttons[1]);
		const query4 = await screen.findByText('hello world');
		expect(query4).toBeInTheDocument();
		expect(expandEventHandler).toHaveBeenCalledTimes(3);
		expect(expandEventHandler.mock.calls[2][0].detail).toEqual({
			label: 'Second Section',
			id: '2',
			button: buttons[1],
		});
		expect(collapseEventHandler).toHaveBeenCalledTimes(2);
		expect(collapseEventHandler.mock.calls[1][0].detail).toEqual({
			label: 'Current section',
			id: '1',
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
				id: '2',
				button: buttons[1],
			});
		});
	});

	it('should hide mega menu using Escape key', async () => {
		const user = userEvent.setup();
		const container = headerWithDataMenuId();
		document.body.append(container);

		const expandEventHandler = jest.fn();
		const collapseEventHandler = jest.fn();

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(),
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
			id: '1',
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
				id: '1',
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
			megaMenuSource: new MockMegaMenuAdapter(),
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
