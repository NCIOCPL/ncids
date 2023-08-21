import { MegaMenuAdaptor } from './mega-menu-adaptor';

/**
 * Default header mega menu source
 */
export class DefaultMegaMenuSource implements MegaMenuAdaptor {
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
