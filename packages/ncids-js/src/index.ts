// Components
/** @deprecated This export will be removed in v3.0.0. Please import directly from "@nciocpl/ncids-js/nci-autocomplete". */
export { NCIAutocomplete } from './components/nci-autocomplete/nci-autocomplete.component';
/** @deprecated This export will be removed in v3.0.0. Please import directly from "@nciocpl/ncids-js/usa-footer". */
export { NCIBigFooter } from './components/usa-footer/nci-big/index';
/** @deprecated This export will be removed in v3.0.0. Please import directly from "@nciocpl/ncids-js/usa-site-alert". */
export { NCISiteAlert } from './components/usa-site-alert/nci-site-alert.component';
/** @deprecated This export be removed completely in v3.0.0 and should not be used. */
export { NCISubscribe } from './components/nci-subscribe/nci-subscribe.component';

import { NCIExtendedHeaderWithMegaMenu } from './components/nci-header/extended-with-mega-menu/index';
/** @deprecated This export will be removed in v3.0.0. Please import directly from "@nciocpl/ncids-js/nci-header". */
export { NCIExtendedHeaderWithMegaMenu };

/** @deprecated This export be removed completely in v3.0.0 and should not be used. */
export { USAAccordion } from './components/usa-accordion/usa-accordion.component';

import type { MegaMenuAdapter as MegaMenuAdaptor } from './components/nci-header/mega-menu';

import type {
	MobileMenuAdapter as MobileMenuAdaptor,
	MobileMenuData,
	MobileMenuItem,
} from './components/nci-header/mobile-menu';

/** @deprecated These exports will be removed in v3.0.0. Please import directly from "@nciocpl/ncids-js/nci-header". */
export type {
	MegaMenuAdaptor,
	MobileMenuAdaptor,
	MobileMenuData,
	MobileMenuItem,
};

import type {
	AutocompleteAdapter as AutocompleteAdaptor,
	NCIAutocompleteOptions,
	AutocompleteOptions,
} from './components/nci-autocomplete/index';

/** @deprecated These exports will be removed in v3.0.0. Please import directly from "@nciocpl/ncids-js/nci-autocomplete". */
export type {
	AutocompleteAdaptor,
	NCIAutocompleteOptions,
	AutocompleteOptions,
};
