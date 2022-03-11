import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { NCISiteAlert } from '../nci-site-alert.component';
import { SiteAlertCollapse } from '../utils/site-alert-collapse.component';
import { getStandardAlert } from './nci-standard-dom';

describe('NCISiteAlert SiteAlertCollapse', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should show content on unregister call', async () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element);
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
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');

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

		const component = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});

		expect(component).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(2);

		component.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(2);
	});

	it('should expand content when toggle button is clicked', async () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element);
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
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
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
});
