/**
 * Represents a single menu item in the mobile navigation.
 */
export interface MobileMenuItem {
	/** The ID of the menu item **/
	id: number | string;
	/**  Text label used for display **/
	label: string;
	/**  URL to the navigation item **/
	path: string;
	/** The 2 character language code. **/
	langcode: string;
	/** Indicator noting this menu item has children and therefore should open a new level of navigation. **/
	hasChildren: boolean;
}
