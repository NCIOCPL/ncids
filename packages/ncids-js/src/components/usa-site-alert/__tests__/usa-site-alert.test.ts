import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import { USASiteAlert } from '../usa-site-alert.component';
import { slimSiteAlert } from './slim-site-alert';
import { defaultSiteAlert } from './default-site-alert';

describe('USASiteAlert', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			USASiteAlert.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should render slim site alert', () => {
		const container = slimSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should render standard site alert', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const query = screen.queryByLabelText('Site alert');
		expect(query).toBeInTheDocument();
	});

	it('should create all site alerts', () => {
		const standardAlert = defaultSiteAlert();
		const slimAlert = slimSiteAlert();
		document.body.append(standardAlert);
		document.body.append(slimAlert);

		USASiteAlert.createAll();
		const siteAlert = screen.getAllByRole('region');
		expect(siteAlert).toHaveLength(2);
	});

	it('should not render buttons until init', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const query1 = screen.queryByRole('button');
		expect(query1).not.toBeInTheDocument();

		const element = document.querySelectorAll('.usa-site-alert')[0];
		USASiteAlert.create(<HTMLElement>element, {
			closeable: true,
			closeAriaLabel: 'test',
		});

		const query2 = screen.queryAllByRole('button');
		expect(query2[0]).toBeInTheDocument();
	});

	it('should return existing slim component if called more than once', () => {
		const container = slimSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {});
		expect(component).toBeTruthy();

		const component2 = USASiteAlert.create(<HTMLElement>element, {});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new USASiteAlert(<HTMLElement>element, {});
		expect(component3).toBeTruthy();
	});

	it('should generate an ID for itself', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {});
		const siteId = document.getElementById('site-alert-0');
		expect(component).toBeTruthy();
		expect(siteId).toBeTruthy();
	});

	it('should return existing standard component if called more than once', () => {
		const container = defaultSiteAlert();
		document.body.append(container);

		const element = document.querySelectorAll('.usa-site-alert')[0];
		const component = USASiteAlert.create(<HTMLElement>element, {});
		expect(component).toBeTruthy();

		const component2 = USASiteAlert.create(<HTMLElement>element, {});
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new USASiteAlert(<HTMLElement>element, {});
		expect(component3).toBeTruthy();
	});
});
