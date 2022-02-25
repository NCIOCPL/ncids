import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { NCISubscribe } from '../nci-subscribe.component';
import { getSubscribeDOM } from './nci-subscribe-dom';

describe('NCI Subscribe Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCISubscribe.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should render component', () => {
		const container = getSubscribeDOM();
		document.body.append(container);

		const options = {
			invalidEmailAlert: 'Enter a valid email address',
			eventListenerLabel: 'test:sign-up',
		};

		const element = document.getElementById('subscribe');
		const component = NCISubscribe.create(<HTMLFormElement>element, options);
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Test subscribe');
		expect(query).toBeInTheDocument();
	});

	it('should return existing component if called more than once', () => {
		const container = getSubscribeDOM();
		document.body.append(container);

		const options = {
			invalidEmailAlert: 'Enter a valid email address',
			eventListenerLabel: 'test:sign-up',
		};

		const element = document.getElementById('subscribe');
		const component = NCISubscribe.create(<HTMLFormElement>element, options);
		expect(component).toBeTruthy();

		const component2 = NCISubscribe.create(<HTMLFormElement>element, options);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCISubscribe(<HTMLFormElement>element, options);
		expect(component3).toBeTruthy();
	});

	it('should not have error messages on init', () => {
		const container = getSubscribeDOM();
		document.body.append(container);

		const options = {
			invalidEmailAlert: 'Enter a valid email address',
			eventListenerLabel: 'test:sign-up',
		};

		const element = document.getElementById('subscribe');
		const component = NCISubscribe.create(<HTMLFormElement>element, options);
		expect(component).toBeTruthy();

		const query = screen.queryByRole('alert');
		expect(query).not.toBeInTheDocument();
	});

	it('should not have error messages with valid email submit', async () => {
		const container = getSubscribeDOM();
		document.body.append(container);

		const options = {
			invalidEmailAlert: 'Enter a valid email address',
			eventListenerLabel: 'test:sign-up',
		};

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		window.HTMLFormElement.prototype.submit = () => {};

		const element = document.getElementById('subscribe');
		const component = NCISubscribe.create(<HTMLFormElement>element, options);

		expect(component).toBeTruthy();

		const input = screen.getByLabelText('Enter your email address');
		input.setAttribute('value', 'test@test.com');

		const button = screen.getByRole('button', { name: /Sign up/i });
		fireEvent.submit(button);

		await waitFor(() => {
			screen.debug();
			const query = screen.queryByRole('alert');
			expect(query).not.toBeInTheDocument();
		});
	});

	it('should have error messages with invalid email submit', async () => {
		const container = getSubscribeDOM();
		document.body.append(container);
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		window.HTMLFormElement.prototype.submit = () => {};

		const options = {
			invalidEmailAlert: 'Enter a valid email address',
			eventListenerLabel: 'test:sign-up',
		};

		const element = document.getElementById('subscribe');
		const component = NCISubscribe.create(<HTMLFormElement>element, options);

		expect(component).toBeTruthy();

		const input = screen.getByLabelText('Enter your email address');
		input.setAttribute('value', 'test');

		const button = screen.getByRole('button', { name: /Sign up/i });
		fireEvent.click(button);

		await waitFor(() => {
			const query = screen.queryByRole('alert');
			expect(query).toBeInTheDocument();
		});
	});
});
