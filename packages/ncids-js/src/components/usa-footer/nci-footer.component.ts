/**
 * Interface for options that will alter the Footer component.
 *
 * @typedef NCIFooterOptions
 * @prop {string} collapseClass Collapsible section class name, .usa-footer__primary-content--collapsible
 * @prop {string} collapseButtonClass Button that toggles collapsible section, .usa-footer__primary-link, .usa-accordion__button
 * @prop {number} collapseWidth Screen width required to convert the footer navigation into an accordion, mobile-lg: 480
 */
export interface NCIFooterOptions {
	collapseClass?: string;
	collapseButtonClass?: string;
	collapseWidth?: number;
	// multiselectable?: boolean; todo?
}

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
 * NCIFooter.element.create(HTMLElement, {
 *  collapseButtonClass: ".usa-footer__primary-link",
 * });
 * ```
 */
export class NCIFooter {
	protected element: HTMLElement;
	protected options: NCIFooterOptions;
	private form: HTMLFormElement | undefined;
	private collapseListeners: EventListener[] = [];
	private signupListener: EventListener | undefined;
	private collapseButtons: HTMLElement[] = [];

	private static optionDefaults: NCIFooterOptions = {
		collapseClass: '.usa-footer__primary-content--collapsible',
		collapseButtonClass: '.usa-footer__primary-link',
		collapseWidth: 480,
	};

	private static _components: Map<HTMLElement, NCIFooter> = new Map<
		HTMLElement,
		NCIFooter
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIFooterOptions} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(element: HTMLElement, options?: NCIFooterOptions) {
		this.element = element;
		this.options = options || {};

		if (NCIFooter._components.has(this.element)) {
			this.unregister();
		}
		this.initialize();
		NCIFooter._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIFooterOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options?: NCIFooterOptions
	): NCIFooter {
		try {
			return this._components.get(element) || new this(element, options);
		} catch (error) {
			if (!(element instanceof HTMLElement)) {
				throw 'Element is not an HTMLElement';
			} else {
				throw `${error}`;
			}
		}
	}

	/**
	 * Resets component to a clean state.
	 *
	 * Removes event listeners and any changes to the DOM.
	 * @public
	 */
	public unregister(): void {
		// Reset sign up form
		this.removeSignupEventListeners();

		// Reset collapse
		this.removeCollapseEventListeners();

		// Remove element
		NCIFooter._components.delete(this.element);
	}

	/**
	 * Sets up footer component by initializing the collapse and email signup
	 * form.
	 * @private
	 */
	private initialize(): void {
		this.createCollapsibleSections();
		this.createSignupForm();
	}

	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 * @private
	 */
	private createCollapsibleSections(): void {
		const sections = this.queryCollapsibleSections();
		[...sections].forEach((section) => {
			const buttons = this.queryCollapseButtons(section);
			[...buttons].forEach((button) => {
				this.collapseButtons.push(button);
				this.toggleCollapseA11y(button, section);
			});
		});

		this.addCollapseEventListeners();
	}

	/**
	 * Sets up event listeners for every possible button per collapsible.
	 * @private
	 */
	private addCollapseEventListeners(): void {
		[...this.collapseButtons].forEach((button, index) => {
			this.collapseListeners![index] = (e: Event) =>
				this.createCollapseListener(e);
			button.addEventListener('click', this.collapseListeners![index]);
		});
	}

	/**
	 * Removes event listeners for every possible button per collapsible.
	 * @private
	 */
	private removeCollapseEventListeners(): void {
		[...this.collapseButtons].forEach((button, index) => {
			button.removeEventListener('click', this.collapseListeners![index]);
		});
	}

	/**
	 * Creates event listener for collapsible section button elements.
	 *
	 * @param {Event} event Collapsible section toggling event.
	 * @private
	 */
	private createCollapseListener(event: Event): void {
		if (event.target instanceof HTMLElement) {
			const button: HTMLElement = event.target;
			this.initCollapse(button);
		}
	}

	/**
	 * Toggles collapse on correct screen sizes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @private
	 */
	private initCollapse(button: HTMLElement) {
		const currentWidth = window.innerWidth;
		const collapseWidth =
			this.options?.collapseWidth || NCIFooter.optionDefaults.collapseWidth!;

		// Only toggle accordion on small screens.
		currentWidth >= collapseWidth
			? this.toggleCollapse(button, false)
			: this.toggleCollapse(button, true);
	}

	/**
	 * When the collapse button is toggled, hides or shows content and updates
	 * accessible attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @param {boolean} canToggle Element can toggle hidden states.
	 * @private
	 *
	 */
	private toggleCollapse(button: HTMLElement, canToggle: boolean): void {
		const selector =
			this.options?.collapseClass || NCIFooter.optionDefaults.collapseClass!;
		const section: HTMLElement = button.closest(selector)!;

		// Display
		!canToggle
			? section?.classList.remove('hidden')
			: section?.classList.toggle('hidden');

		// Accessibility
		this.toggleCollapseA11y(button, section);
	}

	/**
	 * Every time the accordion is toggled, updates aria attributes.
	 *
	 * @param {HTMLElement} button Collapsible section element.
	 * @param {HTMLElement} section Collapsible section element.
	 * @private
	 */
	private toggleCollapseA11y(button: HTMLElement, section: HTMLElement): void {
		// Toggle button
		button.setAttribute(
			'aria-expanded',
			String(!section.classList.contains('hidden'))
		);

		const controls = button.getAttribute('aria-controls');
		const list = document.getElementById(controls!);

		// Toggle menu for screen readers
		list?.setAttribute(
			'aria-hidden',
			String(section.classList.contains('hidden'))
		);

		// Dispatch custom events
		this.dispatchCollapsibleEvent(section);
	}

	/**
	 * Exposes events for hooking into collapse functionality.
	 *
	 * ```
	 * footer.element.addEventListener(
	 *   "usa-footer:nav-links:collapse", (event) => {
	 *     console.log(`collapsed ${event.detail}`);
	 *   }
	 * );
	 * ```
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @private
	 */
	private dispatchCollapsibleEvent(section: HTMLElement): void {
		const detail = { section: section };

		const event = section.classList.contains('hidden')
			? new CustomEvent('usa-footer:nav-links:collapse', { detail })
			: new CustomEvent('usa-footer:nav-links:expand', { detail });

		this.element.dispatchEvent(event);
	}

	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return {NodeListOf<HTMLElement>} All collapsible sections.
	 * @private
	 */
	private queryCollapsibleSections(): NodeListOf<HTMLElement> {
		const selector =
			this.options?.collapseClass || NCIFooter.optionDefaults.collapseClass!;
		return this.element.querySelectorAll(selector);
	}

	/**
	 * Queries a list of buttons that may be used to trigger collapsible content.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @return {NodeListOf<HTMLElement>} All buttons attached to the collapse.
	 * @private
	 */
	private queryCollapseButtons(section: HTMLElement): NodeListOf<HTMLElement> {
		const selector =
			this.options?.collapseButtonClass ||
			NCIFooter.optionDefaults.collapseButtonClass;
		return section.querySelectorAll(selector!);
	}

	/**
	 * Inits footer sign up form and sets event handlers.
	 * @private
	 */
	private createSignupForm(): void {
		this.form = this.element.querySelector('form')!;
		this.addSignupEventListeners();
		this.removeFormErrors();
	}

	/**
	 * Sets up the event listener for the sign up form submission.
	 * @private
	 */
	private addSignupEventListeners(): void {
		this.signupListener = (e: Event) => this.validateForm(e);
		this.form?.addEventListener('submit', this.signupListener);
	}

	/**
	 * Removes event listeners for the sign up form submission.
	 * @private
	 */
	private removeSignupEventListeners(): void {
		this.form?.removeEventListener('submit', this.signupListener!);
	}

	/**
	 * Validates footer sign up form.
	 *
	 * @param event Form submission event.
	 * @private
	 */
	private validateForm(event: Event) {
		const elements: HTMLFormControlsCollection = this.form!.elements;
		const input = elements.namedItem('email') as HTMLInputElement;
		const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
			input?.value
		);

		if (isValid) {
			this.removeFormErrors();
			this.dispatchFormEvents(isValid);
			this.form!.submit();
		} else {
			event.preventDefault();
			this.addFormErrors();
			this.dispatchFormEvents(isValid);
			const email: HTMLElement | null = this.form!.querySelector('#email');
			email!.focus();
		}
	}

	/**
	 * Exposes events for hooking into subscription functionality.
	 *
	 * ```
	 * footer.element.addEventListener(
	 *   "usa-footer:sign-up:submit", (event) => {
	 *     console.log(`submit ${event.detail}`);
	 *   }
	 * );
	 * ```
	 *
	 * @param {boolean} isValid Check if email is a valid value.
	 * @private
	 */
	private dispatchFormEvents(isValid: boolean) {
		const detail = { form: this.form };

		const event = isValid
			? new CustomEvent('usa-footer:sign-up:submit', { detail })
			: new CustomEvent('usa-footer:sign-up:error', { detail });

		this.element.dispatchEvent(event);
	}

	/**
	 * Changes classes to hide form errors.
	 * @private
	 */
	private removeFormErrors(): void {
		this.form!.querySelector('.usa-form-group')!.classList.remove(
			'usa-form-group--error'
		);
		this.form!.querySelector('.usa-label')!.classList.remove(
			'usa-label--error'
		);
		this.form!.querySelector('.usa-input')!.classList.remove(
			'usa-input--error'
		);
		this.form!.querySelector('.usa-error-message')!.classList.add('hidden');
		this.form!.querySelector('.usa-error-message')!.setAttribute(
			'aria-hidden',
			'true'
		);
	}

	/**
	 * Changes classes to display form errors.
	 * @private
	 */
	private addFormErrors(): void {
		this.form!.querySelector('.usa-form-group')!.classList.add(
			'usa-form-group--error'
		);
		this.form!.querySelector('.usa-label')!.classList.add('usa-label--error');
		this.form!.querySelector('.usa-input')!.classList.add('usa-input--error');
		this.form!.querySelector('.usa-error-message')!.classList.remove('hidden');
		this.form!.querySelector('.usa-error-message')!.setAttribute(
			'aria-hidden',
			'false'
		);
	}
}
