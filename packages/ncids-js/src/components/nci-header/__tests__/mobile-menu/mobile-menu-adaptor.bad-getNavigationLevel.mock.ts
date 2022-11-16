import { MobileMenuAdaptor } from '@nciocpl/ncids-js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class MockMobileMenuAdaptorBadGetNavigationLevel
	implements MobileMenuAdaptor {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getInitialMenuId(): Promise<string | number> {
		return '/root-menu';
	}
}
