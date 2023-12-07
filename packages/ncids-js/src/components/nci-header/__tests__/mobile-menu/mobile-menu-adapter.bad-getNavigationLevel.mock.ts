import { MobileMenuAdapter } from '../../mobile-menu';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class MockMobileMenuAdapterBadGetNavigationLevel
	implements MobileMenuAdapter {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getInitialMenuId(): Promise<string | number> {
		return '/root-menu';
	}
}
