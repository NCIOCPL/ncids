/**
 * Represents a modal button.
 *
 * @example
 *
 * The javascript object representing a modal button.
 * ```js
 * const ModalButtons = {
 *      label: 'Logout Now',
 *      style: 'usa-button--secondary',
 * 			closeModal:true,
 *      cbfunction: ()=>{},
 * };
 * ```
 */
export type ModalButtons = {
	/**  Text label used for display **/
	label: string;
	/**  Classname for style **/
	style: string;
	/**  Does this button close the modal **/
	closeModal: boolean;
	/** Button callback function. **/
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	cbfunction?: (myArgument?: never) => void;
};
