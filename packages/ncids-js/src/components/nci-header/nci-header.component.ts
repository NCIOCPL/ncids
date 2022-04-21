import { NCIExtendedHeaderWithMegaMenuOptions } from './nci-header-options';
import { Search } from './utils/search';

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
	private search: Search;
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

		this.search = new Search(<HTMLElement>this.element);
		console.log('header - search');
		const existingComponent = NCIExtendedHeaderWithMegaMenu._components.get(
			this.element
		);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
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
		console.log(this.search);
		NCIExtendedHeaderWithMegaMenu._components.delete(this.element);
	}
	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		console.log('init');
	}
}
