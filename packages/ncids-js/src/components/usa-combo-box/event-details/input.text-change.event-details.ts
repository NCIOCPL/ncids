import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:input:text-change` event.
 */
export type ComboBoxTextChangeEventDetails = ComboBoxEventDetails & {
	/** The current value of the combo box input. */
	inputValue: string;
};
