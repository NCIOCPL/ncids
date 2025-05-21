import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { scrollbarWidth } from '../../utils/scrollbar-width';

describe('Scrollbar Width Utility', () => {
	let appendChildMock: jest.Mock;
	let removeChildMock: jest.Mock;
	beforeAll(() => {
		appendChildMock = jest.fn();
		removeChildMock = jest.fn();

		// Assign mock implementations
		Object.defineProperty(document.body, 'appendChild', {
			value: appendChildMock,
		});
		Object.defineProperty(document.body, 'removeChild', {
			value: removeChildMock,
		});
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.clearAllMocks();
	});

	it('Check to see the return value', async () => {
		const scrollbar = new scrollbarWidth();
		const width = scrollbar.getWidth();

		expect(width).toMatch(/^\d+px/);
	});
});
