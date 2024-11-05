import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:unselected` event.
 */
export type ComboBoxUnselectedEventDetails = ComboBoxEventDetails & {
	/** An [Array of selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions) before a change was made. */
	previouslySelected: Array<HTMLOptionElement>;
};
