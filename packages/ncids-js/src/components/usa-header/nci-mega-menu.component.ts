import { NCIMegaMenuOptions } from './nci-mega-menu-options';

/**
 * NCI MegaMenu
 *
 *
 * Initialize the Mega Menu component:
 * ```
 * NCIMegaMenu.element.create(HTMLElement);
 * ```
 */
export class NCIMegaMenu {
	/** The component that contains megamenu. */
	protected element: HTMLElement;
	/** The options for MegaMenu */
	protected options: NCIMegaMenuOptions;
	/** Listners for the menu buttons */
	private collapseListeners: EventListener[] = [];
	/** the Buttons for the mega menu */
	private collapseButtons: HTMLElement[] = [];
	/** Default settings for the component. */
	private static defaultOptions: NCIMegaMenuOptions = {
		menuClass: '.nci-header--nci-nav__primary-item',
		menuButtonClass: '.nci-primary__link',
	};

	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCIMegaMenu> = new Map<
		HTMLElement,
		NCIMegaMenu
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCIMegaMenuOptions>} options Component being created.
	 * @protected
	 */
	protected constructor(element: HTMLElement, options: NCIMegaMenuOptions) {
		this.element = element;
		this.options = {
			...NCIMegaMenu.defaultOptions,
			...options,
		};

		const existingComponent = NCIMegaMenu._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIMegaMenu._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCIMegaMenuOptions>} options Component being created.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options: NCIMegaMenuOptions
	): NCIMegaMenu {
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
		NCIMegaMenu._components.delete(this.element);
	}

	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		console.log('initialize');
		this.createMegaMenu();
		this.createCollapsibleSections();
	}

	/**
	 * Mega Menu creation based off the root HTMLelement on creation.
	 * Locates all parent LI elements to inject Mega Menu wrapper and
	 * navigation elements. Locates child anchor links and adds proper
	 * aria and event information.
	 *
	 * @private
	 */
	private createMegaMenu(): void {
		console.log('createMegaMenu');
		const sections = this.queryListSections();
		[...sections].forEach((listItem) => {
			const selector =
				this.options.menuButtonClass ||
				NCIMegaMenu.defaultOptions.menuButtonClass;
			const link = this.queryMenuButtons(listItem, <string>selector);
			const menu = this.createMenuLayer(link);
			listItem.append(menu);
			this.activateButton(link);
		});
	}

	private queryListSections(): NodeListOf<HTMLElement> {
		const selector =
			this.options.menuClass || NCIMegaMenu.defaultOptions.menuClass;
		return this.element.querySelectorAll(<string>selector);
	}
	//const selector = '.nci-primary__button';
	private queryMenuButtons(
		listElement: HTMLElement,
		classString: string
	): Element {
		return listElement.querySelectorAll(<string>classString)[0];
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
		link.setAttribute('href', '#');
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
		const gridRow = document.createElement('div');
		gridRow.classList.add('grid-row');

		const gridColHeader = document.createElement('div');
		gridColHeader.classList.add('grid-row', 'grid-gap-3');

		const sectionHeader = document.createElement('div');
		sectionHeader.classList.add('submenu-header');

		const sectionLink = document.createElement('a');
		sectionLink.setAttribute('href', '/path/here');
		sectionLink.innerHTML = 'Explore Section';
		sectionHeader.append(sectionLink);
		gridColHeader.append(sectionHeader);

		const gridColMenu = document.createElement('div');
		gridColMenu.classList.add('grid-col', 'grid-gap-9');

		menu.append(gridColHeader);
		menu.append(gridColMenu);
		/**
		 * todo - api to pull in that section data to be
		 * generated into mega menu
		 */
		return menu;
	}

	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 * @private
	 */
	private createCollapsibleSections(): void {
		console.log('createCollapsibleSections');
		const sections = this.queryListSections();
		//const sections = this.queryCollapsibleSections();
		[...sections].forEach((section) => {
			console.log(section);
			const buttons = this.queryCollapseButtons(section);
			console.log(buttons);
			[...buttons].forEach((button) => {
				this.collapseButtons.push(button);
				if (this.element === button) this.toggleCollapseA11y(button, section);
			});
		});
		console.log(this.collapseButtons);
		if (this.element === sections[0]) this.addCollapseEventListeners();
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 * @private
	 */
	private addCollapseEventListeners(): void {
		[...this.collapseButtons].forEach((button, index) => {
			this.collapseListeners[index] = (e: Event) =>
				this.createCollapseListener(e);
			button.addEventListener('click', this.collapseListeners[index]);
		});
		console.log(this.collapseListeners);
	}

	/**
	 * Removes event listeners for every possible button per collapsible.
	 * @private
	 */
	// private removeCollapseEventListeners(): void {
	// 	[...this.collapseButtons].forEach((button, index) => {
	// 		button.removeEventListener('click', this.collapseListeners[index]);
	// 	});
	// }

	/**
	 * Creates event listener for collapsible section button elements.
	 *
	 * @param {Event} event Collapsible section toggling event.
	 * @private
	 */
	private createCollapseListener(event: Event): void {
		if (event.target instanceof HTMLElement) {
			const button: HTMLElement = event.target;
			this.initCollapse(button);
		}
	}

	/**
	 * Toggles collapse on correct screen sizes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @private
	 */
	private initCollapse(button: HTMLElement) {
		this.toggleCollapse(button);
	}

	/**
	 * When the collapse button is toggled, hides or shows content and updates
	 * accessible attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @param {boolean} canToggle Element can toggle hidden states.
	 * @private
	 *
	 */
	private toggleCollapse(button: HTMLElement): void {
		//const selector = '.usa-nav__submenu.usa-megamenu';
		const section = <HTMLElement>button.nextElementSibling;
		section.classList.toggle('hidden');

		// Accessibility
		this.toggleCollapseA11y(button, section);
	}

	/**
	 * Every time the accordion is toggled, updates aria attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @param {HTMLElement} section Collapsible section element.
	 * @private
	 */
	private toggleCollapseA11y(button: HTMLElement, section: HTMLElement): void {
		// Toggle button
		button.setAttribute(
			'aria-expanded',
			String(!section.classList.contains('hidden'))
		);

		const controls = <string>button.getAttribute('aria-controls');
		const list = <Element>document.getElementById(controls);

		// Toggle menu for screen readers
		list.setAttribute(
			'aria-hidden',
			String(section.classList.contains('hidden'))
		);

		// Dispatch custom events
		this.dispatchCollapsibleEvent(section);
	}

	/**
	 * Exposes events for hooking into collapse functionality.
	 *
	 * ```
	 * navigation.element.addEventListener(
	 *   "usa-megamenu:collapse", (event) => {
	 *     console.log(`collapsed ${event.detail}`);
	 *   }
	 * );
	 * ```
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @private
	 */
	private dispatchCollapsibleEvent(section: HTMLElement): void {
		const detail = { section: section };

		const event = section.classList.contains('hidden')
			? new CustomEvent('usa-megamenu:collapse', { detail })
			: new CustomEvent('usa-megamenu:expand', { detail });

		this.element.dispatchEvent(event);
	}

	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return {NodeListOf<HTMLElement>} All collapsible sections.
	 * @private
	 */
	// private queryCollapsibleSections(): NodeListOf<HTMLElement> {
	// 	const selector = '.usa-megamenu';
	// 	return this.element.querySelectorAll(selector);
	// }
	/**
	 * Queries a list of buttons that may be used to trigger collapsible content.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @return {NodeListOf<HTMLElement>} All buttons attached to the collapse.
	 * @private
	 */
	private queryCollapseButtons(section: HTMLElement): NodeListOf<HTMLElement> {
		const selector = '.nci-primary__button';
		return section.querySelectorAll(<string>selector);
	}

	// private createDom(dom: string, classes: string): Element {
	// 	const element = document.createElement(dom);
	// 	element.classList.add(classes);
	// 	return element;
	// }
}
