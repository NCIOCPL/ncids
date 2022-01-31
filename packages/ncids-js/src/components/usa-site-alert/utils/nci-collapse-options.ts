/**
 * Interface for options that will alter the component.
 *
 * @typedef {object} NCICollapseOptions
 * @property {string} ariaLabel -  Unique label used to describe the button.
 * @property {string} buttonClass -  Button class that toggles collapsible section
 * @property {string} eventListenerLabel - Label used in analytics
 */
export type NCICollapseOptions = {
	ariaLabel: string;
	buttonClass: string;
	eventListenerLabel: string;
};
