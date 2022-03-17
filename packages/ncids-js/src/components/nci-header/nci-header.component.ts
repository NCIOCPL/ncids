import { NCIExtendedHeaderWithMegaMenuOptions } from './nci-header-options';

export class NCIExtendedHeaderWithMegaMenu {
	protected element: HTMLElement;
	protected options?: NCIExtendedHeaderWithMegaMenuOptions;

	private static _components: Map<
		HTMLElement,
		NCIExtendedHeaderWithMegaMenu
	> = new Map<HTMLElement, NCIExtendedHeaderWithMegaMenu>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @protected
	 */
	protected constructor(
		element: HTMLElement,
		options?: NCIExtendedHeaderWithMegaMenuOptions
	) {
		this.element = element;
		this.options = options;

		const existingComponent = NCIExtendedHeaderWithMegaMenu._components.get(
			this.element
		);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIExtendedHeaderWithMegaMenu._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIExtendedHeaderWithMegaMenuOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options?: NCIExtendedHeaderWithMegaMenuOptions
	): NCIExtendedHeaderWithMegaMenu {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element, options);
	}

	/**
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Remove element
		NCIExtendedHeaderWithMegaMenu._components.delete(this.element);
	}
	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		console.log('init');
	}
}
