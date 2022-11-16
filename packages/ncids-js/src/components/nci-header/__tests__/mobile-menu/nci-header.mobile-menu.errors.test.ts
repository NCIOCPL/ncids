import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIExtendedHeaderWithMegaMenu } from '../../nci-header.component';
import { MockMobileMenuAdaptorBadGetInitialMenuId } from './mobile-menu-adaptor.bad-getInitialMenuId.mock';
import { MockMobileMenuAdaptorBadGetNavigationLevel } from './mobile-menu-adaptor.bad-getNavigationLevel.mock';
import { MockMobileMenuAdaptorBadParentBackLabel } from './mobile-menu-adaptor.bad-parentBackLabel.mock';
import { MockMegaMenuAdaptor } from '../mega-menu/mega-menu-adaptor.mock';

import { headerWithDataMenuId } from '../nci-header-id-dom';

describe('NCI Extended Header - Mobile Menu Error Handling', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('Adaptor should always have back button label', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		expect(element).toBeTruthy();

		expect(() => {
			NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
				megaMenuSource: new MockMegaMenuAdaptor(false),
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				mobileMenuSource: new MockMobileMenuAdaptorBadParentBackLabel(false),
			});
		}).toThrow('Label for back button is required.');
	});

	it('Adaptor getInitialMenuId returns a promise of string or number', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		expect(element).toBeTruthy();

		expect(() => {
			NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
				megaMenuSource: new MockMegaMenuAdaptor(false),
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				mobileMenuSource: new MockMobileMenuAdaptorBadGetInitialMenuId(false),
			});
		}).toThrow(
			'getInitialMenuId required to return a Promise of string or number.'
		);
	});

	it('Adaptor getNavigationLevel returns a promise of string or number', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		expect(element).toBeTruthy();

		expect(() => {
			NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
				megaMenuSource: new MockMegaMenuAdaptor(false),
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				mobileMenuSource: new MockMobileMenuAdaptorBadGetNavigationLevel(false),
			});
		}).toThrow(
			'getNavigationLevel required to return a Promise of MobileMenuData'
		);
	});
});
