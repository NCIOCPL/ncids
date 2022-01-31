/**
 * Interface for options that will alter the component.
 */
export type NCICloseButtonOptions = {
	/** Unique label used to describe the close button. */
	ariaLabel: string;
	/** Button class that will close the component. */
	buttonClass: string;
	/**
	 * Path sessionStorage will check so NCISiteAlert can be used across
	 * subdirectories with similar domains, e.g. cancer.gov/ and cancer.gov/nano
	 */
	cookiePath: string;
	/** Label used in analytics. */
	eventListenerLabel: string;
};
