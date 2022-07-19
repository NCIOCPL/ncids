import { NCISubscribeOptions } from './nci-subscribe-options';

/**
 * GovDelivery subscribe form.
 */
export class NCISubscribe {
	/** The form element. */
	protected form: HTMLFormElement;
	/** Optional settings for the component. */
	protected options: NCISubscribeOptions;
	/** Array list of custom events that will be dispatched to the user. */
	private customEvents: { [key: string]: CustomEvent } = {};
	/** Alert displayed to user on invalid submission. */
	private readonly invalidEmailAlert: HTMLElement;
	/** Callback for close event.  */
	private submitEventListener: EventListener = (e) => this.handleSubmit(e);
	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCISubscribe> = new Map<
		HTMLElement,
		NCISubscribe
	>();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLFormElement} form Component being created.
	 * @param {NCISubscribeOptions} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(form: HTMLFormElement, options: NCISubscribeOptions) {
		this.form = form;
		this.options = options;
		this.invalidEmailAlert = this.createInvalidEmailAlert();

		const existingComponent = NCISubscribe._components.get(this.form);
		if (existingComponent) {
			existingComponent.unregister();
		}

		NCISubscribe._components.set(this.form, this);
		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLFormElement} element Component being created.
	 * @param {NCISubscribeOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLFormElement,
		options: NCISubscribeOptions
	): NCISubscribe {
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
		// Remove listeners
		this.removeEventListeners();

		// Remove validation errors
		this.toggleFormErrors(true);

		// Remove error message.
		this.invalidEmailAlert.remove();

		// Remove element
		NCISubscribe._components.delete(this.form);
	}

	/**
	 * Inits the subscribe form.
	 * @private
	 */
	private initialize(): void {
		this.addEventListeners();
		this.createCustomEvents();
		this.addMessage();
	}

	/**
	 * Adds event listeners for the form submission.
	 * @private
	 */
	private addEventListeners(): void {
		this.form.addEventListener('submit', this.submitEventListener);
	}

	/**
	 * Removes event listeners for the form submission.
	 * @private
	 */
	private removeEventListeners(): void {
		this.form.removeEventListener('submit', this.submitEventListener);
	}

	/**
	 * Validates subscribe on submit.
	 * @private
	 */
	private handleSubmit(event: Event): void {
		event.preventDefault();
		const form = this.form;
		const elements = form.elements as HTMLFormControlsCollection;
		const input = elements.namedItem('email') as HTMLInputElement;
		const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
			input.value
		);

		if (isValid) {
			this.toggleFormErrors(true);
			this.form.dispatchEvent(this.customEvents['submit']);
			form.submit();
		} else {
			this.toggleFormErrors(false);
			this.form.dispatchEvent(this.customEvents['error']);
			input.focus();
		}
	}

	/**
	 * Creates alert displayed to user on invalid submission.
	 * @private
	 */
	private createInvalidEmailAlert(): HTMLElement {
		const alert = document.createElement('span');
		const alertID = 'email-error-message';

		alert.classList.add('usa-error-message', 'hidden');
		alert.id = alertID;
		alert.innerHTML = this.options.subscribeInvalidEmailAlert;
		alert.setAttribute('aria-hidden', String(true));
		alert.setAttribute('role', 'alert');
		return alert;
	}

	/**
	 * Adds invalid email alert to the DOM.
	 * @private
	 */
	private addMessage(): void {
		const input = <HTMLInputElement>this.form.querySelector('.usa-input');
		input.setAttribute('aria-describedby', this.invalidEmailAlert.id);
		input.before(this.invalidEmailAlert);
	}

	/**
	 * Changes classes to display form errors.
	 * @private
	 */
	private toggleFormErrors(isValid: boolean): void {
		const group = <HTMLElement>this.form.querySelector('.usa-form-group');
		isValid
			? group.classList.remove('usa-form-group--error')
			: group.classList.add('usa-form-group--error');

		const label = <HTMLLabelElement>this.form.querySelector('.usa-label');
		isValid
			? label.classList.remove('usa-label--error')
			: label.classList.add('usa-label--error');

		const input = <HTMLInputElement>this.form.querySelector('.usa-input');
		isValid
			? input.classList.remove('usa-input--error')
			: input.classList.add('usa-input--error');

		const alert = <HTMLElement>this.form.querySelector('.usa-error-message');
		isValid ? alert.classList.add('hidden') : alert.classList.remove('hidden');
		alert.setAttribute('aria-hidden', String(isValid));
	}

	/**
	 * Create custom events for NCISubscribe.
	 *
	 * The default settings for NCISubscribe exposes these events:
	 *
	 * - usa-footer:sign-up:error
	 * - usa-footer:sign-up:submit
	 *
	 * @private
	 */
	private createCustomEvents(): void {
		const events = ['submit', 'error'];
		[...events].forEach((event) => {
			this.customEvents[event] = new CustomEvent(
				`${this.options.subscribeEventListenerLabel}:${event}`,
				{
					detail: this.form,
				}
			);
		});
	}
}
