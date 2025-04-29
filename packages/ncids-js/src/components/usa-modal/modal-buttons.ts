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
export interface ModalButtons {
	/**  Text label used for display **/
	label: string;
	/**  Classname for style **/
	style: string;
	/**  Does this button close the modal **/
	closeModal: boolean;
	/** Button callback function. **/
	cbfunction: (myArgument?: string) => void;
}
