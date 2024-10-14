import Component from './nci-autocomplete.twig';
import css from './index.scss?inline';
import { NCIAutocomplete } from '@nciocpl/ncids-js/nci-autocomplete';
import autocompleteSource from './autocomplete-source.js';

export default {
	title: 'components/Autocomplete/Default',
	component: Component,
	parameters: {
		css,
		ncidsInitJs: () => {
			const acInput = document.getElementById('myInput');
			NCIAutocomplete.create(acInput, {
				highlightMatchingText: true,
				autocompleteSource: {
					getAutocompleteSuggestions: autocompleteSource,
				},
				maxOptionsCount: 10,
				minCharCount: 3,
				listboxClasses: 'listboxWidth',
				minPlaceholderMsg: 'Enter 3 or more characters',
			});
		},
	},
};

export const MatchEnabled = {
	args: {
		label: 'Search',
		button: 'Submit',
	},
};
