/**
 * Interface for options that will alter the component.
 */
export type NCISubscribeOptions = {
	/** Text displayed to the user to describe an invalid submission. */
	invalidEmailAlert: string;
	/** Label used in analytics. */
	eventListenerLabel: string;
};
