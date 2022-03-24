import { NCIMegaMenuOptions } from './nci-mega-menu-options';
/**
 * NCI Megamenu
 *
 * Initialize the Megamenu component:
 * ```
 * NCIMegaMenu.create(HTMLElement);
 * ```
 */
export class NCIMegaMenu {
	/** The containing navigatgion element. */
	protected element: HTMLElement;
	/** Navigtaion API options */
	protected options: NCIMegaMenuOptions;

	private static optionDefaults: NCIMegaMenuOptions = {
		menuClass: '.nci-header--nci-nav__primary-item',
		menuButtonClass: '.nci-primary__link',
	};

	private static _components: Map<HTMLElement, NCIMegaMenu> = new Map<
		HTMLElement,
		NCIMegaMenu
	>();

	protected constructor(element: HTMLElement, options?: NCIMegaMenuOptions) {
		this.element = element;
		this.options = options || NCIMegaMenu.optionDefaults;

		const existingComponent = NCIMegaMenu._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIMegaMenu._components.set(this.element, this);
	}

	public unregister(): void {
		NCIMegaMenu._components.delete(this.element);
	}

	private initialize(): void {
		console.log('init');
		this.activateMenu();
		//this.createMegaMenuSections();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIMegaMenuOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(element: HTMLElement): NCIMegaMenu {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element);
	}

	/**
	 * Creates the primary navigation buttons to open and close
	 * the mega menu as well as removes the link and adds the
	 * proper aria tags.
	 *
	 * @param {Element} link Parent LI Element
	 * @private
	 */
	private activateButton(link: Element): void {
		link.setAttribute('aria-expanded', 'false');
		link.setAttribute('aria-controls', link.id);
		link.classList.remove('nci-primary__link');
		link.classList.add('nci-primary__button');
	}

	/**
	 * @param {Element} link Parent LI HTMLElement
	 *
	 * @return {Element} DIV layer HTML element
	 * @private
	 */
	private createMenuLayer(link: Element): Element {
		const menu = document.createElement('div');
		menu.classList.add('usa-nav__submenu', 'usa-megamenu');
		menu.setAttribute('hidden', 'true');
		menu.setAttribute('id', link.id);
		return menu;
	}

	/**
	 * Mega Menu creation based off the root HTMLelement on creation.
	 * Locates all parent LI elements to inject Mega Menu wrapper and
	 * navigation elements. Locates child anchor links and adds proper
	 * aria and event information.
	 *
	 * @private
	 */
	private activateMenu(): void {
		const naviSelector =
			this.options.menuClass || NCIMegaMenu.optionDefaults.menuClass;
		const linkSelector =
			this.options.menuButtonClass ||
			NCIMegaMenu.optionDefaults.menuButtonClass;

		const elements = this.element.querySelectorAll(<string>naviSelector);
		elements.forEach((listItem) => {
			const link = listItem.querySelectorAll(<string>linkSelector)[0];
			const menu = this.createMenuLayer(link);
			listItem.append(menu);
			this.activateButton(link);
		});
	}
}
