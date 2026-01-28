import { ModalEventDetails } from './modal.event-details';

export enum ModalCloseAction {
	KEY_ESCAPE = 'escape',
	CLICK_OUTSIDE = 'outside',
	CLOSE_BUTTON = 'close',
	FOOTER_BUTTON = 'footer',
}

/**
 * Custom event details for the `modal:close` event.
 */
export type ModalCloseEventDetails = ModalEventDetails & {
	closeAction?: ModalCloseAction;
};
