//import { waitFor} from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIMegaMenu } from '../utils/megamenu';
import { getExampleDOM } from './nci-header-dom';

global.fetch = jest.fn(() => Promise.resolve({ error: 'error' })) as jest.Mock;
console.error = jest.fn();

describe('NCI MegaMenu Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Check bad response', async () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.querySelector('.nci-header-nav__primary');
		new NCIMegaMenu(<HTMLElement>element, {});

		const PrimaryButton = document.querySelectorAll(
			'.nci-header-nav__primary-button'
		);
		expect(PrimaryButton[0]).toBeInTheDocument();
	});
});
