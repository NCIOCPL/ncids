import { ModalButtons } from './modal-buttons';
/**
 * Represents a modal config.
 *
 * @example
 *
 * The javascript object representing a modal config.
 * ```js
 * const modalConfig = {
 *      modalId: 'example-modal-1',
 *      title: 'Example Header',
 *      content: 'Example content that would be in a modal',
 *      footer: [],
 * };
 * ```
 */
export interface ModalConfig {
	modalId: string;
	title: string;
	content: string;
	footer?: ModalButtons[];
}
