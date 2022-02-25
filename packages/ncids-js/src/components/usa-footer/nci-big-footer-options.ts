import { FooterCollapseOptions } from './utils/footer-collapse-options';
import { NCISubscribeOptions } from '../nci-subscribe/nci-subscribe-options';

/**
 * Interface for options that will alter the Footer component.
 */
export type NCIBigFooterOptions = {
	/** Footer collapse options. */
	collapse?: NCIBigFooterCollapseOptions;
	subscribe?: NCIBigFooterSubscribeOptions;
};

/**
 * Allows options to be optional for user input, but required in the
 * component.
 */
type NCIBigFooterCollapseOptions = Partial<FooterCollapseOptions> & {
	/** Collapse options. */
	collapse?: FooterCollapseOptions;
};

/**
 * Allows options to be optional for user input, but required in the
 * component.
 */
type NCIBigFooterSubscribeOptions = Partial<NCISubscribeOptions> & {
	/** Collapse options. */
	subscribe?: NCISubscribeOptions;
};
