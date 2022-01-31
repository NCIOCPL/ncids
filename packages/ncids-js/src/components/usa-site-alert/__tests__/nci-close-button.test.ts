import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { NCISiteAlert } from '../nci-site-alert.component';
import { NCICloseButton } from '../utils/nci-close-button.component';
import { getSlimAlert } from './nci-slim-dom';
import { getStandardAlert } from './nci-standard-dom';

describe('NCISiteAlert NCICloseButton', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should throw an error if create called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCICloseButton.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should render slim site alert with close', () => {
		const container = getSlimAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should render standard site alert with close', () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should hide site alert when close button is clicked', async () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {
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

	it('should return existing closeable component', () => {
		const container = getSlimAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const options = {
			ariaLabel: 'test',
			buttonClass: 'test',
			cookie: { path: '/' },
			eventListenerLabel: 'test',
		};
		const component = NCICloseButton.create(<HTMLElement>element, options);
		expect(component).toBeTruthy();

		const component2 = NCICloseButton.create(<HTMLElement>element, options);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCICloseButton(<HTMLElement>element, options);
		expect(component3).toBeTruthy();
	});

	it('should return existing closeable slim component if called more than once', () => {
		const container = getSlimAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const component2 = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCISiteAlert(<HTMLElement>element, {
			closeable: true,
		});
		expect(component3).toBeTruthy();
	});

	it('should return existing closeable standard component if called more than once', () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component).toBeTruthy();

		const component2 = NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
		});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCISiteAlert(<HTMLElement>element, {
			closeable: true,
		});
		expect(component3).toBeTruthy();
	});

	it('should show content on unregister call', async () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {
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
			component.unregister();
			const query = screen.queryByRole('region');
			expect(query).toBeInTheDocument();
		});
	});

	it('should remove on close event handlers on unregister call', () => {
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
});
