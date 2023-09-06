import { FocusTrap } from '../focus-trap';
import { MobileMenuAdaptor } from './mobile-menu-adaptor';
import { MobileMenuCloseEventDetails } from './mobile-menu-close-event-details';
import { MobileMenuData } from './mobile-menu-data';
import { MobileMenuItem } from './mobile-menu-item';
import { MobileMenuLinkClickEventDetails } from './mobile-menu-linkclick-event-details';
import { MobileMenuOpenEventDetails } from './mobile-menu-open-event-details';

const locale: { [key: string]: { en: string; es: string } } = {
	close: {
		en: 'Close Menu',
		es: 'Cerrar menú',
	},
	nav: {
		en: 'Primary navigation.',
		es: 'Navegación primaria.',
	},
};

/** Catch all for createDom() */
type CreateDomOptions = {
	'aria-controls'?: string;
	'aria-label'?: string;
	'aria-modal'?: boolean;
	'data-href'?: string;
	'data-isroot'?: string;
	'data-menu-id'?: string | number;
	'data-options'?: number;
	href?: string;
	id?: string;
	role?: string;
	tabindex?: number;
};

export class MobileMenu {
	/** The DOM element that contains Mobile Menu. */
	protected readonly element: HTMLElement;
	/** The Mobile Menu adaptor. */
	private readonly adaptor: MobileMenuAdaptor;
	/** focusTrap for mobile menu */
	protected focusTrap: FocusTrap;
	/** Is the menu Active */
	protected activeMenu!: boolean;
	/** Current mobile menu data */
	protected menuData: MobileMenuData | null = null;
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
	protected sectionParent: MobileMenuItem | null = null;
	/** Document language code attribute */
	protected langCode: 'en' | 'es';
	/** Loading spinner */
	protected loader: Element | HTMLElement = this.createDom('div', [
		'nci-is-loading',
		'hidden',
	]);
	/** Desktop Media Query for Closing Mobile Menu */
	private resizeMediaQuery: MediaQueryList;
	/** Screen Width Breakpoint for Closing Mobile Menu */
	protected resizeWidth = 1024;

	/**
	 * Array list of custom events that will be dispatched to the user.
	 * @type {{[p: string]: (detail: (MobileMenuLinkClickEventDetails | MobileMenuCloseEventDetails | MobileMenuOpenEventDetails)) => CustomEvent}}
	 * @private
	 */
	private customEvents: {
		[key: string]: (
			detail:
				| MobileMenuLinkClickEventDetails
				| MobileMenuCloseEventDetails
				| MobileMenuOpenEventDetails
		) => CustomEvent;
	} = {};

	/**
	 * Callback for handling the on click functionality.
	 * @param {Event} e Pointer Event
	 * @returns {Promise<void>}
	 */
	private linkClickListener: EventListener = (e) => this.handleLinkClick(e);

	/**
	 * Callback for handling menu open.
	 * @param {Event} e Pointer Event
	 * @returns {Promise<void>}
	 */
	private menuOpenEventListener: EventListener = (e) => this.handleOpenMenu(e);

	/**
	 * Callback for handling menu close when resizing window greater than mobile menu breakpoint.
	 * @param {Event} query Matchmedia Event
	 * @returns {Promise<void>}
	 */
	private windowResizeEventListener: EventListener = (query: Event) => {
		if ((<MediaQueryListEvent>query).matches) {
			this.handleCloseMenu('Close');
		}
	};

	/**
	 * Callback for handling menu close.
	 * @returns {Promise<void>}
	 */
	private menuCloseEventListener: EventListener = () =>
		this.handleCloseMenu('Close');

	/**
	 * Callback for triggering menu on close via Escape key.
	 * @param {Event} e Keyboard event
	 * @returns {Promise<void>}
	 */
	private escapeKeyPressListener: EventListener = async (
		e: KeyboardEvent | Event
	) => {
		if (this.activeMenu) {
			const isEscapePressed = (<KeyboardEvent>e).key === 'Escape';
			if (isEscapePressed) {
				await this.closeMenu('Escape');
			}
		}
	};

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
		if (!adaptor.getInitialMenuId) {
			throw new Error(
				'getInitialMenuId required to return a Promise of string or number.'
			);
		}

		if (!adaptor.getNavigationLevel) {
			throw new Error(
				'getNavigationLevel required to return a Promise of MobileMenuData.'
			);
		}

		this.element = mobileNavElement;
		this.adaptor = adaptor;

		this.pageUrl = window.location.pathname;

		this.focusTrap = new FocusTrap(this.element);
		this.activeMenu = false;

		this.mobileButton = <HTMLElement>(
			this.element.querySelector('.nci-header-mobilenav__open-btn')
		);

		this.resizeMediaQuery = matchMedia(`(min-width: ${this.resizeWidth}px)`);

		this.langCode = document.documentElement.lang as 'es' | 'en';
		this.initialize();
	}

	/**
	 * Unregisters mobile menu and remove event listeners
	 *
	 * @public
	 */
	public unregister(): void {
		this.element.removeEventListener('click', this.linkClickListener);

		this.mobileButton.removeEventListener(
			'click',
			this.menuOpenEventListener,
			true
		);
		this.mobileClose.removeEventListener(
			'click',
			this.menuCloseEventListener,
			true
		);
		this.mobileOverlay.removeEventListener(
			'click',
			this.menuCloseEventListener,
			true
		);
		document.removeEventListener('keydown', this.escapeKeyPressListener, false);
		this.resizeMediaQuery.removeEventListener(
			'change',
			this.windowResizeEventListener
		);

		this.mobileOverlay.remove();
		this.mobileClose.remove();
		this.mobileNav.remove();
		this.loader.remove();
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
		this.mobileNav.ariaLive = 'polite';
		this.mobileNav.ariaBusy = 'true';
		this.mobileOverlay = <HTMLElement>(
			this.createDom('div', ['nci-header-mobilenav__overlay'], [])
		);
		const ariaLabel = locale['close'][this.langCode];
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

		this.mobileClose.addEventListener(
			'click',
			(this.menuCloseEventListener = () => this.handleCloseMenu('Close')),
			true
		);

		this.mobileOverlay.addEventListener(
			'click',
			(this.menuCloseEventListener = () => this.handleCloseMenu('Overlay')),
			true
		);

		this.mobileButton.addEventListener(
			'click',
			this.menuOpenEventListener,
			true
		);

		this.mobileNav.append(this.mobileClose);
		this.mobileNav.append(this.loader);
		this.element.append(this.mobileNav);
		this.element.append(this.mobileOverlay);

		document.addEventListener('keydown', this.escapeKeyPressListener, false);
		this.resizeMediaQuery.addEventListener(
			'change',
			this.windowResizeEventListener
		);
		this.createCustomEvents();
	}

	/**
	 * Handle open menu.
	 * @param {Event} event
	 * @returns {Promise<void>}
	 * @private
	 */
	private async handleOpenMenu(event: Event) {
		// if we have a menu already - then remove it and redraw
		const menuCheck = this.element.querySelector('.nci-header-mobilenav__list');
		if (menuCheck) menuCheck.remove();

		// Display Loader
		this.mobileNav.ariaBusy = 'true';
		this.loader.classList.remove('hidden');

		const target = event.currentTarget as HTMLElement;
		const label = (target.textContent || '').trim();
		await this.openMenu(label);
	}

	/**
	 * Handle close menu.
	 * @param {"Close" | "Overlay"} action
	 * @private
	 */
	private handleCloseMenu(action: 'Close' | 'Overlay') {
		this.closeMenu(action);
	}

	/**
	 * Open mobile menu.
	 * @param {string} label
	 * @returns {Promise<void>}
	 * @private
	 */
	private async openMenu(label: string) {
		// Sets mobile menu as 'active'
		this.activeMenu = true;
		this.mobileNav.classList.add('active');
		this.mobileOverlay.classList.toggle('active');

		// pull data
		const initialMenuId = await this.adaptor.getInitialMenuId();
		this.menuData = await this.adaptor.getNavigationLevel(initialMenuId);
		const menu = this.displayNavLevel(this.menuData);

		// Wrap existing list in a navigation
		const menuNav = this.createDom(
			'nav',
			['nci-header-mobilenav__nav'],
			[{ 'aria-label': locale['nav'][this.langCode] }]
		);
		menuNav.appendChild(menu);
		this.mobileNav.append(menuNav);

		// Lock focus within mobile menu
		this.mobileClose.focus();
		this.focusTrap.toggleTrap(true, this.mobileNav);

		this.mobileNav.ariaBusy = 'false';

		// Dispatch Menu Opened Custom Event
		this.element.dispatchEvent(
			this.customEvents['open']({
				label: label,
				initialMenu: this.menuData,
			})
		);
	}

	/**
	 * Close mobile menu.
	 * @param {"Escape" | "Close" | "Overlay" | "Link"} action
	 * @private
	 */
	private closeMenu(action: 'Escape' | 'Close' | 'Overlay' | 'Link') {
		// Removes 'active' status and focus trap of mobile menu
		this.activeMenu = false;
		this.mobileNav.classList.remove('active');
		this.mobileOverlay.classList.remove('active');
		this.focusTrap.toggleTrap(false, this.mobileNav);

		// Saves Menu Data for Event Dispatch
		const lastMenu = this.menuData;
		this.menuData = null;

		// Log Close Event unless the page is navigating
		// (Event for linkclick is logged in handleLinkClick below)
		if (action !== 'Link') {
			this.element.dispatchEvent(
				this.customEvents['close']({
					action: action,
					lastMenu: lastMenu || null,
				})
			);
		}
	}

	/**
	 * Handle Link Click
	 * @private
	 */
	private async handleLinkClick(
		event: Event,
		action?: 'Back' | 'Child',
		index?: number
	): Promise<void> {
		// if we have a menu already - then remove it and redraw
		const menuCheck = this.element.querySelector('.nci-header-mobilenav__list');
		if (menuCheck) menuCheck.remove();

		// Display Loader
		this.mobileNav.ariaBusy = 'true';
		this.loader.classList.remove('hidden');

		// Get the link we're interacting with, and its data-id (page location)
		const link = <HTMLElement>event.target;
		const dataMenuID = link.getAttribute('data-menu-id');

		// Get the link's name from its contents
		const target = event.currentTarget as HTMLElement;
		const label = (target.textContent || '').trim();

		// If this link has children, render updated mobile menu
		if (dataMenuID) {
			this.menuData = await this.adaptor.getNavigationLevel(dataMenuID);
			const menu = this.displayNavLevel(this.menuData);

			this.mobileNav.append(menu);
			this.focusTrap.toggleTrap(true, this.mobileNav);
		}

		// Dispatch custom LinkClick event
		this.element.dispatchEvent(
			this.customEvents['linkclick']({
				action: action || null,
				data: this.menuData,
				label: label || null,
				index: index || null,
			})
		);
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
		this.sectionParent = data.parent;

		const menu = this.createDom('ul', ['nci-header-mobilenav__list']);

		// Create either link to new page (makeMenuLink) or
		// Create button which opens the next level of the mobile menu (makeMenuNode)
		const childItems = items.map((item, index) => {
			index = this.sectionParent ? index + 1 : index;
			return item.hasChildren
				? this.makeMenuNode(item, index)
				: this.makeMenuLink(item, index);
		});

		// if the parent item in our return data is not a root path
		if (this.sectionParent) {
			const menuList = this.createDom('ul', ['nci-header-mobilenav__list']);

			// make parent the back to menu link
			const menuBack = this.makeBackNode(this.sectionParent);
			menu.append(menuBack);

			// Navigation List underneath the Main Menu / Back buttons
			const menuHolder = this.createDom('li', [
				'nci-header-mobilenav__list-holder',
			]);
			menuHolder.append(menuList);

			const exploreSection = this.makeMenuLink(data, 0);
			menuList.append(exploreSection);

			menu.append(menuHolder);

			menuList.append(...childItems);
		} else {
			// else it's the default menu
			menu.append(...childItems);
		}

		// Not Loading / Hide Loader
		this.mobileNav.ariaBusy = 'false';
		this.loader.classList.add('hidden');
		return <HTMLElement>menu;
	}

	/**
	 * Create Back Button for current section menu
	 *
	 * @private
	 */
	private makeBackNode(item: MobileMenuItem): HTMLElement {
		const dataMenuID = this.adaptor.useUrlForNavigationId ? item.path : item.id;
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
		linkLabel.innerHTML = item.label;

		linkLabel.addEventListener(
			'click',
			(this.linkClickListener = (event) => this.handleLinkClick(event, 'Back')),
			true
		);

		listItem.append(linkLabel);
		return <HTMLElement>listItem;
	}

	/**
	 * Create section node links
	 *
	 * @param {MobileMenuItem} item for link node
	 *
	 * @param index
	 * @private
	 */
	private makeMenuNode(item: MobileMenuItem, index: number): HTMLElement {
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

		listItem.addEventListener(
			'click',
			(this.linkClickListener = (event) =>
				this.handleLinkClick(event, 'Child', index)),
			true
		);

		listItem.append(linkLabel);
		return <HTMLElement>listItem;
	}

	/**
	 * Create section nav links
	 *
	 * @param {MobileMenuItem} item for link node
	 * @param {number} index Index of item in MobileMenuData object
	 * @private
	 */
	private makeMenuLink(item: MobileMenuItem, index: number): HTMLElement {
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

		// Close the Menu on Page Navigation
		linkItem.addEventListener(
			'click',
			(this.menuCloseEventListener = () => this.handleCloseMenu('Close')),
			true
		);

		listItem.addEventListener(
			'click',
			(this.linkClickListener = (event) =>
				this.handleLinkClick(event, 'Child', index)),
			true
		);

		listItem.append(linkItem);
		return <HTMLElement>listItem;
	}

	/**
	 * Create Dom Element with proper class names and options.
	 *
	 * @param {string} dom Dom element you are creating
	 * @param {string[]} classes Classnames in an array
	 * @param {CreateDomOptions[]} options Any other options to be set to the element
	 * @return {Element}
	 * @private
	 */
	private createDom(
		dom: string,
		classes?: string[],
		options?: CreateDomOptions[]
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
				element.setAttribute(key as string, value as string);
			});
		}
		return element;
	}

	/**
	 * Create custom events for the mobile menu.
	 *
	 * The default settings for the mobile menu exposes these events:
	 * - nci-header:mobile-menu:open
	 * - nci-header:mobile-menu:close
	 * - nci-header:mobile-menu:linkclick
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['close', 'open', 'linkclick'];
		[...events].forEach((event) => {
			this.customEvents[event] = (detail: unknown) =>
				new CustomEvent(`nci-header:mobile-menu:${event}`, {
					bubbles: true,
					detail,
				});
		});
	}
}
