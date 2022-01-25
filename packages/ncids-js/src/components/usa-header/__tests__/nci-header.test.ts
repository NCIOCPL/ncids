import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIExtendedHeaderWithMegaMenu } from '../nci-header.component';
import { getExampleDOM } from './nci-header-dom';

describe('NCI Extended Header With MegaMenu', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should render', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element);
		expect(header).toBeTruthy();
		const query = screen.queryByRole('search');
		expect(query).toBeInTheDocument();
	});

	it('should unregister', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element);

		expect(header).toBeTruthy();
		header.unregister();
	});

	it('if component already exists', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element);
		expect(header).toBeTruthy();

		const header2 = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element);
		expect(header2).toBeTruthy();
		header.unregister();
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIExtendedHeaderWithMegaMenu.create('lemur');
		}).toThrow('Element is not an HTMLElement');
	});
});
