import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:selected` event.
 */
export type ComboBoxSelectedEventDetails = ComboBoxEventDetails & {
	/** An [Array of selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions) via the combo box select element. */
	selected: Array<HTMLOptionElement>;
	/** The current value of the combo box input. */
	inputValue: string;
	/** An [Array of selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions) before a change was made. */
	previouslySelected: Array<HTMLOptionElement>;
};
