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
 *  trigger: ".usa-footer__primary-link",
 * });
 * ```
 */
export class NCIFooter {
	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {FooterOptions} options Optional settings for component generation.
	 * @protected
	 *
	 * @todo see if we can nuke it if new USAFooter() is used
	 */
	constructor(element, options) {
		this.element = element;
		this.options = options;
		if (NCIFooter._components.has(element)) {
			this.unregister();
		}
		this.initialize();
		NCIFooter._components.set(element, this);
	}
	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {FooterOptions} options Optional settings for component generation.
	 */
	static create(element, options) {
		try {
			return this._components.get(element) || new this(element, options);
		} catch (error) {
			if (error instanceof HTMLElement) {
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
	 */
	unregister() {
		// Remove element
		NCIFooter._components.delete(this.element);
		// Reset sign up form
		const handleSubmit = this.getSubmitListener(NCIFooter.form);
		this.element.removeEventListener('submit', handleSubmit);
		// Reset collapse
		const sections = this.queryCollapsibleSections();
		[...sections].forEach((section) => {
			// Remove collapse event listeners
			this.removeCollapseEvents(section);
			// Resets changes to DOM
			this.toggleCollapseA11y(section);
		});
	}
	/**
	 * Sets up footer component by initializing the collapse and email signup
	 * form.
	 */
	initialize() {
		this.createCollapsibleSections();
		this.createSignupForm();
	}
	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 */
	createCollapsibleSections() {
		const sections = this.queryCollapsibleSections();
		[...sections].forEach((section) => {
			this.addCollapseEvents(section);
			this.toggleCollapseA11y(section);
		});
	}
	/**
	 * Sets up event listeners for every possible button per collapsible.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	addCollapseEvents(section) {
		const triggers = this.queryTriggers(section);
		[...triggers].forEach((trigger) => {
			const handleClick = this.getCollapseListener(section);
			trigger.addEventListener('click', handleClick);
		});
	}
	/**
	 * Removes event listeners for every possible button per collapsible.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	removeCollapseEvents(section) {
		const triggers = this.queryTriggers(section);
		[...triggers].forEach((trigger) => {
			const handleClick = this.getCollapseListener(section);
			trigger.removeEventListener('click', handleClick);
		});
	}
	/**
	 * Gets EventListener object that will handle toggling collapsing sections.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @return EventListener
	 */
	getCollapseListener(section) {
		return () => this.toggleCollapse(section);
	}
	/**
	 * Every time the accordion is toggled, updates aria attributes.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	toggleCollapseA11y(section) {
		const triggers = this.queryTriggers(section);
		[...triggers].forEach((trigger) => {
			trigger.setAttribute(
				'aria-expanded',
				String(!section.classList.contains('hidden'))
			);
		});
	}
	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return {NodeListOf<HTMLElement>} All collapsible sections.
	 */
	queryCollapsibleSections() {
		var _a;
		const selector =
			((_a = this.options) === null || _a === void 0
				? void 0
				: _a.collapsible) || NCIFooter.optionDefaults.collapsible;
		return this.element.querySelectorAll(selector);
	}
	/**
	 * Queries a list of triggers that may be used to trigger collapsible content.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 * @return {NodeListOf<HTMLElement>} All triggers attached to the collapse.
	 */
	queryTriggers(section) {
		var _a;
		const selector =
			((_a = this.options) === null || _a === void 0 ? void 0 : _a.trigger) ||
			NCIFooter.optionDefaults.trigger;
		return section.querySelectorAll(selector);
	}
	/**
	 * When the collapsible trigger is toggled, hides or shows content and updates
	 * accessible attributes.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	toggleCollapse(section) {
		section.classList.toggle('hidden');
		this.toggleCollapseA11y(section);
		this.createCollapsibleEvents(section);
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
	 */
	createCollapsibleEvents(section) {
		const detail = { section: section };
		const event = section.classList.contains('hidden')
			? new CustomEvent('usa-footer:nav-links:collapse', { detail })
			: new CustomEvent('usa-footer:nav-links:expand', { detail });
		this.element.dispatchEvent(event);
	}
	/**
	 * Inits footer sign up form and sets event handlers.
	 */
	createSignupForm() {
		NCIFooter.form = this.element.querySelector('.usa-form');
		const handleSubmit = this.getSubmitListener(NCIFooter.form);
		this.element.addEventListener('submit', handleSubmit);
		this.removeFormErrors(NCIFooter.form);
	}
	/**
	 * Gets EventListener object that will handle signup form submits.
	 *
	 * @param {HTMLFormElement} form Signup form.
	 * @return EventListener
	 */
	getSubmitListener(form) {
		return (event) => this.validateForm(form, event);
	}
	/**
	 * Validates footer sign up form.
	 *
	 * @param form Footer sign up form.
	 * @param event Form submission event.
	 */
	validateForm(form, event) {
		var _a;
		const isValid =
			((_a = form.email) === null || _a === void 0 ? void 0 : _a.value) &&
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.value);
		if (isValid) {
			this.removeFormErrors(form);
			this.createFormEvents(form, isValid);
			form.submit();
		} else {
			event.preventDefault();
			this.addFormErrors(form);
			this.createFormEvents(form, isValid);
			const email =
				form === null || form === void 0
					? void 0
					: form.querySelector('#email');
			email.focus();
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
	 * @param {HTMLFormElement} form Collapsible section element.
	 * @param {boolean} isValid Check if email is a valid value.
	 */
	createFormEvents(form, isValid) {
		const detail = { form: form };
		const event = isValid
			? new CustomEvent('usa-footer:sign-up:submit', { detail })
			: new CustomEvent('usa-footer:sign-up:error', { detail });
		this.element.dispatchEvent(event);
	}
	/**
	 * Changes classes to hide form errors.
	 *
	 * @param form Footer sign up form.
	 */
	removeFormErrors(form) {
		form
			.querySelector('.usa-form-group')
			.classList.remove('usa-form-group--error');
		form.querySelector('.usa-label').classList.remove('usa-label--error');
		form.querySelector('.usa-input').classList.remove('usa-input--error');
		form.querySelector('.usa-error-message').classList.add('hidden');
		form
			.querySelector('.usa-error-message')
			.setAttribute('aria-hidden', 'true');
	}
	/**
	 * Changes classes to display form errors.
	 *
	 * @param form Footer sign up form.
	 */
	addFormErrors(form) {
		form
			.querySelector('.usa-form-group')
			.classList.add('usa-form-group--error');
		form.querySelector('.usa-label').classList.add('usa-label--error');
		form.querySelector('.usa-input').classList.add('usa-input--error');
		form.querySelector('.usa-error-message').classList.remove('hidden');
		form
			.querySelector('.usa-error-message')
			.setAttribute('aria-hidden', 'false');
	}
}
NCIFooter.optionDefaults = {
	trigger: '.usa-footer__primary-link',
	collapsible: '.usa-footer__primary-content--collapsible',
};
NCIFooter._components = new Map();
