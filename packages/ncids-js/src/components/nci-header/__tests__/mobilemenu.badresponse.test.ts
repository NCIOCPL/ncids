//import { waitFor} from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIMobileMenu } from '../utils/mobilemenu';
import { getExampleDOM } from './nci-header-dom';

global.fetch = jest.fn(() => Promise.resolve({ error: 'error' })) as jest.Mock;
console.error = jest.fn();

describe('NCI MobileMenu Component', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Check bad response', async () => {
		const container = getExampleDOM();
		document.body.append(container);
		const options = { useUrlForNavigationId: true };
		const element = document.getElementById('nci-header');
		const navigation = new NCIMobileMenu(<HTMLElement>element, options);
		expect(navigation).toBeTruthy();
	});
});
