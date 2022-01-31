import { NCICloseButtonOptions } from './utils/nci-close-button-options';
import { NCICollapseOptions } from './utils/nci-collapse-options';

/**
 * Interface for options that will alter the component.
 */
export type NCISiteAlertOptions = {
	/** Add close button to component. */
	closeable?: boolean;
	/** Site alert close button options. */
	closeButton?: NCISiteAlertCloseButtonOptions;
	/** Site alert collapse options. */
	collapse?: NCISiteAlertCollapseOptions;
};

/**
 * Allows close button to be optional for user input, but required in the
 * component.
 */
type NCISiteAlertCloseButtonOptions = Partial<NCICloseButtonOptions> & {
	/** Site alert close button options. */
	closeButton?: NCICloseButtonOptions;
};

/**
 * Allows close button to be optional for user input, but required in the
 * component.
 */
type NCISiteAlertCollapseOptions = Partial<NCICollapseOptions> & {
	/** Site alert collapse options. */
	collapse?: NCICollapseOptions;
};
