/**
 * FOCUS TRAP
 *
 *
 * Initialize the FocusTrap component:
 * ```
 * FocusTrap.element.create(HTMLElement);
 * ```
 */

export class FocusTrap {
	/** Active Parent Component. */
	protected element: HTMLElement;
	/** The Element that is the contains. */
	protected context!: HTMLElement;
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
	 * @protected
	 */
	public constructor(element: HTMLElement) {
		this.element = element;
		this.focusableElements =
			"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
	}

	/**
	 * Toggle the FocusTrap on or Off
	 * @param {boolean} state State of the focus tgrap
	 * @param {HTMLElement} context  the root container of the trap
	 * @returns void
	 */
	public toggleTrap(state: boolean, context: HTMLElement): void {
		if (state) {
			this.findFocusableElements(context);
			context.addEventListener('keydown', this.eventListener, true);
		} else {
			context.removeEventListener('keydown', this.eventListener, true);
		}
	}

	/**
	 * Searches for all focusable elements inside the root
	 * element and stores them in an array.
	 *
	 * Sets the first and last element for easy use.
	 *
	 * @param {HTMLElement} element Find all focusable elements in the
	 * context object
	 * @returns void
	 * @private
	 */
	private findFocusableElements(element: HTMLElement): void {
		this.context = element;
		this.focusableContent = Array.from(
			element.querySelectorAll(this.focusableElements)
		);
		this.firstFocusableElement = <HTMLElement>(
			element.querySelectorAll(this.focusableElements)[0]
		);
		this.lastFocusableElement = <HTMLElement>(
			this.focusableContent[this.focusableContent.length - 1]
		);
	}

	/**
	 * If user hits tab keep them inside our primary
	 * nav and megamenu
	 *
	 * @param {KeyboardEvent} event Keyboard event to track
	 * @returns void
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
