import { NCICloseButtonOptions } from './nci-close-button-options';

/**
 * Add a close button to existing components.
 *
 * DEVELOPMENT NOTE: This utility component was built for NCISiteAlert, but
 * should be expanded to other components that need similar functionality. For
 * now, if other components use similar functionality, duplicate the code. In
 * the future, after more components are built, and better requirements have
 * been established, combine all components functionality into one.
 */
export class NCICloseButton {
	/** The component that contains collapsible sections. */
	protected element: HTMLElement;
	/** Optional settings for the component. */
	protected options: NCICloseButtonOptions;
	/** The close button. */
	private readonly button: HTMLButtonElement;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Callback for close event.  */
	private eventListener: EventListener = () => this.handleClose();
	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCICloseButton> = new Map<
		HTMLElement,
		NCICloseButton
	>();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCISiteAlertOptions} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(element: HTMLElement, options: NCICloseButtonOptions) {
		this.element = element;
		this.options = options;
		this.button = this.createButton();

		const existingComponent = NCICloseButton._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		NCICloseButton._components.set(this.element, this);
		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCISiteAlertOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options: NCICloseButtonOptions
	): NCICloseButton {
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
		// Remove listeners
		this.removeEventListeners();

		// Unset cookie
		document.cookie = `NCISiteAlert=; Path=${this.options.cookiePath}; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;

		// Reset hidden site alert
		this.element.style.display = '';

		// Remove button
		this.button.remove();

		// Remove element
		NCICloseButton._components.delete(this.element);
	}

	/**
	 * Finds the close button and adds event listeners and custom events.
	 * @private
	 */
	private initialize(): void {
		this.hideSiteAlert();
		this.createCustomEvents();
		this.addButton();
		this.addEventListeners();
	}

	/**
	 * Creates new close button.
	 * @private
	 */
	private createButton(): HTMLButtonElement {
		const button = document.createElement('button');
		button.classList.add('usa-alert__nci-button', this.options.buttonClass);
		button.setAttribute('aria-label', this.options.ariaLabel);

		// TODO be better
		button.innerHTML +=
			'<svg class="usa-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0" transform="translate(1 1)"/></svg>';

		return button;
	}

	/**
	 * Hides site alert if the cookie is present.
	 * @private
	 */
	private hideSiteAlert(): void {
		if (document.cookie.indexOf(`NCISiteAlert=${this.element.id}`) === 0) {
			this.element.style.display = 'none';
		}
	}

	/**
	 * Add button to element.
	 * @private
	 */
	private addButton(): void {
		const alert = this.element.querySelector('.usa-alert');
		(<Element>alert).append(this.button);
	}

	/**
	 * Adds event listeners for the close button.
	 * @private
	 */
	private addEventListeners(): void {
		this.button.addEventListener('click', this.eventListener);
	}

	/**
	 * Removes event listeners for the close button.
	 * @private
	 */
	private removeEventListeners(): void {
		this.button.removeEventListener('click', this.eventListener);
	}

	/**
	 * Handles on close by dispatching a custom on close event to be used by
	 * components to detect when the close button is clicked.
	 *
	 * @private
	 */
	private handleClose(): void {
		document.cookie = `NCISiteAlert=${this.element.id}; Path=${this.options.cookiePath}`;
		this.hideSiteAlert();
		this.element.dispatchEvent(this.customEvents['close']);
	}

	/**
	 * Create custom events for NCICloseButton.
	 *
	 * The default settings for NCISiteAlert, exposes these events:
	 * - usa-site-alert:close-button:close.
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		this.customEvents['close'] = new CustomEvent(
			`${this.options.eventListenerLabel}:close`,
			{
				detail: this.element,
			}
		);
	}
}
