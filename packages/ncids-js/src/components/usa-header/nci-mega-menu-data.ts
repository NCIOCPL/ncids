import { NavItem } from './nci-nav-item';
/**
 * MegaMenuData to use URL for ID
 * @returns {Array} menuItems for menu API
 * @returns {object} is this element a root node
 */

export type MegaMenuData = {
	menuItems: Array<NavItem>;
	isRoot: boolean;
};
