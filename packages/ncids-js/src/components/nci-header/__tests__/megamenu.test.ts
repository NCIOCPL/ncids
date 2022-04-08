import { screen } from '@testing-library/dom';
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

	it('MegaMenu should render', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		const navigation = new NCIMegaMenu(<HTMLElement>element, {});
		expect(navigation).toBeTruthy();
		const query = screen.queryByRole('search');
		expect(query).toBeInTheDocument();
	});

	it('should return existing component if called more than once', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = <HTMLElement>(
			document.querySelector('.nci-header-nav__primary')
		);
		const navigation = new NCIMegaMenu(element, {});
		expect(navigation).toBeTruthy();

		const navigation2 = new NCIMegaMenu(element, {});
		expect(navigation2).toBeTruthy();

		const navigation3 = new NCIMegaMenu(element, {});
		expect(navigation3).toBeTruthy();
	});

	it('MegaMenu should render same amount of links', () => {
		const container = getExampleDOM();
		document.body.append(container);
		const links = document.querySelectorAll('.nci-header-nav__primary-link');

		const element = document.querySelector('.nci-header-nav__primary');
		const navigation = new NCIMegaMenu(<HTMLElement>element, {});
		expect(navigation).toBeTruthy();

		const buttons = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);
		expect(buttons).toHaveLength(links.length);

		const menus = document.querySelectorAll('.nci-header-megamenu');
		expect(menus).toHaveLength(links.length);
	});
});
