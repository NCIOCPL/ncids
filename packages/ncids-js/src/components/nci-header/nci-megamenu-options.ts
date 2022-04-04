import { MegaMenuAdapter } from './nci-megamenu-adapter';
/**
 * NCIMegaMenu Options for display and init
 * @param {Object} MegaMenuAdapter for megamenu API
 * @param {String} listElementClass class used for primary menu.
 * @param {String} linkElementClass class used for megamenu buttons.
 */
export type NCIMegaMenuOptions = {
	megaMenuSource?: MegaMenuAdapter;
	listElementClass?: string;
	linkElementClass?: string;
};
