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
};
