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
    /**
     * Sets component variables and initializes component.
     *
     * @param {HTMLElement} element Component being created.
     * @param {FooterOptions} options Optional settings for component generation.
     * @protected
     */
    constructor(element, options) {
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
        }
        catch (_a) {
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
     * Sets up component, add event listeners and updates accessible attributes.
     */
    initialize() {
        this.addEvents();
        this.a11y();
    }
    /**
     * Sets up event listeners for every possible button per collapsible.
     */
    addEvents() {
        const triggers = this.queryTriggers();
        [...triggers].forEach((trigger) => {
            trigger.addEventListener('click', () => {
                this.toggleCollapse();
            });
        });
    }
    /**
     * Every time the accordion is toggled, updates aria attributes.
     */
    a11y() {
        const triggers = this.queryTriggers();
        [...triggers].forEach((trigger) => {
            trigger.setAttribute('aria-expanded', String(!this.element.classList.contains('hidden')));
        });
    }
    /**
     * Queries a list of triggers that may be used to trigger collapsible content.
     *
     * @return {NodeListOf<HTMLElement>} All triggers attached to the collapse.
     */
    queryTriggers() {
        var _a;
        const selector = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.trigger) || '.usa-footer__primary-link';
        return this.element.querySelectorAll(selector);
    }
    /**
     * When the collapsible trigger is toggled, hides or shows content and updates
     * accessible attributes.
     */
    toggleCollapse() {
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
    dispatchEvents() {
        const event = this.element.classList.contains('hidden')
            ? new Event('hidden')
            : new Event('shown');
        this.element.dispatchEvent(event);
    }
}
UsaFooter._components = new Map();
// todo jest dom
// todo polyfills
