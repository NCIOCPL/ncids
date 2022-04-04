import { NCIMegaMenuOptions } from './nci-megamenu-options';
export const MockData = [
	{
		id: 1,
		label: 'About Example',
		path: '/about-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 2,
				label: 'Child Section',
				path: '/child-section',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 3,
				label: 'Example Child',
				path: '/example-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 4,
				label: 'Big child',
				path: '/big-child',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
	{
		id: 5,
		label: 'Second Example',
		path: '/second-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 6,
				label: 'Second Child',
				path: '/second-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 7,
				label: 'Second Example',
				path: '/second-example',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 8,
				label: 'Big Second',
				path: '/big-second',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
	{
		id: 11,
		label: 'About Example',
		path: '/about-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 12,
				label: 'Child Section',
				path: '/child-section',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 13,
				label: 'Example Child',
				path: '/example-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 14,
				label: 'Big child',
				path: '/big-child',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
	{
		id: 15,
		label: 'Second Example',
		path: '/second-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 16,
				label: 'Second Child',
				path: '/second-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 17,
				label: 'Second Example',
				path: '/second-example',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 18,
				label: 'Big Second',
				path: '/big-second',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
	{
		id: 21,
		label: 'About Example',
		path: '/about-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 22,
				label: 'Child Section',
				path: '/child-section',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 23,
				label: 'Example Child',
				path: '/example-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 24,
				label: 'Big child',
				path: '/big-child',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
	{
		id: 35,
		label: 'Second Example',
		path: '/second-example',
		langcode: 'en',
		hasChildren: [
			{
				id: 36,
				label: 'Second Child',
				path: '/second-child',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 37,
				label: 'Second Example',
				path: '/second-example',
				langcode: 'en',
				hasChildren: [],
			},
			{
				id: 38,
				label: 'Big Second',
				path: '/big-second',
				langcode: 'en',
				hasChildren: [],
			},
		],
	},
];
/**
 * NCI MegaMenu
 *
 *
 * Initialize the MegaMenu component:
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
	/** the Buttons for the Megamenu */
	private collapseButtons: HTMLElement[] = [];
	/** the Menu Layers for the Megamenu */
	private megaMenuSections: HTMLElement[] = [];
	/** the Last open Menu   */
	// private lastOpenMenu: HTMLElement;
	/** Default settings for the component. */
	private static defaultOptions: NCIMegaMenuOptions = {
		listElementClass: '.nci-header-nav__primary-item',
		linkElementClass: '.nci-header-nav__primary-link',
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
	 *
	 * @public
	 */
	public unregister(): void {
		NCIMegaMenu._components.delete(this.element);
	}

	/**
	 * Sets up component by initializing.
	 *
	 * @private
	 */
	private initialize(): void {
		console.log('initialize');
		this.createMegaMenuSections();
		this.createCollapsibleButtons();
	}

	/**
	 * Megamenu creation based off the root HTMLElement.
	 *
	 * @private
	 */

	private createMegaMenuSections(): void {
		console.log('createMegaMenuSections');
		const sections = this.queryListSections();
		sections.forEach((section, index) => {
			const selector =
				this.options.linkElementClass ||
				NCIMegaMenu.defaultOptions.linkElementClass;

			const link = this.queryMenuButton(section, <string>selector);
			const button = this.activateButton(link);
			const menu = this.createMenuLayer(button, index);

			this.megaMenuSections.push(<HTMLElement>menu);
			section.append(menu);
		});
	}

	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return {NodeListOf<HTMLElement>} All LI elements in
	 * the primary navigation with specific className
	 *
	 * @private
	 */
	private queryListSections(): HTMLElement[] {
		const selector =
			this.options.listElementClass ||
			NCIMegaMenu.defaultOptions.listElementClass;
		return Array.from(this.element.querySelectorAll(<string>selector));
	}

	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return {<HTMLElement>}  the first Button in primary
	 * navigation with specific className in an element.
	 *
	 * @private
	 */
	private queryMenuButton(element: HTMLElement, className: string): Element {
		return element.querySelectorAll(<string>className)[0];
	}

	/**
	 * Creates the primary navigation buttons from the link
	 * passed into it.
	 *
	 * @return {<HTMLElement>}  Button element with proper tags
	 *
	 * @param {Element} link Parent LI Element
	 * @private
	 */
	private activateButton(link: Element): Element {
		const id = link.getAttribute('href') || '';
		const button = this.createDom(
			'button',
			['nci-header-nav__primary-button'],
			[{ 'aria-controls': id }]
		);
		button.innerHTML = link.innerHTML;
		link.replaceWith(button);
		return link;
		//this.collapseButtons.push(<HTMLElement>button);
	}

	/**
	 * Create the Menu Layer and inject into primary
	 * navigation
	 *
	 * @param {Element} link Parent LI HTMLElement
	 *
	 * @return {Element} DIV layer HTML element
	 * @private
	 */
	private createMenuLayer(link: Element, index: number): Element {
		// some fetch to get Data for this specific section and the children.
		// todo FETCH/PROMISE HERE
		const id = link.getAttribute('href') || '';
		const menu = this.createDom(
			'div',
			['nci-header-megamenu', 'hidden'],
			[{ 'aria-expanded': 'false' }, { id: id }]
		);
		// Parent Row for MegaMenu
		const gridRow = this.createDom('div', ['grid-row']);
		// Col and Section Header for MegaMenu
		const gridColHeader = this.createDom('div', ['usa-col', 'grid-gap-3']);
		const sectionHeader = this.createDom('div', [
			'nci-header-megamenu__header',
		]);
		// Explore Section Link
		const sectionLink = this.createDom(
			'a',
			[],
			[{ href: '/path/here' }, { id: id }]
		);
		sectionLink.innerHTML = `Explore Section ${index}`;
		// Append Link into Header
		sectionHeader.append(sectionLink);
		gridColHeader.append(sectionHeader);
		// Col for Menu Sections
		const gridColMenu = this.createDom('div', ['usa-col', 'grid-gap-9']);
		let gridRowMenu = this.createDom('div', ['grid-row']);

		[...MockData].forEach((item, index) => {
			const mod = (index + 1) % 3;
			// Cols for each individual Menu Sections
			const MenuCol = this.createDom('div', ['usa-col', 'grid-gap-3']);
			const MenuList = this.createDom('ul', ['nci-header-megamenu__list']);
			const MenuItem = this.createMenuLink(item.path, item.label);
			MenuList.append(MenuItem);
			MenuCol.append(MenuList);
			[...item.hasChildren].forEach((item) => {
				const MenuItem = this.createMenuLink(item.path, item.label);
				MenuList.append(MenuItem);
				MenuCol.append(MenuList);
			});
			gridRowMenu.append(MenuCol);
			if (mod == 0 || index === MockData.length) {
				gridColMenu.append(gridRowMenu);
				gridRowMenu = this.createDom('div', ['grid-row']);
			}
		});

		gridRow.append(gridColHeader);
		gridRow.append(gridColMenu);

		// Append into parent Row section for Menus
		menu.append(gridRow);

		return menu;
	}

	/**
	 * Create the Menu Links
	 *
	 * @param {string} path URL for menu link
	 * @param {string} label Text menu label for link
	 *
	 * @return {Element} DIV layer HTML element
	 * @private
	 */
	private createMenuLink(path: string, label: string): Element {
		const MenuItem = this.createDom('li', ['nci-header-megamenu__item']);
		const MenuLink = this.createDom('a', [], [{ href: path }]);
		MenuLink.innerHTML = label;
		MenuItem.append(MenuLink);
		return MenuItem;
	}

	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 * @private
	 */
	private createCollapsibleButtons(): void {
		console.log('createCollapsibleButtons');
		const sections = this.queryListSections();
		sections.forEach((section) => {
			const button = section.firstElementChild;
			console.log('cpc button');
			console.log(button);
			this.collapseButtons.push(<HTMLElement>button);
		});
		this.addCollapseEventListeners();
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 * @private
	 */
	private addCollapseEventListeners(): void {
		console.log('addCollapseEventListeners');
		[...this.collapseButtons].forEach((button, index) => {
			this.collapseListeners[index] = (e: Event) =>
				this.createCollapseListener(e);
			button.addEventListener('click', this.collapseListeners[index]);
		});
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
			const button: Element = event.target;
			this.initCollapse(<HTMLElement>button);
		}
	}

	/**
	 * Toggles collapse on correct screen sizes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @private
	 */
	private initCollapse(button: HTMLElement) {
		this.collapseOpen();
		this.toggleCollapse(button);
	}

	private collapseOpen(): void {
		const sections = this.queryListSections();
		sections.forEach((listItem) => {
			const selector = '.usa-current';
			const link = this.queryMenuButton(listItem, <string>selector);
			if (link) {
				// link.classList.toggle('usa-current');
				// link.parentElement?.classList.toggle('usa-current');
				// const selector = '.nci-header-megamenu';
				const section = link.parentElement?.querySelector(selector);
				console.log('collapseOpen');
				console.log(link, section);
			}
		});
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
		const selector = '.nci-header-megamenu';
		const section = <HTMLElement>(
			button.parentElement?.parentElement?.querySelector(selector)
		);
		section?.classList.toggle('hidden');
		button.parentElement?.classList.toggle('usa-current');
		// Accessibility
		this.toggleCollapseA11y(section);
	}

	/**
	 * Every time the accordion is toggled, updates aria attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @param {HTMLElement} section Collapsible section element.
	 * @private
	 */
	private toggleCollapseA11y(button: HTMLElement): void {
		// Toggle button
		button.setAttribute(
			'aria-expanded',
			String(!button.classList.contains('hidden'))
		);
		// const controls = <string>button.getAttribute('aria-controls');
		// const list = <Element>document.getElementById(controls);

		// Toggle menu for screen readers
		// list.setAttribute(
		// 	'aria-hidden',
		// 	String(button.classList.contains('hidden'))
		// );

		// Dispatch custom events
		this.dispatchCollapsibleEvent(button);
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
			? new CustomEvent('nci-header-megamenu:collapse', { detail })
			: new CustomEvent('nci-header-megamenu:expand', { detail });

		this.element.dispatchEvent(event);
	}

	/**
	 * Create Dom Element with proper class names and options
	 *
	 * @param dom {string} : Dom element you are creating
	 * @param classes {string} : Classnames in an array
	 * @param options {Array} : any other options to be set to the element
	 */
	private createDom(
		dom: string,
		classes?: string[],
		options?: object[]
	): Element {
		const element = document.createElement(dom);
		if (classes) {
			[...classes].forEach((name) => {
				element.classList.add(name);
			});
		}
		if (options) {
			[...options].forEach((opt) => {
				const key = Object.keys(opt)[0];
				const value = Object.values(opt)[0];
				element.setAttribute(key, value);
			});
		}
		return element;
	}
}
