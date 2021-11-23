'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UsaFooter = void 0;
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
class UsaFooter {
	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {FooterOptions} options Optional settings for component generation.
	 * @protected
	 */
	constructor(element, options) {
		this.optionDefaults = {
			trigger: '.usa-footer__primary-link',
			collapsible: '.usa-footer__primary-content--collapsible',
		};
		this.element = element;
		this.options = options;
		this.initialize();
	}
	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {FooterOptions} options Optional settings for component generation.
	 */
	static create(element, options) {
		try {
			return this._components.get(element) || new UsaFooter(element, options);
		} catch (_a) {
			throw 'Element is not an HTMLElement';
		}
	}
	/**
	 * Checks instanceof element for correct type. Will only accept HTMLElement.
	 *
	 * @param {HTMLElement} element Component being created.
	 */
	instanceOfHTMLElement(element) {
		return element !== undefined && element instanceof HTMLElement;
	}
	/**
	 * Sets up footer component by initializing the collapse and email signup
	 * form.
	 */
	initialize() {
		this.createCollapsibleSections();
		// this.createSignupForm;
	}
	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 */
	createCollapsibleSections() {
		const sections = this.queryCollapsibleSections();
		[...sections].forEach((section) => {
			this.addEvents(section);
			this.a11y(section);
		});
	}
	/**
	 * Sets up event listeners for every possible button per collapsible.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	addEvents(section) {
		const triggers = this.queryTriggers(section);
		[...triggers].forEach((trigger) => {
			trigger.addEventListener('click', () => {
				this.toggleCollapse(section);
			});
		});
	}
	/**
	 * Every time the accordion is toggled, updates aria attributes.
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	a11y(section) {
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
				: _a.collapsible) || this.optionDefaults.collapsible;
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
			this.optionDefaults.trigger;
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
		this.a11y(section);
		this.dispatchEvents(section);
	}
	/**
	 * Exposes events for hooking into collapse functionality.
	 *
	 * ```
	 * footer.element.addEventListener(
	 *   "usa-footer:nav-links:collapse", (event) => {
	 *     console.log(`expanded ${event.details.sectionTitle}`);
	 *   }
	 * );
	 * ```
	 *
	 * @param {HTMLElement} section Collapsible section element.
	 */
	dispatchEvents(section) {
		const detail = { section: section };
		const event = section.classList.contains('hidden')
			? new CustomEvent('usa-footer:nav-links:collapse', { detail })
			: new CustomEvent('usa-footer:nav-links:expand', { detail });
		this.element.dispatchEvent(event);
	}
}
exports.UsaFooter = UsaFooter;
UsaFooter._components = new Map();
// todo jest dom
// todo polyfills
