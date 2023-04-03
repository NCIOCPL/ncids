import { SiteAlertCollapseOptions } from './site-alert-collapse-options';

/**
 * Add collapsible sections to existing components.
 *
 * DEVELOPMENT NOTE: This utility component was built for NCISiteAlert, but
 * should be expanded to other components that need similar functionality. For
 * now, if other components use similar functionality, duplicate the code. In
 * the future, after more components are built, and better requirements have
 * been established, combine all components functionality into one.
 */
export class SiteAlertCollapse {
	/** The component that contains collapsible sections. */
	protected element: HTMLElement;
	/** Optional settings for the component. */
	protected options: SiteAlertCollapseOptions;
	/** Button that can toggle its collapsible section. */
	private readonly button: HTMLButtonElement;
	/** Content in the site alert that can be collapsed. */
	private readonly collapsibleContent: HTMLElement;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Callback for handle toggle.  */
	private eventListener: EventListener = () => this.handleClick();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCISiteAlertOptions} options Optional settings for component generation.
	 * @protected
	 */
	public constructor(element: HTMLElement, options: SiteAlertCollapseOptions) {
		this.element = element;
		this.options = options;
		this.collapsibleContent = this.element.querySelector(
			'.usa-alert__nci-content'
		) as HTMLElement;

		this.button = this.createButton();
		this.initialize();
	}

	/**
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Set default state
		this.collapsibleContent.classList.remove('hidden');

		// Set aria atts
		this.toggleCollapseA11y();

		// Remove button
		this.button.remove();

		// Remove listeners
		this.removeEventListeners();
	}

	/**
	 * Finds collapsible sections, the buttons that triggers them, and adds event
	 * listeners and custom events.
	 * @private
	 *
	 * @todo automatically generate id for collapsible content and site alert element
	 */
	private initialize(): void {
		this.createCustomEvents();
		this.addButton();
		this.addEventListeners();

		const cookie = document.cookie
			.match(`(^|;)\\s*NCISiteAlert${this.element.id}\\s*=\\s*([^;]+)`)
			?.pop();

		if (!cookie) {
			this.toggleCollapse();
		} else {
			this.setFromCookie(cookie);
		}
	}

	/**
	 * Creates new toggling button (s?).
	 * @private
	 */
	private createButton(): HTMLButtonElement {
		const button = document.createElement('button');
		button.classList.add(
			'usa-alert__nci-button',
			this.options.collapseButtonClass
		);
		button.setAttribute('aria-controls', this.collapsibleContent.id);
		button.setAttribute('aria-expanded', 'false');
		button.setAttribute('aria-label', this.options.collapseAriaLabel);

		// TODO be better
		button.innerHTML =
			'<svg class="usa-icon" role="img" aria-hidden="true" viewBox="0 0 64 39"><path fill="currentColor" d="M.655 34.187c-.427-.437-.64-.937-.64-1.503 0-.566.213-1.067.64-1.502L30.542.756c.427-.436.918-.653 1.474-.653.555 0 1.048.218 1.474.653l29.884 30.426c.428.435.642.936.642 1.502s-.213 1.066-.642 1.501l-3.206 3.265c-.427.436-.919.653-1.475.653-.555 0-1.047-.217-1.475-.653L32.016 11.79 6.81 37.45c-.427.436-.919.653-1.474.653-.556 0-1.048-.217-1.475-.653L.655 34.187z"></path></svg>';
		return button;
	}

	/**
	 * Add button to element.
	 * @private
	 */
	private addButton(): void {
		const header = this.element.querySelector('.usa-alert__nci-header');
		(<Element>header).append(this.button);
	}

	/**
	 * Hides or shows collapsible content then updates accessible attributes
	 * and dispatches custom events.
	 *
	 * @private
	 */
	private toggleCollapse(): void {
		// Display
		this.collapsibleContent.classList.toggle('hidden');

		// Accessibility
		this.toggleCollapseA11y();

		// Dispatch events
		const event = this.collapsibleContent.classList.contains('hidden')
			? 'collapse'
			: 'expand';
		this.element.dispatchEvent(this.customEvents[event]);

		// Update cookie
		document.cookie = `NCISiteAlert${this.element.id}=${event}; Path=${this.options.collapseCookiePath}`;
	}

	/**
	 * Updates aria attributes based on `.hidden` class.
	 *
	 * @private
	 */
	private toggleCollapseA11y(): void {
		const hidden = this.collapsibleContent.classList.contains('hidden');
		this.button.setAttribute('aria-expanded', String(!hidden));

		const controls = this.button.getAttribute('aria-controls');
		const content = this.element.querySelector(`#${controls}`);
		(<HTMLElement>content).setAttribute('aria-hidden', String(hidden));
	}

	/**
	 * If cookie exists, sets the display to match cookie value.
	 * @param cookie
	 * @private
	 */
	private setFromCookie(cookie: string): void {
		if (cookie === 'collapse') {
			this.collapsibleContent.classList.add('hidden');
		} else if (cookie === 'expand') {
			this.collapsibleContent.classList.remove('hidden');
		}

		this.toggleCollapseA11y();
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 * @private
	 */
	private addEventListeners(): void {
		this.button.addEventListener('click', this.eventListener);
	}

	/**
	 * Removes event listeners for every possible button per collapsible.
	 * @private
	 */
	private removeEventListeners(): void {
		this.button.removeEventListener('click', this.eventListener);
	}

	/**
	 * Handles the on click event by toggling the collapsible section visibility.
	 *
	 * @private
	 */
	private handleClick(): void {
		this.toggleCollapse();
	}

	/**
	 * Create custom events for SiteAlertCollapse.
	 *
	 * The default settings for NCISiteAlert exposes these events:
	 * - usa-site-alert:content:collapse
	 * - usa-site-alert:content:expand
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['collapse', 'expand'];
		[...events].forEach((event) => {
			this.customEvents[event] = new CustomEvent(
				`${this.options.collapseEventListenerLabel}:${event}`,
				{
					detail: this.element,
				}
			);
		});
	}
}
