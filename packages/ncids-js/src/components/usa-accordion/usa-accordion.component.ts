import { AccordionOptions } from './usa-accordion-options';
/**
 * USA Accordion
 * The USA Accordion component is used to initialize content creator accordion markup
 * with augmented accordion markup.
 *
 * ## Default Options
 * * allowMultipleOpen: false (Boolean for multiselectable accordion, default is false)
 * * openSections: [1] (Array of sections to start open, default is first section)
 *
 * ## Initialization Examples
 *
 * The easiest way to use the accordion is to let the NCIDS automatically initialize
 * your accordion HTML.
 *
 * Just add the following to the top of your main Javascript file and it will
 * add code to your javascript that initializes the Accordion
 * with default options.
 * ```js
 * import '@nciocpl/ncids-js/usa-accordion/auto-init';
 * ```
 *
 * If you'd like to initialize the accordion with the default options, you can
 * manually initialize the accordion. Below are examples doing so with the default options,
 * and with custom options.
 *
 * ### Default Options
 * ```js
 * import { USAAccordion } from '@nciocpl/ncids-js/components/usa-accordion';
 * const accordion = document.querySelector('.usa-accordion');
 * USAAccordion.create(accordion);
 * ```
 *
 * ### Custom Options
 * ```js
 * import { USAAccordion } from '@nciocpl/ncids-js/components/usa-accordion';
 * const accordion = document.querySelector('.usa-accordion');
 * USAAccordion.create(accordion, {
 *   allowMultipleOpen: true
 * });
 * ```
 *
 * ## HTML Events
 *
 * The USA Accordion component will dispatch the following
 * {@link https://developer.mozilla.org/docs/Web/API/CustomEvent | CustomEvent} types
 * that can be used to track analytics or other needs when a visitor interacts with
 * the accordion.
 *
 * ### Mega Menu Interaction Events
 * * `usa-accordion:openAll` - Dispatched when function is called to open all accordion sections.
 * * `usa-accordion:closeAll` - Dispatched when function is called to close all accordion sections.
 * * `usa-accordion:section:expand` - Dispatched when a user expands the selected section of the accordion.
 * * `usa-accordion:section:collapse` - Dispatched when a user collapses the selected currently open section of the accordion.
 */
export class USAAccordion {
	/** block element which will be the container for the accordion */
	protected accordionContainer: HTMLElement;
	/** array of accordion node ids */
	protected accordionContentIds: Array<string>;
	/** Optional settings for the component */
	protected options: AccordionOptions;
	/** Default options settings */
	private static optionDefaults: AccordionOptions = {
		allowMultipleOpen: false,
		openSections: [1],
	};

	/** Callback for handling accordion heading button click  */
	private accordionToggleClickEventListener: EventListener = (event: Event) =>
		this.handleAccordionToggleClick(event);

	/**
	 * Sets component properties and initializes component.
	 *
	 * @param accordionContainer container of content being created as an accordion.
	 * @param options Accordion options used for component creation
	 */
	protected constructor(
		accordionContainer: HTMLElement,
		options: Partial<AccordionOptions>
	) {
		this.accordionContainer = accordionContainer;
		this.accordionContentIds = [];
		this.options = {
			...USAAccordion.optionDefaults,
			...options,
		};

		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param element Element to initialize.
	 * @param options AccordionOptions for initialization (allow multiple sections, open sections on initialization)
	 */
	public static create(
		element: HTMLElement,
		options: AccordionOptions
	): USAAccordion {
		return new this(element, options);
	}

	/**
	 * Initializes the Accordion based on DOM
	 */
	private initialize(): void {
		this.updateDom();
	}

	/**
	 * Setup of accordion, supporting elements and attributes
	 */
	private updateDom(): void {
		if (this.options.allowMultipleOpen) {
			this.accordionContainer.classList.add('usa-accordion--multiselectable');
			this.accordionContainer.setAttribute('data-allow-multiple', '');
		}

		// determine if usa-prose needs to be propagated checking accordion container and possible content wrapper
		const proseContent =
			this.accordionContainer.classList.contains('usa-prose') ||
			this.accordionContainer.firstElementChild?.classList.contains(
				'usa-prose'
			);

		// Find all heading elements within the section
		const headings = this.accordionContainer.querySelectorAll(
			'h1, h2, h3, h4, h5, h6'
		);

		const accordionHeadingLvl = headings[0].tagName;

		// filter down to headings at the same level as the first one
		const accordionHeadings = Array.from(headings).filter((heading) => {
			return heading.tagName == accordionHeadingLvl;
		});

		// Iterate over headings
		accordionHeadings.forEach((heading, index) => {
			// should the section be opened on init?
			const initOpen = this.options.openSections.includes(index + 1);

			// If the heading already has a button with an ID (HTML came from USWDS twig)
			// Don't do all the ID / element creation if the HTML is coming with its own baggage
			// If the next element is a nested accordion, go through the creation steps normally
			if (
				heading.nextElementSibling &&
				heading.nextElementSibling.id &&
				!heading.nextElementSibling.classList.contains('usa-accordion')
			) {
				this.accordionContentIds.push(heading.nextElementSibling.id);
				const existingButton = heading.getElementsByClassName(
					'usa-accordion__button'
				)[0];
				existingButton.addEventListener(
					'click',
					this.accordionToggleClickEventListener,
					true
				);
				existingButton.setAttribute(
					'aria-expanded',
					initOpen ? 'true' : 'false'
				);
				(heading.nextElementSibling as HTMLDivElement).hidden = !initOpen;
				return;
			}

			// Add the class '.usa-accordion__heading' to the heading
			heading.classList.add('usa-accordion__heading');

			const accordionSectionId = this.generateUniqueId();
			this.accordionContentIds.push(accordionSectionId);
			// Create a button for the heading and add to content
			const button = document.createElement('button');
			button.textContent = heading.textContent!;
			button.classList.add('usa-accordion__button');
			button.setAttribute('aria-controls', accordionSectionId);
			button.setAttribute('type', 'button');
			button.setAttribute('aria-expanded', initOpen ? 'true' : 'false');

			button.addEventListener(
				'click',
				this.accordionToggleClickEventListener,
				true
			);
			// Replace the heading content with the button
			heading.textContent = '';
			heading.appendChild(button);

			// Create a container div for the section content
			const contentContainer = document.createElement('div');
			contentContainer.classList.add('usa-accordion__content');
			if (proseContent) {
				contentContainer.classList.add('usa-prose');
			}
			contentContainer.setAttribute('id', accordionSectionId);
			contentContainer.hidden = !initOpen;

			// Select all content siblings until the next heading
			let nextSibling = heading.nextElementSibling;
			while (nextSibling && nextSibling.tagName !== accordionHeadingLvl) {
				// Move the content into the section content container
				contentContainer.appendChild(nextSibling);
				nextSibling = heading.nextElementSibling;
			}

			// Append the section content container after the heading
			heading.insertAdjacentElement('afterend', contentContainer);
		});
	}

	/**
	 * Reverses dom changes made for accordion and restores original content
	 */
	public unregister() {
		if (this.options.allowMultipleOpen) {
			this.accordionContainer.classList.remove(
				'usa-accordion--multiselectable'
			);
			delete this.accordionContainer.dataset.allowMultiple;
		}
		// undo buttons in headings
		const accordionHeadings = Array.from(
			this.accordionContainer.querySelectorAll('.usa-accordion__heading')
		);
		accordionHeadings.forEach((heading) => {
			// safe to typecast, we created it
			const button = heading.querySelector('button') as HTMLButtonElement;
			button.removeEventListener(
				'click',
				this.accordionToggleClickEventListener,
				true
			);
			heading.innerHTML = button.textContent as string;
			heading.classList.remove('usa-accordion__heading');
		});
		// move content out of accordion content wrapper
		const accordionContents = Array.from(
			this.accordionContainer.querySelectorAll('.usa-accordion__content')
		);
		accordionContents.forEach((contentBlock) => {
			contentBlock.outerHTML = contentBlock.innerHTML;
		});
	}

	/**
	 * Public Utility function to close accordion nodes
	 */
	public closeAll(): void {
		this.collapseAll();
		this.accordionContainer.dispatchEvent(
			new CustomEvent('usa-accordion:closeAll', {
				detail: this.accordionContainer,
			})
		);
	}

	/**
	 * Public Utility function to open accordion nodes
	 */
	public openAll(): void {
		this.accordionContentIds.forEach((contentId) => {
			document.getElementById(contentId)!.hidden = false;
			document
				.querySelector(`[aria-controls=${contentId}]`)
				?.setAttribute('aria-expanded', 'true');
		});
		this.accordionContainer.dispatchEvent(
			new CustomEvent('usa-accordion:openAll', {
				detail: this.accordionContainer,
			})
		);
	}

	/**
	 * Private function to close all accordion nodes
	 */
	private collapseAll(): void {
		this.accordionContentIds.forEach((contentId) => {
			document.getElementById(contentId)!.hidden = true;
			document
				.querySelector(`[aria-controls=${contentId}]`)
				?.setAttribute('aria-expanded', 'false');
		});
	}

	/**
	 * Public function for toggling an accordion section via its ID
	 * @param toggleId The ID of the section being toggled
	 */
	public toggleSectionWithId(toggleId: string): void {
		const element = document.getElementById(toggleId);
		if (element) element.hidden = !element.hidden;
	}

	/**
	 * Generate a unique identifier for accordion section controls
	 */
	private generateUniqueId(): string {
		return 'acc' + Math.floor(1000 + Math.random() * 9000);
	}

	/**
	 * Handles click on header button in accordion
	 * @param e Event passed on from click
	 */
	private handleAccordionToggleClick(e: Event): void {
		// change aria-expanded value of button
		const currBtn = e.currentTarget as HTMLButtonElement;
		const expanded = currBtn.getAttribute('aria-expanded') === 'true';
		const newState = expanded ? 'false' : 'true';
		// close other sections
		if (newState === 'true' && !this.options.allowMultipleOpen) {
			this.closeAll();
		}
		currBtn.setAttribute('aria-expanded', newState);
		// add hidden to targeted content
		const contentTargetId = currBtn.getAttribute('aria-controls');
		const contentTarget = document.getElementById(
			contentTargetId!
		) as HTMLDivElement;
		contentTarget.hidden = newState !== 'true';

		this.accordionContainer.dispatchEvent(
			new CustomEvent(
				`usa-accordion:section:${newState === 'true' ? 'expand' : 'collapse'}`,
				{
					detail: currBtn.textContent,
				}
			)
		);
	}

	/**
	 * Auto initializes accordion component with default sources.
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			const accordions = Array.from(
				document.getElementsByClassName('usa-accordion')
			);

			accordions.forEach((element) => {
				const htmlElement = element as HTMLElement;
				// Check if Accordion is Multiselectable
				const isMultiSelect =
					htmlElement.hasAttribute('data-allow-multiple') ||
					htmlElement.classList.contains('usa-accordion--multiselectable');
				// Return array of open sections, default is [1] (first section)
				let dataOpenSections = JSON.parse(
					`[${htmlElement.dataset.openSections || '1'}]`
				);
				// If multiple open sections but multiselect is false, warn the user
				if (dataOpenSections.length > 1 && isMultiSelect === false) {
					dataOpenSections = this.optionDefaults.openSections;
					console.warn(
						'Multiple sections selected as open, but accordion is not enabled as multiselectable. ' +
							'Displaying first section as open per the behavior of the default accordion. ' +
							'Please use a multiselect accordion if you wish to have multiple open sections at once.'
					);
				}
				// Return accordion with default options
				// set multiselect / set open sections
				return this.create(htmlElement, {
					...this.optionDefaults,
					allowMultipleOpen: isMultiSelect,
					openSections: dataOpenSections,
				});
			});
		});
	}

	/**
	 * Public function for creating accordion component with default sources from HTML.
	 * @return array of initialized accordions
	 */
	public static createAll(): USAAccordion[] {
		const accordions = Array.from(document.querySelectorAll('.usa-accordion'));

		const instances = accordions.map((element) => {
			const htmlElement = element as HTMLElement;
			// Check if Accordion is Multiselectable
			const isMultiSelect =
				htmlElement.hasAttribute('data-allow-multiple') ||
				htmlElement.classList.contains('usa-accordion--multiselectable');
			// Return array of open sections, default is [1] (first section)
			let dataOpenSections = JSON.parse(
				`[${htmlElement.dataset.openSections || '1'}]`
			);
			// If multiple open sections but multiselect is false, warn the user
			if (dataOpenSections.length > 1 && isMultiSelect === false) {
				dataOpenSections = this.optionDefaults.openSections;
				console.warn(
					'Multiple sections selected as open, but accordion is not enabled as multiselectable. ' +
						'Displaying first section as open per the behavior of the default accordion' +
						'Please use a multiselect accordion if you wish to have multiple open sections at once.'
				);
			}
			// Return accordion with default options
			// set multiselect / set open sections
			return this.create(htmlElement, {
				...this.optionDefaults,
				allowMultipleOpen: isMultiSelect,
				openSections: dataOpenSections,
			});
		});
		return instances;
	}
}
