import { MegaMenuAdapter } from '../../mega-menu';

export class MockMegaMenuAdapter implements MegaMenuAdapter {
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
