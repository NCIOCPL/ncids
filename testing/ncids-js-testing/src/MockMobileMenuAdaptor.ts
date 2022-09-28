import { MobileMenuAdaptor } from '@nciocpl/ncids-js';
import { MobileMenuData } from '@nciocpl/ncids-js';

export class MockMobileMenuAdaptor implements MobileMenuAdaptor {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getInitialMenuId(): Promise<string | number> {
		return this.useUrlForNavigationId ? '/root-menu' : 999;
	}

	async getNavigationLevel(id: string): Promise<MobileMenuData> {
		const rootPath = window.location.origin;
		const path = id === '/' ? '/root-menu' : id;

		return await fetch(`${rootPath}/data/mobile-menu${path}.json`)
			.then((response) => response.json())
			.catch((error) => {
				console.error(`Fetch Error: ${error}`);

				// todo adaptor only allows @return Promise<MobileMenuData>
				return {
					id: 0,
					label: 'Homepage',
					path: '/',
					langcode: 'en',
					hasChildren: false,
					items: [],
					parent: null,
				};
			});
	}
}
