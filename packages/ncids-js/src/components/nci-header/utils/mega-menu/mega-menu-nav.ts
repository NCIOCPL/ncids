import { FocusTrap } from '../focus-trap';
import { MegaMenuAdaptor } from './mega-menu-adaptor';

export class MegaMenuNav {
	/** The component that contains header section. */
	private readonly element: HTMLElement;
	/** Mega menu adaptor */
	private readonly adaptor: MegaMenuAdaptor;
	/** Currently active button. */
	private activeButton: HTMLButtonElement | null = null;
	/** Currently active MegaMenu. */
	private activeMenu: HTMLElement | null = null;
	/** Array of generated navbar buttons from links. */
	private buttons: HTMLButtonElement[] = [];
	/** Array of onclick button event listeners. */
	private buttonClickEventListeners: EventListener[] = [];
	/** Mega menu DOM. */
	private content: HTMLElement;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Focus Trap class for Mega Menus*/
	private focusTrap: FocusTrap;
	/** Initial link elements. */
	private links: HTMLAnchorElement[] = [];

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
		this.initialize();
	}

	/**
	 * Resets component and primary navigation to a clean state before the init().
	 */
	public unregister(): void {
		// Reset links
		this.buttons.forEach((button, index) => {
			button.replaceWith(this.links[index]);
		});

		// Remove event listeners
		this.removeEventListeners();
	}

	/**
	 * Replaces primary item links as buttons, fetches menu content, and adds
	 * custom events and event listeners for the mega menu.
	 *
	 * @private
	 */
	private initialize(): void {
		const listItems: NodeListOf<HTMLLIElement> = this.element.querySelectorAll(
			'.nci-header-nav__primary-item'
		);

		listItems.forEach((listItem: HTMLLIElement, index: number) => {
			this.links[index] = <HTMLAnchorElement>listItem.firstElementChild;
			this.buttons[index] = this.createPrimaryButtons(index);
			this.createCustomEvents();
			this.addButtonEventListeners(index);
		});

		this.addOffsetMenuListeners();
	}

	/**
	 * Creates the primary navigation buttons from the link element passed into
	 * it and adds aria tags.
	 *
	 * @param {number} index index of current list item being created.
	 * @private
	 */
	private createPrimaryButtons(index: number): HTMLButtonElement {
		const link = this.links[index];
		const button = document.createElement('button');
		button.innerHTML = link.innerHTML;
		button.classList.add('usa-button', 'nci-header-nav__primary-button');
		button.setAttribute('aria-expanded', 'false');

		const id = link.getAttribute('data-menu-id');
		if (id) {
			button.setAttribute('data-menu-id', id);
			button.setAttribute('aria-controls', `menu-${id}`);
		}

		const href = link.getAttribute('href');
		if (href) {
			button.setAttribute('data-href', href);
			button.setAttribute(
				'aria-controls',
				`menu-${href.toString().replace(/[^\w\s]/gi, '')}`
			);
		}

		link.replaceWith(button);
		return button;
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
		/*
		 * Note: Jest dom says this test is missing, but it's explicitly being tested in
		 * NCI Extended Header - Mega Menu
		 *	✓ should toggle menu visibility on click
		 */
		if (this.activeButton && this.activeMenu) {
			// Toggle focus trap
			this.focusTrap.toggleTrap(false, this.activeButton);

			// Remove active button
			this.activeButton.classList.remove('usa-current');
			this.activeButton.setAttribute('aria-expanded', 'false');
			this.activeButton = null;

			// collapse and remove menu
			this.activeMenu.classList.add('hidden');
			this.activeMenu.setAttribute('aria-hidden', 'true');
			this.activeMenu.remove();
			this.activeMenu = null;
		}

		// Dispatch event
		this.element.dispatchEvent(this.customEvents['collapse']);
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
		this.activeButton.classList.add('usa-current');

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
		this.element.dispatchEvent(this.customEvents['expand']);
	}

	/**
	 * Fetches data on clicked button element and attaches the menu to the DOM.
	 *
	 * @param {HTMLButtonElement} button Clicked button.
	 * @private
	 */
	private async createMenu(button: HTMLButtonElement) {
		const path = this.adaptor.useUrlForNavigationId
			? <string>button.getAttribute('data-href')
			: <string>button.getAttribute('data-menu-id');
		const results = await this.adaptor.getMegaMenuContent(path);

		// Programmatically create unique id
		const id = `menu-${path.toString().replace(/[^\w\s]/gi, '')}`;
		this.content = results;
		this.content.setAttribute('id', id);
		this.content.classList.add('hidden');

		// Append menu
		button.after(this.content);

		// Set button aria-controls to new content
		button.setAttribute('aria-controls', id);
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 *
	 * @param {number} index index of looping through each list item
	 * @private
	 */
	private addButtonEventListeners(index: number): void {
		this.buttonClickEventListeners[index] = async (event: Event) =>
			this.handleButtonClick(event);
		this.buttons[index].addEventListener(
			'click',
			this.buttonClickEventListeners[index]
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
	 * Removes mega menu event listeners.
	 * @private
	 */
	private removeEventListeners(): void {
		this.buttons.forEach((button, index) => {
			button.removeEventListener(
				'click',
				this.buttonClickEventListeners[index]
			);
		});
		document.removeEventListener('click', this.handleOffsetMenuClick, false);
		document.removeEventListener('keydown', this.handleOffsetKeypress, false);
	}

	/**
	 * Create custom events for NCIMegaMenu.
	 *
	 * The default settings for NCISiteAlert exposes these events:
	 * - nci-header:mega-menu:collapse
	 * - nci-header:mega-menu:expand
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['collapse', 'expand'];
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
