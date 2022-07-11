import { AutocompleteAdaptor } from '../utils/autocomplete-adaptor';

export class MockACAdaptor implements AutocompleteAdaptor {
	constructor() {
		//empty
	}

	async getAutocompleteSuggestions(searchText: string): Promise<Array<string>> {
		if (searchText !== 'xkcd') {
			return [
				'bile duct cancer',
				'bile duct',
				'biliary cancer',
				'biliary',
				'extrahepatic bile duct cancer',
				'help with bills',
				'bilateral',
				'bilateral cancer',
				'bilateral nephrectomy',
				'bilateral prophylactic mastectomy',
			];
		} else {
			return [];
		}
	}
}
