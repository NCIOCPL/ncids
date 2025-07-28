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
import type { ModalCloseOutsideEventDetails } from './event-details/modal.close.outside.event-details';
import type { ModalCloseEscEventDetails } from './event-details/modal.close.esc.event-details';
import type { ModalOpenEventDetails } from './event-details/modal.open.event-details';

export type {
	ModalEventDetails,
	ModalCloseEventDetails,
	ModalCloseOutsideEventDetails,
	ModalCloseEscEventDetails,
	ModalOpenEventDetails,
};
