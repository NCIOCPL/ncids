/**
 * Interface for options that will alter the component.
 *
 * @interface ElementOptions
 *
 * @todo move to other file, discuss architecture, and discuss other options
 */
interface ElementOptions {
	variant?: string;
	id?: string;
}

/**
 * Interface for options that will alter the Footer component.
 *
 * @interface FooterOptions
 *
 * @todo move to other file, discuss architecture, and discuss other options
 */
interface FooterOptions extends ElementOptions {
	variant?: 'big' | 'nci-big' | 'medium' | 'slim';
	// id inherited
	trigger?: string; // .usa-footer__primary-link, .usa-accordion__button
	// multiselectable?: boolean; todo?
}

// interface HeaderOptions extends variants 'basic' | 'basic-mega' | etc

/**
 * A footer serves site visitors who arrive at the bottom of a page without
 * finding what they want.
 *
 * Guidance notes: `aria-expanded` will be set programmatically,
 * but `aria-controls`, `aria-label`, and `id`, etc. must be set manually for
 * a11y.
 *
 * Initialize the Footer component:
 * ```
 * UsaFooter.create(HTMLElement, {
 *  trigger: ".usa-footer__primary-link",
 * });
 * ```
 *
 * @todo Footer and accordion shares similar collapse functionality, discuss mixins and guidance
 */
export class UsaFooter {
	element: HTMLElement;
	options: FooterOptions | undefined;

	private static _components: Map<HTMLElement, UsaFooter> = new Map<
		HTMLElement,
		UsaFooter
	>();

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {FooterOptions} options Optional settings for component generation.
	 */
	static create(element: HTMLElement, options?: FooterOptions): UsaFooter {
		try {
			return this._components.get(element) || new UsaFooter(element, options);
		} catch {
			throw 'Element is not an HTMLElement';
		}
	}

	/**
	 * Checks instanceof element for correct type. Will only accept HTMLElement.
	 *
	 * @param {HTMLElement} element Component being created.
	 */
	instanceOfHTMLElement(element: HTMLElement): element is HTMLElement {
		return element !== undefined && element instanceof HTMLElement;
	}

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {FooterOptions} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(element: HTMLElement, options?: FooterOptions) {
		this.element = element;
		this.options = options;
		this.initialize();
	}

	/**
	 * Sets up component, add event listeners and updates accessible attributes.
	 */
	initialize(): void {
		this.addEvents();
		this.a11y();
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 */
	addEvents(): void {
		const triggers = this.queryTriggers();
		[...triggers].forEach((trigger) => {
			trigger!.addEventListener('click', () => {
				this.toggleCollapse();
			});
		});
	}

	/**
	 * Every time the accordion is toggled, updates aria attributes.
	 */
	a11y(): void {
		const triggers = this.queryTriggers();
		[...triggers].forEach((trigger) => {
			trigger.setAttribute(
				'aria-expanded',
				String(!this.element.classList.contains('hidden'))
			);
		});
	}

	/**
	 * Queries a list of triggers that may be used to trigger collapsible content.
	 *
	 * @return {NodeListOf<HTMLElement>} All triggers attached to the collapse.
	 */
	queryTriggers(): NodeListOf<HTMLElement> {
		const selector = this.options?.trigger || '.usa-footer__primary-link';
		return this.element.querySelectorAll(selector);
	}

	/**
	 * When the collapsible trigger is toggled, hides or shows content and updates
	 * accessible attributes.
	 */
	toggleCollapse(): void {
		this.element.classList.toggle('hidden');
		this.a11y();
		this.dispatchEvents();
	}

	/**
	 * Exposes events for hooking into collapse functionality.
	 *
	 * ```
	 * const accordion = document.getElementById('accordion')
	 * accordion.addEventListener('show', () => {
	 *   // do something...
	 * });
	 * ```
	 *
	 * @todo discuss which events to expose: show, shown, hide, hidden, create, destroy
	 */
	dispatchEvents(): void {
		const event = this.element.classList.contains('hidden')
			? new Event('hidden')
			: new Event('shown');
		this.element.dispatchEvent(event);
	}
}

// todo jest dom
// todo polyfills
