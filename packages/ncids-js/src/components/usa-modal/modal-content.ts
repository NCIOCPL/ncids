import { ModalButtons } from './modal-buttons';

/**
 * Represents a modal content.
 *
 * @example
 *
 * The javascript object representing a modal config.
 * ```js
 * const modalContent = {
 *      title: 'Example Header',
 *      content: '<p>Example content that <b>would be</b> in a modal</p>',
 *      footer: [],
 * };
 * ```
 */
export type ModalContent = {
	/** The title of the modal, which can be a string or an HTML heading element. */
	title?: string | HTMLHeadingElement;
	/** The content of the modal, which can be a string or an HTML element. */
	content: string | HTMLElement;
	/** An optional array of buttons to be displayed in the modal footer. */
	footer?: ModalButtons[];
};
