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

	it('MegaMenu should unregister and reset parent links', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		const navigation = new NCIMegaMenu(<HTMLElement>element, {});
		// once init should be buttons not links
		let primaryButtons = document.querySelector(
			'.nci-header-nav__primary-button'
		);
		expect(primaryButtons).toBeTruthy();

		let primaryLinks = document.querySelector('.nci-header-nav__primary-link');
		expect(primaryLinks).not.toBeTruthy();

		let megaMenus = document.querySelector('.nci-header-megamenu');
		expect(megaMenus).toBeTruthy();

		navigation.unregister();
		// once removed should be links not buttons
		primaryLinks = document.querySelector('.nci-header-nav__primary-link');
		expect(primaryLinks).toBeTruthy();

		primaryButtons = document.querySelector('.nci-header-nav__primary-button');
		expect(primaryButtons).not.toBeTruthy();
		// make sure layers were removed
		megaMenus = document.querySelector('.nci-header-megamenu');
		expect(megaMenus).not.toBeTruthy();
	});

	it('should remove event handlers on unregister call', () => {
		const container = getExampleDOM();
		document.body.append(container);

		// This is kinda a dirty test cause I know the underlying logic,
		// but I can't think of anything better to ensure we clear out
		// all the event handlers on unregister.
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const element = document.querySelector('.nci-header-nav__primary');
		const navigation = new NCIMegaMenu(<HTMLElement>element, {});
		// 5 links in dom + 2 for click and keyboard
		expect(navigation).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(7);

		navigation.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(7);
	});
});
