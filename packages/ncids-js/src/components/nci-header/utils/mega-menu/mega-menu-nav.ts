import { FocusTrap } from '../focus-trap';
import { MegaMenuAdaptor } from './mega-menu-adaptor';
import type MegaMenuDisplayEventDetails from './mega-menu-display-event-details';
import type PrimaryNavClickEventDetails from './primary-nav-click-event-details';

/**
 * Represents an item in the navigation bar.
 */
type NavBarItemLink = {
	type: 'NavItemLink';
	link: HTMLAnchorElement;
	linkListener: EventListener;
};

/**
 * Represents an item in the navigation bar with a MegaMenu.
 */
type NavBarMMItem = {
	type: 'NavItemWithMM';
	link: HTMLAnchorElement;
	button: HTMLButtonElement;
	buttonListener: EventListener;
};

/**
 * Combined type with all the types that can be in the navigation bar.
 */
type NavBarItem = NavBarItemLink | NavBarMMItem;

/**
 * Type guard to check if a NavBarItem is a NavBarMMItem.
 *
 * @param {NavBarItem} item the item to check
 * @returns True if it is a NavBarMMItem, false if not.
 */
const isNavBarMMItem = (item: NavBarItem): item is NavBarMMItem =>
	item.type === 'NavItemWithMM';

/**
 * Type guard to check if a NavBarItem is a NavBarItemLink.
 *
 * @param {NavBarItem} item the item to check
 * @returns True if it is a NavBarItemLink, false if not.
 */
const isNavBarItemLink = (item: NavBarItem): item is NavBarItemLink =>
	item.type === 'NavItemLink';

export class MegaMenuNav {
	/** The component that contains header section. */
	private readonly element: HTMLElement;
	/** Mega menu adaptor */
	private readonly adaptor: MegaMenuAdaptor;
	/** Currently active button. */
	private activeButton: HTMLButtonElement | null = null;
	/** Currently active MegaMenu. */
	private activeMenu: HTMLElement | null = null;
	/** Mega menu DOM. */
	private content: HTMLElement;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: {
		[key: string]: (
			detail: PrimaryNavClickEventDetails | MegaMenuDisplayEventDetails
		) => CustomEvent;
	} = {};
	/** Focus Trap class for Mega Menus*/
	private focusTrap: FocusTrap;
	/** Initial link elements. */
	private navItems: NavBarItem[] = [];
	/** Loading spinner */
	protected loader = document.createElement('div');
	/** nci-megamenu container for loading spinner */
	protected loaderContainer = document.createElement('div');

	/** Callback for handling clicking off the menus.  */
	private offsetMenuClickListener: EventListener = (event) =>
		this.handleOffsetMenuClick(event);
	/** Callback for handling clicking off the menus.  */
	private offsetMenuKeyPressListener: EventListener = (event) =>
		this.handleOffsetKeypress(<KeyboardEvent>event);

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} primaryNavElement Primary navigation found in NCI header.
	 * @param {MegaMenuAdaptor} adaptor Mega menu adaptor passed from containing NCI Header component.
	 */
	public constructor(primaryNavElement: HTMLElement, adaptor: MegaMenuAdaptor) {
		this.element = primaryNavElement;
		this.adaptor = adaptor;
		this.focusTrap = new FocusTrap(this.element);
		this.content = document.createElement('template');
		this.loader.classList.add('nci-is-loading', 'hidden');
		this.loaderContainer.classList.add('nci-megamenu', 'hidden');
		this.loaderContainer.ariaLive = 'polite';
		this.loaderContainer.ariaBusy = 'true';
		this.loaderContainer.ariaAtomic = 'true';
		this.loaderContainer.appendChild(this.loader);
		this.initialize();
	}

	/**
	 * Resets component and primary navigation to a clean state before the init().
	 */
	public unregister(): void {
		// Reset links
		this.navItems.forEach((item) => {
			this.unregisterMenuItem(item);
		});

		// Remove other event listeners
		this.removeEventListeners();

		// Remove generated elements
		this.loader.remove();
		this.loaderContainer.remove();
	}

	/**
	 * Unregisters a navigation item.
	 * @param {NavBarItem} item the remove any added elements from.
	 */
	private unregisterMenuItem(item: NavBarItem): void {
		if (isNavBarMMItem(item)) {
			item.button.removeEventListener('click', item.buttonListener);
			item.button.replaceWith(item.link);
		} else if (isNavBarItemLink(item)) {
			item.link.removeEventListener('click', item.linkListener);
		}
	}

	/**
	 * Replaces primary item links as buttons, fetches menu content, and adds
	 * custom events and event listeners for the mega menu.
	 *
	 * @private
	 */
	private initialize(): void {
		const listItems: NodeListOf<HTMLAnchorElement> = this.element.querySelectorAll(
			'.nci-header-nav__primary-link'
		);

		this.navItems = Array.from(listItems).map((item) => {
			const button = this.createNavButton(item);

			// Megamenu is disabled for this item.
			if (button === null) {
				const linkListener = this.addLinkEventListeners(item);
				return {
					type: 'NavItemLink',
					link: item,
					linkListener,
				};
			}

			const buttonListener = this.addButtonEventListeners(button);

			return {
				type: 'NavItemWithMM',
				link: item,
				button,
				buttonListener,
			};
		});

		this.createCustomEvents();
		this.addOffsetMenuListeners();
	}

	/**
	 * Create a primary navigation button from the link element passed into
	 * it and adds aria tags.
	 *
	 * @param {HTMLAnchorElement} link the link to replace.
	 * @returns the button, or null if the megamenu is disabled.
	 * @private
	 */
	private createNavButton(link: HTMLAnchorElement): HTMLButtonElement | null {
		if (link.dataset.megamenuDisabled?.toLowerCase() === 'true') {
			return null;
		}

		const href = link.href;

		if ((href == null || href === '') && this.adaptor.useUrlForNavigationId) {
			const label = (link.textContent ?? '').trim();
			console.error(
				`Navigation item, ${label}, does not have a data-menu-id element and adaptor is set to use ID.`
			);
			return null;
		}

		const id = link.dataset.menuId;
		if (id == null && !this.adaptor.useUrlForNavigationId) {
			console.error(
				`Navigation item, ${href}, does not have a data-menu-id element and adaptor is set to use ID.`
			);
			return null;
		}

		const button = document.createElement('button');
		button.innerHTML = link.innerHTML;
		button.classList.add('usa-button', 'nci-header-nav__primary-button');
		button.setAttribute('aria-expanded', 'false');

		if (link.classList.contains('usa-current')) {
			button.classList.add('usa-current');
		}

		if (href) {
			button.setAttribute('data-href', href);
			button.setAttribute(
				'aria-controls',
				`menu-${href.toString().replace(/[^\w\s]/gi, '')}`
			);
		}

		if (id) {
			button.setAttribute('data-menu-id', id);
			button.setAttribute('aria-controls', `menu-${id}`);
		}

		link.replaceWith(button);
		return button;
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 *
	 * @param {HTMLButtonElement} button the button to add the listener to.
	 * @returns the event listener instance, to be used for removal later.
	 * @private
	 */
	private addButtonEventListeners(button: HTMLButtonElement): EventListener {
		const listener = async (event: Event) => this.handleButtonClick(event);
		button.addEventListener('click', listener);
		return listener;
	}

	/**
	 * Click handler for the toggle buttons.
	 *
	 * @param {Event} event Collapsible section toggling event.
	 * @private
	 */
	private async handleButtonClick(event: Event): Promise<void> {
		const button = <HTMLButtonElement>event.target;
		await this.toggleMegaMenu(button);
	}

	/**
	 * Sets up event listeners for primary nav click events.
	 *
	 * @param {HTMLAnchorElement} link the link to add the listener to.
	 * @returns the event listener instance, to be used for removal later.
	 * @private
	 */
	private addLinkEventListeners(link: HTMLAnchorElement): EventListener {
		const listener = async (event: Event) => this.handleLinkClick(event);
		link.addEventListener('click', listener);
		return listener;
	}

	/**
	 * Click handler for the nav links.
	 *
	 * @param {Event} event Collapsible section toggling event.
	 * @private
	 */
	private async handleLinkClick(event: Event): Promise<void> {
		const link = <HTMLAnchorElement>event.currentTarget;
		const label = (link.textContent ?? '').trim();
		this.element.dispatchEvent(
			this.customEvents['linkclick']({
				label,
				href: link.href ?? '',
				link,
			})
		);
	}

	/**
	 * Click handler for clicking outside of the menu.
	 *
	 * @param {Event} event Event from document event handler.
	 * @private
	 */
	private handleOffsetMenuClick(event: Event): void {
		if (this.activeButton && this.activeMenu) {
			const withinBoundaries = event.composedPath().includes(this.element);
			if (!withinBoundaries) {
				this.collapseMegaMenu();
			}
		}
	}

	/**
	 * Keypress handler for clicking outside of the menu.
	 *
	 * @param {Event} event Event from document event handler.
	 * @private
	 */
	private handleOffsetKeypress(event: KeyboardEvent): void {
		if (this.activeButton && this.activeMenu) {
			const isEscapePressed = event.key === 'Escape';
			if (isEscapePressed) {
				this.collapseMegaMenu();
			}
		}
	}

	/**
	 * Toggles the mega menu based on active state.
	 *
	 * @param {HTMLButtonElement} button Primary button element.
	 * @private
	 */
	private async toggleMegaMenu(button: HTMLButtonElement): Promise<void> {
		if (this.activeButton === button) {
			this.collapseMegaMenu();
		} else {
			if (this.activeButton) {
				this.collapseMegaMenu();
			}

			await this.expandMegaMenu(button);
		}
	}

	/**
	 * Collapses mega menu, removes current classes and aria attributes, and
	 * dispatches custom events.
	 *
	 * @private
	 */
	private collapseMegaMenu(): void {
		// The following is hard to test for conditional branching. It is here
		// because it *could* be null. Except it would not be null if this is
		// getting called.
		if (this.activeButton && this.activeMenu) {
			const collapseDetails = this.getDetailsForExpandCollapse(
				this.activeButton
			);

			// Toggle focus trap
			this.focusTrap.toggleTrap(false, this.activeButton);

			// Remove active button
			this.activeButton.setAttribute('aria-expanded', 'false');
			this.activeButton = null;

			// collapse and remove menu
			this.activeMenu.classList.add('hidden');
			this.activeMenu.setAttribute('aria-hidden', 'true');
			this.activeMenu.remove();
			this.activeMenu = null;

			// Dispatch event
			this.element.dispatchEvent(
				this.customEvents['collapse'](collapseDetails)
			);
		}
	}

	/**
	 * Lazy loads data when users click on primary button.
	 *
	 * Expands the mega menu, updates classes and aria attributes, and
	 * dispatches custom events.
	 *
	 * @param {HTMLButtonElement} button Clicked button.
	 * @private
	 */
	private async expandMegaMenu(button: HTMLButtonElement): Promise<void> {
		await this.createMenu(button);

		// Toggle focus trap
		this.focusTrap.toggleTrap(true, button);

		// Set new active button
		this.activeButton = button;
		this.activeButton.setAttribute('aria-expanded', 'true');

		// Expand menu
		const menuId = this.activeButton.getAttribute('aria-controls');
		this.activeMenu = this.element.querySelector(`#${menuId}`);

		/*
		 * Note: Jest dom says this test is missing, but it's explicitly being tested in
		 * NCI Extended Header - Mega Menu
		 *	✓ should toggle menu visibility on click
		 */
		if (this.activeMenu) {
			this.activeMenu.classList.remove('hidden');
			this.activeMenu.setAttribute('aria-hidden', 'false');
			this.activeMenu.hidden = false;
		}

		// Dispatch event
		this.element.dispatchEvent(
			this.customEvents['expand'](
				this.getDetailsForExpandCollapse(this.activeButton)
			)
		);
	}

	/**
	 * Helper to get the details for an expand/collapse event.
	 * @param {HTMLButtonElement} button The navigation button that is being triggered.
	 * @returns The event details.
	 */
	private getDetailsForExpandCollapse(
		button: HTMLButtonElement
	): MegaMenuDisplayEventDetails {
		const btnText = (button.textContent ?? '').trim();
		const id = this.getMenuIdForButton(button);

		return {
			label: btnText,
			id,
			button,
		};
	}

	/**
	 * Fetches data on clicked button element and attaches the menu to the DOM.
	 *
	 * @param {HTMLButtonElement} button Clicked button.
	 * @private
	 */
	private async createMenu(button: HTMLButtonElement) {
		button.after(this.loaderContainer);

		const timer = setTimeout(() => {
			this.loader.classList.remove('hidden');
			this.loaderContainer.classList.remove('hidden');
		}, 1000);

		const path = this.getMenuIdForButton(button);
		const results = await this.adaptor.getMegaMenuContent(path);

		if (results) {
			clearTimeout(timer);
		}

		// Programmatically create unique id
		const id = `menu-${path.toString().replace(/[^\w\s]/gi, '')}`;
		this.content = results || document.createElement('div');
		this.content.setAttribute('id', id);
		this.content.classList.add('hidden');
		this.content.ariaLive = 'polite';
		this.content.ariaBusy = 'false';
		this.content.ariaAtomic = 'true';

		// Replace loading container with menu
		this.loader.classList.add('hidden');
		this.loaderContainer.classList.add('hidden');
		this.loaderContainer.replaceWith(this.content);

		// Set button aria-controls to new content
		button.setAttribute('aria-controls', id);
	}

	/**
	 * Gets the id for a button depending on the adaptor's useUrlForNavigationId.
	 *
	 * @param {HTMLButtonElement} button The button to get the ID from.
	 * @returns The id of the button, or and empty string if things went really wrong.
	 */
	private getMenuIdForButton(button: HTMLButtonElement): string {
		return (
			(this.adaptor.useUrlForNavigationId
				? button.dataset.href
				: button.dataset.menuId) ?? ''
		);
	}

	/**
	 * Closes the menu if the user clicks outside of the menu.
	 * @private
	 */
	private addOffsetMenuListeners(): void {
		document.addEventListener('click', this.offsetMenuClickListener, false);
		document.addEventListener(
			'keydown',
			this.offsetMenuKeyPressListener,
			false
		);
	}

	/**
	 * Removes navbar mega menu event listeners.
	 * @private
	 */
	private removeEventListeners(): void {
		document.removeEventListener('click', this.handleOffsetMenuClick, false);
		document.removeEventListener('keydown', this.handleOffsetKeypress, false);
	}

	/**
	 * Create custom events for mega menu.
	 *
	 * The default settings for the mega menu exposes these events:
	 * - nci-header:mega-menu:collapse
	 * - nci-header:mega-menu:expand
	 * - nci-header:primary-nav:linkclick
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['collapse', 'expand'];
		[...events].forEach((event) => {
			this.customEvents[event] = (detail: unknown) =>
				new CustomEvent(`nci-header:mega-menu:${event}`, {
					bubbles: true,
					detail,
				});
		});
		this.customEvents['linkclick'] = (detail: unknown) =>
			new CustomEvent(`nci-header:primary-nav:linkclick`, {
				bubbles: true,
				detail,
			});
	}
}
