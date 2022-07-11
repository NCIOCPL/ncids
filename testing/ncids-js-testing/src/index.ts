import './index.scss';

import {
	NCIAutocomplete,
	NCISiteAlert,
	NCIExtendedHeaderWithMegaMenu,
	NCIBigFooter,
} from '@nciocpl/ncids-js';

import { MockMegaMenuAdaptor } from './MockMegaMenuAdaptor';
import { MockMobileMenuAdaptor } from './MockMobileMenuAdaptor';
import { MockAutocompleteAdaptor } from './MockAutocompleteAdaptor';

window.addEventListener('DOMContentLoaded', () => {
	console.log('Initializing');
	const footerInstance = document.getElementById('nci-footer');
	if (footerInstance) {
		NCIBigFooter.create(footerInstance);
	}

	const headerInstance = document.getElementById('nci-header');
	if (headerInstance) {
		NCIExtendedHeaderWithMegaMenu.create(headerInstance, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});
	}

	// set up autocomplete for sitewide search
	const autocompleteInstance = document.querySelector(
		'#nci-header-search__field'
	) as HTMLInputElement;
	if (autocompleteInstance) {
		const MockACSource = new MockAutocompleteAdaptor();
		NCIAutocomplete.create(autocompleteInstance, {
			autocompleteSource: MockACSource,
			maxOptionsCount: 10,
			minCharCount: 3,
			minPlaceholderMsg: 'Please Enter more characters',
		});
	}

	// Autocomplete plucks the search field off the dom to move it, so we lose the existing event listeners
	// replace them here
	const searchField = document.querySelector(
		'#nci-header-search__field'
	) as HTMLInputElement;
	const navSecondary = searchField.closest(
		'.nci-header-nav__secondary'
	) as HTMLDivElement;
	searchField.addEventListener(
		'focus',
		() => {
			navSecondary.classList.add('search-focused');
		},
		false
	);
	searchField.addEventListener(
		'focusout',
		() => {
			navSecondary.classList.remove('search-focused');
		},
		false
	);

	const covidBanner = document.getElementById('site-alert--nci-info');
	if (covidBanner) {
		NCISiteAlert.create(covidBanner, {
			closeable: true,
		});
	}
});
