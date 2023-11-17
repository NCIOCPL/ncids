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

		headerInstance.addEventListener('nci-header:mobile-menu:open', (e) => {
			console.log('Mobile menu opened.', e);
		});

		headerInstance.addEventListener('nci-header:mobile-menu:close', (e) => {
			console.log('Mobile menu closed.', e);
		});

		headerInstance.addEventListener('nci-header:mobile-menu:linkclick', (e) => {
			console.log('Mobile menu link clicked', e);
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
		(e) => {
			console.log('Autocomplete submitted', e);
		}
	);

	const usaAlerts = document.querySelectorAll('.usa-site-alert');
	usaAlerts.forEach((element: Node) => {
		const alert = element as HTMLElement;
		const closeable = alert.dataset.siteAlertClosable?.toLowerCase() === 'true';
		NCISiteAlert.create(alert, { closeable });
	});

	// multiple autocomplete example
	const acInput1 = document.querySelector('#input-1') as HTMLInputElement;
	const acInput2 = document.querySelector('#input-2') as HTMLInputElement;
	const acInput3 = document.querySelector('#input-3') as HTMLInputElement;
	const acInput4 = document.querySelector('#input-4') as HTMLInputElement;

	if (acInput1 && acInput2) {
		const MockACSource = new MockAutocompleteAdaptor();
		NCIAutocomplete.create(acInput1, {
			autocompleteSource: MockACSource,
			maxOptionsCount: 10,
			minCharCount: 4,
			minPlaceholderMsg: 'Please enter 4 or more characters',
		});
		NCIAutocomplete.create(acInput2, {
			autocompleteSource: MockACSource,
			maxOptionsCount: 10,
			minCharCount: 3,
			listboxClasses: 'full-listbox-width',
		});
		NCIAutocomplete.create(acInput3, {
			autocompleteSource: MockACSource,
			maxOptionsCount: 10,
			minCharCount: 3,
			listboxClasses: 'listboxWidth',
		});
		NCIAutocomplete.create(acInput4, {
			autocompleteSource: MockACSource,
			maxOptionsCount: 10,
			minCharCount: 3,
			listboxClasses: 'full-listbox-width',
		});
	} else {
		console.log('Example autocomplete fields not found');
	}
});
