/**
 * Navigation Item
 *
 * @param {number} id Uid for navigation item
 * @param {string} label Text label used for display
 * @param {string} path URL to the navigation item
 * @param {string} langcode Language of the navigation item
 * @param {boolean} hasChildren Does this item have childeren
 * @param {array<NavItem>} children children nodes
 */
export type NavItem = {
	id: number;
	label: string;
	path: string;
	langcode: string;
	hasChildren: boolean;
	children: Array<NavItem>;
};
