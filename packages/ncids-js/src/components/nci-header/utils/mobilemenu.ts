import { MobileMenuOptions } from './mobilemenu-options';
import { NavItem } from './navigation-item';

/**
 * NCI MobileMenu
 *
 *
 * Initialize the MobileMenu component:
 * ```
 * NCIMobileMenu.element.create(HTMLElement);
 * ```
 */
export class NCIMobileMenu {
	/** The component that contains MobileMenu. */
	protected element: HTMLElement;
	/** The options for MobileMenu */
	protected options: MobileMenuOptions;
	/** Nav Element for navigation */
	protected mobileNav!: HTMLElement;
	/** The Overlay Element */
	protected mobileOverlay!: HTMLElement;
	/** The Mobile Menu Button */
	protected mobileButton!: HTMLElement;
	/** The Close Button Element */
	protected mobileClose!: HTMLElement;
	/** Callback for handling the toggle functionality.  */
	private eventListener: EventListener = (event) => this.handleClick(event);
	/** Callback for handling the toggle functionality.  */
	private menuEventListener: EventListener = (event) =>
		this.handleToggle(event);
	/** Default classNames for the component. */
	private static defaultOptions: MobileMenuOptions = {
		useUrlForNavigationId: true,
	};

	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCIMobileMenu> = new Map<
		HTMLElement,
		NCIMobileMenu
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @protected
	 */
	public constructor(element: HTMLElement, options: MobileMenuOptions) {
		this.element = element;
		this.options = {
			...NCIMobileMenu.defaultOptions,
			...options,
		};
		this.mobileNav = <HTMLElement>(
			this.element.querySelector('.nci-header-mobilenav')
		);
		this.mobileOverlay = <HTMLElement>(
			this.element.querySelector('.nci-header-mobilenav__overlay')
		);
		this.mobileClose = <HTMLElement>(
			this.element.querySelector('.nci-header-mobilenav__close-btn')
		);
		this.mobileButton = <HTMLElement>(
			this.element.querySelector('.nci-header-mobilenav__open-btn')
		);
		const existingComponent = NCIMobileMenu._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIMobileMenu._components.set(this.element, this);
	}

	/**
	 * Resets and unregistgers component
	 *
	 * @public
	 */
	public unregister(): void {
		NCIMobileMenu._components.delete(this.element);
		this.mobileButton.removeEventListener(
			'click',
			this.menuEventListener,
			true
		);
		this.mobileClose.removeEventListener('click', this.menuEventListener, true);
	}

	/**
	 * Sets up component by initializing the items
	 * @private
	 */
	private initialize(): void {
		this.mobileButton.addEventListener('click', this.menuEventListener, true);
		this.mobileClose.addEventListener('click', this.menuEventListener, true);
		const menu = this.getMenuLayer(
			this.mobileNav,
			'https://mocki.io/v1/0519c1ab-c046-4d6e-847a-83dbdd6aacf8'
		);
		console.log(menu);
	}

	/**
	 * Handle Menu Button Click
	 * @private
	 */
	private handleClick(event: Event): void {
		const link = <HTMLElement>event.target;
		const id = link?.getAttribute('data-id');
		console.log(id);

		event.preventDefault();
	}

	/**
	 * Handle Menu Button Click
	 * @private
	 */
	private handleToggle(event: Event): void {
		event.preventDefault();
		this.toggleOverlay();
		this.toggleMenu();
	}

	/**
	 * Toggle Menu and Overlay Items
	 * @private
	 */
	private toggleOverlay(): void {
		this.mobileOverlay.classList.toggle('active');
	}

	/**
	 * Toggle Menu and Overlay Items
	 * @private
	 */
	private toggleMenu(): void {
		this.mobileNav.classList.toggle('active');
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
			const card = this.displayNavLevel(navdata);
			container.append(card);
		});
	}

	/**
	 * Display the current level of navigation
	 *
	 * @param {<NavItem[]>} data draw current navigation.
	 *
	 * @returns {Promise<void>}
	 * @private
	 */
	private displayNavLevel(data: NavItem[]): HTMLElement {
		const menuList = this.createDom('ul', ['nci-header-mobilenav__list']);

		data.map((item) => {
			let mobileItem;
			if (item.hasChildren) {
				mobileItem = this.makeMenuNode(item);
			} else {
				mobileItem = this.makeMenuLink(item);
			}
			menuList.append(mobileItem);
		});

		return <HTMLElement>menuList;
	}

	/**
	 * Create section node links
	 *
	 * @param {NavItem} data for link node
	 * @private
	 */
	private makeMenuNode(item: NavItem): HTMLElement {
		const listItem = this.createDom('li', ['nci-header-mobilenav__list-node']);
		const linkLabel = this.createDom(
			'span',
			['nci-header-mobilenav__list-label'],
			[
				{ 'data-id': item.path },
				{ 'data-options': 0 },
				{ 'data-isroot': 'false' },
			]
		);
		linkLabel.innerHTML = item.label;
		linkLabel.addEventListener('click', this.eventListener, true);
		listItem.append(linkLabel);
		return <HTMLElement>listItem;
	}

	/**
	 * Create section nav links
	 *
	 * @param {NavItem} data for link node
	 * @private
	 */
	private makeMenuLink(item: NavItem): HTMLElement {
		const listItem = this.createDom('li', ['nci-header-mobilenav__list-node']);
		const linkItem = this.createDom(
			'a',
			['nci-header-mobilenav__list-link'],
			[{ href: item.path }, { 'data-options': 0 }]
		);
		listItem.append(linkItem);
		return <HTMLElement>listItem;
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
