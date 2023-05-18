import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { fireEvent, waitFor, screen } from '@testing-library/dom';

// import { Search } from '../../utils/search';
import { headerWithHref } from '../nci-header-dom';
import { headerWithoutForm } from '../nci-header-dom-missing-form';
import { NCIExtendedHeaderWithMegaMenu } from '../../nci-header.component';
import { MockMegaMenuAdaptor } from '../mega-menu/mega-menu-adaptor.mock';
import { MockMobileMenuAdaptor } from '../mobile-menu/mobile-menu-adaptor.mock';

describe('NCI Search', () => {
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
	});

	it('should render', () => {
		const container = headerWithHref();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});
		expect(header).toBeTruthy();
		const query = screen.queryByRole('search');

		expect(query).toBeInTheDocument();
		header.unregister();
	});

	it('should apply the appropriate classes when searchbar focus changes', async () => {
		const container = headerWithHref();
		document.body.append(container);
		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});
		const searchContainer = document.querySelector(
			'.nci-header-nav__secondary'
		);
		const inputArea = <HTMLInputElement>(
			document.getElementById('nci-header-search__field')
		);
		await fireEvent.focus(inputArea);
		await waitFor(() => {
			expect(searchContainer).toHaveClass('search-focused');
		});
		await fireEvent.focusOut(inputArea);
		await waitFor(() => {
			expect(searchContainer).not.toHaveClass('search-focused');
		});
		header.unregister();
	});

	it('should not render when no search form', () => {
		const container = headerWithoutForm();
		document.body.append(container);

		const element = document.getElementById('nci-header');
		const header = NCIExtendedHeaderWithMegaMenu.create(<HTMLElement>element, {
			megaMenuSource: new MockMegaMenuAdaptor(true),
			mobileMenuSource: new MockMobileMenuAdaptor(true),
		});
		// expect(header.searchForm).toBeNull();
		const query = screen.queryByLabelText('Primary navigation');
		expect(query).toBeInTheDocument();
		header.unregister();
	});
});
