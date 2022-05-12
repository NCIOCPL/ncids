import { MobileMenuItem } from './mobile-menu-item';

/** Mobile Menu Data **/
export type MobileMenuData = MobileMenuItem & {
	/** Array of navigation items to display */
	items: MobileMenuItem[];
	/** Parent navigation item**/
	parent: MobileMenuItem | null;
};
