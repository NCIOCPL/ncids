import { MobileMenuAdaptor } from '@nciocpl/ncids-js';
import { MobileMenuData } from '@nciocpl/ncids-js';

export class MockMobileMenuAdaptor implements MobileMenuAdaptor {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getInitialMenuId(): Promise<string | number> {
		return '/root-menu';
	}

	async getNavigationLevel(id: string): Promise<MobileMenuData | null> {
		const rootHost = window.location.origin;
		let rootPath = window.location.href;

		if (rootHost !== 'http://localhost:8080') {
			rootPath += '/assets';
		}

		const path = id === '/' ? '/root-menu' : id;

		try {
			const response = await fetch(`${rootPath}/data/mobile-menu${path}.json`);
			const data = response.json();
			return data;
		} catch (err: unknown) {
			console.error(err);
			return null;
		}
	}
}
