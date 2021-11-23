import { fireEvent, waitFor, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIFooter } from '@nciocpl/ncids-js';
import { getExampleDOM } from './nci-footer-dom';

describe('NCI Footer sign up', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should not have error messages on init', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(element, {});
		expect(footer).toBeTruthy();

		const query = screen.queryByRole('alert');
		expect(query).not.toBeInTheDocument();
	});

	it('should not have error messages with valid email submit', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		window.HTMLFormElement.prototype.submit = () => {};

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(element, {});

		expect(footer).toBeTruthy();

		const input = screen.getByLabelText('Enter your email address');
		input.setAttribute('value', 'test@test.com');

		const button = screen.getByRole('button', { name: /Sign up/i });
		fireEvent.submit(button);

		await waitFor(() => {
			const query = screen.queryByRole('alert');
			expect(query).not.toBeInTheDocument();
		});
	});

	it('should have error messages with invalid email submit', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		window.HTMLFormElement.prototype.submit = () => {};

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(element, {});

		expect(footer).toBeTruthy();

		const input = screen.getByLabelText('Enter your email address');
		input.setAttribute('value', 'test');

		const button = screen.getByRole('button', { name: /Sign up/i });
		fireEvent.submit(button);

		await waitFor(() => {
			const query = screen.queryByRole('alert');
			expect(query).toBeInTheDocument();
		});
	});
});
