import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from './nci-autocomplete.twig';
import css from './nci-autocomplete.scss';
import { NCIAutocomplete } from '@nciocpl/ncids-js/nci-autocomplete';
import autocompleteSource from './autocomplete-source';

export default {
	title: 'components/Autocomplete/Default',
	args: {
		ncidsInitJs: () => {
		const acInput = document.getElementById('myInput');
		NCIAutocomplete.create(acInput, {
			highlightMatchingText: false,
			autocompleteSource: {
				getAutocompleteSuggestions: autocompleteSource,
			},
			maxOptionsCount: 10,
			minCharCount: 3,
			listboxClasses: 'listboxWidth',
			minPlaceholderMsg:'Enter 3 or more characters',
		});
		},
	},
};

const Template = (args) => Component(args);

export const MatchDisabled = () => <TestCase css={css} html={Template.bind({
  'label':'Search',
  'button':'Submit',
})()} />;
