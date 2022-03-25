import { SiteAlertCloseButtonOptions } from './site-alert-close-button-options';

/**
 * Add a close button to existing components.
 *
 * DEVELOPMENT NOTE: This utility component was built for NCISiteAlert, but
 * should be expanded to other components that need similar functionality. For
 * now, if other components use similar functionality, duplicate the code. In
 * the future, after more components are built, and better requirements have
 * been established, combine all components functionality into one.
 */
export class SiteAlertCloseButton {
	/** The component that contains collapsible sections. */
	protected element: HTMLElement;
	/** Optional settings for the component. */
	protected options: SiteAlertCloseButtonOptions;
	/** The close button. */
	private readonly button: HTMLButtonElement;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Callback for close event.  */
	private eventListener: EventListener = () => this.handleClose();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCISiteAlertOptions} options Optional settings for component generation.
	 * @protected
	 */
	public constructor(
		element: HTMLElement,
		options: SiteAlertCloseButtonOptions
	) {
		this.element = element;
		this.options = options;
		this.button = this.createButton();
		this.initialize();
	}

	/**
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Remove listeners
		this.removeEventListeners();

		// Reset hidden site alert
		this.element.style.display = '';

		// Remove button
		this.button.remove();
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
		button.classList.add(
			'usa-alert__nci-button',
			this.options.closeButtonClass
		);
		button.setAttribute('aria-label', this.options.closeAriaLabel);

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
		const cookie = document.cookie
			.match(`(^|;)\\s*NCISiteAlert${this.element.id}\\s*=\\s*([^;]+)`)
			?.pop();

		if (cookie === 'hidden') {
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
		document.cookie = `NCISiteAlert${this.element.id}=hidden; Path=${this.options.closeCookiePath}`;
		this.hideSiteAlert();
		this.element.dispatchEvent(this.customEvents['close']);
	}

	/**
	 * Create custom events for SiteAlertCloseButton.
	 *
	 * The default settings for NCISiteAlert, exposes these events:
	 * - usa-site-alert:close-button:close.
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		this.customEvents['close'] = new CustomEvent(
			`${this.options.closeEventListenerLabel}:close`,
			{
				detail: this.element,
			}
		);
	}
}
