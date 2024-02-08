import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:listbox:collapsed` event.
 */
export type ComboBoxCollapsedEventDetails = ComboBoxEventDetails & {
	/** The current value of the combo box input. */
	inputValue: string;
};
