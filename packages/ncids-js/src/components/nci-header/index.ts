/**
 * This package supplies all the necessary components to initialize a NCI Header.
 *
 * See {@link NCIExtendedHeaderWithMegaMenu } with information on how to
 * initialize the dynamic features of the header.
 *
 * @packageDocumentation
 */
export { NCIExtendedHeaderWithMegaMenu } from './extended-with-mega-menu';
export { DefaultMegaMenuSource } from './mega-menu';
export { DefaultMobileMenuSource } from './mobile-menu';

import type { NCIExtendedHeaderWithMegaMenuOptions } from './extended-with-mega-menu';
import type {
	MegaMenuAdapter,
	MegaMenuDisplayEventDetails,
	PrimaryNavClickEventDetails,
} from './mega-menu';

import type {
	MobileMenuAdapter,
	MobileMenuData,
	MobileMenuItem,
	MobileMenuCloseEventDetails,
	MobileMenuLinkClickEventDetails,
	MobileMenuOpenEventDetails,
} from './mobile-menu';

export type {
	NCIExtendedHeaderWithMegaMenuOptions,
	MegaMenuAdapter,
	MegaMenuDisplayEventDetails,
	PrimaryNavClickEventDetails,
	MobileMenuAdapter,
	MobileMenuData,
	MobileMenuItem,
	MobileMenuCloseEventDetails,
	MobileMenuLinkClickEventDetails,
	MobileMenuOpenEventDetails,
};
