import { NCISiteAlertOptions } from './nci-site-alert-options';
import { NCICloseButton } from './utils/nci-close-button.component';
import { NCICloseButtonOptions } from './utils/nci-close-button-options';
import { NCICollapse } from './utils/nci-collapse.component';
import { NCICollapseOptions } from './utils/nci-collapse-options';

/**
 * A site alert communicates urgent site-wide information.
 *
 *
 * Initialize the Site Alert component:
 * ```
 * NCISiteAlert.element.create(HTMLElement);
 * ```
 */
export class NCISiteAlert {
	/** The component that contains collapsible sections. */
	protected element: HTMLElement;
	/** Combined options with defaults and user settings, user settings take precedence. */
	protected options: NCISiteAlertOptions;
	/** The close button component. */
	private closeButton!: NCICloseButton;
	/** The collapse component. */
	private collapse!: NCICollapse;
	/** Default settings for the component, combines close button and collapse components. */
	private static optionDefaults: NCISiteAlertOptions = {
		closeable: false,
		closeButton: {
			ariaLabel: 'Dismiss alert',
			buttonClass: 'usa-alert__nci-button--close',
			eventListenerLabel: 'usa-site-alert:close-button',
			cookiePath: '/',
		},
		collapse: {
			ariaLabel: 'Toggle alert message',
			buttonClass: 'usa-alert__nci-button--toggle',
			eventListenerLabel: 'usa-site-alert:content',
		},
	};
	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCISiteAlert> = new Map<
		HTMLElement,
		NCISiteAlert
	>();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCISiteAlertOptions} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(element: HTMLElement, options?: NCISiteAlertOptions) {
		this.element = element;

		// spread operator shallow merges only
		this.options = {
			closeable: NCISiteAlert.optionDefaults.closeable || options?.closeable,
			closeButton: {
				...NCISiteAlert.optionDefaults.closeButton,
				...options?.closeButton,
			},
			collapse: {
				...NCISiteAlert.optionDefaults.collapse,
				...options?.collapse,
			},
		};

		const existingComponent = NCISiteAlert._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}
		NCISiteAlert._components.set(this.element, this);

		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCISiteAlertOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options?: NCISiteAlertOptions
	): NCISiteAlert {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element, options);
	}

	/**
	 * Resets component to a clean state.
	 * @public
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
		NCISiteAlert._components.delete(this.element);
	}

	/**
	 * Hides site alert if cookie exists, adds event listeners, and creates close
	 * and collapse functionality.
	 * @private
	 */
	private initialize(): void {
		this.createCloseButton();
		this.createCollapse();
	}

	/**
	 * Creates the close button.
	 *
	 * @see NCICloseButton
	 * @private
	 */
	private createCloseButton(): void {
		if (this.options.closeable && this.element.id) {
			this.closeButton = NCICloseButton.create(
				this.element,
				<NCICloseButtonOptions>this.options.closeButton
			);
		}
	}

	/**
	 * Creates the collapsible sections.
	 *
	 * @see NCICollapse
	 * @private
	 */
	private createCollapse(): void {
		if (
			this.element.classList.contains('usa-site-alert--nci-standard') &&
			this.element.id
		) {
			this.collapse = NCICollapse.create(
				this.element,
				<NCICollapseOptions>this.options.collapse
			);
		}
	}
}
