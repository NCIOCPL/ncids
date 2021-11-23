/**
 * Interface for options that will alter the Footer component.
 *
 * @interface FooterOptions
 */
interface FooterOptions {
    collapsible?: string;
    trigger?: string;
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
 *  trigger: ".usa-footer__primary-link",
 * });
 * ```
 */
export declare class NCIFooter {
    protected element: HTMLElement;
    protected options: FooterOptions | undefined;
    private static form;
    private static optionDefaults;
    private static _components;
    /**
     * Sets component variables and initializes component.
     *
     * @param {HTMLElement} element Component being created.
     * @param {FooterOptions} options Optional settings for component generation.
     * @protected
     *
     * @todo see if we can nuke it if new USAFooter() is used
     */
    protected constructor(element: HTMLElement, options?: FooterOptions);
    /**
     * Instantiates this component of the given element.
     *
     * @param {HTMLElement} element Component being created.
     * @param {FooterOptions} options Optional settings for component generation.
     */
    static create(element: HTMLElement, options?: FooterOptions): NCIFooter;
    /**
     * Resets component to a clean state.
     *
     * Removes event listeners and any changes to the DOM.
     */
    unregister(): void;
    /**
     * Sets up footer component by initializing the collapse and email signup
     * form.
     */
    initialize(): void;
    /**
     * Inits collapse component. Adds event listeners and updates accessible
     * attributes.
     */
    createCollapsibleSections(): void;
    /**
     * Sets up event listeners for every possible button per collapsible.
     *
     * @param {HTMLElement} section Collapsible section element.
     */
    addCollapseEvents(section: HTMLElement): void;
    /**
     * Removes event listeners for every possible button per collapsible.
     *
     * @param {HTMLElement} section Collapsible section element.
     */
    removeCollapseEvents(section: HTMLElement): void;
    /**
     * Gets EventListener object that will handle toggling collapsing sections.
     *
     * @param {HTMLElement} section Collapsible section element.
     * @return EventListener
     */
    getCollapseListener(section: HTMLElement): EventListener;
    /**
     * Every time the accordion is toggled, updates aria attributes.
     *
     * @param {HTMLElement} section Collapsible section element.
     */
    toggleCollapseA11y(section: HTMLElement): void;
    /**
     * Queries list of collapsible sections in the footer.
     *
     * @return {NodeListOf<HTMLElement>} All collapsible sections.
     */
    queryCollapsibleSections(): NodeListOf<HTMLElement>;
    /**
     * Queries a list of triggers that may be used to trigger collapsible content.
     *
     * @param {HTMLElement} section Collapsible section element.
     * @return {NodeListOf<HTMLElement>} All triggers attached to the collapse.
     */
    queryTriggers(section: HTMLElement): NodeListOf<HTMLElement>;
    /**
     * When the collapsible trigger is toggled, hides or shows content and updates
     * accessible attributes.
     *
     * @param {HTMLElement} section Collapsible section element.
     */
    toggleCollapse(section: HTMLElement): void;
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
    createCollapsibleEvents(section: HTMLElement): void;
    /**
     * Inits footer sign up form and sets event handlers.
     */
    createSignupForm(): void;
    /**
     * Gets EventListener object that will handle signup form submits.
     *
     * @param {HTMLFormElement} form Signup form.
     * @return EventListener
     */
    getSubmitListener(form: HTMLFormElement): EventListener;
    /**
     * Validates footer sign up form.
     *
     * @param form Footer sign up form.
     * @param event Form submission event.
     */
    validateForm(form: HTMLFormElement, event: Event): void;
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
    createFormEvents(form: HTMLFormElement, isValid: boolean): void;
    /**
     * Changes classes to hide form errors.
     *
     * @param form Footer sign up form.
     */
    removeFormErrors(form: HTMLFormElement): void;
    /**
     * Changes classes to display form errors.
     *
     * @param form Footer sign up form.
     */
    addFormErrors(form: HTMLFormElement): void;
}
export {};
