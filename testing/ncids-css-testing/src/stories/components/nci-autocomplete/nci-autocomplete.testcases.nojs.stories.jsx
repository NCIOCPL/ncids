import Component from './nci-autocomplete.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Autocomplete/Test Cases',
	component: Component,
	parameters: { css },
};

export const NoJS = {
	args: {
		'label': 'Search',
		'button': 'Submit',
	},
};


