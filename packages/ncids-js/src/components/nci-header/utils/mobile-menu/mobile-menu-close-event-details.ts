import { MobileMenuData } from './mobile-menu-data';

export type MobileMenuCloseEventDetails = {
	/** Trigger that closed the menu. */
	action: 'Escape' | 'Close' | 'Overlay';
	/** Last menu displayed before the menu closed. */
	lastMenu: MobileMenuData | null;
};
