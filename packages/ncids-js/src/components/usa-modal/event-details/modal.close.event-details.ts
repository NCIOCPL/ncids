import { ModalEventDetails } from './modal.event-details';

/**
 * Enum representing the possible actions that can trigger the closing of a modal.
 */
export enum ModalCloseAction {
	/* Modal Closed with Escape Key */
	KEY_ESCAPE = 'escape',
	/* Modal Closed with Click Outside the Modal */
	CLICK_OUTSIDE = 'outside',
	/* Modal Closed with Close Icon */
	CLOSE_BUTTON = 'close',
	/* Modal Closed with Escape Key */
	FOOTER_BUTTON = 'footer',
	/* Modal Closed with Escape Key */
	OTHER_BUTTON = 'other',
}

/**
 * Custom event details for the `modal:close` event.
 */
export type ModalCloseEventDetails = ModalEventDetails & {
	/** The Close Action that triggered the event */
	closeAction?: ModalCloseAction;
};
