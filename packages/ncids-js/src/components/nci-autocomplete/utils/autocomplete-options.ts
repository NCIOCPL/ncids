import { AutocompleteAdaptor } from './autocomplete-adaptor';

export type NCIAutocompleteOptions = {
	autocompleteSource: AutocompleteAdaptor | null | undefined;
} & AutocompleteOptions;

/** Autocomplete input component options. */
export type AutocompleteOptions = {
	/** Highlight matching text in suggestion */
	highlightMatchingText: boolean;
	/** Minimum number of characters entered before suggestions appear */
	minCharCount: number;
	/** Maximum number of suggestions displayed in listbox */
	maxOptionsCount: number;
	/** Message to display until minimum number of characters are inputted */
	minPlaceholderMsg: string;
	/** listbox classes added for extra styling */
	listboxClasses: string;
	/** number of options presented in listbox, return null if no options found. */
	optionSetSize: number | null;
};

/** Contains info about a presented option when selected */
export type SelectedOptionInfo = {
	/** position in presented set of the option selected, return null if no option selected. */
	selectedOptionIndex: number | null;
	/** value of the selected option, return null if no option selected. */
	selectedOptionValue: string | null;
	/** text present in the input when the option was selected */
	inputtedTextWhenSelected: string;
};
