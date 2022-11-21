import { MobileMenuData } from './mobile-menu-data';

export type MobileMenuOpenEventDetails = {
	/** First menu loaded on open. */
	initialMenu: MobileMenuData;
	/** Text content of button. */
	label: string;
};
