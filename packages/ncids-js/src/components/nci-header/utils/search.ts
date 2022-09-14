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
	/** Callback for searchbar focus  */
	private searchListener: EventListener = (event: Event) =>
		this.handleSearch(<Event>event);
	/** Callback for unfocusing searchbar (blur) */
	private searchBlurListener: EventListener = (event: Event) =>
		this.handleSearchBlur(<Event>event);

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

		this.initialize();
	}

	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		this.searchField.addEventListener('focus', this.searchListener, false);
		this.searchField.addEventListener(
			'focusout',
			this.searchBlurListener,
			false
		);
	}

	/**
	 * Removes all events from searchbox
	 * @public
	 */
	public unregister(): void {
		this.searchField.removeEventListener('focus', this.searchListener, false);
		this.searchField.removeEventListener(
			'focusout',
			this.searchBlurListener,
			false
		);
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
		this.search.classList.add('search-focused');
	}

	/**
	 * Blur handler for removing input focus classes
	 *
	 * @param {Event} event Event from document event handler.
	 *
	 * @private
	 */
	private handleSearchBlur(event: Event): void {
		event.preventDefault();
		this.search.classList.remove('search-focused');
	}
}
