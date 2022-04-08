import { fireEvent, waitFor, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIMegaMenu } from '../utils/megamenu';
import { getExampleDOM } from './nci-header-dom';
import { responseData } from './nci-mock-data';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(responseData),
	})
) as jest.Mock;

describe('NCI MegaMenu Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Click on all primary links to check menu', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);
		PrimaryButton.forEach(async (button) => {
			expect(button).toBeInTheDocument();
			fireEvent.click(button);
			await waitFor(() => {
				const menu = document.querySelector('.nci-header-megamenu__list');
				expect(menu).toBeInTheDocument();
				const buttonExpand = screen.getAllByRole('button', { expanded: true });
				expect(buttonExpand[0]).toBeInTheDocument();
			});
		});
	});

	it('Click into menu', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);
		const button = PrimaryButton[0];
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		await waitFor(() => {
			const header = document.querySelector('.nci-header-megamenu__header');
			expect(header).toBeInTheDocument();

			const headerText = screen.getByText('Explore Current section');
			expect(headerText).toBeInTheDocument();
		});
	});

	it('Tab in menus', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);
		const button = PrimaryButton[0];
		expect(button).toBeInTheDocument();
		userEvent.tab();
		userEvent.tab();
		userEvent.tab();
		userEvent.keyboard('{Enter}');
		await waitFor(() => {
			const header = document.querySelector('.nci-header-megamenu__header');
			expect(header).toBeInTheDocument();
		});
	});

	it('Open menu and Escape Out', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);

		userEvent.keyboard('{Escape}');
		const button = PrimaryButton[0];
		fireEvent.click(button);

		const header = document.querySelector('.nci-header-megamenu__header');
		expect(header).toBeInTheDocument();
		userEvent.keyboard('{Escape}');
	});

	it('Click on and off Navigation', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);

		fireEvent.click(PrimaryButton[2]);
		await waitFor(() => {
			const header = document.querySelector('.nci-header-megamenu__header');
			expect(header).toBeInTheDocument();
		});
		fireEvent.click(PrimaryButton[2]);
	});

	it('Click on Navigation and Close by clicking off', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});
		const logo = document.getElementById('extended-mega-logo');
		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);

		fireEvent.click(PrimaryButton[1]);
		await waitFor(() => {
			const header = document.querySelector('.nci-header-megamenu__header');
			expect(header).toBeInTheDocument();
			fireEvent.click(<HTMLElement>logo);
		});
	});

	it('Click on Navigation and Close by clicking on Element', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});
		const clickoff = document.querySelector('.nci-header__navbar');
		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);

		fireEvent.click(PrimaryButton[3]);

		await waitFor(() => {
			const header = document.querySelector('.nci-header-megamenu__header');
			expect(header).toBeInTheDocument();
			fireEvent.click(<HTMLElement>clickoff);
		});
	});
});
