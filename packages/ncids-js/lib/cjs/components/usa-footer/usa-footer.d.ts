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
    collapsible?: string;
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
    optionDefaults: {
        trigger: string;
        collapsible: string;
    };
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
    addEvents(section: HTMLElement): void;
    /**
     * Every time the accordion is toggled, updates aria attributes.
     *
     * @param {HTMLElement} section Collapsible section element.
     */
    a11y(section: HTMLElement): void;
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
     *     console.log(`expanded ${event.details.sectionTitle}`);
     *   }
     * );
     * ```
     *
     * @param {HTMLElement} section Collapsible section element.
     */
    dispatchEvents(section: HTMLElement): void;
}
export {};
