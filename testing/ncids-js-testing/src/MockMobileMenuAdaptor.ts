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

	async getNavigationLevel(id: number | string): Promise<MobileMenuData> {
		if (!id) {
			throw new Error(`ID not found`);
		}

		const rootPath = window.location.origin;

		if (this.useUrlForNavigationId) {
			const path = id === '/' ? '/root-menu' : id;
			return this.fetchData(`${rootPath}/data/mobile-menu${path}.json`);
		} else {
			/*
			 * Workaround for testing !this.useUrlForNavigationId
			 * Set mobileMenuSource: new MockMobileMenuAdaptor(false), to trigger
			 */
			let path = '/root-menu';
			if (id === '1') {
				path = '/section-one';
			} else if (id === '2') {
				path = '/section-two';
			}

			return this.fetchData(`${rootPath}/data/mobile-menu${path}.json`);
		}
	}

	async fetchData(path: string): Promise<MobileMenuData> {
		return await fetch(path).then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		});
	}
}
