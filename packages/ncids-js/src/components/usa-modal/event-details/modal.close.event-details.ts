import { ModalEventDetails } from './modal.event-details';

/**
 * Custom event details for the `modal:close` event.
 */
export type ModalCloseEventDetails = ModalEventDetails & {
	target: HTMLElement;
};
