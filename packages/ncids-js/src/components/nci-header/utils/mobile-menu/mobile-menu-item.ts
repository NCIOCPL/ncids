/** Mobile Menu Item **/
export type MobileMenuItem = {
	/** Uid for navigation item **/
	id: number | string;
	/**  Text label used for display **/
	label: string;
	/**  URL to the navigation item **/
	path: string;
	/** The 2 character language code. NOTE: This may not be needed. **/
	langcode: string;
	/** Indicator noting this menu item has children and therefore should open a new level of navigation. **/
	hasChildren: boolean;
};
