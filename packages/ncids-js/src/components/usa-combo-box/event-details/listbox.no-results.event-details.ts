import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:listbox:no-results` event.
 */
export type ComboBoxNoResultsEventDetails = ComboBoxEventDetails & {
	/** The current value of the combo box input. */
	inputValue: string;
};
