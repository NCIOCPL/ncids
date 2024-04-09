import { ComboBoxEventDetails } from './combo-box.event-details';

/**
 * Custom event details for the `combo-box:cleared` event.
 */
export type ComboBoxClearedEventDetails = ComboBoxEventDetails & {
	/** An [HTML collection of selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions) before a change was made. */
	previouslySelected: HTMLCollectionOf<HTMLOptionElement>;
};
