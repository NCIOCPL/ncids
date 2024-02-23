/**
 * @param heading the html heading element
 * @param contents the html contents of the section
 * @param status whether the accordion section is open or closed
 * @function toggleStatus toggles the section's status between open and closed
 */
export type AccordionSection = {
	/** Heading of the accordion section. */
	heading: HTMLHeadingElement;
	/** Inner html of the accordion section. */
	contents: HTMLDivElement;
	/** Current state of the accordion section. */
	status: 'Open' | 'Closed';
	/** Expands or Collapses the section based on its current state. */
	toggleStatus: () => void;
};
