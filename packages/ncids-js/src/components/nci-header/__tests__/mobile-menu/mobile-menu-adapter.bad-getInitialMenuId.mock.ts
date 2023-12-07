import { MobileMenuAdapter, MobileMenuData } from '../../mobile-menu';

import { rootData, sectionData, subSectionData } from './mock-mobile-menu-data';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class MockMobileMenuAdapterBadGetInitialMenuId
	implements MobileMenuAdapter {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getNavigationLevel(id: string): Promise<MobileMenuData> {
		let returnValue;

		switch (id) {
			case '/root-menu': {
				returnValue = <MobileMenuData>rootData;
				break;
			}
			case '/section-one': {
				returnValue = <MobileMenuData>sectionData;
				break;
			}
			case '/section-one/sub-one': {
				returnValue = <MobileMenuData>subSectionData;
				break;
			}
			default: {
				returnValue = <MobileMenuData>rootData;
				break;
			}
		}
		return returnValue;
	}
}
