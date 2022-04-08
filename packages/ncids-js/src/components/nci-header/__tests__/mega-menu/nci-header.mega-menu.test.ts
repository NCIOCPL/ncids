import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { headerWithDataMenuId } from '../nci-header-id-dom';
import { headerWithHref } from '../nci-header-dom';
import { MockMegaMenuAdaptor } from './mega-menu-adaptor.mock';
import { NCIExtendedHeaderWithMegaMenu } from '../../nci-header.component';

describe('NCI Extended Header - Mega Menu', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should change links to buttons', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
		});

		const buttons = screen.queryAllByRole('button', { expanded: false });
		expect(buttons[0]).toBeInTheDocument();
	});

	it('should load content from href on click', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });
		fireEvent.click(buttons[0]);
		const query = await screen.findByText('hello world');
		expect(query).toBeInTheDocument();
	});

	it('should load content from id on click', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(false),
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });
		fireEvent.click(buttons[0]);
		const query = await screen.findByText('hello world');
		expect(query).toBeInTheDocument();
	});

	it('should toggle menu visibility on click', async () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });

		// Open menu 1
		fireEvent.click(buttons[0]);
		const query1 = await screen.findByText('hello world');
		expect(query1).toBeInTheDocument();

		// Closes menu 1 if clicked again
		fireEvent.click(buttons[0]);
		await waitFor(async () => {
			const query2 = screen.queryByText('hello world');
			expect(query2).not.toBeInTheDocument();
		});

		// Open menu 1, open separate menu
		fireEvent.click(buttons[0]);
		const query3 = await screen.findByText('hello world');
		expect(query3).toBeInTheDocument();
		fireEvent.click(buttons[1]);
		const query4 = await screen.findByText('hello world');
		expect(query4).toBeInTheDocument();

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
		});
	});

	it('should hide mega menu using Escape key', async () => {
		const user = userEvent.setup();
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });

		// Open menu
		fireEvent.click(buttons[0]);
		const query1 = await screen.findByText('hello world');
		expect(query1).toBeInTheDocument();

		// Do not close menu on any keypress
		await user.keyboard('{ShiftLeft}');
		const query2 = await screen.findByText('hello world');
		expect(query2).toBeInTheDocument();

		// Close menu on Escape keypress
		await user.keyboard('{Escape}');
		await waitFor(async () => {
			const query3 = screen.queryByText('hello world');
			expect(query3).not.toBeInTheDocument();
		});
	});
});
