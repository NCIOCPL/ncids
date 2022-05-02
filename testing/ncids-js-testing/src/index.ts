import './index.scss';

import {
	NCISiteAlert,
	NCIExtendedHeaderWithMegaMenu,
	NCIBigFooter,
} from '@nciocpl/ncids-js';

window.addEventListener('DOMContentLoaded', () => {
	console.log('Initializing');
	const footerInstance = document.getElementById('nci-footer');
	if (footerInstance) {
		NCIBigFooter.create(footerInstance);
	}

	const headerInstance = document.getElementById('nci-header');
	if (headerInstance) {
		NCIExtendedHeaderWithMegaMenu.create(headerInstance, {});
	}

	const covidBanner = document.getElementById('site-alert--nci-info');
	if (covidBanner) {
		NCISiteAlert.create(covidBanner, {
			closeable: true,
		});
	}
});
