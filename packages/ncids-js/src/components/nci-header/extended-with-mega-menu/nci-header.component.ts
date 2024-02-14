import { DefaultMegaMenuSource } from '../mega-menu/default-mega-menu-source';
import { DefaultMobileMenuSource } from '../mobile-menu/default-mobile-menu-source';
import { NCIExtendedHeaderWithMegaMenuOptions } from './nci-header-options';

import { MegaMenuNav } from '../utils/mega-menu/mega-menu-nav';
import { MobileMenu } from '../utils/mobile-menu/mobile-menu';
import { Search } from '../utils/search';

/**
 * The NCIExtendedHeaderWithMegaMenu component is used to initialize the dynamic
 * features of the `nci-header--extended` variant of the `nci-header` component.
 *
 * ## Default Options
 * There are no default options for the NCIExtendedHeaderWithMegaMenu.
 *
 * ## Initialization Examples
 *
 * The easiest way to use the header is to let the NCIDS automatically initialize
 * your Header HTML.
 *
 * Just add the following to the top of your main Javascript file and it will
 * add code to your javascript that initializes the NCIExtendedHeaderWithMegaMenu
 * with default options.
 * ```js
 * import '@nciocpl/ncids-js/nci-header/auto-init';
 * ```
 *
 * If you need the ability to customize the header's mobile nav, setup mega menus, or
 * attach event listeners for analytics then you can manually initialize the header features.
 *
 * In order to keep page sizes low, the contents of the Mega and Mobile menus are dynamically
 * fetched by the header. The NCIExtendedHeaderWithMegaMenu component is built in
 * an extensible way that allows for integration with multiple systems. The system provides
 * this extensibility using the adapter pattern.
 *
 * The NCIDS ships with a default mobile menu adapter,
 * {@link nci-header~DefaultMobileMenuSource | DefaultMobileMenuSource}, that
 * uses the primary navigation items as the source for the mobile menu. The default mega menu
 * adapter, {@link nci-header~DefaultMegaMenuSource | DefaultMegaMenuSource},
 * is only provided as a placeholder as it is required for the construction of a
 * NCIExtendedHeaderWithMegaMenu component.
 *
 * If you would like to implement your own adapters please see
 * {@link nci-header~MegaMenuAdapter | MegaMenuAdapter }
 * and {@link nci-header~MobileMenuAdapter | MobileMenuAdapter } for more information on
 * creating your own adapters.
 *
 * @example
 * You can initialize the NCIExtendedHeaderWithMegaMenu component with the default adapters.
 * This may be used when you would like to use the default adapters, but attach event listeners
 * for analytics tracking.
 *
 * ```js
 * import { DefaultMobileMenuSource } from '@nciocpl/ncids-js/nci-header';
 * import { DefaultMegaMenuSource } from '@nciocpl/ncids-js/nci-header';
 * import {NCIExtendedHeaderWithMegaMenu} from '@nciocpl/ncids-js/nci-header';
 *
 * // Find the header HTML element.
 * const header = document.querySelector('.nci-header.nci-header--extended');
 *
 * // Initialize the component.
 * NCIExtendedHeaderWithMegaMenu.create(header, {
 *   megaMenuSource: new DefaultMegaMenuSource(),
 *   mobileMenuSource: new DefaultMobileMenuSource(),
 * });
 * ```
 *
 * ## HTML Events
 *
 * The NCIExtendedHeaderWithMegaMenu component will dispatch the following
 * {@link https://developer.mozilla.org/docs/Web/API/CustomEvent | CustomEvent} types
 * that can be used to track analytics or other needs when a visitor interacts with
 * the header.
 *
 * ### Mega Menu Interaction Events
 * * `nci-header:mega-menu:collapse` - Dispatched with {@link nci-header~MegaMenuDisplayEventDetails | MegaMenuDisplayEventDetails} details when the menu is closed via Escape key or clicking outside the menu.
 * * `nci-header:mega-menu:expand` - Dispatched with {@link nci-header~MegaMenuDisplayEventDetails | MegaMenuDisplayEventDetails} details when an item in the navigation is selected and the menu for that item has been expanded.
 * * `nci-header:primary-nav:linkclick` - Dispatched with {@link nci-header~PrimaryNavClickEventDetails | PrimaryNavClickEventDetails} details when an item in the navigation is selected and there is no mega menu associated with that navigation item.
 *
 * ### Mobile Menu Interaction Events
 * * `nci-header:mobile-menu:open` - Dispatched with {@link nci-header~MobileMenuOpenEventDetails | MobileMenuOpenEventDetails} details when the mobile "Menu" button is pressed.
 * * `nci-header:mobile-menu:close` - Dispatched {@link nci-header~MobileMenuCloseEventDetails | MobileMenuCloseEventDetails} details when the menu is closed via Escape key, close button, or clicking outside the modal.
 * * `nci-header:mobile-menu:linkclick` - Dispatched {@link nci-header~MobileMenuLinkClickEventDetails | MobileMenuLinkClickEventDetails} details when the mobile menu's "Back" button, menu button, or menu link is selected.
 *
 * @example
 * ```js
 * import { DefaultMobileMenuSource } from '@nciocpl/ncids-js/nci-header';
 * import { DefaultMegaMenuSource } from '@nciocpl/ncids-js/nci-header';
 * import {NCIExtendedHeaderWithMegaMenu} from '@nciocpl/ncids-js/nci-header';
 *
 * // Find the header HTML element.
 * const header = document.querySelector('.nci-header.nci-header--extended');
 *
 * // Initialize the component.
 * NCIExtendedHeaderWithMegaMenu.create(header, {
 *   megaMenuSource: new DefaultMobileMenuSource(),
 *   mobileMenuSource: new DefaultMobileMenuSource(),
 * });
 *
 * // Attach an event handler to the header element to listen for custom events.
 * header.addEventListener('nci-header:mobile-menu:open', (event) => {
 *    // Add your analytics code here.
 *    console.log('Event occurred.');
 * });
 * ```
 */
export class NCIExtendedHeaderWithMegaMenu {
	/** The component that contains header section. */
	protected element: HTMLElement;
	/** The options for Header and MegaMenu. */
	protected options: NCIExtendedHeaderWithMegaMenuOptions;

	/** Primary navigation mega menu. */
	private megaMenuNav: MegaMenuNav;
	/** Primary navigation mega menu. */
	public mobileMenu: MobileMenu;
	/** Search Form component. */
	private searchForm?: Search;
	/** Search Form Div.
	 * searchDiv! because we will always have it as an HTMLElement or will exit out if undefined
	 */
	public searchDiv!: HTMLElement;

	/** Map object of the component. */
	private static _components: Map<
		HTMLElement,
		NCIExtendedHeaderWithMegaMenu
	> = new Map<HTMLElement, NCIExtendedHeaderWithMegaMenu>();

	protected searchInputFocusHandler: EventListener = (event: Event) =>
		this.handleSearchFocus(event);
	protected searchInputBlurHandler: EventListener = (event: Event) =>
		this.handleSearchBlur(event);

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param element Element to initialize.
	 * @param options Options for component being created.
	 * @protected
	 */
	protected constructor(
		element: HTMLElement,
		options: NCIExtendedHeaderWithMegaMenuOptions
	) {
		this.element = element;
		this.options = options;
		this.megaMenuNav = this.wireUpMegaMenu();
		this.mobileMenu = this.wireUpMobileMenu();

		const searchFormEl = this.element.querySelector('form.nci-header-search');
		if (searchFormEl) {
			this.searchForm = new Search(
				searchFormEl as HTMLFormElement,
				this.searchInputFocusHandler,
				this.searchInputBlurHandler
			);
		}
		const valid = Search.isSearchFormValid();
		if (valid) {
			this.searchDiv = this.element.querySelector(
				'.nci-header-nav__secondary'
			) as HTMLElement;
		}

		const existingComponent = NCIExtendedHeaderWithMegaMenu._components.get(
			this.element
		);

		if (existingComponent) {
			existingComponent.unregister();
		}

		NCIExtendedHeaderWithMegaMenu._components.set(this.element, this);
	}

	/**
	 * Instantiates the dynamic functionality for the NCI Extended Header with Mega Menu.
	 *
	 * @param element Element to initialize.
	 * @param options Options for component being created.
	 */
	public static create(
		element: HTMLElement,
		options: NCIExtendedHeaderWithMegaMenuOptions
	): NCIExtendedHeaderWithMegaMenu {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element, options);
	}

	/**
	 * Auto initializes header component with default sources.
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			const headers = Array.from(document.getElementsByClassName('nci-header'));
			headers.forEach((header) => {
				this.create(header as HTMLElement, {
					megaMenuSource: new DefaultMegaMenuSource(),
					mobileMenuSource: new DefaultMobileMenuSource(),
				});
			});
		});
	}

	/**
	 * Resets component to a clean state.
	 */
	public unregister(): void {
		// Remove search
		if (this.searchForm) {
			this.searchForm.unregister();
		}

		// Remove mega menu navigation
		this.megaMenuNav.unregister();
		// Remove mobile menu navigation
		this.mobileMenu.unregister();

		// Delete component
		NCIExtendedHeaderWithMegaMenu._components.delete(this.element);
	}

	/**
	 * Sets up component by initializing.
	 */
	private wireUpMegaMenu(): MegaMenuNav {
		const navigation = this.element.querySelector('.nci-header-nav__primary');
		return new MegaMenuNav(
			<HTMLElement>navigation,
			this.options.megaMenuSource
		);
	}

	/**
	 * Sets up component by initializing.
	 */
	private wireUpMobileMenu(): MobileMenu {
		const navigation = this.element;
		return new MobileMenu(
			<HTMLElement>navigation,
			this.options.mobileMenuSource
		);
	}

	/**
	 * Click handler for activating the overlays
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 */
	private handleSearchFocus(event: Event): void {
		event.preventDefault();
		this.searchDiv.classList.add('search-focused');
	}

	/**
	 * Blur handler for removing input focus classes
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 */
	private handleSearchBlur(event: Event): void {
		event.preventDefault();
		setTimeout(() => {
			this.searchDiv.classList.remove('search-focused');
		}, 250);
	}
}
