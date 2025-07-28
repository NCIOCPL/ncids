import { ModalEventDetails } from './modal.event-details';

/**
 * Custom event details for the `modal:open` event.
 */
export type ModalOpenEventDetails = ModalEventDetails & {
	target: HTMLElement;
};
