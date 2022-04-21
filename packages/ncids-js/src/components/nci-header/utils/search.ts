import { FocusTrap } from './focustrap';

/**
 * NCI Search
 *
 *
 * Initialize the Search component:
 * ```
 * Search.element.create(HTMLElement);
 * ```
 */
export class Search {
	/** The parent DOM element for overlay placement. */
	protected element: HTMLElement;
	/** The parent DOM that contains search form. */
	protected search!: HTMLElement;
	/** Search Input Box  */
	protected searchField!: HTMLInputElement;
	/** Focus Trap class for mobile search*/
	private focusTrap: FocusTrap;
	/** Mobile Search Active  */
	protected mobileActive!: boolean;
	/** Callback for canceling search.  */
	private resizeListner: EventListener = (event: Event) =>
		this.handleResize(<Event>event);
	/** Callback for canceling search.  */
	private cancelListner: EventListener = (event: Event) =>
		this.handleCancel(<Event>event);
	/** Callback activating search overlay.  */
	private searchListner: EventListener = (event: Event) =>
		this.handleSearch(<Event>event);

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element parent DOM where search is contained.
	 * @public
	 */
	public constructor(element: HTMLElement) {
		this.element = element;
		// container for the search input box and buttons
		this.search = <HTMLInputElement>(
			element.querySelector('.nci-header-nav__secondary')
		);
		// input textbox element
		this.searchField = <HTMLInputElement>(
			this.element.querySelector('#nci-header-search__field')
		);

		this.focusTrap = new FocusTrap(this.search);

		// check screen size to activate menu functionality for mobile
		const header = <HTMLElement>document.getElementById('nci-header');
		const screenWidth = header?.clientWidth;
		this.mobileActive = screenWidth > 900 ? true : false;

		this.initialize();
	}

	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		this.searchField.addEventListener('focus', this.searchListner, false);
		window.addEventListener('resize', this.resizeListner, false);
	}

	/**
	 * Removes all events from searchbox
	 * @public
	 */
	public unregister(): void {
		this.searchField.removeEventListener('focus', this.searchListner, false);
		window.removeEventListener('resize', this.resizeListner, false);
	}

	/**
	 * Click handler for activating the overlays
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 * @private
	 */
	private handleResize(event: Event): void {
		event.preventDefault();
		// check for browser resize
		const header = <HTMLElement>document.getElementById('nci-header');
		const screenWidth = header?.clientWidth;
		this.mobileActive = screenWidth > 900 ? true : false;
	}

	/**
	 * Click handler for activating the overlays
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 * @private
	 */
	private handleSearch(event: Event): void {
		event.preventDefault();
		if (!this.mobileActive) {
			this.createOverlay();
			this.mobileActive = true;
		}
	}

	/**
	 * Click handler for canceling search
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 * @private
	 */
	private handleCancel(event: Event): void {
		event.preventDefault();
		this.unsetOverlay();
	}

	/**
	 * Create overlay to hold mobile search
	 *
	 * @private
	 */
	private createOverlay(): void {
		const currentSize: number = +document.body.offsetWidth;
		if (currentSize > 1024) return;

		const searchOverlay = this.createDom(
			'div',
			['nci-header-search__mobile-overlay'],
			[]
		);
		this.element.append(searchOverlay);

		// set form position in center
		const searchForm = <Element>this.search.querySelector('.nci-header-search');
		this.searchField.setAttribute('style', 'border-right:1px solid #1b1b1b;');

		// hide submit button
		const submitButton = <Element>(
			this.search.querySelector('.nci-header-search__search-button')
		);
		submitButton.setAttribute('style', 'display:none;');
		// hide menu button
		const menuButton = <Element>(
			this.element.querySelector('.nci-header-mobilenav__open-btn')
		);
		menuButton.setAttribute('style', 'visibility:hidden;');

		// make cancel link
		const cancelButton = this.createDom(
			'a',
			['usa-link', 'search-button__cancel'],
			[{ href: '#' }]
		);
		cancelButton.innerHTML = 'Cancel';
		cancelButton.addEventListener('click', this.cancelListner, false);
		searchForm.append(cancelButton);

		this.focusTrap.toggleTrap(true, this.search);
	}

	/**
	 * Removes all things from search when active
	 *
	 * @private
	 */
	private unsetOverlay(): void {
		this.focusTrap.toggleTrap(false, this.search);
		this.searchField.setAttribute('style', '');

		const searchOverlay = <Element>(
			this.element.querySelector('.nci-header-search__mobile-overlay')
		);
		searchOverlay.remove();

		const cancelButton = <Element>(
			this.search.querySelector('.search-button__cancel')
		);
		cancelButton.removeEventListener('click', this.cancelListner, false);
		cancelButton.remove();
		const submitButton = <Element>(
			this.search.querySelector('.nci-header-search__search-button')
		);
		submitButton.setAttribute('style', '');
		const menuButton = <Element>(
			this.element.querySelector('.nci-header-mobilenav__open-btn')
		);
		menuButton.setAttribute('style', '');
		this.mobileActive = false;
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
