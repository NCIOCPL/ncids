import { NavItem } from './navigation-item';
/**
 * MegaMenu Data for display of navigation
 * @param {array} menuItems for menu API
 * @param {object} is this element a root node
 */

export type MegaMenuData = {
	menuItems: NavItem[];
	isRoot: boolean;
};
