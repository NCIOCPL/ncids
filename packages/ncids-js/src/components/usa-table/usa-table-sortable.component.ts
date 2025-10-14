import { SortableTableOptions } from './usa-table-sortable-options';
/**
 * USA (Sortable) Table
 * Component for creating sortable tables
 * This component should eventually come from the NCIDS
 * For now, we're exporting it as a class here to mimick how it
 * would come from the NCIDS
 */
export class USATableSortable {
	/** The Table Element */
	protected tableElement: HTMLElement;
	/** Optional settings for the component */
	protected options: SortableTableOptions;
	/** Default options settings */
	private static optionDefaults: SortableTableOptions = {
		sortable: false,
	};

	/** Callback for handling table heading button click  */
	private tableSortToggleClickEventListener: EventListener = (event: Event) =>
		this.handleTableToggleClick(event);

	/**
	 * Sets component properties and initializes component.
	 *
	 * @param htmlElement container of content being created as a sortable table
	 * @param options Table options used for component creation
	 */
	protected constructor(
		htmlElement: HTMLElement,
		options: Partial<SortableTableOptions>
	) {
		this.tableElement = htmlElement;
		this.options = {
			...USATableSortable.optionDefaults,
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
		options: SortableTableOptions
	): USATableSortable {
		return new this(element, options);
	}

	/**
	 * Initializes the sortable table based on DOM
	 */
	private initialize(): void {
		// Determine if table is sortable based on options and
		// add the appropriate class
		if (this.options.sortable) {
			// The table head element (the row with the headings)
			const tableHead = this.tableElement.querySelector('thead') as HTMLElement;
			// All of the table's headings
			const tableHeadings = Array.from(tableHead.querySelectorAll('th'));
			// Make each heading sortable
			tableHeadings.forEach((heading) => {
				// Only make sortable if not marked with data-fixed
				if (!heading.hasAttribute('data-fixed')) {
					heading.setAttribute('data-sortable', '');
					this.createHeaderButton(heading as HTMLElement);
				}
				// If the heading has aria-sort already set,
				// sort by that column on initialization
				// (aria-sort="descending" can be set in the HTML
				// to sort descending on init) Defaults to ascending sort
				const isAscending =
					!heading.getAttribute('aria-sort') ||
					heading.getAttribute('aria-sort') === 'ascending';
				if (heading.hasAttribute('aria-sort')) {
					this.sortTable(heading as HTMLElement, isAscending);
				}
			});
		}
	}

	/**
	 * Creates the button element in the heading cell for sorting
	 * With the SVGs used by usa-table-sortable in USWDS
	 * @param header the heading cell of the column being sorted
	 */
	private createHeaderButton = (header: HTMLElement) => {
		const buttonEl = document.createElement('button');
		buttonEl.setAttribute('tabindex', '0');
		buttonEl.classList.add('usa-table__header__button');
		// ICON_SOURCE
		buttonEl.innerHTML = `
			<svg class="usa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g class="descending" fill="transparent">
					<path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
				</g>
				<g class="ascending" fill="transparent">
					<path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
				</g>
				<g class="unsorted" fill="transparent">
					<polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
				</g>
			</svg>
			`;
		buttonEl.addEventListener('click', this.tableSortToggleClickEventListener);
		header.appendChild(buttonEl);
	};

	/**
	 * Fuction to update aria-sort attribute on all headings in the table
	 * when a heading is clicked to sort
	 * @param tableHeading the heading cell of the column being sorted
	 * @param isAscending whether the sorting is ascending or descending
	 */
	private updateAllHeadingSortAttributes = (
		tableHeading: HTMLElement,
		isAscending: boolean
	) => {
		tableHeading.setAttribute(
			'aria-sort',
			isAscending ? 'ascending' : 'descending'
		);

		const table = tableHeading.closest('table') as HTMLElement;
		const tableHeadings = Array.from(table.querySelectorAll('th'));
		tableHeadings.forEach((th) => {
			if (th !== tableHeading) {
				th.removeAttribute('aria-sort');
			}
		});
	};

	/**
	 * Function to sort the table row based on the content
	 * @param row the row being sorted
	 * @param columnIndex when column is being sorted relative to other columns
	 * @param isAscending whether the sorting is ascending or descending
	 */
	private sortTableByColumn = (
		row: HTMLElement,
		columnIndex: number,
		isAscending: boolean
	) => {
		// Get the table and tbody elements for DOM manipulation
		const table = row.closest('table') as HTMLTableElement;
		const tbody = table.querySelector('tbody') as HTMLTableSectionElement;

		// Create an array from the rows for sorting
		const rowsArray = Array.from(tbody.rows);

		// Sort the rows based on the content of the specified column
		// The sorting logic checks for numbers, then dates, then strings
		rowsArray.sort((a, b) => {
			// Get the cell elements to check for data-sortable-type attribute
			const aCellElement = a.cells[columnIndex];
			const bCellElement = b.cells[columnIndex];

			// Get the header cell for the column being sorted
			// to check for data-sortable-type attribute
			const sortedColumnHeader =
				table.querySelector('thead')?.rows[0]?.cells[columnIndex];

			// Get the text content of the cells for sorting
			const aCell = aCellElement?.textContent?.trim() ?? '';
			const bCell = bCellElement?.textContent?.trim() ?? '';

			// Check if header has data-sortable-type="date" attribute
			if (
				sortedColumnHeader?.hasAttribute('data-sortable-type') &&
				sortedColumnHeader.getAttribute('data-sortable-type') === 'date'
			) {
				// Try parsing as dates
				const aDate = new Date(aCell).getTime();
				const bDate = new Date(bCell).getTime();

				// Compare timestamps if both cells were valid dates
				if (!isNaN(aDate) && !isNaN(bDate)) {
					return isAscending ? aDate - bDate : bDate - aDate;
				}
			}

			// Check if the cells are numbers by removing '$' and ',' characters
			// and trying to parse as float
			const isNumber = (cellValue: string) => {
				const removeCurrency = cellValue.replace(/[$,]/g, '');
				return !isNaN(parseFloat(removeCurrency));
			};

			// If the cell values are numbers, compare as numbers
			// Strip all non-numeric characters for comparison
			if (isNumber(aCell) && isNumber(aCell)) {
				const aNum = parseFloat(aCell.replace(/[^0-9.-]/g, ''));
				const bNum = parseFloat(bCell.replace(/[^0-9.-]/g, ''));
				return isAscending ? aNum - bNum : bNum - aNum;
			}

			// Fallback to string comparison
			return isAscending
				? aCell.localeCompare(bCell)
				: bCell.localeCompare(aCell);
		});

		// Re-append rows in sorted order
		for (const sortedRow of rowsArray) {
			tbody.appendChild(sortedRow);

			// Remove data-sort-active attribute from all cells in the row
			// to clear previous sort indicators
			sortedRow
				.querySelectorAll('td, th')
				.forEach((td) => td.removeAttribute('data-sort-active'));

			// Add attribute to the cell in the sorted column to indicate active sort
			// for styling purposes
			sortedRow.children[columnIndex].setAttribute('data-sort-active', '');
		}
	};

	/**
	 * Get the column index of the heading being sorted
	 * and call the function to sort the rows based on that column
	 * @param heading the heading cell of the column being sorted
	 * @param isAscending whether the sorting is ascending or descending
	 */
	private sortTable = (heading: HTMLElement, isAscending: boolean) => {
		// Need to cast as HTMLTableCellElement to get its index among the other headings
		const tableHeading = heading as HTMLTableCellElement;
		// Get the table so we can find all the headings
		const table = tableHeading.closest('table') as HTMLElement;
		// Get all the headings in the table and find the index of this heading
		// among them
		const allHeadings = Array.from(table.querySelectorAll('th'));
		const thisHeadingIndex = allHeadings.indexOf(tableHeading);

		// Sort the row associated with this heading
		this.sortTableByColumn(heading, thisHeadingIndex, isAscending);

		// Update the aria-sort attribute on all headings
		this.updateAllHeadingSortAttributes(heading, isAscending);
	};

	/**
	 * Handles click on header sort button in table header
	 * @param e Event passed on from click
	 */
	private handleTableToggleClick(e: Event): void {
		const heading = (e.currentTarget as HTMLElement).closest(
			'th'
		) as HTMLElement;

		// Determine if currently ascending or descending
		// to toggle the sort direction
		const isAscending = heading.getAttribute('aria-sort') === 'ascending';

		// If no aria-sort attribute (not sorted), default to ascending sort
		// Otherwise, toggle the sort direction
		if (!heading.hasAttribute('aria-sort')) {
			this.sortTable(heading, true);
		} else {
			this.sortTable(heading, !isAscending);
		}
	}

	/**
	 * Auto initializes sortable table component with default sources.
	 * @internal
	 */
	public static autoInit(): void {
		document.addEventListener('DOMContentLoaded', () => {
			const tables = Array.from(document.getElementsByClassName('usa-table'));

			tables.forEach((element) => {
				const htmlElement = element as HTMLElement;
				// Check if Table is Sortable
				const isSortable = htmlElement.hasAttribute('data-sortable');
				// Return table with default options
				// set whether table is sortable
				return this.create(htmlElement, {
					...this.optionDefaults,
					sortable: isSortable,
				});
			});
		});
	}

	/**
	 * Public function for creating sortable table component with default sources from HTML.
	 * @return array of initialized sortable tables
	 */
	public static createAll(): USATableSortable[] {
		const tables = Array.from(document.querySelectorAll('.usa-table'));

		const instances = tables.map((element) => {
			const htmlElement = element as HTMLElement;
			// Check if Table is Sortable
			const isSortable = htmlElement.hasAttribute('data-sortable');
			// Return table with default options
			// set whether table is sortable
			return this.create(htmlElement, {
				...this.optionDefaults,
				sortable: isSortable,
			});
		});
		return instances;
	}
}
