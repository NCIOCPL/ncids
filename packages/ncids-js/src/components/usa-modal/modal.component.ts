/**
 * The USAModal component is used to initialize and manage the `.usa-modal`
 * component.
 *
 *
 * ## Default Options
 *
 * ## Initialization Examples
 * The easiest way to use the modal is to let the NCIDS automatically
 * initialize your modal HTML. This can be done by importing the auto-init
 * script in your main JavaScript file:
 *
 * @example
 * ```javascript
 * import '@nciocpl/ncids-js/usa-modal/auto-init';
 * ```
 *
 *  ## Advanced Options
 * If you need access to the modal instance to further customize your site,
 * you can manually initialize the modal:
 *
 * @example
 * ```javascript
 * import { USAModal } from '@nciocpl/ncids-js/usa-modal';
 *
 * // Find the modal HTML element.
 * const modalEl = document.querySelector('.usa-modal');
 *
 * // Initialize the component.
 * const modal = USAModal.create(modalEl);
 *
 * // Open the modal programmatically
 * modal.handleModalOpen(new Event('click'));
 *
 * // Update modal content
 * modal.updateDialog({
 *     title: 'New Title',
 *     content: 'Updated content for the modal.',
 *     footer: [
 *         { label: 'Close', style: 'usa-button--secondary', closeModal: true }
 *     ]
 * });
 * ```
 *
 * # Config / Dynamic Modal Content
 *
 * @example
 *
 * ```javascript
 * import { USAModal } from '@nciocpl/ncids-js/usa-modal';
 *
 *  const modalConfig = {
 *      id: 'modal-subscribe',
 * 			forced: false,
 * 			modifier: 'usa-modal--lg',
 *  };
 *
 * const modalContent = {
 *  	title: 'Are you sure you want to continue?',
 *  	content: 'You have unsaved changes that will be lost.',
 *  	footer: [
 *  		{
 *  			label: 'Continue without saving',
 *  			style: '',
 *  			closeModal: true,
 *  		},
 *  		{
 *  			label: 'Go Back',
 *  			style: 'usa-button--outline',
 *  			closeModal: true,
 *  		},
 *  	],
 *  };
 *  // find async modal links
 *  const modalElements = document.querySelector('[data-async-modal]');

 *  // Create Modal container
 *	const modal = USAModal.create(modalConfig);
 *  // Update Content
 *	modal.updateDialog(modalContent);
 *
 *	// add handleModalOpen to button or link
 *	modalElements.addEventListener('click', (e) => modal.handleModalOpen(e), false);
 *
 *
 * ```
 * ## HTML Events
 *
 * The modal component will dispatch the following
 * {@link https://developer.mozilla.org/docs/Web/API/CustomEvent | CustomEvent} types
 * that can be used to track analytics or other needs when a visitor interacts with
 * the modal:
 *
 * - `usa-modal:open`: Dispatched when the modal is opened. Includes details about the modal and the triggering element.
 * - `usa-modal:close`: Dispatched when the modal is closed from an element with the `data-close-modal` attribute.
 * - `usa-modal:close:outside`: Dispatched when the modal is closed by clicking outside the modal (on the overlay).
 * - `usa-modal:close:escape`: Dispatched when the modal is closed by pressing the Escape key.
 *
 * These events provide hooks for integrating with analytics or other JavaScript logic to enhance user interaction tracking.
 */

import { ModalConfig } from './modal-config';
import { ModalContent } from './modal-content';
import { ModalButtons } from './modal-buttons';
import { FocusTrap } from '../../utils/focus-trap';
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

	/** css string to find non modal objects A11Y */
	private defaultFocusElement: HTMLElement;

	/** focusTrap for modal */
	protected focusTrap: FocusTrap;

	/** get the value of the scrollbar width */
	protected tempBodyPadding: string;

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
	private modalHeading: HTMLElement;

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

	/** Keydown event listener for the modal keyboard interaction. */
	private closeEscapeModalWindow: EventListener = (e) =>
		this.handleKeyboardEscape(e);

	protected constructor(modal: HTMLElement) {
		// Save original modal element for resetting the page to original state
		this.modalEl = modal.cloneNode(true) as HTMLElement;
		// get ID from orignal modal
		this.modalId = modal.getAttribute('id') || 'usa-modal';
		// check for forced action
		this.isForced =
			modal.getAttribute('data-force-action') !== null ? 'true' : 'false';

		this.notModal = `body > *:not(.usa-modal-wrapper):not([aria-hidden])`;

		// Get the first Focusable element in the modal
		const focusElements = this.getFocusableElements(modal) as HTMLElement[];
		this.defaultFocusElement = focusElements[0];
		console.log(this.defaultFocusElement);
		// button that opens the modal
		this.opener = document.querySelector(
			`[aria-controls="${this.modalId}"]`
		) as HTMLButtonElement;
		// remove aria as the modal is not in the dom
		if (this.opener && this.opener.hasAttribute('aria-controls')) {
			this.opener?.removeAttribute('aria-controls');
		}
		if (this.opener && !this.opener.getAttribute('data-async-modal')) {
			this.opener.addEventListener('click', this.openModalWindow, false);
		}

		// create basic wrapper elements
		this.wrapperElement = document.createElement('div');
		this.overlayElement = document.createElement('div');

		// get aria attributes to apply to wrapper
		this.ariaLabelledBy =
			modal?.getAttribute('aria-labelledby') || this.modalId;
		this.ariaDescribedBy =
			modal?.getAttribute('aria-describedby') || this.modalId;

		this.modal = modal as HTMLElement;

		// header element for updating later
		this.modalHeading =
			(document.getElementById(`${this.modalId}-heading`) as HTMLElement) ||
			null;
		// get the parent of the describedBy attribute
		this.modalBody = document.getElementById(`${this.modalId}-description`)
			?.parentElement as HTMLElement;
		this.modalFooter =
			(modal.getElementsByClassName('usa-modal__footer')[0] as HTMLElement) ||
			null;

		this.isActive = false;
		// create focus trap instance
		this.focusTrap = new FocusTrap(this.modal);
		this.tempBodyPadding = this.setBodyPadding();
		this.setWrapper();
		this.setOverlay();
		this.setModal();

		// remove original modal from the DOM
		modal.remove();

		USAModal._components.set(this.modal, this);
	}

	/**
	 * Retrieves all focusable elements within a specified element.
	 * This is used to manage focus within the modal for accessibility.
	 *
	 * @param elm - The HTMLElement to search for focusable elements.
	 * @returns An array of focusable HTMLElements.
	 */
	private getFocusableElements(elm: HTMLElement): HTMLElement[] {
		const focusableElements =
			'a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';
		return Array.from(elm.querySelectorAll(focusableElements));
	}

	/**
	 * Configures the modal wrapper element with necessary attributes for accessibility.
	 * This includes setting ARIA attributes and ensuring the wrapper is visible.
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
	 * Configures the modal background overlay element.
	 *
	 * @internal
	 */
	private setOverlay(): void {
		this.overlayElement.setAttribute('class', 'usa-modal-overlay');
		this.overlayElement.setAttribute('aria-controls', this.modalId);
	}

	/**
	 * Sets up close buttons within the modal.
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
	 * Initializes the modal by setting up event listeners and attributes.
	 *
	 * @internal
	 */
	private setModal(): void {
		this.modal.setAttribute('tabIndex', '-1');
		this.modal.removeAttribute('id');
		this.modal.removeAttribute('aria-describedby');
		this.modal.removeAttribute('aria-labelledby');
		this.setCloseButtons();
	}

	/**
	 * Calculates and sets the temporary padding for the body element.
	 *
	 * @internal
	 * @returns The calculated temporary padding as a string.
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
	 * Toggles the class on the body to manage overlay and modal visibility.
	 *
	 * @internal
	 */
	private toggleBodyClass(): void {
		// Temporarily increase body padding to include the width of the scrollbar.
		// This accounts for the content shift when the scrollbar is removed on modal open.
		if (document.body.style.paddingRight === this.tempBodyPadding) {
			document.body.style.removeProperty('padding-right');
		} else {
			document.body.style.paddingRight = this.tempBodyPadding;
		}
		// Class to prevent background scrolling
		const isActive = document.body.classList.contains('usa-js-modal--active');
		document.body.classList.toggle('usa-js-modal--active', !isActive);
	}

	/**
	 * Activates the modal, making it visible and interactive.
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
		document.body.appendChild(this.wrapperElement);

		// set focus to the default clickable element
		if (this.defaultFocusElement) {
			this.defaultFocusElement.focus();
		} else {
			this.modal.focus();
		}
	}

	/**
	 * Deactivates the modal, hiding it and restoring the page to its original state.
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
		document.querySelectorAll('[data-modal-hidden]').forEach((nonModal) => {
			nonModal.removeAttribute('aria-hidden');
			nonModal.removeAttribute('data-modal-hidden');
		});

		// de-activate focus trap inside the modal
		this.focusTrap.toggleTrap(false, this.modal);

		this.wrapperElement.remove();
	}

	/**
	 * Handles the opening of the modal.
	 *
	 * @param event - The event that triggered the modal opening.
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
	 * Handles the closing of the modal.
	 *
	 * @param event - The event that triggered the modal closing.
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
	 * Handles the closing of the modal when clicking outside of it.
	 *
	 * @param event - The event that triggered the modal closing.
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
	 * Handles keyboard events for accessibility, specifically the Escape key.
	 *
	 * @param event - The keyboard event that triggered the action.
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
	 * Creates an SVG icon for the close button.
	 *
	 * @internal
	 * @returns The SVGElement representing the close icon.
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
	 * Creates a blank modal element if none is supplied.
	 *
	 * @param modalId - The ID to assign to the new modal element.
	 * @returns The newly created modal HTMLElement.
	 */
	private static createBlankModal(config: ModalConfig): HTMLElement {
		// Create basic modal wrapper
		const emptyModal = document.createElement('div');
		emptyModal.setAttribute('class', 'usa-modal');
		if (config.modifier) {
			emptyModal.classList.add(config.modifier);
		}
		if (config.forced) {
			emptyModal.setAttribute('data-force-action', '');
		}
		emptyModal.setAttribute('id', config.id);
		emptyModal.setAttribute('aria-labelledby', config.id);
		emptyModal.setAttribute('aria-describedby', config.id);

		// Create modal content areas and main content
		const modalContent = document.createElement('div');
		modalContent.setAttribute('class', 'usa-modal__content');

		const modalMain = document.createElement('div');
		modalMain.setAttribute('class', 'usa-modal__main');
		modalMain.setAttribute('id', `${config.id}-main`);

		const modalProse = document.createElement('div');
		modalProse.setAttribute('class', 'usa-prose');

		const modalDescription = document.createElement('p');
		modalDescription.setAttribute('id', `${config.id}-description`);

		// Create close button
		const closeButton = document.createElement('button');
		closeButton.setAttribute('class', 'usa-button usa-modal__close');
		closeButton.setAttribute('data-close-modal', '');
		closeButton.setAttribute('aria-label', 'Close this Window');

		closeButton.appendChild(this.createIcon());

		// Append items together to make modal

		modalProse.appendChild(modalDescription);
		modalMain.appendChild(modalProse);
		modalContent.appendChild(modalMain);
		if (!config.forced) {
			modalContent.appendChild(closeButton);
		}
		emptyModal.appendChild(modalContent);

		// Append to body for modal
		document.body.appendChild(emptyModal);

		// return modal object
		return emptyModal as HTMLElement;
	}

	/**
	 * Updates the modal header with new content.
	 *
	 * @param copy - The new header content as a string.
	 */
	public updateHeading(copy: string | HTMLHeadingElement): void {
		if (this.modalHeading == null) {
			// Create modal header element
			const modalHeader = document.createElement('h2');
			modalHeader.setAttribute('class', 'usa-modal__heading');
			modalHeader.setAttribute('id', `${this.modalId}-heading`);
			this.modalHeading = modalHeader;
			const modalMain = this.modal.querySelector('.usa-modal__main');
			modalMain?.prepend(modalHeader);
		}

		// Create modal header element
		if (typeof copy === 'string') {
			this.modalHeading.textContent = copy as string;
		} else if (copy instanceof HTMLHeadingElement) {
			this.modalHeading.replaceChildren(...Array.from(copy.childNodes));
		}
	}

	/**
	 * Updates the modal body content with new text.
	 *
	 * @param copy - The new body content as a string.
	 */
	public updateBody(copy: string | HTMLElement): void {
		if (typeof copy === 'string') {
			this.modalBody.innerHTML = copy;
		} else if (copy instanceof HTMLElement) {
			this.modalBody.replaceChildren(...Array.from(copy.childNodes));
		}

		// check for new focusable elements in the body
		const focusElements =
			(this.getFocusableElements(this.modal) as HTMLElement[]) || this.modal;
		this.defaultFocusElement = focusElements[0];
		console.log(this.defaultFocusElement);
	}

	/**
	 * Updates the modal footer buttons based on a configuration array.
	 *
	 * @param config - An array of ModalButtons to configure the footer.
	 */
	public updateButtons(config: Array<ModalButtons>): void {
		if (this.modalFooter == null) {
			const footerElement = document.createElement('div');
			footerElement.classList.add('usa-modal__footer');
			const modalMain = this.modal.querySelector('.usa-modal__main');
			modalMain?.appendChild(footerElement);
			this.modalFooter = footerElement;
		}
		// Clear old buttons
		this.modalFooter.innerHTML = '';
		const buttonGroup = document.createElement('ul');
		buttonGroup.classList.add('usa-button-group');
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
			if (typeof item.cbfunction == 'function') {
				buttonElement.addEventListener('click', () => item.cbfunction?.());
			}
			buttonElement.setAttribute('type', 'button');
			buttonGroupItem.appendChild(buttonElement);
			buttonGroup.appendChild(buttonGroupItem);

			this.modalFooter.appendChild(buttonGroup);
		});
		this.setCloseButtons();

		// check for new focusable elements in the footer
		const focusElements =
			(this.getFocusableElements(this.modal) as HTMLElement[]) || this.modal;
		this.defaultFocusElement = focusElements[0];
	}

	/**
	 * Updates the entire modal dialog with new content and buttons.
	 *
	 * @param config - A ModalConfig object containing the new dialog configuration.
	 */
	public updateDialog(config: ModalContent): void {
		if (config.title) {
			this.updateHeading(config.title);
		}
		if (config.content) {
			this.updateBody(config.content);
		}
		if (config.footer) {
			this.updateButtons(config.footer);
		}
		// check for new focusable elements in the footer
		const focusElements =
			(this.getFocusableElements(this.modal) as HTMLElement[]) || this.modal;
		this.defaultFocusElement = focusElements[0];
	}

	/**
	 * create from config
	 */
	public static createConfig(config: ModalConfig): USAModal {
		const modalTemp = this.createBlankModal(config);

		return (
			this._components.get(modalTemp as HTMLElement) ||
			new this(modalTemp as HTMLElement)
		);
	}

	/**
	 * Instantiates a new USAModal object.
	 * Must be initialized with an existing modal element.
	 *
	 * @param modal - The HTMLElement to initialize.
	 * @returns A new instance of USAModal.
	 */
	public static create(modal: HTMLElement | HTMLButtonElement): USAModal {
		if (!(modal instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		} else {
			return (
				this._components.get(modal as HTMLElement) ||
				new this(modal as HTMLElement)
			);
		}
	}

	/**
	 * Creates all modal components found in the document.
	 * This is used to initialize multiple modals at once.
	 *
	 * @internal
	 * @returns An array of USAModal instances.
	 */
	public static createAll(): USAModal[] {
		const modals: USAModal[] = [];
		const dialogs = Array.from(
			document.getElementsByClassName('usa-modal')
		) as HTMLElement[];

		dialogs.map((modal) => {
			modals.push(this.create(modal as HTMLElement));
		});

		return modals;
	}

	/**
	 * Auto initializes the modal.
	 *
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			this.createAll();
		});
	}

	/**
	 * Unregisters the modal, removing it from the DOM and cleaning up event listeners.
	 * Restores the original state of the page before the modal was initialized.
	 *
	 * @internal
	 */
	public unregister(): void {
		// remove elements
		this.modal.remove();
		this.overlayElement.remove();
		this.wrapperElement.remove();

		// check for buttons in modal and remove listeners
		const closeButtons = Array.from(
			this.modal.querySelectorAll('[data-close-modal]')
		);
		closeButtons.map((closeButton) => {
			closeButton.removeEventListener('click', this.closeModalWindow);
		});

		// reset the button back to original state
		// and inject original modal dom
		this.opener.setAttribute('aria-controls', this.modalId);
		this.opener.insertAdjacentElement('afterend', this.modalEl);
		this.opener.removeEventListener('click', this.openModalWindow);
	}
}
