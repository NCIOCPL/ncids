import { MegaMenuData } from './nci-megamenu-data';
/**
 * MegaMenu Adapter to use URL for ID
 * @param {number | string} MegaMenuAdapter for menu API
 * @returns {object} MegaMenuData
 */

export type MegaMenuAdapter = {
	getNavigationLevel(id: number | string): Promise<MegaMenuData>;
};
