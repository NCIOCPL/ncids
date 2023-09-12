import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import '../../auto-init';
import { NCISiteAlert } from '../../nci-site-alert.component';
import { getStandardAlert } from '../nci-standard-dom';

describe('NCI Site Alert - Auto Init', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should auto initialize collapsible site alert', async () => {
		const createSpy = jest.spyOn(NCISiteAlert, 'create');

		const container = getStandardAlert();
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should auto initialize closable site alert', async () => {
		const createSpy = jest.spyOn(NCISiteAlert, 'create');

		const container = getStandardAlert();
		document.body.append(container);

		const siteAlert = screen.queryByLabelText('Site alert');
		expect(siteAlert).toBeInTheDocument();
		if (siteAlert) siteAlert.dataset.siteAlertClosable = 'true';

		const domContentLoadedEvent = new Event('DOMContentLoaded');
		document.dispatchEvent(domContentLoadedEvent);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('does not bork when no site alert', async () => {
		const createSpy = jest.spyOn(NCISiteAlert, 'create');

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});
});
