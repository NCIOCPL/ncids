import {
	AutocompleteOptions,
	NCIAutocompleteOptions,
} from './utils/autocomplete-options';
import { AutocompleteAdaptor } from './utils/autocomplete-adaptor';

/**
 * NCI Autocomplete
 * Initialize designated search inputs with augmented autocomplete markup
 */
export class NCIAutocomplete {
	/** input to be converted to an autocomplete */
	protected autocompleteInput!: HTMLInputElement;
	/** Optional settings for the component. */
	protected options: NCIAutocompleteOptions;
	/** Default settings for the component. */
	private static optionDefaults: AutocompleteOptions = {
		highlightMatchingText: true,
		maxOptionsCount: 10,
		minCharCount: 3,
		minPlaceholderMsg: '',
	};
	/** Input field id used for creating other ids */
	protected autocompleteInputId: string;
	/** Input fields original parent */
	protected acInputParent: HTMLElement | null;
	/** Results announcer for screenreader */
	protected autocompleteContainer: HTMLDivElement;
	/** cloned version of passed autocompleted, re-added to dom */
	private newACInput!: HTMLInputElement;
	/** listbox wrapper */
	protected listboxWrapper: HTMLDivElement;
	/** listbox of suggestions/terms */
	protected listbox: HTMLDivElement;
	/** Results announcer for screenreader */
	protected announcer: HTMLDivElement;
	/** Autocomplete source */
	private adaptor!: AutocompleteAdaptor;

	private optionClickEventListener: EventListener = (event: Event) =>
		this.handleOptionClick(event);
	/** Callback for handling input changes  */
	private inputEventListener: EventListener = () => this.handleInput();
	/** Callback for handling keyboard controls  */
	private keyPressEventListener: EventListener = (event: Event) =>
		this.handleKeypress(event);

	/**
	 * Sets component properties and initializes component.
	 *
	 * @param {HTMLInputElement} autocompleteInput container of input being created as autocomplete.
	 * @param {Partial<AutocompleteOptions>} options Autocomplete options used for component creation
	 * @protected
	 */
	protected constructor(
		autocompleteInput: HTMLInputElement,
		options: Partial<NCIAutocompleteOptions>
	) {
		this.autocompleteInput = autocompleteInput;
		this.autocompleteInputId = this.autocompleteInput.id;
		this.options = {
			...{ autocompleteSource: undefined },
			...NCIAutocomplete.optionDefaults,
			...options,
		};
		if (!this.options.autocompleteSource) {
			throw 'option autocompleteSource is undefined';
		}
		this.adaptor = this.options.autocompleteSource;
		this.acInputParent = this.autocompleteInput.parentElement;
		this.autocompleteContainer = document.createElement('div');

		// add and re-populate the autocomplete container
		this.autocompleteContainer.classList.add('nci-autocomplete');
		if (this.acInputParent?.hasChildNodes()) {
			while (this.acInputParent.firstChild) {
				this.autocompleteContainer.appendChild(
					this.acInputParent.firstChild.cloneNode(true)
				);
				this.acInputParent.removeChild(this.acInputParent.firstChild);
			}
		}
		this.acInputParent?.append(this.autocompleteContainer);

		this.newACInput = document.getElementById(
			this.autocompleteInputId
		) as HTMLInputElement;

		this.listboxWrapper = document.createElement('div');
		this.listbox = document.createElement('div');
		this.announcer = document.createElement('div');
		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {NCIExtendedHeaderWithMegaMenuOptions} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLInputElement,
		options: {
			autocompleteSource: AutocompleteAdaptor;
		} & Partial<AutocompleteOptions>
	): NCIAutocomplete {
		if (!(element instanceof HTMLInputElement)) {
			throw 'Must be an input element to be an autocomplete';
		}
		return new this(element, options);
	}

	/**
	 * Finds collapsible sections, the buttons that triggers them, and adds event
	 * listeners and custom events.
	 * @private
	 */
	private initialize(): void {
		this.updateDom();
	}

	/**
	 * Initial setup of listbox, announcer, and other supporting elements and attributes
	 * @private
	 */
	private updateDom(): void {
		//set up listbox
		this.listboxWrapper.setAttribute(
			'id',
			this.autocompleteInputId + '-termswrapper'
		);
		this.listboxWrapper.classList.add('nci-autocomplete__listbox');
		this.listbox.setAttribute('id', this.autocompleteInputId + '-terms');
		this.listbox.setAttribute('tabindex', '-1');
		this.listbox.setAttribute('role', 'listbox');
		this.listboxWrapper.append(this.listbox);
		this.autocompleteContainer.append(this.listboxWrapper);

		//set up announcer
		this.announcer.classList.add('nci-autocomplete__status');
		this.announcer.setAttribute('aria-live', 'assertive');
		this.autocompleteContainer.prepend(this.announcer);

		// a11y-ify input
		this.newACInput.setAttribute('role', 'combobox');
		this.newACInput.setAttribute('aria-autocomplete', 'list');
		this.newACInput.setAttribute(
			'aria-owns',
			this.autocompleteInputId + '-terms'
		);
		this.newACInput.setAttribute('aria-activedescendant', '');

		this.addEventListeners();
	}

	/**
	 * Sets up input and keyboard event listeners for input
	 * @private
	 */
	private addEventListeners(): void {
		this.newACInput?.addEventListener('input', this.inputEventListener, true);
		this.newACInput?.addEventListener(
			'keydown',
			this.keyPressEventListener,
			true
		);
	}

	/**
	 * Utility to hide listbox
	 * @private
	 */
	private closeListbox(): void {
		this.newACInput?.removeAttribute('aria-activedescendant');
		this.announcer.innerHTML = '';
		this.listbox.innerHTML = '';
		this.listboxWrapper.classList.remove('active');
	}

	/**
	 * Handles input from search field and makes suggestion requests via adapter
	 * @private
	 */
	private async handleInput() {
		// check if it meets minimum chars inputted
		if (this.newACInput.value.length >= this.options.minCharCount) {
			// get terms which will return an array
			// pass result array to formatting
			// const testArray = [
			// 	'breast cancer',
			// 	'lung cancer',
			// 	'ovarian cancer',
			// 	'prostate cancer',
			// 	'skin cancer',
			// ];
			const response = await this.adaptor.getAutocompleteSuggestions(
				this.newACInput.value
			);
			this.buildTermsList(response);
		} else if (
			// display provided placeholder text for minimum number of characters needed
			this.options.minPlaceholderMsg &&
			this.newACInput.value.length < this.options.minCharCount &&
			this.newACInput.value.length > 0
		) {
			this.listbox.innerHTML = `<div class="nci-autocomplete__option"><span class="minPlaceholderMsg">${this.options.minPlaceholderMsg}</span></div>`;
			this.listboxWrapper.classList.add('active');
		} else {
			this.closeListbox();
		}
		return;
	}

	/**
	 * Handles keyboard controls for autocomplete component
	 * @param {Event} event keypress event
	 * @private
	 */
	private handleKeypress(event: Event): void {
		const keyboardEvt = event as KeyboardEvent;

		//is one of the terms higlighted?
		const termHighlighted =
			this.listbox.querySelectorAll('.highlight')?.length > 0;

		switch (keyboardEvt.key) {
			case 'Escape':
			case 'Tab':
				this.closeListbox();
				break;

			case 'Enter':
				if (termHighlighted) {
					event.preventDefault();
					event.stopPropagation();
					return this.selectOption(termHighlighted);
				} else {
					// submit the form
					return;
				}

			case 'ArrowRight':
				return this.selectOption(termHighlighted);

			case 'ArrowUp':
				event.preventDefault();
				event.stopPropagation();
				return this.moveUp(termHighlighted);

			case 'ArrowDown':
				event.preventDefault();
				event.stopPropagation();
				return this.moveDown(termHighlighted);

			default:
				return;
		}
	}

	/**
	 * Handles keyboard navigation of suggestions when UP arrow is pressed
	 * @param {boolean} highlighted is a term higlighted in the list
	 * @private
	 */
	private moveUp(highlighted: boolean): void {
		if (highlighted) {
			// already in the list
			const currentTerm = this.listbox.querySelector('.highlight');

			if (currentTerm != null) {
				currentTerm.setAttribute('aria-selected', 'false');
				currentTerm.classList.remove('highlight');
				const prevTerm = currentTerm.previousSibling as HTMLElement | null;
				if (prevTerm != null) {
					prevTerm.setAttribute('aria-selected', 'true');
					prevTerm.classList.add('highlight');
					this.newACInput?.setAttribute('aria-activedescendant', prevTerm.id);
				}
			}
		} else {
			// not in the list so go to bottom of list
			const terms = this.listbox.querySelectorAll('.nci-autocomplete__option');
			const lastTerm = terms[terms.length - 1] as HTMLElement | null;
			if (lastTerm != null) {
				lastTerm.classList.add('highlight');
				lastTerm.setAttribute('aria-selected', 'true');
				this.newACInput?.setAttribute('aria-activedescendant', lastTerm.id);
			}
		}
	}

	/**
	 * Handles keyboard navigation of suggestions when DOWN arrow is pressed
	 * @param {boolean} highlighted is a term higlighted in the list
	 * @private
	 */
	private moveDown(highlighted: boolean): void {
		if (highlighted) {
			// already in the list
			const currentTerm = this.listbox.querySelector('.highlight');
			if (currentTerm != null) {
				currentTerm?.setAttribute('aria-selected', 'false');
				currentTerm?.classList.remove('highlight');
				const nextTerm = currentTerm?.nextSibling as HTMLElement | null;
				if (nextTerm != null) {
					nextTerm.setAttribute('aria-selected', 'true');
					nextTerm.classList.add('highlight');
					this.newACInput?.setAttribute('aria-activedescendant', nextTerm.id);
				}
			}
		} else {
			// not in the list so go to top of list
			const terms = this.listbox.querySelectorAll('.nci-autocomplete__option');
			const firstTerm = terms[0];
			firstTerm.classList.add('highlight');
			firstTerm.setAttribute('aria-selected', 'true');
			this.newACInput?.setAttribute('aria-activedescendant', firstTerm.id);
		}
	}

	/**
	 * Select the highligted option
	 * @param {boolean} termHighlighted option which is currently highlighted
	 * @private
	 */
	private selectOption(termHighlighted: boolean): void {
		if (termHighlighted && this.newACInput) {
			this.newACInput.removeAttribute('aria-activedescendant');
			this.newACInput.value =
				this.listbox
					.querySelector('.highlight span')
					?.getAttribute('aria-label') || '';
			this.newACInput?.focus();
			this.closeListbox();
		}
	}

	/**
	 * mark text matching input
	 * @param {string} termText term/suggestion
	 * @private
	 */
	private markInputMatch(termText: string): string {
		return termText.replace(
			new RegExp(this.newACInput.value, 'gi'),
			(match) => `<mark>${match}</mark>`
		);
	}

	/**
	 * Format returned results and populate the listbox
	 * @param {string[]} termsArr Array of terms
	 * @private
	 */
	private buildTermsList(termsArr: string[]): void {
		//update announcer
		this.updateAnnouncer(termsArr.length);
		//build list of suggestions
		const termsList = termsArr.map((term: string, idx: number) => {
			return idx < this.options.maxOptionsCount
				? `<div class="nci-autocomplete__option" tabindex="-1" role="option" aria-posinset="${idx}" aria-setsize="${
						termsArr.length
				  }" id="term-${idx}"><span aria-label="${term}">${
						this.options.highlightMatchingText
							? this.markInputMatch(term)
							: term
				  }</span></div>`
				: '';
		});
		//add items to list and show if not already
		this.listbox.innerHTML = termsList.join('');
		this.listboxWrapper.classList.add('active');

		//set up click listeners
		const termDivs = document.querySelectorAll(
			`#${this.autocompleteInputId}-terms .nci-autocomplete__option`
		);
		termDivs.forEach((termDiv) => {
			termDiv?.addEventListener('click', this.optionClickEventListener, true);
		});
	}

	/**
	 * Handles mouse click on one of the options displayed in the list
	 * @param {Event} e Event passed on from mouse click
	 * @private
	 */
	private handleOptionClick(e: Event): void {
		const currOption = e.currentTarget as HTMLElement;
		const currSpan = currOption.firstChild as HTMLSpanElement;
		if (this.newACInput && currSpan) {
			this.newACInput.value = currSpan.getAttribute('aria-label') || '';
		}
		this.closeListbox();
	}

	/**
	 * Update announcer text according to language and count
	 * @param {number} termCount Array of terms
	 * @private
	 */
	private updateAnnouncer(termCount: number): void {
		if (termCount >= 1) {
			this.announcer.innerHTML =
				document.documentElement.lang === 'es'
					? `${termCount.toString()} sugerencias automáticas. Use flecha arriba o flecha abajo para escuchar las opciones.`
					: `${termCount.toString()} suggestions found, use up and down arrows to review`;
		} else {
			this.announcer.innerHTML = '';
		}
	}
}