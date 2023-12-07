import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';
import { MockMobileMenuAdapterBadGetInitialMenuId } from './mobile-menu-adapter.bad-getInitialMenuId.mock';
import { MockMobileMenuAdapterBadGetNavigationLevel } from './mobile-menu-adapter.bad-getNavigationLevel.mock';
import { MockMegaMenuAdapter } from '../mega-menu/mega-menu-adapter.mock';

import { headerWithDataMenuId } from '../nci-header-id-dom';

describe('NCI Extended Header - Mobile Menu Error Handling', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('Adapter getInitialMenuId returns a promise of string or number', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		expect(element).toBeTruthy();

		expect(() => {
			NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
				megaMenuSource: new MockMegaMenuAdapter(false),
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				mobileMenuSource: new MockMobileMenuAdapterBadGetInitialMenuId(false),
			});
		}).toThrow(
			'getInitialMenuId required to return a Promise of string or number.'
		);
	});

	it('Adapter getNavigationLevel returns a promise of string or number', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		expect(element).toBeTruthy();

		expect(() => {
			NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
				megaMenuSource: new MockMegaMenuAdapter(false),
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				mobileMenuSource: new MockMobileMenuAdapterBadGetNavigationLevel(false),
			});
		}).toThrow(
			'getNavigationLevel required to return a Promise of MobileMenuData'
		);
	});
});
