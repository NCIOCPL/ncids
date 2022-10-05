/**
 * NCI Feature Card Row (3 Cards)
 * Displays a row of 3 (on desktop) feature cards with image, title, description
 * Displays cards stacked vertically with image inline and on the left for tablet
 * Display cards stacked vertically with no image for mobile
 */
export class NCIFeatureCardRow {
	/** The component that contains header section. */
	protected element: HTMLElement;
	/** The options for Header and MegaMenu. */
	//protected options: NCIFeatureCardRowOptions;

	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCIFeatureCardRow> = new Map<
		HTMLElement,
		NCIFeatureCardRow
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIExtendedHeaderWithMegaMenuOptions} options Component being created.
	 * @protected
	 */
	protected constructor(element: HTMLElement) {
		this.element = element;

		const existingComponent = NCIFeatureCardRow._components.get(this.element);

		if (existingComponent) {
			existingComponent.unregister();
		}

		NCIFeatureCardRow._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIExtendedHeaderWithMegaMenuOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(element: HTMLElement): NCIFeatureCardRow {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element);
	}

	/**
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Delete component
		NCIFeatureCardRow._components.delete(this.element);
	}
}
