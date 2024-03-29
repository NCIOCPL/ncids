import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';

import { headerWithDataMenuId } from '../nci-header-id-dom';
import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';
import { MockMobileMenuAdapter } from '../mobile-menu/mobile-menu-adapter.mock';
import { DefaultMegaMenuSource } from '../../mega-menu';

describe('NCI Extended Header - Mega Menu Default Source', () => {
	beforeEach(() => {
		jest.resetAllMocks();
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: query === '(min-width: 1024px)',
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should load content from href on click', async () => {
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new DefaultMegaMenuSource(),
			mobileMenuSource: new MockMobileMenuAdapter(false),
		});

		const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {
			return null;
		});

		const buttons = await screen.findAllByRole('button', { expanded: false });
		fireEvent.click(buttons[0]);
		const query = screen.queryByText('hello world');
		expect(query).not.toBeInTheDocument();
		expect(consoleWarn).toHaveBeenCalledWith(
			'Default Mega Menu Adapter does not support setting data-menu-id properties. Cannot fetch 1'
		);
	});
});
