import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, screen } from '@testing-library/dom';

import { NCIExtendedHeaderWithMegaMenu } from '../../extended-with-mega-menu';
import { MockMegaMenuAdapter } from '../mega-menu/mega-menu-adapter.mock';
import { DefaultMobileMenuSource } from '../../mobile-menu';
import { headerWithDataMenuId } from '../nci-header-id-dom';

describe('NCI Extended Header - Mobile Menu Default Source', () => {
	beforeEach(() => {
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
		jest.restoreAllMocks();
	});

	it('should render primary items from primary nav', async () => {
		global.innerWidth = 600;
		const container = headerWithDataMenuId();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdapter(true),
			mobileMenuSource: new DefaultMobileMenuSource(),
		});

		const button = await screen.findByText('Menu');
		expect(button).toBeVisible();
		fireEvent.click(button);

		const query1 = await screen.findByText('First section');
		expect(query1).toBeInTheDocument();
	});
});
