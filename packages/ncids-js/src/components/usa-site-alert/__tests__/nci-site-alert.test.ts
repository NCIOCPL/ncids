import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import { NCISiteAlert } from '../nci-site-alert.component';
import { getSlimAlert } from './nci-slim-dom';
import { getStandardAlert } from './nci-standard-dom';

describe('NCISiteAlert', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCISiteAlert.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should render slim site alert', () => {
		const container = getSlimAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should render standard site alert', () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should not render buttons until init', () => {
		const container = getStandardAlert();
		document.body.append(container);

		const query1 = screen.queryByRole('button');
		expect(query1).not.toBeInTheDocument();

		const element = document.getElementById('site-alert');
		NCISiteAlert.create(<HTMLElement>element, {
			closeable: true,
			closeAriaLabel: 'test',
		});

		const query2 = screen.queryAllByRole('button');
		expect(query2[0]).toBeInTheDocument();
	});

	it('should return existing slim component if called more than once', () => {
		const container = getSlimAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {});
		expect(component).toBeTruthy();

		const component2 = NCISiteAlert.create(<HTMLElement>element, {});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCISiteAlert(<HTMLElement>element, {});
		expect(component3).toBeTruthy();
	});

	it('should return existing standard component if called more than once', () => {
		const container = getStandardAlert();
		document.body.append(container);

		const element = document.getElementById('site-alert');
		const component = NCISiteAlert.create(<HTMLElement>element, {});
		expect(component).toBeTruthy();

		const component2 = NCISiteAlert.create(<HTMLElement>element, {});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCISiteAlert(<HTMLElement>element, {});
		expect(component3).toBeTruthy();
	});
});
