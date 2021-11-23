import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIFooter } from '@nciocpl/ncids-js';
import { getExampleDOM } from './nci-footer-dom';

describe('NCI Footer', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should render footer landmark', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIFooter.create(element, {});

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});
});
