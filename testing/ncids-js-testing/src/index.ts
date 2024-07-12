import './index.scss';

import { NCIAutocomplete } from '@nciocpl/ncids-js/nci-autocomplete';
import { USAComboBox } from '@nciocpl/ncids-js/usa-combo-box';
import { NCIExtendedHeaderWithMegaMenu } from '@nciocpl/ncids-js/nci-header';
import { NCIBigFooter } from '@nciocpl/ncids-js/usa-footer';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

import { MockMegaMenuAdapter } from './MockMegaMenuAdapter';
import { MockMobileMenuAdapter } from './MockMobileMenuAdapter';
import { MockAutocompleteAdapter } from './MockAutocompleteAdapter';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

declare global {
	interface Window {
		accEx1: object;
		accEx2: object;
		accEx3: object;
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const footerInstance = document.getElementById('nci-footer');
	if (footerInstance) {
		NCIBigFooter.create(footerInstance);
	}

	const headerInstance = document.getElementById('nci-header');
	if (headerInstance) {
		NCIExtendedHeaderWithMegaMenu.create(headerInstance, {
			megaMenuSource: new MockMegaMenuAdapter(),
			mobileMenuSource: new MockMobileMenuAdapter(true),
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
		const MockACSource = new MockAutocompleteAdapter();
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

	const comboBoxes = document.querySelectorAll('.usa-combo-box');
	comboBoxes.forEach((comboBoxEl) => {
		USAComboBox.create(comboBoxEl);
	});

	const usaAlerts = document.querySelectorAll('.usa-site-alert');
	usaAlerts.forEach((element: Node) => {
		const alert = element as HTMLElement;
		const closeable = alert.dataset.siteAlertClosable?.toLowerCase() === 'true';
		USASiteAlert.create(alert, { closeable });
	});

	// multiple autocomplete example
	const acInput1 = document.querySelector('#input-1') as HTMLInputElement;
	const acInput2 = document.querySelector('#input-2') as HTMLInputElement;
	const acInput3 = document.querySelector('#input-3') as HTMLInputElement;
	const acInput4 = document.querySelector('#input-4') as HTMLInputElement;

	if (acInput1 && acInput2) {
		const MockACSource = new MockAutocompleteAdapter();
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

	// init Accordion examples
	const accordionExamplePage = document.getElementById('accordion-examples');
	if (accordionExamplePage) {
		const accordion1 = document.querySelector('#accEx1') as HTMLElement;
		const accordion2 = document.querySelector('#accEx2') as HTMLElement;
		const accordion3 = document.querySelector('#accEx3') as HTMLElement;

		const accEx1 = USAAccordion.create(accordion1, {
			allowMultipleOpen: false,
			openSections: [1],
		});
		const accEx2 = USAAccordion.create(accordion2, {
			allowMultipleOpen: true,
			openSections: [1, 2],
		});
		const accEx3 = USAAccordion.create(accordion3, {
			allowMultipleOpen: false,
			openSections: [3],
		});

		window.accEx1 = accEx1;
		window.accEx2 = accEx2;
		window.accEx3 = accEx3;
	}
});
