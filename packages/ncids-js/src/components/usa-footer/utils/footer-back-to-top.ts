/**
 * NCI Back To Top
 */
export class NCIBackToTop {
	/** The back to top element */
	protected element: HTMLElement | null;

	/** Footer element */
	private footer: HTMLElement;

	/** Back to top text */
	private backToTopText: string;

	/** Callback for handling the toggle functionality.  */
	private scrollListener: EventListener = () => this.handleScroll();

	/**
	 * Creates a new instance of the NCIBackToTop component.
	 * @param footer The footer to attach the back to top element to.
	 * @param backToTopText The text to display on the back to top button.
	 */
	public constructor(footer: HTMLElement, backToTopText: string) {
		this.footer = footer;
		this.backToTopText = backToTopText;
		this.element = this.initialize();
	}

	/**
	 * Handles page scroll for back to top element behavior
	 */
	private handleScroll(): void {
		/* istanbul ignore if: Just TS type guarding */
		if (this.element === null) return;

		const y = window.scrollY;
		if (y > 0) {
			this.element.classList.remove('hide');
			this.element.classList.add('show');
		} else {
			this.element.classList.remove('show');
			this.element.classList.add('hide');
		}
	}

	/**
	 * Resets component to a clean state.
	 */
	public unregister(): void {
		// Remove the event listener.
		window.removeEventListener('scroll', this.scrollListener);

		// remove the return to top from the dom.
		if (this.element) {
			this.element.remove();
		}
		this.element = null;
	}

	/**
	 * Initializes the back to top element. It should be added to the dom showing,
	 * as it should only be added via a scroll from footer.
	 * @returns The back to top element.
	 */
	private initialize(): HTMLElement {
		const backToTopElement = document.createElement('div');
		backToTopElement.classList.add('usa-footer__nci-return-to-top', 'show');
		backToTopElement.setAttribute('aria-label', this.backToTopText);
		const backToTopLink = document.createElement('a');
		backToTopLink.setAttribute('href', '#top');
		const backToTopSpan = document.createElement('span');
		backToTopSpan.textContent = this.backToTopText;
		backToTopLink.append(backToTopSpan);
		backToTopElement.append(backToTopLink);
		this.footer.append(backToTopElement);

		window.addEventListener('scroll', this.scrollListener, false);

		return backToTopElement;
	}
}
