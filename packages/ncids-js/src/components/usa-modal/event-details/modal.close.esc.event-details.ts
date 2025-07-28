import { ModalEventDetails } from './modal.event-details';

/**
 * Custom event details for the `modal:close.esc` event.
 */
export type ModalCloseEscEventDetails = ModalEventDetails & {
	target: HTMLElement;
};
