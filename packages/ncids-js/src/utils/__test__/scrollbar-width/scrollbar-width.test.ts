import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { scrollbarWidth } from '../../scrollbar-width';

describe('Scrollbar Width Utility', () => {
	let originalOffsetWidth: any;

	beforeEach(() => {
		originalOffsetWidth = Object.getOwnPropertyDescriptor(
			HTMLElement.prototype,
			'offsetWidth'
		);

		Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
			configurable: true,
			get() {
				if (this.className === 'outer') {
					return 100;
				}
				if (this.parentElement && this.parentElement.className === 'outer') {
					return 80;
				}
				return 100;
			},
		});
	});

	afterEach(() => {
		Object.defineProperty(
			HTMLElement.prototype,
			'offsetWidth',
			originalOffsetWidth
		);
	});

	it('returns correct scrollbar width', () => {
		const instance = new scrollbarWidth();
		instance['outer'].className = 'outer';

		const width = instance.getWidth();
		expect(width).toBe('20px');

		expect(document.body.childNodes.length).toBe(0);
	});
});
