/**
 * Scrollbar Width
 */
export class scrollbarWidth {
	/** The body overlay wrapper element. */
	private readonly outer: HTMLElement;

	public constructor() {
		// Creating invisible container
		this.outer = document.createElement('div') || document;
		this.getWidth();
	}

	/**
	 * Gets width of scrollbar for use in modal
	 */
	public getWidth(): string {
		this.outer.style.visibility = 'hidden';
		this.outer.style.overflow = 'scroll'; // forcing scrollbar to appear
		/** TS not happy with this as of yet */
		//this.outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
		document.body.appendChild(this.outer);

		// Creating inner element and placing it in the container
		const inner = document.createElement('div');
		this.outer.appendChild(inner);

		// Calculating difference between container's full width and the child width
		const scrollbarWidth = `${this.outer.offsetWidth - inner.offsetWidth}px`;

		// Removing temporary elements from the DOM
		this.outer.parentNode?.removeChild(this.outer);
		return scrollbarWidth;
	}
}
