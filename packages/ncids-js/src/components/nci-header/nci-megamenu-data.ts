import { NavItem } from './nci-navigation-item';
/**
 * MegaMenu Data for display of navigation
 * @returns {Array} menuItems for menu API
 * @returns {object} is this element a root node
 */

export type MegaMenuData = {
	menuItems: Array<NavItem>;
	isRoot: boolean;
};
