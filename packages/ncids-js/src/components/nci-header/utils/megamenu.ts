import { NCIMegaMenuOptions } from './megamenu-options';
import { NavItem } from './navigation-item';
import { FocusTrap } from './focustrap';

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
	/** The Primary navigation buttons for the Megamenu */
	private toggleButtons: HTMLElement[] = [];
	/** Focus Trap class for Mega Menus*/
	private focusTrap: FocusTrap;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Callback for handling the toggle functionality.  */
	private eventListener: EventListener = (event) => this.handleClick(event);
	/** Callback for handling clicking off the menus.  */
	private eventOffListener: EventListener = (event) =>
		this.handleClickOff(event);
	/** Callback for keyboard input for a11y.  */
	private keyboardListener: EventListener = (event: Event) =>
		this.handleKeyboard(<KeyboardEvent>event);
	/** Is the MegaMenu active  */
	private isActive: boolean;
	/** Default classNames for the component. */
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
	public constructor(element: HTMLElement, options: NCIMegaMenuOptions) {
		this.element = element;
		this.options = {
			...NCIMegaMenu.defaultOptions,
			...options,
		};
		this.focusTrap = new FocusTrap(this.element);
		this.isActive = false;
		const existingComponent = NCIMegaMenu._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIMegaMenu._components.set(this.element, this);
	}

	/**
	 * Resets component and primary navigation
	 * to a clean state before the init()
	 *
	 * @public
	 */
	public unregister(): void {
		this.removeToggleEventListeners();
		const sections = this.queryListSections();
		sections.forEach((section) => {
			const selector = '.nci-header-nav__primary-button';
			const button = section.querySelector(selector);
			const menu = this.queryMegaMenu(<HTMLElement>button);
			menu.remove();
			this.deactivateButton(<HTMLElement>button);
		});
		document.removeEventListener('click', this.eventListener, false);
		document.removeEventListener('keydown', this.keyboardListener, false);
		NCIMegaMenu._components.delete(this.element);
	}

	/**
	 * Sets up component by initializing the items
	 * 1. Create MegaMenu layers and Buttons
	 * 2. Find new buttons with tags add actions
	 * 3. Custom event listeners
	 * 4. Attach event listeners for document (a11y)
	 * @private
	 */
	private initialize(): void {
		this.createMegaMenuSections();
		this.findToggleButtons();
		this.createCustomEvents();
		document.addEventListener('click', this.eventOffListener, false);
		document.addEventListener('keydown', this.keyboardListener, false);
	}

	/**
	 * Create MegaMenu section based on Primary
	 * navigation links.
	 *
	 * @private
	 */
	private createMegaMenuSections(): void {
		// fin all LI elements in navigation
		const sections = this.queryListSections();
		sections.forEach((section) => {
			// find link elements and convert to button
			const selector = this.options.linkElementClass;
			const link = section.querySelectorAll(<string>selector)[0];
			const id = link.getAttribute('href') || '';
			const parentLabel = link.innerHTML;
			// add aria tags and change link to button
			this.activateButton(link);

			// dom creation for menu layers
			const menu = this.createDom(
				'div',
				['nci-header-megamenu', 'hidden'],
				[{ 'aria-expanded': 'false' }, { id: id }]
			);

			// parent Row for MegaMenu
			const gridRow = this.createDom('div', ['grid-row']);
			// col and Section Header for MegaMenu
			const gridColHeader = this.createDom('div', ['usa-col', 'grid-gap-3']);
			const sectionHeader = this.createDom('div', [
				'nci-header-megamenu__header',
			]);
			// explore Section Link
			const sectionLink = this.createDom('a', [], [{ href: id }, { id: id }]);
			sectionLink.innerHTML = `Explore ${parentLabel}`;
			// append link into header
			sectionHeader.append(sectionLink);
			gridColHeader.append(sectionHeader);
			// col for menu sections
			const gridColMenu = this.createDom('div', ['usa-col', 'grid-gap-9']);

			// make inside of mega menu async call
			// pass in element that will be filled
			this.getMenuLayer(gridColMenu, id);

			gridRow.append(gridColHeader);
			gridRow.append(gridColMenu);

			// Append into parent Row section for Menus
			menu.append(gridRow);
			section.append(menu);
			//return menu;
		});
	}

	/**
	 * Get the navigation data for the specific menu layer of
	 * primary navigation navigation
	 *
	 * @param {Element} container Parent LI HTMLElement
	 * @param {string} id The id to use for the api call
	 *
	 * @returns {Promise<void>}
	 * @private
	 */
	private async getMenuLayer(container: Element, id: string): Promise<void> {
		const data = this.getMenuData(id);
		data.then((response) => {
			const navdata: NavItem[] = [];
			response.map((data) => {
				navdata.push(data);
			});
			const card = this.createMenuLayer(navdata);
			container.append(card);
		});
	}

	/**
	 * Create the Menu Layer and inject into primary
	 * navigation
	 *
	 * @param {NavItem[]} data NavItem
	 *
	 * @return {Element} DIV layer HTML element
	 * @private
	 */
	private createMenuLayer(data: NavItem[]): Element {
		const amount = data.length || 0;
		// determine if there is space left over in the menu
		const leftover = amount - Math.floor(amount / 3) * 3;
		const wrapper = this.createDom('div', ['wrapper']);
		// Each set of 3 UL's are kept in one grid-row
		let gridRowMenu = this.createDom('div', ['grid-row']);

		// Go though each item in the response
		[...data].map((item, index) => {
			const mod = (index + 1) % 3;

			// create the UL and container DIV
			const MenuCol = this.createDom('div', ['usa-col', 'grid-gap-3']);
			const MenuList = this.createDom('ul', ['nci-header-megamenu__list']);

			// First link in list is Header link
			const ParentMenuItem = this.createMenuLink(item.path, item.label);
			MenuList.append(ParentMenuItem);
			MenuCol.append(MenuList);
			// Iterate over child items
			[...item.children].map((item) => {
				const MenuItem = this.createMenuLink(item.path, item.label);
				MenuList.append(MenuItem);
				MenuCol.append(MenuList);
			});
			gridRowMenu.append(MenuCol);
			wrapper.append(gridRowMenu);
			// if zero then we're at 3 and we should make a new row
			if (mod === 0) {
				gridRowMenu = this.createDom('div', ['grid-row']);
			}
		});

		// If there is a leftover space then we need to fill
		// it. Based on the amount of items in data, create
		// an empty div and append to the last row container
		if (leftover > 0) {
			const MenuFiller = this.createDom('div', [
				'usa-col',
				leftover < 2 ? 'grid-gap-6' : 'grid-gap-3',
			]);
			gridRowMenu.append(MenuFiller);
		}
		return wrapper;
	}

	/**
	 * Utility function to create the links used in the
	 * MegaMenu Lists
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
	 * Async call to get the data from the API
	 *
	 * @param {string} id of parent section.
	 *
	 * @return {Promise<NavItem[]>} HTML element
	 * @private
	 */
	private async getMenuData(id: string): Promise<NavItem[]> {
		const response = await fetch(id)
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				console.error(`Fetch Error: ${id} ${error}`);
				return [];
			});
		return await response;
	}

	/**
	 * Returns array of LI elements in the primary navigation
	 *
	 * @return {NodeListOf<HTMLElement>}
	 * @private
	 */
	private queryListSections(): HTMLElement[] {
		const selector = this.options.listElementClass;
		return Array.from(this.element.querySelectorAll(<string>selector));
	}

	/**
	 * Returns the HTMLElement that contains the MegaMenu
	 *
	 * @return {<HTMLElement>} MegaMenu DOM Element
	 * @private
	 */
	private queryMegaMenu(button: Element): HTMLElement {
		const selector = '.nci-header-megamenu';
		const parent = <HTMLElement>button.parentElement;
		return <HTMLElement>parent.querySelector(selector);
	}

	/**
	 * Creates the primary navigation buttons from the link
	 * element passed into it and adds aria tags
	 *
	 * @return {<HTMLElement>}  Button element with proper tags
	 *
	 * @param {Element} link anchor tag to be converted into button.
	 * @private
	 */
	private activateButton(link: Element): Element {
		const id = link.getAttribute('href') || '';
		const button = this.createDom(
			'button',
			['nci-header-nav__primary-button'],
			[{ 'aria-expanded': false }, { 'aria-controls': id }]
		);
		button.innerHTML = link.innerHTML;
		link.replaceWith(button);
		return link;
	}

	/**
	 * Change the primary buttons back to links
	 *
	 * @param {Element} button anchor tag to be converted into button.
	 * @return {<HTMLElement>}  Button element with proper tags
	 * @private
	 */
	private deactivateButton(button: Element): Element {
		const link = this.createDom('a', ['nci-header-nav__primary-link']);
		link.innerHTML = button.innerHTML;
		button.replaceWith(link);
		return link;
	}

	/**
	 * Finds newly updated buttons and adds event listeners.
	 *
	 * @private
	 */
	private findToggleButtons(): void {
		const sections = this.queryListSections();
		sections.forEach((section) => {
			const button = section.firstElementChild;
			this.toggleButtons.push(<HTMLElement>button);
		});
		this.addToggleEventListeners();
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 *
	 * @private
	 */
	private addToggleEventListeners(): void {
		[...this.toggleButtons].forEach((button) => {
			button.addEventListener('click', this.eventListener);
		});
	}

	/**
	 * Removes event listeners for every possible button per collapsible.
	 *
	 * @private
	 */
	private removeToggleEventListeners(): void {
		[...this.toggleButtons].forEach((button) => {
			button.removeEventListener('click', this.eventListener);
		});
	}

	/**
	 * Click handler for the toggle buttons.
	 *
	 * @param {Event} event Collapsible section toggling event.
	 *
	 * @private
	 */
	private handleClick(event: Event): void {
		event.preventDefault();
		event.stopPropagation();
		if (event.target instanceof HTMLElement) {
			const button: HTMLElement = event.target;
			this.toggleMegaMenu(button);
		}
	}

	/**
	 * Click handler for clicking outside of the menu
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 * @private
	 */
	private handleClickOff(event: Event): void {
		if (this.isActive) {
			if (event.target instanceof HTMLButtonElement) {
				const button = event.target;
				const parentEl = button.offsetParent || button;
				if (!parentEl.classList.contains('nci-header-megamenu')) {
					this.checkForActiveButtons(button);
				}
			}
		}
	}

	/**
	 * Click handler for clicking outside of the menu
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 * @private
	 */
	private handleKeyboard(event: KeyboardEvent): void {
		if (this.isActive) {
			const isEscapePressed =
				event.key === 'Escape' || parseInt(event.code, 10) === 27;
			if (isEscapePressed) {
				this.checkForActiveButtons(<HTMLElement>event.target);
			}
		}
	}
	/**
	 * When the navigation button is toggled, hides or shows menu and
	 * updates accessible attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 *
	 * @private
	 */
	private toggleMegaMenu(button: HTMLElement): void {
		const section = this.queryMegaMenu(button);
		this.checkForActiveButtons(button);
		this.toggleMenu(button);

		if (button.classList.contains('usa-current')) {
			this.isActive = false;
			this.focusTrap.toggleTrap(false, section);
			button.classList.remove('usa-current');
		} else {
			this.isActive = true;
			this.focusTrap.toggleTrap(true, section);
			button.classList.add('usa-current');
		}
	}

	/**
	 * See if there are any active menu buttons and
	 * deactivate them and any menu layer
	 *
	 * @private
	 */
	private checkForActiveButtons(button: HTMLElement): void {
		// Search for any open
		this.toggleButtons.forEach((btn) => {
			// close if found
			if (btn.classList.contains('usa-current') && btn !== button) {
				btn.classList.toggle('usa-current');
				this.toggleMenu(<HTMLElement>btn);
				this.isActive = false;
			}
		});
	}

	/**
	 * Toggles menu layer on or off
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 *
	 * @private
	 */
	private toggleMenu(button: HTMLElement): void {
		const section = this.queryMegaMenu(button);
		section.classList.toggle('hidden');
		this.toggleMegaMenuA11y(button);
	}

	/**
	 * Every time the menu is toggled, update aria attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @private
	 */
	private toggleMegaMenuA11y(button: HTMLElement): void {
		button.setAttribute(
			'aria-expanded',
			String(button.classList.contains('usa-current'))
		);
	}

	/**
	 * Create custom events for NCIMegaMenu.
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['expanded', 'collapsed'];
		[...events].forEach((event) => {
			this.customEvents[event] = new CustomEvent(
				`nci-header-megamenu:${event}`,
				{
					bubbles: true,
					detail: this.element,
				}
			);
		});
	}

	/**
	 * Create Dom Element with proper class names and options
	 *
	 * @param {string} dom Dom element you are creating
	 * @param {string} classes Classnames in an array
	 * @param {array} options Any other options to be set to the element
	 *
	 * @return {HTMLElement} HTML element
	 * @private
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
