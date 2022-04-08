import { fireEvent, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIMegaMenu } from '../utils/megamenu';
import { getExampleDOM } from './nci-header-dom';
import { responseDataShort } from './nci-mock-data';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(responseDataShort),
	})
) as jest.Mock;

describe('NCI MegaMenu Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Click into menu and validate layout', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);
		const button = PrimaryButton[0];
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		await waitFor(() => {
			const header = document.querySelector('.grid-gap-6');
			expect(header).toBeInTheDocument();
		});
	});
});
