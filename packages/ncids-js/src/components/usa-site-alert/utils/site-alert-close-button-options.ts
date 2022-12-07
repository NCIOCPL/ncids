/** NCISiteAlert component close button options. */
export type SiteAlertCloseButtonOptions = {
	/** Unique label used to describe the close button. */
	closeAriaLabel: string;
	/** Button class that will close the component. */
	closeButtonClass: string;
	/**
	 * Path sessionStorage will check so NCISiteAlert can be used across
	 * subdirectories with similar domains, e.g. cancer.gov/ and cancer.gov/nano
	 */
	closeCookiePath: string;
	/** Label used in analytics. */
	closeEventListenerLabel: string;
};
