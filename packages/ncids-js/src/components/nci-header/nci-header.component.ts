/**
 * Interface for options for the Header component.
 *
 * @typedef NCIHeaderOptions
 * @prop {string} headerOptions Dummy prop for init/testing
 */

export interface NCIHeaderOptions {
	headerOptions?: string;
}

export class NCIHeader {
	protected element: HTMLElement;
	protected options: NCIHeaderOptions;

	private static _components: Map<HTMLElement, NCIHeader> = new Map<
		HTMLElement,
		NCIHeader
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @protected
	 */
	protected constructor(element: HTMLElement, options?: NCIHeaderOptions) {
		this.element = element;
		this.options = options || {};

		const existingComponent = NCIHeader._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIHeader._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIHeaderOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options?: NCIHeaderOptions
	): NCIHeader {
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
		NCIHeader._components.delete(this.element);
	}
	/**
	 * Sets up component by initializing.
	 * @private
	 */
	private initialize(): void {
		console.log('init');
	}
}
