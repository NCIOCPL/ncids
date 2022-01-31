import { NCICollapseOptions } from './utils/nci-collapse-options';
import { NCICloseButtonOptions } from './utils/nci-close-button-options';

/**
 * Interface for options that will alter the component.
 *
 * @typedef {object} NCISiteAlertOptions
 * @property {boolean} - Add close button to component.
 * @property {NCICloseButtonOptions} closeButton - Site alert close button options.
 * @property {NCICollapseOptions} collapse - Site alert collapse options.
 */
export type NCISiteAlertOptions = {
	closeable?: boolean;
	closeButton?: NCICloseButtonOptions;
	collapse?: NCICollapseOptions;
};
