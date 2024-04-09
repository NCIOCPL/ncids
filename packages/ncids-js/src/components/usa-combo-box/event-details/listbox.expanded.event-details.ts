import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:listbox:expanded` event.
 */
export type ComboBoxExpandedEventDetails = ComboBoxEventDetails & {
	/** The current value of the combo box input. */
	inputValue: string;
};
