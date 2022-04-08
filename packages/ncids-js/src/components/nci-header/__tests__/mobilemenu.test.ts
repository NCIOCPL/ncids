import { fireEvent, waitFor, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIMobileMenu } from '../utils/mobilemenu';
import { getExampleDOM } from './nci-header-dom';
import { responseData } from './nci-mock-mobile';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(responseData),
	})
) as jest.Mock;

describe('NCI MobileMenu Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('MobileMenu should render', () => {
		const container = getExampleDOM();
		document.body.append(container);
		const options = { useUrlForNavigationId: true };
		const element = document.getElementById('nci-header');
		const navigation = new NCIMobileMenu(<HTMLElement>element, options);
		expect(navigation).toBeTruthy();
		const query = screen.queryByRole('search');
		expect(query).toBeInTheDocument();
	});

	it('should return existing component if called more than once', () => {
		const container = getExampleDOM();
		document.body.append(container);
		const options = { useUrlForNavigationId: true };
		const element = <HTMLElement>document.getElementById('nci-header');
		const navigation = new NCIMobileMenu(element, options);
		expect(navigation).toBeTruthy();

		const navigation2 = new NCIMobileMenu(element, options);
		expect(navigation2).toBeTruthy();

		const navigation3 = new NCIMobileMenu(element, options);
		expect(navigation3).toBeTruthy();
	});

	it('Click button to open and close', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		const options = { useUrlForNavigationId: true };
		const element = document.getElementById('nci-header');
		new NCIMobileMenu(<HTMLElement>element, options);

		fireEvent.click(screen.getByText('Menu'));
		await waitFor(() => {
			const closeButton = document.querySelector(
				'.nci-header-mobilenav__close-btn'
			);
			expect(closeButton).toBeInTheDocument();
		});
	});

	it('Click button and count 5 links', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		const options = { useUrlForNavigationId: true };
		const element = document.getElementById('nci-header');
		new NCIMobileMenu(<HTMLElement>element, options);

		fireEvent.click(screen.getByText('Menu'));
		await waitFor(() => {
			const linkButtons = document.querySelectorAll(
				'.nci-header-mobilenav__list-node'
			);
			// 6 primary links by default
			expect(linkButtons).toHaveLength(6);
		});
	});
});
