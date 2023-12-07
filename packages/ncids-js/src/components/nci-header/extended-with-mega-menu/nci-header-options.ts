import { MegaMenuAdapter } from '../mega-menu/mega-menu-adapter';
import { MobileMenuAdapter } from '../mobile-menu/mobile-menu-adapter';

/** Options for the NCIExtendedHeaderWithMegaMenu **/
export type NCIExtendedHeaderWithMegaMenuOptions = {
	/** The adapter to use for fetching mega menu content  **/
	megaMenuSource: MegaMenuAdapter;
	/** The adapter to use for fetching mobile menu data **/
	mobileMenuSource: MobileMenuAdapter;
};
