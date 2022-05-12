import { NCIExtendedHeaderWithMegaMenuOptions } from './nci-header-options';

import { MegaMenuNav } from './utils/mega-menu/mega-menu-nav';
import { MobileMenu } from './utils/mobile-menu/mobile-menu';
import { Search } from './utils/search';

/**
 * NCI Extended Header With Mega Menu
 *
 *
 * Initialize the Extended Header With Mega Menu component:
 * ```
 * NCIExtendedHeaderWithMegaMenu.element.create(HTMLElement, {
 *   megaMenuSource: new YourMegaMenuAdaptor(true/false),
 *   mobileMenuSource: new YourMobileMenuAdaptor(),
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
	private mobileMenu: MobileMenu;
	/** Search component. */
	private search: Search;

	/** Map object of the component. */
	private static _components: Map<
		HTMLElement,
		NCIExtendedHeaderWithMegaMenu
	> = new Map<HTMLElement, NCIExtendedHeaderWithMegaMenu>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIExtendedHeaderWithMegaMenuOptions} options Component being created.
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

		this.search = new Search(<HTMLElement>this.element);

		const existingComponent = NCIExtendedHeaderWithMegaMenu._components.get(
			this.element
		);

		if (existingComponent) {
			existingComponent.unregister();
		}

		NCIExtendedHeaderWithMegaMenu._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIExtendedHeaderWithMegaMenuOptions} options Optional settings for component generation.
	 * @public
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
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Remove search
		this.search.unregister();

		// Remove mega menu navigation
		this.megaMenuNav.unregister();
		// Remove mobile menu navigation
		this.mobileMenu.unregister();

		// Delete component
		NCIExtendedHeaderWithMegaMenu._components.delete(this.element);
	}

	/**
	 * Sets up component by initializing.
	 * @private
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
	 * @private
	 */
	private wireUpMobileMenu(): MobileMenu {
		const navigation = this.element;
		return new MobileMenu(
			<HTMLElement>navigation,
			this.options.mobileMenuSource
		);
	}
}
