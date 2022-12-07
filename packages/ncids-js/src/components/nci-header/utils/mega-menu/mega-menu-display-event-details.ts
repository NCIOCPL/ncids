/**
 * The details for a mega menu expand and collapse event.
 */
type MegaMenuDisplayEventDetails = {
	/** The label of the navigation item. */
	label: string;
	/** The id of the navigation item. This will be the href if the adaptor's useUrlForNavigationId is true. */
	id: string;
	/** The button of the element. */
	button: HTMLButtonElement;
};

export default MegaMenuDisplayEventDetails;
