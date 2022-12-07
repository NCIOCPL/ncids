/** NCISiteAlert component collapse options. */
export type SiteAlertCollapseOptions = {
	/** Unique label used to describe the button. */
	collapseAriaLabel: string;
	/** Button class that toggles collapsible section. */
	collapseButtonClass: string;
	/**
	 * Path sessionStorage will check so NCISiteAlert can be used across
	 * subdirectories with similar domains, e.g. cancer.gov/ and cancer.gov/nano
	 */
	collapseCookiePath?: string;
	/** Label used in analytics. */
	collapseEventListenerLabel: string;
};
