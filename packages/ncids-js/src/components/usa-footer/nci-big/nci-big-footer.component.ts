import { NCIBigFooterOptions } from './nci-big-footer-options';
import { FooterCollapse } from '../utils/footer-collapse';
import { NCIBackToTop } from '../utils/footer-back-to-top';
import { NCISubscribe } from '../../nci-subscribe/nci-subscribe.component';

/**
 * The NCIBigFooter component is used to initialize the dynamic features of
 * the `usa-footer--nci-big` variant of the `usa-footer`.
 *
 * ## Default Options
 * The default options for the NCIBigFooter component are:
 * ```
 * {
 *   subscribeInvalidEmailAlert: 'Enter a valid email address',
 * }
 * ```
 *
 * ## Initialization Examples
 *
 * The easiest way to use the footer is to let the NCIDS automatically initialize
 * your Footer HTML.
 *
 * Just add the following to the top of your main Javascript file and it will
 * add code to your javascript that initializes the NCIBigFooter with the
 * default options.
 * ```
 * import '@nciocpl/ncids-js/components/usa-footer/nci-big/auto-init';
 * ```
 *
 * If you need the ability to customize the footer or attach event listeners for
 * analytics then you can manually initialize the footer features. Below are
 * two examples of how to manually initialize the footer.
 *
 * @example
 * You can initialize the NCIBigFooter component using these default options:
 * ```
 * import { NCIBigFooter } from '@nciocpl/ncids-js/components/usa-footer/nci-big';
 * const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
 * NCIBigFooter.create(footer);
 * ```
 *
 * @example
 * Below is an example of initializing the NCIBigFooter component overidding
 * the subscribeInvalidEmail text with a Spanish translation.
 * ```
 * import { NCIBigFooter } from '@nciocpl/ncids-js/components/usa-footer/nci-big';
 * const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
 * NCIBigFooter.create(
 *   footer,
 *   {
 *     subscribeInvalidEmailAlert: 'Ingrese su dirección de correo electrónico',
 *   }
 * );
 * ```
 *
 * ## HTML Events
 *
 * The NCIBigFooter component will dispatch the following custom HTML event types
 * that can be used to track analytics or other needs when a visitor interacts with
 * the footer.
 * * `usa-footer:nav-links:collapse` - Fired when a collapse button is clicked and content is collapsed.
 * * `usa-footer:nav-links:expand` - Fired when a collapse button is clicked and content is expanded.
 * * `usa-footer:sign-up:submit` - Fired when form validations pass and form is submitted.
 * * `usa-footer:sign-up:error` - Fired when form validations fail and form shows validation errors.
 *
 * @example
 * ```
 * const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
 * NCIFooter.create(element);
 * element.addEventListener('usa-footer:nav-links:collapse', (event) => {
 *    console.log('Event occurred.');
 * });
 * ```
 *
 */
export class NCIBigFooter {
	/** Footer element. */
	protected element: HTMLElement;
	/** Optional settings for the component. */
	protected options: NCIBigFooterOptions;
	/** List of collapsible sections. */
	private collapses: FooterCollapse[] = [];
	/** Media query used for match media, set to the window size needed to enable collapse. */
	private collapseMediaQuery: MediaQueryList;
	/** Subscribe form. */
	private form?: NCISubscribe;
	/** Back Top Top Link. */
	private backToTop?: NCIBackToTop;
	/**
	 * The width that the footer should collapse the primary links as.
	 * @privateRemarks
	 * This option was handled internally as part of our code restructuring
	 * and documentation as we should not really break at a configurable
	 * width since the design is set at 480.
	 * This may be elevated back to an option in the future.
	 */
	private collapseWidth: number = 480;

	/** Default settings for the component. */
	private static optionDefaults: NCIBigFooterOptions = {
		subscribeInvalidEmailAlert: 'Enter a valid email address',
		backToTopText: 'Back to Top',
	};

	/** Handle resize event. */
	private resizeEventListener: EventListener = (e) => this.handleResize(e);

	/** Handle page scroll for back to top */
	private handleScrollEventListener: EventListener = () => this.handleScroll();

	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCIBigFooter> = new Map<
		HTMLElement,
		NCIBigFooter
	>();

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param element Component being created.
	 * @param options Optional settings for component generation.
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

		this.collapseMediaQuery = matchMedia(
			`(min-width: ${this.collapseWidth}px)`
		);

		const existingComponent = NCIBigFooter._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}

		NCIBigFooter._components.set(this.element, this);

		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param element Component being created.
	 * @param options Optional settings for component generation.
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
	 * Auto initializes footer component.
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			const footers = Array.from(document.getElementsByClassName('usa-footer'));
			footers.forEach((footer) => {
				this.create(footer as HTMLElement);
			});
		});
	}

	/**
	 * Resets component to a clean state.
	 *
	 * Removes event listeners and any changes to the DOM.
	 */
	public unregister(): void {
		// Reset sign up form
		if (this.form) {
			this.form.unregister();
			this.form = undefined;
		}

		if (this.backToTop) {
			this.backToTop.unregister();
			this.backToTop = undefined;
		}
		// Reset collapse
		this.unregisterCollapses();

		// Remove event listeners
		this.removeEventListeners();

		// Remove element
		NCIBigFooter._components.delete(this.element);
	}

	/**
	 * Removes collapse instances.
	 */
	private unregisterCollapses() {
		// Remove collapses
		this.collapses.forEach((collapse) => {
			collapse.unregister();
		});
		this.collapses = [];
	}

	/**
	 * Sets up footer component by initializing the collapse and email signup
	 * form.
	 */
	private initialize(): void {
		// Init footer subscribe form
		this.createSubscribe();

		// Add media query event listener
		this.addEventListeners();

		// Create Back To Top component
		this.removeLegacyBackToTop();

		// Only toggle accordion on small screens
		const currentWidth = window.innerWidth;
		if (currentWidth < this.collapseWidth) {
			this.createCollapsibleSections();
		}
	}

	/**
	 * Enables collapse on small screen sizes or destroy collapse on larger
	 * screen sizes.
	 */
	private handleResize(query: Event) {
		/*
		 * Test coverage missing - tested in nci-footer.resize.test.ts
		 */
		if ((<MediaQueryListEvent>query).matches) {
			this.unregisterCollapses();
		} else {
			this.createCollapsibleSections();
		}
	}

	/**
	 * Inits collapse component. Adds event listeners and updates accessible
	 * attributes.
	 */
	private createCollapsibleSections(): void {
		const collapses = this.queryCollapsibleSections();
		collapses.forEach((collapse, index) => {
			this.collapses[index] = new FooterCollapse(collapse, {
				collapseButtonClass: 'usa-footer__primary-link',
				collapseClass: 'usa-footer__primary-content--collapsible',
				collapseEventListenerLabel: 'usa-footer:nav-links',
				collapseWidth: this.collapseWidth,
			});
		});
	}

	/**
	 * Queries list of collapsible sections in the footer.
	 *
	 * @return All collapsible sections.
	 */
	private queryCollapsibleSections(): HTMLElement[] {
		const selector = '.usa-footer__primary-content--collapsible';
		return Array.from(this.element.querySelectorAll(selector));
	}

	/**
	 * Inits the subscribe component.
	 */
	private createSubscribe(): void {
		const form = this.element.querySelector('form');
		if (form) {
			this.form = NCISubscribe.create(form, {
				subscribeInvalidEmailAlert: this.options.subscribeInvalidEmailAlert,
				subscribeEventListenerLabel: 'usa-footer:sign-up',
			});
		}
	}

	/**
	 * If someone has the pre-v3.0.0 back to top element, we
	 * remove it. This can be removed sometime after no one
	 * is using it.
	 */
	private removeLegacyBackToTop(): void {
		const linkElement = this.element.getElementsByClassName(
			'usa-footer__return-to-top'
		)[0];
		if (linkElement) linkElement.remove();
	}

	/**
	 * Handles page scroll for back to top initialization/behavior.
	 * The back to top registers its own scroll event, so this is
	 * just to add the BTT on the first initialization.
	 */
	private handleScroll(): void {
		// If no back to top text, do nothing. This should never get
		// here because we don't register this handler if there is
		// no back to top text.
		if (this.options.backToTopText === null) return;

		// So we should only add the back to top if the visitor scrolls
		// down the page. (As opposed to scrolling horizontally.)
		if (window.scrollY > 0) {
			// If no back to top, create and initialize it
			if (!this.backToTop) {
				// Create the BTT element.
				this.backToTop = new NCIBackToTop(
					this.element,
					this.options.backToTopText
				);
			}

			// Back to top registers its own scroll event, so we need to remove the listener
			// now that we have initialized the back to top.
			window.removeEventListener('scroll', this.handleScrollEventListener);
		}
	}

	/**
	 * Sets up event listeners for the footer.
	 */
	private addEventListeners(): void {
		this.collapseMediaQuery.addEventListener(
			'change',
			this.resizeEventListener
		);

		// Only add the scroll listener if we have back to top text, no need to
		// fire scroll events if we don't have a back to top.
		if (this.options.backToTopText !== null) {
			window.addEventListener('scroll', this.handleScrollEventListener);
		}
	}

	/**
	 * Removes event listeners for the footer
	 */
	private removeEventListeners(): void {
		this.collapseMediaQuery.removeEventListener(
			'change',
			this.resizeEventListener
		);
		window.removeEventListener('scroll', this.handleScrollEventListener);
	}
}
