import { NCIExtendedHeaderWithMegaMenuOptions } from './nci-header-options';
import { NCIMegaMenu } from './utils/megamenu';
import { NCIMobileMenu } from './utils/mobilemenu';
/**
 * NCI Extended Header With Mega Menu
 *
 *
 * Initialize the Extended Header With Mega Menu component:
 * ```
 * NCIExtendedHeaderWithMegaMenu.element.create(HTMLElement);
 * ```
 */
export class NCIExtendedHeaderWithMegaMenu {
	/** The component that contains header section. */
	protected element: HTMLElement;
	/** The options for Header and MegaMenu */
	protected options: NCIExtendedHeaderWithMegaMenuOptions;
	/** MegaMenus */
	private megaMenu: NCIMegaMenu;
	/** Mobile Menu */
	private mobileMenu: NCIMobileMenu;
	/** Default settings for the component. */
	private static defaultOptions: NCIExtendedHeaderWithMegaMenuOptions = {
		useUrlForNavigationId: true,
	};
	/** Map object of the component. */
	private static _components: Map<
		HTMLElement,
		NCIExtendedHeaderWithMegaMenu
	> = new Map<HTMLElement, NCIExtendedHeaderWithMegaMenu>();
	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCIExtendedHeaderWithMegaMenuOptions>} options Component being created.
	 * @protected
	 */
	protected constructor(
		element: HTMLElement,
		options: Partial<NCIExtendedHeaderWithMegaMenuOptions>
	) {
		this.element = element;
		this.options = {
			...NCIExtendedHeaderWithMegaMenu.defaultOptions,
			...options,
		};
		this.megaMenu = this.createMegaMenu();
		this.mobileMenu = this.createMobileMenu();
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
	 * @param {Partial<NCIExtendedHeaderWithMegaMenuOptions>} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options: Partial<NCIExtendedHeaderWithMegaMenuOptions>
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
		// Remove element
		this.megaMenu.unregister();
		this.mobileMenu.unregister();
		NCIExtendedHeaderWithMegaMenu._components.delete(this.element);
	}
	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private createMegaMenu(): NCIMegaMenu {
		const navigation = this.element.querySelector('.nci-header-nav__primary');
		const defaultOptions = {
			listElementClass: '.nci-header-nav__primary-item',
			linkElementClass: '.nci-header-nav__primary-link',
		};
		return new NCIMegaMenu(<HTMLElement>navigation, defaultOptions);
	}
	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private createMobileMenu(): NCIMobileMenu {
		const defaultOptions = {
			useUrlForNavigationId: true,
		};
		return new NCIMobileMenu(<HTMLElement>this.element, defaultOptions);
	}
}
