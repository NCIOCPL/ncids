import { MegaMenuAdaptor } from '../utils/mega-menu/mega-menu-adaptor';
import { MobileMenuAdaptor } from '../utils/mobile-menu/mobile-menu-adaptor';

/** NCIExtendedHeaderWithMegaMenu **/
export type NCIExtendedHeaderWithMegaMenuOptions = {
	/** An instance of a MegaMenuAdapter **/
	megaMenuSource: MegaMenuAdaptor;
	/** An instance of a MobileMenuAdaptor **/
	mobileMenuSource: MobileMenuAdaptor;
};
