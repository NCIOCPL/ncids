import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { USASiteAlert } from '../usa-site-alert.component';
import { slimSiteAlert } from './slim-site-alert';
import { defaultSiteAlert } from './default-site-alert';

describe('USASiteAlert SiteAlertCloseButton', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		document.cookie = `USASiteAlertsite-alert=; Path=/; Secure`;
		jest.restoreAllMocks();
	});

	it('should render slim site alert with close', () => {
		const container = slimSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];

		const options = {
			closeable: true,
			closeAriaLabel: 'test',
		};

		const component = USASiteAlert.create(<HTMLElement>element, options);

		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should render standard site alert with close', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should hide site alert when close button is clicked', async () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const buttons = document.getElementsByClassName(
			'usa-alert__nci-button--close'
		);

		const query = screen.queryByRole('region');
		expect(query).toBeInTheDocument();

		fireEvent.click(buttons[0]);
		await waitFor(() => {
			const query = screen.queryByRole('region');
			expect(query).not.toBeInTheDocument();
		});
	});

	it('should return existing closeable slim component if called more than once', () => {
		const container = slimSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const component2 = USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new USASiteAlert(<HTMLElement>element, {
			closeable: true,
		});
		expect(component3).toBeTruthy();
	});

	it('should return existing closeable standard component if called more than once', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const options = { closeable: true };
		const component2 = USASiteAlert.create(<HTMLElement>element, options);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new USASiteAlert(<HTMLElement>element, {
			closeable: true,
		});
		expect(component3).toBeTruthy();
	});

	it('should remove on close event handlers on unregister call', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];

		// This is kinda a dirty test cause I know the underlying logic,
		// but I can't think of anything better to ensure we clear out
		// all the event handlers on unregister.
		const removeEventListener = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);
		const addEventListener = jest.spyOn(
			EventTarget.prototype,
			'addEventListener'
		);

		const component = USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});

		expect(component).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(2);

		component.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(2);
	});

	it('should only close site alert that has been dismissed', async () => {
		const slimAlert = slimSiteAlert();
		const standardAlert = defaultSiteAlert();
		slimAlert.id = 'slimAlert';
		standardAlert.id = 'standardAlert';

		document.body.append(slimAlert, standardAlert);

		const element = document.getElementById('slimAlert');
		const element2 = document.getElementById('standardAlert');

		USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		USASiteAlert.create(<HTMLElement>element2, {
			closeable: true,
		});

		const buttons = document.getElementsByClassName(
			'usa-alert__nci-button--close'
		);

		fireEvent.click(buttons[0]);
		await waitFor(() => {
			const query = screen.queryAllByRole('region', { hidden: true });
			expect(query[0]).not.toBeVisible();
			expect(query[1]).toBeVisible();
		});
	});

	it('should close multiple site alerts', async () => {
		const slimAlert = slimSiteAlert();
		const standardAlert = defaultSiteAlert();
		slimAlert.id = 'slimAlert';
		standardAlert.id = 'standardAlert';

		document.body.append(slimAlert, standardAlert);

		const element = document.getElementById('slimAlert');
		const element2 = document.getElementById('standardAlert');

		USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		USASiteAlert.create(<HTMLElement>element2, {
			closeable: true,
		});

		const buttons = document.getElementsByClassName(
			'usa-alert__nci-button--close'
		);

		Array.from(buttons).forEach((button) => {
			fireEvent.click(button);
		});

		await waitFor(() => {
			const query = screen.queryByRole('region');
			expect(query).not.toBeInTheDocument();
		});
	});
});
