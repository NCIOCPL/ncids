/**
 * USA Accordion Options
 * Options used for initialization of the usa-accordion
 */
export type AccordionOptions = {
	/** Allow multiple items to be open at the same time  */
	allowMultipleOpen: boolean;
	/** specifies sections opened at init.  */
	openSections: Array<number>;
	/** header selector for accordion buttons  */
	headerSelector: string;
};
