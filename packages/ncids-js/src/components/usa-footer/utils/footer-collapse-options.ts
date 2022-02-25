/**
 * Interface for options that will alter the component.
 */
export type FooterCollapseOptions = {
	/** Button class that toggles collapsible section. */
	buttonClass: string;
	/** Class that creates a collapsible section. */
	collapseClass: string;
	/** Screen width required to convert the footer navigation into an accordion. */
	collapseWidth: number;
	/** Label used in analytics. */
	eventListenerLabel: string;
};
