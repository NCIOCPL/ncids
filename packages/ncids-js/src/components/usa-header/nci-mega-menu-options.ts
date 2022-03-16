import { MegaMenuAdapter } from './nci-mega-menu-adapter';
/**
 * NCIMegaMenuOptions
 * @param {Object} MegaMenuAdapter for megamenu API
 * @param {String} menuButtonClass class used for megamenu buttons.
 */
export type NCIMegaMenuOptions = {
	megaMenuSource?: MegaMenuAdapter;
	menuButtonClass?: string;
};
