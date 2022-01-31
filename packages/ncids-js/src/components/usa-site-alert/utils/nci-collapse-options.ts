/**
 * Interface for options that will alter the component.
 */
export type NCICollapseOptions = {
	/** Unique label used to describe the button. */
	ariaLabel: string;
	/** Button class that toggles collapsible section. */
	buttonClass: string;
	/** Label used in analytics. */
	eventListenerLabel: string;
};
