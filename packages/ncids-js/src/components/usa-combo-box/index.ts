/**
 * This package supplies all the necessary components to initialize a combo box.
 *
 * See {@link USAComboBox } with information on how to
 * initialize the dynamic features of the combo box.
 *
 * @packageDocumentation
 */
export { USAComboBox } from './usa-combo-box.component';

import type { ComboBoxEventDetails } from './event-details/combo-box.event-details';
import type { ComboBoxClearedEventDetails } from './event-details/combo-box.cleared.event-details';
import type { ComboBoxSelectedEventDetails } from './event-details/combo-box.selected.event-details';
import type { ComboBoxTextChangeEventDetails } from './event-details/input.text-change.event-details';
import type { ComboBoxCollapsedEventDetails } from './event-details/listbox.collapsed.event-details';
import type { ComboBoxExpandedEventDetails } from './event-details/listbox.expanded.event-details';
import type { ComboBoxNoResultsEventDetails } from './event-details/listbox.no-results.event-details';

export type {
	ComboBoxEventDetails,
	ComboBoxClearedEventDetails,
	ComboBoxSelectedEventDetails,
	ComboBoxTextChangeEventDetails,
	ComboBoxCollapsedEventDetails,
	ComboBoxExpandedEventDetails,
	ComboBoxNoResultsEventDetails,
};
