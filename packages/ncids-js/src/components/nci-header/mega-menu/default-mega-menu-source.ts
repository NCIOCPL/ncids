import { MegaMenuAdapter } from '.';

/**
 * Default header mega menu source
 */
export class DefaultMegaMenuSource implements MegaMenuAdapter {
	/** Use href for navigation id. */
	useUrlForNavigationId = true;

	constructor() {
		console.warn('Mega menu source not specified');
	}

	/**
	 * Stops mega menu generation with null content.
	 * @return {null}
	 */
	getMegaMenuContent(): null {
		return null;
	}
}
