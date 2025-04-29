import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { scrollbarWidth } from '../../utils/scrollbar-width';
import longtextDOM from './longtext.dom';

describe('Scrollbar Width Utility', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('Check to see the return value', async () => {
		const bodyElement = document.getElementsByTagName('body')[0] as HTMLElement;
		const container = document.createElement('div');
		container.innerHTML = longtextDOM;
		document.body.append(container);

		const scrollBarTempWidth = new scrollbarWidth().getWidth();
		console.log(scrollBarTempWidth);
		console.log(bodyElement.clientWidth);
		expect(scrollBarTempWidth).toContain('px');
	});
});
