import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { USASiteAlert } from '../usa-site-alert.component';
import { SiteAlertCollapse } from '../utils/site-alert-collapse.component';
import { defaultSiteAlert } from './default-site-alert';

describe('USASiteAlert SiteAlertCollapse', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		document.cookie = 'USASiteAlertsite-alert-0; Path=/;';
		jest.restoreAllMocks();
	});

	it('should make an id for the content area', async () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const content = document.getElementById(`${element.id}-content`);
		expect(content).toBeTruthy();
	});

	it('should show content on unregister call', async () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const buttons = document.getElementsByClassName(
			'usa-alert__nci-button--toggle'
		);

		const query = screen.queryByRole('list');
		expect(query).not.toBeInTheDocument();

		fireEvent.click(buttons[0]);
		await waitFor(() => {
			component.unregister();
			const query = screen.queryByRole('list');
			expect(query).toBeInTheDocument();
		});
	});

	it('should remove on collapse event handlers on unregister call', () => {
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

	it('should expand content when toggle button is clicked', async () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const buttons = document.getElementsByClassName(
			'usa-alert__nci-button--toggle'
		);

		await waitFor(() => {
			const list = screen.queryByRole('list');
			expect(list).not.toBeInTheDocument();
		});

		fireEvent.click(buttons[0]);
		await waitFor(() => {
			const list = screen.queryByRole('list');
			expect(list).toBeInTheDocument();
		});
	});

	it('should return existing collapse component', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const options = {
			collapseAriaLabel: 'test',
			collapseButtonClass: 'test',
			collapseEventListenerLabel: 'test',
		};

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new SiteAlertCollapse(<HTMLElement>element, options);
		expect(component3).toBeTruthy();
	});

	it('should collapse if cookie exists', () => {
		const container = defaultSiteAlert();
		document.body.append(container);
		document.cookie = `USASiteAlertsite-alert-0=collapse; Path=/; Secure`;

		const element = document.querySelectorAll('.usa-site-alert')[0];
		USASiteAlert.create(<HTMLElement>element);

		const query = screen.queryByRole('list');
		expect(query).not.toBeInTheDocument();
	});

	it('should expand if cookie exists', () => {
		const container = defaultSiteAlert();
		document.body.append(container);
		document.cookie = `USASiteAlertsite-alert-0=expand; Path=/;`;

		const element = document.querySelectorAll('.usa-site-alert')[0];
		USASiteAlert.create(<HTMLElement>element);

		const query = screen.queryByRole('list');
		expect(query).toBeInTheDocument();
	});

	it('should do nothing if cookie doesnt exist', () => {
		const container = defaultSiteAlert();
		document.body.append(container);
		document.cookie = `USASiteAlertsite-alert-0=anythingelse; Path=/;`;

		const element = document.querySelectorAll('.usa-site-alert')[0];
		USASiteAlert.create(<HTMLElement>element);

		const query = screen.queryByRole('list');
		expect(query).toBeInTheDocument();
	});
});
