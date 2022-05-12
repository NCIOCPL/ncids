import './index.scss';

import {
	NCISiteAlert,
	NCIExtendedHeaderWithMegaMenu,
	NCIBigFooter,
} from '@nciocpl/ncids-js';

import { MockMegaMenuAdaptor } from './MockMegaMenuAdaptor';
import { MockMobileMenuAdaptor } from './MockMobileMenuAdaptor';

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

	const covidBanner = document.getElementById('site-alert--nci-info');
	if (covidBanner) {
		NCISiteAlert.create(covidBanner, {
			closeable: true,
		});
	}
});
