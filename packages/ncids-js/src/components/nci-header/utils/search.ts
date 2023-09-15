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
	/** Search Form Element */
	public searchForm: HTMLFormElement;
	/** Search Input Box  */
	protected searchField: HTMLInputElement;
	/** Callback for searchbar focus  */
	protected searchInputFocusHandler: EventListener;
	/** Callback for unfocusing searchbar (blur) */
	protected searchInputBlurHandler: EventListener;

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} searchForm parent DOM where search is contained.
	 * @public
	 */
	public constructor(
		searchForm: HTMLFormElement,
		searchInputFocusHandler: EventListener,
		searchInputBlurHandler: EventListener
	) {
		this.searchForm = searchForm;
		this.searchInputBlurHandler = searchInputBlurHandler;
		this.searchInputFocusHandler = searchInputFocusHandler;
		this.searchField = <HTMLInputElement>(
			this.searchForm.querySelector('#nci-header-search__field')
		);

		if (this.searchField) {
			this.initialize();
		}
	}

	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		this.searchField.addEventListener(
			'focus',
			this.searchInputFocusHandler,
			false
		);
		this.searchField.addEventListener(
			'focusout',
			this.searchInputBlurHandler,
			false
		);
	}

	/**
	 * Validates the strucutre of the search form
	 * @public
	 */
	public static isSearchFormValid(): boolean {
		const searchForm = document.querySelector('form.nci-header-search');
		const searchInput = document.querySelector('#nci-header-search__field');
		const searchButton = document.querySelector(
			'button.nci-header-search__search-button'
		);
		if (searchForm && searchInput && searchButton) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Removes all events from searchbox
	 * @public
	 */
	public unregister(): void {
		this.searchField.removeEventListener(
			'focus',
			this.searchInputFocusHandler,
			false
		);
		this.searchField.removeEventListener(
			'focusout',
			this.searchInputBlurHandler,
			false
		);
	}
}
