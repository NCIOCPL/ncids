/**
 * Interface for options that will alter the component.
 *
 * @typedef {object} NCICloseButtonOptions
 * @property {string} ariaLabel -  Unique label used to describe the close button.
 * @property {string} buttonClass -  Button class that will close the component *
 * @property {NCICollapseOptions} collapse - Site alert collapse options.
 * @property {string} eventListenerLabel - Label used in analytics
 */
export type NCICloseButtonOptions = {
	ariaLabel: string;
	buttonClass: string;
	cookie: NCICloseButtonCookies;
	eventListenerLabel: string;
};

/**
 * Data added to close button sessionStorage.
 *
 * @typedef {object} NCICloseButtonCookies
 * @property {string} path - Path sessionStorage will check so NCISiteAlert can
 * 		be used across subdirectories with similar domains, e.g. cancer.gov/ and
 * 		cancer.gov/nano
 */
type NCICloseButtonCookies = {
	path: string;
};
