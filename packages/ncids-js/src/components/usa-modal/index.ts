/**
 * This package supplies all the necessary components to initialize a modal.
 *
 * See {@link USAModal } with information on how to
 * initialize the dynamic features of the modal.
 *
 * @packageDocumentation
 */
export { USAModal } from './modal.component';

import type { ModalEventDetails } from './event-details/modal.event-details';
import type { ModalCloseEventDetails } from './event-details/modal.close.event-details';
import type { ModalCloseAction } from './event-details/modal.close.event-details';
import type { ModalConfig } from './modal-config';
import type { ModalContent } from './modal-content';
import type { ModalButtons } from './modal-buttons';

export type {
	ModalEventDetails,
	ModalCloseEventDetails,
	ModalCloseAction,
	ModalConfig,
	ModalContent,
	ModalButtons,
};
