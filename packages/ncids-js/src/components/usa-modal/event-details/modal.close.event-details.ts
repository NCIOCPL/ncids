import { ModalEventDetails } from './modal.event-details';

export enum ModalCloseAction {
	KEY_ESCAPE = 'escape',
	CLICK_OUTSIDE = 'outside',
	CLOSE_BUTTON = 'close',
	FOOTER_BUTTON = 'footer',
	OTHER_BUTTON = 'other',
}

/**
 * Custom event details for the `modal:close` event.
 */
export type ModalCloseEventDetails = ModalEventDetails & {
	closeAction?: ModalCloseAction;
};
