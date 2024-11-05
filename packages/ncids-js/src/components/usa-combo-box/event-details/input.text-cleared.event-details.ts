import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:input:text-cleared` event.
 */
export type ComboBoxTextClearedEventDetails = ComboBoxEventDetails & {
	/**
	 * An
	 * [Array of selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions)
	 * via the combo box select element. May be empty if no value was selected
	 * before the text was cleared.
	 */
	selected: Array<HTMLOptionElement>;
	/** The previous value of the combo box input before the text was cleared. */
	previousInputValue: string;
};
