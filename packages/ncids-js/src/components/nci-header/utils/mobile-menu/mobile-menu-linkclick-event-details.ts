import { MobileMenuData } from './mobile-menu-data';

export type MobileMenuLinkClickEventDetails = {
	/** Action that triggered a link click. */
	action: 'Back' | 'Child' | null;
	/** Menu data of link clicked. */
	data: MobileMenuData | null;
	/** Text content of item clicked. */
	label: string | null;
	/** Number in list. Null if Back link clicked. */
	index: number | null;
};
