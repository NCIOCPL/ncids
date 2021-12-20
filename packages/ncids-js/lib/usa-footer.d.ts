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
 * UsaFooter.create(HTMLElement, {
 *  trigger: ".usa-footer__primary-link",
 * });
 * ```
 *
 * @todo Footer and accordion shares similar collapse functionality, discuss mixins and guidance
 */
export declare class UsaFooter {
    element: HTMLElement;
    options: FooterOptions | undefined;
    private static _components;
    /**
     * Instantiates this component of the given element.
     *
     * @param {HTMLElement} element Component being created.
     * @param {FooterOptions} options Optional settings for component generation.
     */
    static create(element: HTMLElement, options?: FooterOptions): UsaFooter;
    /**
     * Checks instanceof element for correct type. Will only accept HTMLElement.
     *
     * @param {HTMLElement} element Component being created.
     */
    instanceOfHTMLElement(element: HTMLElement): element is HTMLElement;
    /**
     * Sets component variables and initializes component.
     *
     * @param {HTMLElement} element Component being created.
     * @param {FooterOptions} options Optional settings for component generation.
     * @protected
     */
    protected constructor(element: HTMLElement, options?: FooterOptions);
    /**
     * Sets up component, add event listeners and updates accessible attributes.
     */
    initialize(): void;
    /**
     * Sets up event listeners for every possible button per collapsible.
     */
    addEvents(): void;
    /**
     * Every time the accordion is toggled, updates aria attributes.
     */
    a11y(): void;
    /**
     * Queries a list of triggers that may be used to trigger collapsible content.
     *
     * @return {NodeListOf<HTMLElement>} All triggers attached to the collapse.
     */
    queryTriggers(): NodeListOf<HTMLElement>;
    /**
     * When the collapsible trigger is toggled, hides or shows content and updates
     * accessible attributes.
     */
    toggleCollapse(): void;
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
    dispatchEvents(): void;
}
export {};
