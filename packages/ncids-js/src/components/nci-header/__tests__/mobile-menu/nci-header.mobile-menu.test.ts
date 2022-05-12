import { fireEvent, screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { NCIExtendedHeaderWithMegaMenu } from '../../nci-header.component';
import { headerWithDataMenuId } from '../nci-header-id-dom';
import { MockMobileMenuAdaptor } from './mobile-menu-adaptor.mock';
import { MockMegaMenuAdaptor } from '../mega-menu/mega-menu-adaptor.mock';

describe('NCI Extended Header - Mega Menu', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
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

	it('Click link to second level', async () => {
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

		// Click second level
		fireEvent.click(query1);
		await waitFor(async () => {
			const query2 = await screen.findByText('Subsection One');
			expect(query2).toBeInTheDocument();
			const query3 = element?.querySelector('.active');
			expect(query3).toBeInTheDocument();
		});
	});

	it('Click link to third level', async () => {
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

		// Click second level
		fireEvent.click(query1);
		await waitFor(async () => {
			const query2 = await screen.findByText('Subsection One');
			expect(query2).toBeInTheDocument();
			fireEvent.click(query2);
		});
	});

	it('Menu first link to show active state', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(false),
			mobileMenuSource: new MockMobileMenuAdaptor(false),
		});

		const button = await screen.findByText('Menu');
		fireEvent.click(button);
		const query = element?.querySelector('.active');
		expect(query).toBeInTheDocument();
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
});
