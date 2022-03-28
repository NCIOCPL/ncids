import { NCIBigFooterOptions } from './nci-big-footer-options';
import { FooterCollapse } from './utils/footer-collapse';
import { NCISubscribe } from '../nci-subscribe/nci-subscribe.component';

/**
 * A footer serves site visitors who arrive at the bottom of a page without
 * finding what they want.›
 *
 * Initialize the Footer component:
 * ```
 * NCIBigFooter.element.create(HTMLElement);
 * ```
 */
export class NCIBigFooter {
	/** Footer element. */
	protected element: HTMLElement;
	/** Optional settings for the component. */
	protected options: NCIBigFooterOptions;
	/** List of collapsible sections. */
	private collapses: FooterCollapse[] = [];
	/** Subscribe form. */
	private form?: NCISubscribe;
	/** Default settings for the component. */
	private static optionDefaults: NCIBigFooterOptions = {
		collapseButtonClass: 'usa-footer__primary-link',
		collapseClass: 'usa-footer__primary-content--collapsible',
		collapseWidth: 480,
		collapseEventListenerLabel: 'usa-footer:nav-links',
		subscribeInvalidEmailAlert: 'Enter a valid email address',
		subscribeEventListenerLabel: 'usa-footer:sign-up',
	};

	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCIBigFooter> = new Map<
		HTMLElement,
		NCIBigFooter
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCIBigFooterOptions>} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(
		element: HTMLElement,
		options?: Partial<NCIBigFooterOptions>
	) {
		this.element = element;
		this.options = {
			...NCIBigFooter.optionDefaults,
			...options,
		};

		const existingComponent = NCIBigFooter._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		this.initialize();
		NCIBigFooter._components.set(this.element, this);
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCIBigFooterOptions>} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options?: Partial<NCIBigFooterOptions>
	): NCIBigFooter {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element, options);
	}

	/**
	 * Resets component to a clean state.
	 *
	 * Removes event listeners and any changes to the DOM.
	 * @public
	 */
	public unregister(): void {
		// Reset sign up form
		if (this.form) {
			this.form.unregister();
			this.form = undefined;
		}

		// Reset collapse
		this.collapses.forEach((collapse) => {
			collapse.unregister();
		});
		this.collapses = [];

		// Remove element
		NCIBigFooter._components.delete(this.element);
	}

	/**
	 * Sets up footer component by initializing the collapse and email signup
	 * form.
	 * @private
	 */
	private initialize(): void {
		this.createCollapsibleSections();
		this.createSubscribe();
	}

	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 * @private
	 */
	private createCollapsibleSections(): void {
		const collapses = this.queryCollapsibleSections();
		collapses.forEach((collapse, index) => {
			this.collapses[index] = new FooterCollapse(collapse, this.options);
		});
	}

	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return {NodeListOf<HTMLElement>} All collapsible sections.
	 * @private
	 */
	private queryCollapsibleSections(): HTMLElement[] {
		const selector = '.usa-footer__primary-content--collapsible';
		return Array.from(this.element.querySelectorAll(selector));
	}

	/**
	 * Inits the subscribe component.
	 * @private
	 */
	private createSubscribe(): void {
		const form = this.element.querySelector('form');
		if (form) {
			this.form = NCISubscribe.create(form, this.options);
		}
	}
}
