import './index.scss';

import {
	NCISiteAlert,
	NCIExtendedHeaderWithMegaMenu,
	NCIBigFooter,
} from '@nciocpl/ncids-js';

import { MockMegaMenuAdaptor } from './MockMegaMenuAdaptor';
import { MockMobileMenuAdaptor } from './MockMobileMenuAdaptor';

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
	}

	const siteAlerts = document.querySelectorAll('.usa-site-alert');
	siteAlerts.forEach((element) => {
		const alert = element as HTMLElement;
		const closeable = alert.dataset.siteAlertClosable?.toLowerCase() === 'true';
		NCISiteAlert.create(alert, {
			closeable: closeable,
		});
	});
});
