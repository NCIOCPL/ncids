/**
 * The autocomplete adapter is a class that implements the Autocomplete
 * interface. The design system does not force you to have to build your
 * backend systems in any specific way.
 */
export interface AutocompleteAdaptor {
	/**
	 * Gets the mega menu contents (as an HtmlElement) for the given id or URL.
	 * @param searchText inputted text
	 */
	getAutocompleteSuggestions(searchText: string): Promise<Array<string>>;
}
