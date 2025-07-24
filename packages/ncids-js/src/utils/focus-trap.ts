/**
 * FOCUS TRAP
 */
export class FocusTrap {
	/** Active Parent Component. */
	protected element: HTMLElement;
	/** First focusable element */
	protected firstFocusableElement!: HTMLElement;
	/** Last focusable element */
	protected lastFocusableElement!: HTMLElement;
	/** List of element types to check */
	protected focusableElements: string;
	/** First focusable element */
	protected focusableContent = [];
	/** Callback for handling the toggle functionality.  */
	private eventListener: EventListener = (event) => this.checkTrap(event);

	/**
	 * Sets component variables and initializes component.
	 *
	 * @param {HTMLElement} element Component being created.
	 */
	public constructor(element: HTMLElement, options?: string) {
		this.element = element;
		this.focusableElements =
			options ||
			"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
	}
	/**
	 * Refresh the tabbable items list for the FocusTrap.
	 *
	 * @param {HTMLElement} context  the root container of the trap
	 */
	public refreshTrap(context: HTMLElement): void {
		this.findFocusableElements(context);
		if (this.firstFocusableElement) {
			this.firstFocusableElement.focus();
		}
	}

	/**
	 * Toggles the FocusTrap on or off.
	 *
	 * @param {boolean} state State of the focus trap
	 * @param {HTMLElement} context  the root container of the trap
	 */
	public toggleTrap(state: boolean, context: HTMLElement): void {
		if (state) {
			this.findFocusableElements(context);
			context.addEventListener('keydown', this.eventListener, true);
		} else {
			context.removeEventListener('keydown', this.eventListener, true);
		}
		if (this.firstFocusableElement) {
			this.firstFocusableElement.focus();
		}
	}

	/**
	 * Searches for all focusable elements inside the root element and stores
	 * them in an array.
	 *
	 * Sets the first and last element for easy use.
	 *
	 * @param {HTMLElement} element Find all focusable elements in the context object
	 * @private
	 */
	private findFocusableElements(element: HTMLElement): void {
		this.focusableContent = Array.from(
			element.querySelectorAll(this.focusableElements)
		);

		this.firstFocusableElement = <HTMLElement>this.focusableContent[0];
		this.lastFocusableElement = <HTMLElement>(
			this.focusableContent[this.focusableContent.length - 1]
		);
	}

	/**
	 * If user hits tab keep them inside our primary nav and megamenu
	 *
	 * @param {KeyboardEvent} event Keyboard event to track
	 * @private
	 */
	private checkTrap(event: Event): void {
		const eventKey = <KeyboardEvent>event;
		const isTabPressed =
			eventKey.key === 'Tab' || parseInt(eventKey.code, 10) === 9;
		if (!isTabPressed) {
			return;
		}
		if (eventKey.shiftKey) {
			// if shift key pressed for shift + tab combination
			if (document.activeElement === this.firstFocusableElement) {
				// add focus for the last focusable element
				this.lastFocusableElement.focus();
				eventKey.preventDefault();
			}
		} else {
			// if tab key is pressed
			if (document.activeElement === this.lastFocusableElement) {
				// add focus for the first focusable element
				this.firstFocusableElement.focus();
				eventKey.preventDefault();
			}
		}
	}
}
