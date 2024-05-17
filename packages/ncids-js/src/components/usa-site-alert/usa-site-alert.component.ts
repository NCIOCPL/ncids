import { USASiteAlertOptions } from './usa-site-alert-options';
import { SiteAlertCloseButton } from './utils/site-alert-close-button.component';
import { SiteAlertCollapse } from './utils/site-alert-collapse.component';

/**
 * The USASiteAlert component is used to initialize the `.usa-site-alert`
 * component.
 *
 * ## Initialization examples
 * The easiest way to user the site alert is to let the NCIDS automatically
 * initialize your site alert HTML.
 *
 * Add the following to the top of your main Javascript file, and it will add
 * trigger the Javascript initialization of the USASiteAlert.
 *
 * @example
 * ```js
 * import '@nciocpl/ncids-js/usa-site-alert/auto-init';
 * ```
 *
 * If you need access to the site alert instance to further customize your site,
 * you can manually initialize the site alert:
 *
 * @example
 * ```js
 * import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';
 *
 * // Find the site alert HTML element.
 * const siteAlertEl = document.querySelector('.usa-site-alert');
 *
 * // Initialize the component.
 * const siteAlert = USASiteAlert.create(siteAlertEl);
 * ```
 *
 * ## Making a dismissible site alert
 *
 * If you are using the auto initializer, you can add the data attribute
 * `data-site-alert-closable` to the site alert to make it dismissible.
 *
 * If you are manually initializing the site alert and need to add te ability to
 * close the site alert, you can pass in an argument to the initializer:
 *
 * @example
 * ```js
 * import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';
 *
 * // Find the site alert HTML element.
 * const siteAlertEl = document.querySelector('.usa-site-alert');
 *
 * USASiteAlert.create(siteAlertEl, {
 *   closeable: true,
 * 	});
 * ```
 *
 * ## HTML Events
 *
 * The site alert component will dispatch the following
 * {@link https://developer.mozilla.org/docs/Web/API/CustomEvent | CustomEvent} types
 * that can be used to track analytics or other needs when a visitor interacts with
 * the component:
 *
 *  * `usa-site-alert:content:expand` - Dispatched with {@link usa-site-alert~SiteAlertCollapseOptions | SiteAlertCollapseOptions} when site alert is toggled open.
 *  * `usa-site-alert:content:collapse` - Dispatched with {@link usa-site-alert~SiteAlertCollapseOptions | SiteAlertCollapseOptions} when site alert is toggled close.
 *  * `usa-site-alert:close-button:close` - Dispatched with {@link usa-site-alert~SiteAlertCloseButtonOptions | SiteAlertCloseButtonOptions} when the close button on the site alert is clicked.
 *
 * @example
 * ```js
 * import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';
 *
 * // Find the site alert HTML element.
 * const siteAlertEl = document.querySelector('.usa-site-alert');
 *
 * // Initialize the component.
 * const siteAlert = USASiteAlert.create(siteAlertEl);
 *
 * // Attach an event handler to the site alert to listen for custom events.
 * siteAlert.addEventListener('usa-site-alert:content:expand', (event) => {
 *    // Add your analytics code here.
 *    console.log('Event occurred.');
 * });
 * ```
 */
export class USASiteAlert {
	/** The component that contains collapsible sections. */
	protected element: HTMLElement;
	/** Combined options with defaults and user settings, user settings take precedence. */
	protected options: USASiteAlertOptions;
	/** The close button component. */
	private closeButton!: SiteAlertCloseButton;
	/** The collapse component. */
	private collapse!: SiteAlertCollapse;
	/** Default settings for the component, combines close button and collapse components. */
	private static optionDefaults: USASiteAlertOptions = {
		closeable: false,
		closeAriaLabel: 'Dismiss alert',
		closeButtonClass: 'usa-alert__nci-button--close',
		closeEventListenerLabel: 'usa-site-alert:close-button',
		closeCookiePath: '/',
		collapseAriaLabel: 'Toggle alert message',
		collapseButtonClass: 'usa-alert__nci-button--toggle',
		collapseCookiePath: '/',
		collapseEventListenerLabel: 'usa-site-alert:content',
	};
	/** Map object of the component. */
	private static _components: Map<HTMLElement, USASiteAlert> = new Map<
		HTMLElement,
		USASiteAlert
	>();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param element Component being created.
	 * @param options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(
		element: HTMLElement,
		options?: Partial<USASiteAlertOptions>
	) {
		this.element = element;
		this.options = {
			...USASiteAlert.optionDefaults,
			...options,
		};
		const existingComponent = USASiteAlert._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}
		USASiteAlert._components.set(this.element, this);

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
		options?: Partial<USASiteAlertOptions>
	): USASiteAlert {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}
		return this._components.get(element) || new this(element, options);
	}

	/**
	 * Creates all site alert components in document.
	 * @internal
	 */
	public static createAll(): USASiteAlert[] {
		const siteAlerts = Array.from(
			document.getElementsByClassName('usa-site-alert')
		);
		return siteAlerts.map((siteAlert) => {
			const closable = siteAlert.hasAttribute('data-site-alert-closable');
			return this.create(siteAlert as HTMLElement, {
				closeable: closable,
			});
		});
	}

	/**
	 * Auto initializes site alert.
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			this.createAll();
		});
	}

	/**
	 * Resets component to a clean state.
	 */
	public unregister(): void {
		// Remove collapse
		if (this.collapse) {
			this.collapse.unregister();
		}

		// Remove dismiss button
		if (this.closeButton) {
			this.closeButton.unregister();
		}

		// Remove element
		USASiteAlert._components.delete(this.element);
	}

	/**
	 * Hides site alert if cookie exists, adds event listeners, and creates close
	 * and collapse functionality.
	 */
	private initialize(): void {
		this.createId();
		this.createCloseButton();
		this.createCollapse();
	}

	/**
	 * Creates an ID for the site alert by inc a global var.
	 *
	 * @see SiteAlertCloseButton
	 */
	private createId(): void {
		const siteAlerts = Array.from(document.querySelectorAll('.usa-site-alert'));

		this.element.id = `site-alert-${siteAlerts.indexOf(this.element)}`;
	}

	/**
	 * Creates the close button.
	 *
	 * @see SiteAlertCloseButton
	 */
	private createCloseButton(): void {
		if (this.options.closeable && this.element.id) {
			this.closeButton = new SiteAlertCloseButton(this.element, this.options);
		}
	}

	/**
	 * Creates the collapsible sections.
	 *
	 * @see SiteAlertCollapse
	 */
	private createCollapse(): void {
		if (
			this.element.querySelector('.usa-alert__nci-header') &&
			this.element.querySelector('.usa-alert__nci-content') &&
			this.element.id
		) {
			this.collapse = new SiteAlertCollapse(this.element, this.options);
		}
	}
}
