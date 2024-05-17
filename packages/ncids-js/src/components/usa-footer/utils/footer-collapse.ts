import { FooterCollapseOptions } from './footer-collapse-options';

/**
 * Add collapsible sections to existing components.
 */
export class FooterCollapse {
	/** Collapsible section element. */
	protected element: HTMLElement;
	/** Optional settings for the component. */
	protected options: FooterCollapseOptions;
	/** Button that can toggle its collapsible section. */
	private readonly collapseHeader: HTMLButtonElement;
	/** Initial heading element */
	private readonly heading: HTMLHeadingElement;
	/** Initial list element */
	private readonly list: HTMLUListElement;
	/** Header element on larger screens that cannot toggle collapse. */
	private readonly listHeader: HTMLSpanElement;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Callback for handle toggle.  */
	private clickEventListener: EventListener = () => this.handleClick();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLElement} element Collapsible section element.
	 * @param {FooterCollapseOptions} options Optional settings for the component.
	 * @protected
	 */
	public constructor(element: HTMLElement, options: FooterCollapseOptions) {
		this.element = element;
		this.options = options;
		this.collapseHeader = document.createElement('button');
		this.heading = <HTMLHeadingElement>(
			this.element.querySelector(`.${this.options.collapseButtonClass}`)
		);
		this.list = <HTMLUListElement>(
			this.element.querySelector('.usa-list--unstyled')
		);
		this.listHeader = document.createElement('span');
		this.initialize();
	}

	/**
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Set default state
		this.element.classList.remove('hidden');

		// Set aria atts
		this.toggleCollapseA11y(false);

		// Remove new elements
		const label = this.collapseHeader.innerHTML;
		this.collapseHeader.remove();
		this.listHeader.remove();

		// Reset list
		this.list.removeAttribute('id');
		this.list.removeAttribute('aria-label');

		// Reset header
		this.heading.classList.add(this.options.collapseButtonClass);
		this.heading.innerHTML = label;

		// Remove listeners
		this.removeEventListeners();
	}

	/**
	 * Finds collapsible sections, the buttons that triggers them, and adds event
	 * listeners and custom events.
	 * @private
	 */
	private initialize(): void {
		this.createCustomEvents();
		this.addEventListeners();
		this.updateDom();
		this.toggleCollapse(true);
	}

	/**
	 * Adds buttons, updates headers, and lists.
	 * @private
	 */
	private updateDom(): void {
		const label = this.heading.innerHTML;
		const id = label.replace(/ /g, '-').toLowerCase();

		// Update header
		this.heading.classList.remove(this.options.collapseButtonClass);
		this.heading.innerHTML = '';

		// Span header
		this.listHeader.classList.add(
			this.options.collapseButtonClass,
			'usa-footer__nci-list-header'
		);
		this.listHeader.innerHTML = label;

		// Button header
		this.collapseHeader.classList.add(
			this.options.collapseButtonClass,
			'usa-footer__nci-collapse-header'
		);
		this.collapseHeader.setAttribute('aria-controls', id);
		this.collapseHeader.setAttribute('aria-expanded', 'false');
		this.collapseHeader.innerHTML = label;

		// Update list
		this.list.setAttribute('id', id);
		this.list.setAttribute('aria-label', label);

		// Add new elements
		this.heading.append(this.listHeader);
		this.heading.append(this.collapseHeader);
	}

	/**
	 * Hides or shows collapsible content then updates accessible attributes
	 * and dispatches custom events.
	 *
	 * @private
	 */
	private toggleCollapse(hidden: boolean): void {
		const list = this.element.querySelector('.usa-list') as HTMLUListElement;

		// Display
		list.classList.toggle('hidden', hidden);

		// Accessibility
		this.toggleCollapseA11y(hidden);

		// Dispatch events
		const event = hidden ? 'collapse' : 'expand';
		this.element.dispatchEvent(this.customEvents[event]);
	}

	/**
	 * Updates aria attributes to match state of collapse.
	 *
	 * @private
	 */
	private toggleCollapseA11y(hidden: boolean): void {
		this.collapseHeader.setAttribute('aria-expanded', String(!hidden));
		this.list.setAttribute('aria-hidden', String(hidden));
		this.list.hidden = hidden;
		(<HTMLElement>this.list).hidden = hidden;
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 * @private
	 */
	private addEventListeners(): void {
		this.collapseHeader.addEventListener('click', this.clickEventListener);
	}

	/**
	 * Removes event listeners for every possible button per collapsible.
	 * @private
	 */
	private removeEventListeners(): void {
		this.collapseHeader.removeEventListener('click', this.clickEventListener);
	}

	/**
	 * Handles the on click event by toggling the collapsible section visibility.
	 * @private
	 */
	private handleClick(): void {
		const list = this.element.querySelector('.usa-list') as HTMLUListElement;
		if (list.classList.contains('hidden')) {
			this.toggleCollapse(false);
		} else {
			this.toggleCollapse(true);
		}
	}

	/**
	 * Create custom events for NCICollapse.
	 *
	 * The default settings for FooterCollapse exposes these events:
	 * - usa-footer:nav-links:collapse
	 * - usa-footer:nav-links:expand
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['collapse', 'expand'];
		[...events].forEach((event) => {
			this.customEvents[event] = new CustomEvent(
				`${this.options.collapseEventListenerLabel}:${event}`,
				{
					bubbles: true,
					detail: this.element,
				}
			);
		});
	}
}
