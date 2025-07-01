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
	title?: string | HTMLHeadingElement;
	content: string | HTMLElement;
	footer?: ModalButtons[];
};
