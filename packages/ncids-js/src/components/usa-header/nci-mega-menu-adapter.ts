import { MegaMenuData } from './nci-mega-menu-data';
/**
 * MegaMenuAdapter to use URL for ID
 * @param {number | string} MegaMenuAdapter for menu API
 * @returns {object} MegaMenuData
 */

export type MegaMenuAdapter = {
	getNavigationLevel(id: number | string): Promise<MegaMenuData>;
};
