import { MegaMenuAdaptor } from '@nciocpl/ncids-js';

export class MockMegaMenuAdaptor implements MegaMenuAdaptor {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getMegaMenuContent(id: string): Promise<HTMLElement> {
		const content = document.createElement('div');
		content.innerHTML = 'hello world';
		content.setAttribute('data-testid', id);

		return content;
	}
}
