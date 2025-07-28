/**
 * Represents a modal config.
 *
 * @example
 *
 * The javascript object representing a modal config.
 * ```js
 * const modalConfig = {
 * 			id: string;
 * 			forced: false,
 * 			modifier: 'usa-modal--lg',
 * };
 * ```
 */
export type ModalConfig = {
	id: string;
	forced?: boolean;
	modifier: string;
};
