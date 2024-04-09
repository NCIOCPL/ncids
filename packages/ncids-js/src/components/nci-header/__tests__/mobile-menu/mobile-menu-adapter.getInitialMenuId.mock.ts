import { MobileMenuAdapter, MobileMenuData } from '../../mobile-menu';
import { rootData, sectionData, subSectionData } from './mock-mobile-menu-data';

export class MockMobileMenuAdapterLocation implements MobileMenuAdapter {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getInitialMenuId(): Promise<string | number> {
		return '/section-one';
	}

	async getNavigationLevel(id: string): Promise<MobileMenuData> {
		let returnValue;

		switch (id) {
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
