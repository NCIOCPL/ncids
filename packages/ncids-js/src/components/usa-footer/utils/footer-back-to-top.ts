/**
 * NCI Back To Top
 */
export class NCIBackToTop {
	/** Default Element */
	protected element: HTMLElement;
	/** Callback for handling the toggle functionality.  */
	private scrollListener: EventListener = () => this.handleScroll();

	public constructor(element: HTMLElement) {
		this.element = element;
		this.initialize();
	}

	private handleScroll(): void {
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
	 * @public
	 */
	public unregister(): void {
		this.element.classList.remove(
			'show',
			'hide',
			'usa-footer__nci-return-to-top'
		);
		this.element.classList.add('grid-container', 'usa-footer__return-to-top');
	}

	/**
	 * @private
	 */
	private initialize(): void {
		this.element.classList.remove(
			'grid-container',
			'usa-footer__return-to-top'
		);
		this.element.classList.add('usa-footer__nci-return-to-top', 'hide');
		window.addEventListener('scroll', this.scrollListener, false);
	}
}
