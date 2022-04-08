import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIExtendedHeaderWithMegaMenu } from '../nci-header.component';
import { getExampleDOM } from './nci-header-dom';
import { responseData } from './nci-mock-data';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(responseData),
	})
) as jest.Mock;

describe('NCI Extended Header With MegaMenu', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Header component should render', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			useUrlForNavigationId: true,
		});

		expect(header).toBeTruthy();
		const query = screen.queryByRole('search');
		expect(query).toBeInTheDocument();

		header.unregister();
	});

	it('Check EventListeners for MegaMenu', () => {
		const container = getExampleDOM();
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
			useUrlForNavigationId: true,
		});
		expect(header).toBeTruthy();
		// check to see if event listeners added
		// 7 = 5 nav, one screen and one keyboard
		// 9 = +2 for mobile button
		expect(addEventListener.mock.calls).toHaveLength(9);
	});

	it('should return existing component if called more than once', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const options = {
			useUrlForNavigationId: true,
		};
		const element = <HTMLElement>document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(element, options);
		expect(header).toBeTruthy();

		const header2 = NCIExtendedHeaderWithMegaMenu.create(element, options);
		expect(header2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const header3 = new NCIExtendedHeaderWithMegaMenu(element, options);
		expect(header3).toBeTruthy();
	});

	it('Should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIExtendedHeaderWithMegaMenu.create('lemur', {
				useUrlForNavigationId: true,
			});
		}).toThrow('Element is not an HTMLElement');
	});

	it('should unregister', () => {
		const container = getExampleDOM();
		document.body.append(container);
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			useUrlForNavigationId: true,
		});

		expect(header).toBeTruthy();
		header.unregister();
		// check to see if event listeners removed
		// 7 = 5 nav, one screen and one keyboard
		// 9 = +2 for mobile button
		expect(removeEventListener.mock.calls).toHaveLength(9);
	});
});
