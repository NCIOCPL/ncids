/**
 * The USAModal component is used to initialize the `.usa-modal`
 * component.
 *
 *
 * ## Default options
 *
 *
 * ## Initialization examples
 * The easiest way to user the modal is to let the NCIDS automatically
 * initialize your modal HTML.
 *
 * Add the following to the top of your main Javascript file, and it will add
 * trigger the Javascript initialization of the USAModal.
 *
 * @example
 * ```js
 * import '@nciocpl/ncids-js/usa-modal/auto-init';
 * ```
 *
 * If you need access to the modal instance to further customize your site,
 * you can manually initialize the modal:
 *
 * @example
 * ```js
 * import { USAModal} from '@nciocpl/ncids-js/usa-modal';
 *
 * // Find the modal HTML element.
 * const modalEl = document.querySelector('.usa-modal');
 *
 * // Initialize the component.
 * const modal = USAModal.create(modalEl);
 * ```
 *
 *
 * ## HTML Events
 *
 * The modal component will dispatch the following
 * {@link https://developer.mozilla.org/docs/Web/API/CustomEvent | CustomEvent} types
 * that can be used to track analytics or other needs when a visitor interacts with
 * the modal:
 *
 * `usa-modal:open` - Dispatched with {@link usa-modal~ModalOpenEventDetails | ModalEventDetails} when the modal is opened.
 * `usa-modal:close` - Dispatched with {@link usa-modal-box~ModalCloseEventDetails | ModalEventDetails} when the modal is closed from an element with the data-close-modal attribute.
 * `usa-modal:close:outside` - Dispatched with {@link usa-modal-box~ModalCloseOutsideEventDetails | ModalEventDetails} when the modal is closed from the overlay element.
 * `usa-modal:close:escape` - Dispatched with {@link usa-modal-box~ModalCloseEscEventDetails | ModalEventDetails} when the modal is closed by keyboard escape.
 *
 *
 */

import { ModalConfig } from './modal-config';
import { ModalButtons } from './modal-buttons';
import { FocusTrap } from './utils/focus-trap';
import { scrollbarWidth } from './utils/scrollbar-width';
import { ModalOpenEventDetails } from './event-details/modal.open.event-details';
import { ModalCloseEventDetails } from './event-details/modal.close.event-details';
import { ModalCloseOutsideEventDetails } from './event-details/modal.close.outside.event-details';
import { ModalCloseEscEventDetails } from './event-details/modal.close.esc.event-details';

export class USAModal {
	/** The .usa-modal element. */
	protected modal: HTMLElement;

	/** Map to store HTMLElements and corresponding instances of USAModal. */
	private static _components: Map<HTMLElement, USAModal> = new Map<
		HTMLElement,
		USAModal
	>();

	/** Clone of the original modal element for reset. */
	private readonly modalEl: HTMLElement;

	/** Is modal Active toggle  */
	public isActive: boolean;

	/** css string to find non modal objects A11Y */
	private notModal: string;

	/** focusTrap for modal */
	protected focusTrap: FocusTrap;

	/** get the value of the scrollbar width */
	protected tempBodyPadding: string;

	/** The body element of the document/page. */
	private bodyElement: HTMLElement;

	/** The parent wrapper element. */
	private wrapperElement: HTMLElement;

	/** The body overlay wrapper element. */
	private overlayElement: HTMLElement;

	/** The button or trigger element used to open the modal component. */
	private opener: HTMLButtonElement;

	/** The ID of the original modal component. */
	private readonly modalId: string;

	/** The ariaLabelledBy of the original modal component. */
	private ariaLabelledBy: string;

	/** The ariaDescribedBy of the original modal component. */
	private ariaDescribedBy: string;

	/** Is this a forced action modal. */
	private isForced: string;

	/** The Header element for updating. */
	private modalHeader: HTMLElement;

	/** The Body element for updating content. */
	private modalBody: HTMLElement;

	/** The Footer element for updating buttons. */
	private modalFooter: HTMLElement;

	/** List of footer buttons. */
	private footerButtons: HTMLElement[] | undefined;

	/** Mouse click listener for showing the modal. */
	private openModalWindow: EventListener = (e) => this.handleModalOpen(e);

	/** Mouse click listener for hidding the modal. */
	private closeModalWindow: EventListener = (e) => this.handleModalClose(e);

	/** Mouse click listener for hidding the modal. */
	private closeOutsideModalWindow: EventListener = (e) =>
		this.handleModalCloseOutside(e);

	/** Keydown event listener for the combo box keyboard interaction. */
	private closeEscapeModalWindow: EventListener = (e) =>
		this.handleKeyboardEscape(e);

	protected constructor(modal: HTMLElement) {
		// Save original modal element for resetting the page to original state
		this.modalEl = modal;
		// Set up modal init variables
		this.modal = modal as HTMLElement;

		this.modalId = this.modal.getAttribute('id') || 'usa-modal';
		// check for forced action
		this.isForced =
			this.modal.getAttribute('data-force-action') !== null ? 'true' : 'false';

		this.notModal = `body > *:not(.usa-modal-wrapper):not([aria-hidden])`;

		// button that opens the modal
		this.opener = document.querySelectorAll(
			`[aria-controls="${this.modalId}"]`
		)[0] as HTMLButtonElement;
		// remove aria as the modal is not in the dom
		this.opener.removeAttribute('aria-controls');

		// create basic wrapper elements
		this.bodyElement = document.body || document;
		this.wrapperElement = document.createElement('div');
		this.overlayElement = document.createElement('div');
		// get aria attributes to apply to wrapper
		this.ariaLabelledBy =
			this.modal?.getAttribute('aria-labelledby') || this.modalId;
		this.ariaDescribedBy =
			this.modal?.getAttribute('aria-describedby') || this.modalId;

		// header element for updating later
		this.modalHeader = document.getElementById(
			this.ariaLabelledBy
		) as HTMLElement;
		// get the parent of the describedBy attribute
		this.modalBody = document.getElementById(this.ariaDescribedBy)
			?.parentElement as HTMLElement;
		this.modalFooter = document.getElementsByClassName('usa-modal__footer')[0]
			?.firstChild as HTMLElement;

		this.isActive = false;
		// create focus trap instance
		this.focusTrap = new FocusTrap(this.modal);
		this.tempBodyPadding = this.setBodyPadding();
		this.setWrapper();
		this.setOverlay();
		this.setModal(modal);

		USAModal._components.set(this.modal, this);
	}

	/**
	 * Creates the modal wrapper element and attaches
	 * aria attributes for accessibility
	 *
	 * @internal
	 */
	private setWrapper(): void {
		this.wrapperElement.setAttribute('class', 'usa-modal-wrapper');
		this.wrapperElement.classList.add('is-visible');
		this.wrapperElement.setAttribute('aria-labelledby', this.ariaLabelledBy);
		this.wrapperElement.setAttribute('aria-describedby', this.ariaDescribedBy);
		this.wrapperElement.setAttribute('role', 'dialog');
		this.wrapperElement.setAttribute('id', this.modalId);
	}

	/**
	 * Creates the modal bakground overlay element.
	 *
	 * @internal
	 */
	private setOverlay(): void {
		this.overlayElement.setAttribute('class', 'usa-modal-overlay');
		this.overlayElement.setAttribute('aria-controls', this.modalId);
	}

	/**
	 * Creates the open modal button element, removes aria attributes as
	 * they should now be on the wrapper element
	 *
	 * @internal
	 */
	private setCloseButtons(): void {
		// set close buttons in the modal from data attribute
		this.footerButtons = Array.from(
			this.modal.querySelectorAll('[data-close-modal]')
		);
		this.footerButtons.map((closeButton) => {
			closeButton.addEventListener('click', this.closeModalWindow, false);
		});
	}
	/**
	 * Creates the open modal button element, removes aria attributes as
	 * they should now be on the wrapper element
	 *
	 * @internal
	 */
	private setModal(modal: HTMLElement): void {
		this.opener.addEventListener('click', this.openModalWindow, false);
		this.modal.setAttribute('role', 'dialog');
		this.modal.setAttribute('tabIndex', '-1');
		this.modal.removeAttribute('aria-labelled-by');
		this.modal.removeAttribute('aria-described-by');
		this.modal.removeAttribute('id');

		this.setCloseButtons();

		// remove original modal from the DOM
		modal.remove();
	}

	/**
	 * Gets the value for the scroll bar to fix
	 * content in modal active mode
	 *
	 * @internal
	 */
	private setBodyPadding(): string {
		const scrollBarTempWidth = new scrollbarWidth().getWidth();
		const initialPadding = window
			.getComputedStyle(document.body)
			.getPropertyValue('padding-right');
		const tempPadding = `${
			parseInt(initialPadding.replace(/px/, ''), 10) +
			parseInt(scrollBarTempWidth.replace(/px/, ''), 10)
		}px`;
		return tempPadding;
	}

	/**
	 * Toggle class on the body for overlay and modal
	 *
	 * @internal
	 */
	private toggleBodyClass(): void {
		// Temporarily increase body padding to include the width of the scrollbar.
		// This accounts for the content shift when the scrollbar is removed on modal open.
		if (this.bodyElement.style.paddingRight === this.tempBodyPadding) {
			this.bodyElement.style.removeProperty('padding-right');
		} else {
			this.bodyElement.style.paddingRight = this.tempBodyPadding;
		}
		// Class to prevent background scrolling
		if (this.bodyElement.classList.contains('usa-js-modal--active')) {
			this.bodyElement.classList.remove('usa-js-modal--active');
		} else {
			this.bodyElement.classList.add('usa-js-modal--active');
		}
	}

	/**
	 * Activate the Modal view which includes overlay
	 *
	 * @internal
	 */
	private activateModal(): void {
		//	set	body class to prevent scrolling
		this.toggleBodyClass();
		this.isActive = true;

		// activate focus trap inside the modal
		this.focusTrap.toggleTrap(true, this.modal);

		if (this.isForced == 'false') {
			// add close eventlisteners to overlay and
			// button elements
			this.overlayElement.addEventListener(
				'click',
				this.closeOutsideModalWindow,
				false
			);

			this.modal.addEventListener(
				'keydown',
				this.closeEscapeModalWindow,
				false
			);
		}

		// Hides everything that is not the modal from screen readers
		document.querySelectorAll(this.notModal).forEach((nonModal) => {
			nonModal.setAttribute('aria-hidden', 'true');
			nonModal.setAttribute('data-modal-hidden', '');
		});

		// append the modal to the overlay
		this.overlayElement.appendChild(this.modal);
		// append the overlay to the wrapper
		this.wrapperElement.appendChild(this.overlayElement);
		// append the wrapper to the body
		this.bodyElement.appendChild(this.wrapperElement);

		// set focus to the modal
		this.modal.focus();
	}

	/**
	 * Deactivate Modal view which includes overlay
	 *
	 * @internal
	 */
	private deActivateModal(): void {
		// set body class back to default
		this.toggleBodyClass();
		this.isActive = false;

		if (this.isForced == 'false') {
			// remove eventlistener from overlay
			this.overlayElement.removeEventListener(
				'click',
				this.closeOutsideModalWindow
			);

			this.modal.removeEventListener('keydown', this.closeEscapeModalWindow);
		}

		// Un-hides everything that is not the modal for screen readers
		document.querySelectorAll(this.notModal).forEach((nonModal) => {
			nonModal.removeAttribute('aria-hidden');
			nonModal.removeAttribute('data-modal-hidden');
		});

		// de-activate focus trap inside the modal
		this.focusTrap.toggleTrap(false, this.modal);

		this.wrapperElement.remove();
	}

	/**
	 * Open Modal view which includes wrapper and overlay
	 *
	 * @internal
	 */
	public handleModalOpen(event: Event): void {
		const mouseEvent = event as MouseEvent;
		mouseEvent.preventDefault();
		this.activateModal();

		this.modal.dispatchEvent(
			new CustomEvent('usa-modal:open', {
				bubbles: true,
				detail: <ModalOpenEventDetails>{
					modal: this.modal,
					target: mouseEvent.target,
				},
			})
		);
	}

	/**
	 * Close modal and return body to deault state
	 *
	 * @internal
	 */
	public handleModalClose(event: Event): void {
		const mouseEvent = event as MouseEvent;
		// Make sure we're only clicking on the close element
		if (mouseEvent.target == mouseEvent.currentTarget) {
			this.deActivateModal();

			this.modal.dispatchEvent(
				new CustomEvent('usa-modal:close', {
					bubbles: true,
					detail: <ModalCloseEventDetails>{
						modal: this.modal,
						target: mouseEvent.target,
					},
				})
			);
		}
	}

	/**
	 * Close modal by overlay and return body to deault state
	 *
	 * @internal
	 */
	private handleModalCloseOutside(event: Event): void {
		const mouseEvent = event as MouseEvent;
		// Make sure we're only clicking on the close element
		if (mouseEvent.target == mouseEvent.currentTarget) {
			this.deActivateModal();

			this.modal.dispatchEvent(
				new CustomEvent('usa-modal:close:outside', {
					bubbles: true,
					detail: <ModalCloseOutsideEventDetails>{
						modal: this.modal,
						target: mouseEvent.target,
					},
				})
			);
		}
	}

	/**
	 * Handles accessible keyboard events on the input element.
	 *
	 * See comments for a11y requirements for:
	 * Escape
	 *
	 * @param event Keyboard event made on the input element.
	 */
	private handleKeyboardEscape(event: Event): void {
		const keyboardEvent = event as KeyboardEvent;

		switch (keyboardEvent.key) {
			case 'Escape': {
				/*
				  Dismisses the modal if it is visible.
				 */
				if (this.modal) {
					this.deActivateModal();

					this.modal.dispatchEvent(
						new CustomEvent('usa-modal:close:escape', {
							bubbles: true,
							detail: <ModalCloseEscEventDetails>{
								target: keyboardEvent.target,
							},
						})
					);
				}

				break;
			}
		}
	}

	/**
	 * Create SVG Icon for close button
	 *
	 * @internal
	 */
	private static createIcon(): SVGElement {
		const iconSvg = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		);
		const iconPath = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'path'
		);

		iconSvg.setAttribute('class', 'usa-icon');
		iconSvg.setAttribute('role', 'img');
		iconSvg.setAttribute('aria-hidden', 'true');
		iconSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

		iconPath.setAttribute('fill', 'none');
		iconPath.setAttribute('stroke', 'currentColor');
		iconPath.setAttribute('stroke-linecap', 'round');
		iconPath.setAttribute('stroke-width', '2');
		iconPath.setAttribute(
			'd',
			'M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0'
		);
		iconPath.setAttribute('transform', 'translate(1 1)');

		iconSvg.appendChild(iconPath);

		return iconSvg;
	}

	/**
	 * Generate buttons for the modal footer
	 *
	 * @param ModalButtons
	 */
	private static generateButtons(
		config: Array<ModalButtons>,
		buttonGroup: HTMLElement
	): void {
		config.map((item) => {
			const buttonGroupItem = document.createElement('li');
			buttonGroupItem.setAttribute('class', 'usa-button-group__item');
			const buttonElement = document.createElement('button');
			buttonElement.setAttribute('class', `usa-button ${item.style}`);
			buttonElement.innerHTML = item.label;
			if (item.closeModal) {
				buttonElement.setAttribute('data-close-modal', '');
			}
			if (item.cbfunction != null) {
				buttonElement.addEventListener('click', () => alert(item.cbfunction));
			}
			buttonElement.setAttribute('type', 'button');
			buttonGroupItem.appendChild(buttonElement);
			buttonGroup.appendChild(buttonGroupItem);
		});
	}
	/**
	 * If no modal dom is supplied - then create version
	 * from a config file
	 *
	 * @param configObject
	 */
	private static createBlankModal(config: ModalConfig): HTMLElement {
		// Create basic modal wrapper
		const emptyModal = document.createElement('div');
		emptyModal.setAttribute('class', 'usa-modal');
		emptyModal.setAttribute('id', config.modalId);
		emptyModal.setAttribute('aria-labelledby', config.modalId);
		emptyModal.setAttribute('aria-describedby', config.modalId);

		// Create modal header element
		const modalHeader = document.createElement('h2');
		modalHeader.setAttribute('class', 'usa-modal__heading');
		modalHeader.setAttribute('class', `${config.modalId}-heading`);
		modalHeader.innerHTML = config.title;

		// Create modal content areas and main content
		const modalContent = document.createElement('div');
		modalContent.setAttribute('class', 'usa-modal__content');

		const modalMain = document.createElement('div');
		modalMain.setAttribute('class', 'usa-modal__main');

		const modalProse = document.createElement('div');
		modalProse.setAttribute('class', 'usa-prose');

		const modalDescription = document.createElement('p');
		modalDescription.setAttribute('id', `${config.modalId}-description`);
		modalDescription.innerHTML = config.content;

		// Create modal footer area
		const modalFooter = document.createElement('div');
		modalFooter.setAttribute('class', 'usa-modal__footer');

		// Create modal button group for footer
		const buttonGroup = document.createElement('ul');
		buttonGroup.setAttribute('class', 'usa-button-group');

		this.generateButtons(config?.footer as Array<ModalButtons>, buttonGroup);
		// Create footer button elements

		modalFooter.appendChild(buttonGroup);
		// Create close button
		const closeButton = document.createElement('button');
		closeButton.setAttribute('class', 'usa-button usa-modal__close');
		closeButton.setAttribute('data-close-modal', '');
		closeButton.setAttribute('aria-label', 'Close this Window');

		closeButton.appendChild(this.createIcon());

		// Append items together to make modal
		modalMain.appendChild(modalHeader);

		modalProse.appendChild(modalDescription);
		modalMain.appendChild(modalProse);
		modalMain.appendChild(modalFooter);
		modalContent.appendChild(modalMain);
		modalContent.appendChild(closeButton);
		emptyModal.appendChild(modalContent);

		// Append to body for modal
		document.body.appendChild(emptyModal);

		// return modal object
		return emptyModal as HTMLElement;
	}

	/**
	 * Update modal header
	 *
	 * @param string
	 */
	public updateHeading(copy: string): void {
		this.modalHeader.innerHTML = copy;
	}

	/**
	 * Update modal body content
	 *
	 * @param string
	 */
	public updateBody(copy: string): void {
		this.modalBody.innerHTML = copy;
	}

	/**
	 * Update modal body content
	 *
	 * @param string
	 */
	public updateButtons(config: Array<ModalButtons>): void {
		// Clear old buttons
		this.modalFooter.innerHTML = '';
		// Generate new buttons
		config.map((item) => {
			const buttonGroupItem = document.createElement('li');
			buttonGroupItem.setAttribute('class', 'usa-button-group__item');
			const buttonElement = document.createElement('button');
			buttonElement.setAttribute('class', `usa-button ${item.style}`);
			buttonElement.innerHTML = item.label;
			if (item.closeModal) {
				buttonElement.setAttribute('data-close-modal', '');
			}
			if (item.cbfunction != null) {
				buttonElement.addEventListener('click', () => item.cbfunction);
			}
			buttonElement.setAttribute('type', 'button');
			buttonGroupItem.appendChild(buttonElement);
			this.modalFooter.appendChild(buttonGroupItem);
		});
		this.setCloseButtons();
	}

	/**
	 * Instantiates the modal.
	 *
	 * @param modal Element to initialize.
	 * @param configObject JSON object to initialize. optional
	 */
	public static create(modal: HTMLElement | ModalConfig): USAModal {
		let modalTemp = modal;

		if (!(modal instanceof HTMLElement)) {
			const modalConfig = modal as ModalConfig;
			if (!modalConfig.modalId) {
				throw 'Element is not an HTMLElement';
			} else {
				modalTemp = this.createBlankModal(modalConfig);
			}
		}

		return (
			this._components.get(modalTemp as HTMLElement) ||
			new this(modalTemp as HTMLElement)
		);
	}

	/**
	 * Creates all modal components in document.
	 *
	 * @internal
	 */
	public static createAll(): USAModal[] {
		const modalDialogs = Array.from(
			document.getElementsByClassName('usa-modal')
		);
		return modalDialogs.map((modal) => this.create(modal as HTMLElement));
	}

	/**
	 * Auto initializes the modal.
	 *
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			const modalDialogs = Array.from(
				document.getElementsByClassName('usa-modal')
			);
			modalDialogs.forEach((modal) => {
				this.create(modal as HTMLElement);
			});
		});
	}

	/**
	 * Resets component to a clean state.
	 *
	 * @internal
	 */
	public unregister(): void {
		// remove elements
		this.modal.remove();
		this.overlayElement.remove();
		this.wrapperElement.remove();
		this.bodyElement.remove();

		// check for buttons in modal and remove listeners
		this.footerButtons = Array.from(
			this.modal.querySelectorAll('[data-close-modal]')
		);
		this.footerButtons.map((closeButton) => {
			closeButton.removeEventListener('click', this.closeModalWindow);
		});

		this.focusTrap = new FocusTrap(this.modal);
		// reset the button back to original state
		// and inject original modal dom
		this.opener.setAttribute('aria-controls', this.modalId);
		this.opener.insertAdjacentElement('afterend', this.modalEl);
		this.opener.removeEventListener('click', this.openModalWindow);
	}
}
