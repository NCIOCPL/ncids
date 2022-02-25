import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIBigFooter } from '../nci-big-footer.component';
import { getExampleDOM } from './nci-footer-dom';
import { getExampleDOMWithoutSignup } from './nci-footer-dom-without-signup';

describe('NCI Footer unregister', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should remove event handlers on unregister call', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

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

		const footer = NCIBigFooter.create(<HTMLElement>element, {});
		expect(footer).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(4);

		footer.unregister();
		expect(removeEventListener.mock.calls).toHaveLength(4);
	});

	it('should call unregister on new instantiation', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');

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

		const footer = NCIBigFooter.create(<HTMLElement>element, {});
		expect(footer).toBeTruthy();
		expect(addEventListener.mock.calls).toHaveLength(4);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const footer2 = new NCIBigFooter(element);
		expect(footer2).toBeTruthy();
		expect(removeEventListener.mock.calls).toHaveLength(4);
		expect(addEventListener.mock.calls).toHaveLength(8);
	});

	it('should return existing component if called more than once', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const component = NCIBigFooter.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const component2 = NCIBigFooter.create(<HTMLElement>element);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCIBigFooter(<HTMLElement>element);
		expect(component3).toBeTruthy();
	});

	it('should return existing component without form if called more than once', () => {
		const container = getExampleDOMWithoutSignup();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const component = NCIBigFooter.create(<HTMLElement>element);
		expect(component).toBeTruthy();

		const component2 = NCIBigFooter.create(<HTMLElement>element);
		expect(component2).toBeTruthy();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const component3 = new NCIBigFooter(<HTMLElement>element);
		expect(component3).toBeTruthy();
	});
});
