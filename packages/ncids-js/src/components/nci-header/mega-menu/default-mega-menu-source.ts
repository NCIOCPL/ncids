import { MegaMenuAdapter } from '.';

/**
 * Default header mega menu source
 */
export class DefaultMegaMenuSource implements MegaMenuAdapter {
	/**
	 * Stops mega menu generation with null content.
	 * @return {null}
	 */
	getMegaMenuContent(id: number | string): null {
		console.warn(
			`Default Mega Menu Adapter does not support setting data-menu-id properties. Cannot fetch ${id}`
		);
		return null;
	}
}
