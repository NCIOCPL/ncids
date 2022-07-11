import { AutocompleteAdaptor } from '@nciocpl/ncids-js';

export class MockAutocompleteAdaptor implements AutocompleteAdaptor {
	constructor() {
		//empty
	}

	private handleResponse(response: JSON): Array<string> {
		const results = JSON.parse(JSON.stringify(response)).results;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const terms = results.map((item: any) => item.term);
		return terms;
	}

	async getAutocompleteSuggestions(searchText: string): Promise<Array<string>> {
		return <Array<string>>await fetch(
			`https://webapis.cancer.gov/sitewidesearch/v1/Autosuggest/cgov/en/${searchText}`
		)
			.then((response) => response.json())
			.then((data) => this.handleResponse(data))
			.catch((error) => {
				console.error(`Fetch Error: ${error}`);
				return [];
			});
	}
}
