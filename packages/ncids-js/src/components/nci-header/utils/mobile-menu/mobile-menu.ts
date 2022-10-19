import { FocusTrap } from '../focus-trap';
import { MobileMenuAdaptor } from './mobile-menu-adaptor';
import { MobileMenuData } from './mobile-menu-data';
import { MobileMenuItem } from './mobile-menu-item';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const locale: { [key: string]: any } = {
	menu: {
		en: 'Main Menu',
		es: 'Menú principal',
	},
	back: {
		en: 'Back',
		es: 'Espalda',
	},
	close: {
		en: 'Close Menu',
		es: 'Cerrar menú',
	},
	nav: {
		en: 'Primary navigation.',
		es: 'Navegación primaria.',
	},
};
/* eslint-enable  @typescript-eslint/no-explicit-any */

export class MobileMenu {
	/** The DOM element that contains Mobile Menu. */
	protected readonly element: HTMLElement;
	/** The Mobile Menu adaptor. */
	private readonly adaptor: MobileMenuAdaptor;
	/** focusTrap for mobile menu */
	protected focusTrap: FocusTrap;
	/** Is the menu Active */
	protected activeMenu!: boolean;
	/** Nav Element for navigation */
	protected mobileNav!: HTMLElement;
	/** The Overlay Element */
	protected mobileOverlay!: HTMLElement;
	/** The Mobile Menu Button */
	protected mobileButton!: HTMLElement;
	/** The Close Button Element */
	protected mobileClose!: HTMLElement;
	/** The Current URL of the page */
	protected pageUrl!: string;
	/** Section Parent Clicked */
	protected sectionParent!: string;
	/** The Last Link Clicked */
	protected langCode!: string;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};

	/** Callback for handling the toggle functionality.  */
	private eventListener: EventListener = (event) => this.handleClick(event);
	/** Callback for handling the toggle functionality.  */
	private menuEventListener: EventListener = (event) =>
		this.handleToggleMenu(event);
	private escapeKeyPressListener: EventListener = (event) =>
		this.handleEscapeKeypress(<KeyboardEvent>event);
	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} mobileNavElement Component being created.
	 * @param {MobileMenuAdaptor} adaptor Mobile Menu adapter.
	 * @protected
	 */
	public constructor(
		mobileNavElement: HTMLElement,
		adaptor: MobileMenuAdaptor
	) {
		this.element = mobileNavElement;
		this.adaptor = adaptor;

		this.pageUrl = window.location.pathname;

		this.focusTrap = new FocusTrap(this.element);
		this.activeMenu = false;

		this.mobileButton = <HTMLElement>(
			this.element.querySelector('.nci-header-mobilenav__open-btn')
		);

		this.langCode = document.documentElement.lang;
		this.initialize();
	}

	/**
	 * Unregistgers mobile menu and remove event listeners
	 *
	 * @public
	 */
	public unregister(): void {
		this.mobileButton.removeEventListener(
			'click',
			this.menuEventListener,
			true
		);
		this.mobileClose.removeEventListener('click', this.menuEventListener, true);
		this.mobileOverlay.removeEventListener(
			'click',
			this.menuEventListener,
			true
		);
		document.removeEventListener('keydown', this.escapeKeyPressListener, false);

		this.mobileOverlay.remove();
		this.mobileClose.remove();
		this.mobileNav.remove();
	}

	/**
	 * Create mobile menu DOM items and place into header
	 * @private
	 */
	private initialize(): void {
		this.mobileNav = <HTMLElement>(
			this.createDom(
				'div',
				['nci-header-mobilenav'],
				[
					{ tabindex: -1 },
					{ role: 'dialog' },
					{ 'aria-modal': true },
					{ id: 'nci-header-mobilenav' },
				]
			)
		);
		this.mobileOverlay = <HTMLElement>(
			this.createDom('div', ['nci-header-mobilenav__overlay'], [])
		);
		const lang = this.langCode;
		const ariaLabel = locale['close'][lang];
		this.mobileClose = <HTMLElement>this.createDom(
			'button',
			['nci-header-mobilenav__close-btn'],
			[
				{
					'aria-controls': 'nci-header-mobilenav',
				},
				{
					'aria-label': ariaLabel,
				},
			]
		);

		this.mobileClose.addEventListener('click', this.menuEventListener, true);
		this.mobileOverlay.addEventListener('click', this.menuEventListener, true);

		this.mobileButton.addEventListener('click', this.menuEventListener, true);

		this.mobileNav.append(this.mobileClose);
		this.element.append(this.mobileNav);
		this.element.append(this.mobileOverlay);

		document.addEventListener('keydown', this.escapeKeyPressListener, false);
		this.createCustomEvents();
	}

	/**
	 * Handle Menu Button Click
	 * @private
	 */
	private async handleToggleMenu(event: Event): Promise<void> {
		event.preventDefault();
		await this.toggleMenu();
	}

	/**
	 * Handle Escape Key
	 * @private
	 */
	private async handleEscapeKeypress(event: KeyboardEvent): Promise<void> {
		if (this.activeMenu) {
			const isEscapePressed = event.key === 'Escape';
			if (isEscapePressed) {
				await this.toggleMenu();
			}
		}
	}

	/**
	 * Toggle Menu and Overlay Items
	 * @private
	 */
	private async toggleMenu(): Promise<void> {
		const isActive = this.mobileNav.classList.contains('active');
		if (isActive) {
			this.activeMenu = false;
			this.focusTrap.toggleTrap(false, this.mobileNav);
			this.mobileNav.classList.remove('active');
			this.mobileOverlay.classList.remove('active');

			this.element.dispatchEvent(this.customEvents['close']);
		} else {
			this.activeMenu = true;
			this.mobileNav.classList.add('active');
			this.mobileOverlay.classList.toggle('active');
			// pull data

			const initialMenuId = await this.adaptor.getInitialMenuId();
			const results = await this.adaptor.getNavigationLevel(initialMenuId);
			const menu = this.displayNavLevel(results);

			// Wrap existing list in a navigation
			const menuNav = this.createDom(
				'nav',
				['nci-header-mobilenav__nav'],
				[{ 'aria-label': locale['nav'][this.langCode] }]
			);
			menuNav.appendChild(menu);
			this.mobileNav.append(menuNav);

			this.mobileClose.focus();
			this.focusTrap.toggleTrap(true, this.mobileNav);
			this.element.dispatchEvent(this.customEvents['open']);
		}
	}

	/**
	 * Handle Link Click
	 * @private
	 */
	private async handleClick(event: Event): Promise<void> {
		event.preventDefault();
		const link = <HTMLElement>event.target;
		const dataMenuID = <string>link.getAttribute('data-menu-id');
		const results = await this.adaptor.getNavigationLevel(dataMenuID);
		const menu = this.displayNavLevel(results);
		this.mobileNav.append(menu);

		this.focusTrap.toggleTrap(true, this.mobileNav);
	}

	/**
	 * Display the current level of navigation
	 *
	 * @param {MobileMenuItem[]} data child subtree.
	 *
	 * @private
	 */
	private displayNavLevel(data: MobileMenuData): HTMLElement {
		const items = data.items;
		const parent = data.parent;
		if (parent?.path) this.sectionParent = parent.path;
		// if we have a menu already - then remove it and redraw
		const menuCheck = this.element.querySelector('.nci-header-mobilenav__list');
		if (menuCheck) menuCheck.remove();

		const menuList = this.createDom('ul', ['nci-header-mobilenav__list']);
		const menuParent = this.createDom('ul', ['nci-header-mobilenav__list']);

		// if the parent item in our return data is not a root path
		if (parent !== null) {
			const menuHolder = this.createDom('li', [
				'nci-header-mobilenav__list-holder',
			]);

			// make parent back to menu link
			const menuBack = this.makeBackNode(parent);
			const exploreSection = this.makeExploreLink(data);
			menuParent.append(menuBack);
			menuList.append(exploreSection);

			menuHolder.append(menuList);
			menuParent.append(menuHolder);

			items.map((item) => {
				let mobileItem;
				if (item.hasChildren) {
					mobileItem = this.makeMenuNode(item);
				} else {
					mobileItem = this.makeMenuLink(item);
				}
				menuList.append(mobileItem);
			});
		} else {
			// else it's the default menu
			items.map((item) => {
				let mobileItem;
				if (item.hasChildren) {
					mobileItem = this.makeMenuNode(item);
				} else {
					mobileItem = this.makeMenuLink(item);
				}
				menuList.append(mobileItem);
			});
		}

		// return parent or submenu base on path
		if (data.path !== '/') {
			return <HTMLElement>menuParent;
		} else {
			return <HTMLElement>menuList;
		}
	}

	/**
	 * Create Back Button for current section menu
	 *
	 * @private
	 */
	private makeBackNode(item: MobileMenuItem): HTMLElement {
		const lang = this.langCode;
		const dataMenuID = this.adaptor.useUrlForNavigationId ? item.path : item.id;
		const label =
			this.sectionParent === '/' ? locale['menu'][lang] : locale['back'][lang];

		const listItem = this.createDom(
			'li',
			['nci-header-mobilenav__list-node', 'active'],
			[]
		);
		const linkLabel = this.createDom(
			'button',
			['nci-header-mobilenav__list-msg'],
			[
				{ 'data-menu-id': dataMenuID },
				{ 'data-href': item.path },
				{ 'data-options': 0 },
				{ 'data-isroot': 'false' },
			]
		);
		linkLabel.innerHTML = label;
		linkLabel.addEventListener('click', this.eventListener, true);
		listItem.append(linkLabel);
		return <HTMLElement>listItem;
	}

	/**
	 * Create the section Explore Button
	 *
	 * @private
	 */
	private makeExploreLink(section: MobileMenuData): HTMLElement {
		const listItem = this.createDom('li', ['nci-header-mobilenav__list-item']);
		const linkItem = this.createDom(
			'a',
			['nci-header-mobilenav__list-link'],
			[{ href: section.path }, { 'data-options': 0 }]
		);
		if (this.pageUrl === section.path) linkItem.classList.add('current');
		linkItem.innerHTML = section.label;
		listItem.append(linkItem);
		return <HTMLElement>listItem;
	}

	/**
	 * Create section node links
	 *
	 * @param {MobileMenuItem} item for link node
	 *
	 * @private
	 */
	private makeMenuNode(item: MobileMenuItem): HTMLElement {
		const dataMenuID = this.adaptor.useUrlForNavigationId ? item.path : item.id;
		const listItem = this.createDom(
			'li',
			['nci-header-mobilenav__list-node'],
			[]
		);
		const linkLabel = this.createDom(
			'button',
			['nci-header-mobilenav__list-label'],
			[
				{ 'data-href': item.path },
				{ 'data-menu-id': dataMenuID },
				{ 'data-options': 0 },
				{ 'data-isroot': 'false' },
			]
		);
		linkLabel.innerHTML = item.label;
		listItem.addEventListener('click', this.eventListener, true);
		listItem.append(linkLabel);
		return <HTMLElement>listItem;
	}

	/**
	 * Create section nav links
	 *
	 * @param {MobileMenuItem} item for link node
	 *
	 * @private
	 */
	private makeMenuLink(item: MobileMenuItem): HTMLElement {
		const listItem = this.createDom(
			'li',
			['nci-header-mobilenav__list-item'],
			[]
		);
		const linkItem = this.createDom(
			'a',
			['nci-header-mobilenav__list-link'],
			[{ href: item.path }, { 'data-options': 0 }]
		);
		if (this.pageUrl === item.path) linkItem.classList.add('current');
		linkItem.innerHTML = item.label;
		listItem.append(linkItem);
		return <HTMLElement>listItem;
	}

	/**
	 * Create Dom Element with proper class names and options
	 *
	 * @param {string} dom Dom element you are creating
	 * @param {string} classes Classnames in an array
	 * @param {array} options Any other options to be set to the element
	 *
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

	/**
	 * Create custom events for NCIMobileMenu.
	 *
	 * The default settings for NCISiteAlert exposes these events:
	 * - nci-header:mobile-menu:open
	 * - nci-header:mobile-menu:close
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['close', 'open'];
		[...events].forEach((event) => {
			this.customEvents[event] = new CustomEvent(
				`nci-header:mega-menu:${event}`,
				{
					bubbles: true,
					detail: this.element,
				}
			);
		});
	}
}
