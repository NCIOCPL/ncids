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
			listboxClasses: 'listboxWidth',
		});
	}

	// Leaving this in for testing that this event fires
	autocompleteInstance.addEventListener(
		'nci-autocomplete:formSubmission',
		() => {
			console.log('*************FS*********');
		}
	);

	const covidBanner = document.getElementById('site-alert--nci-info');
	if (covidBanner) {
		NCISiteAlert.create(covidBanner, {
			closeable: true,
		});
	}
});
