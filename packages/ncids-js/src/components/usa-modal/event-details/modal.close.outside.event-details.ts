import { ModalEventDetails } from './modal.event-details';

/**
 * Custom event details for the `modal:close.outside` event.
 */
export type ModalCloseOutsideEventDetails = ModalEventDetails & {
	target: HTMLElement;
};
