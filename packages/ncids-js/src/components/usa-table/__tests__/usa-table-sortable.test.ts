import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { SortableTableOptions } from '../usa-table-sortable-options';
import {
	usaTableSortableDOM,
	usaTableSortableSortedDOM,
} from './usa-table-sortable.dom';
import { USATableSortable } from '../usa-table-sortable.component';

describe('USATable', () => {
	let container: HTMLElement;
	let sortableTable: USATableSortable;
	const options: SortableTableOptions = {
		sortable: true,
	};

	beforeEach(() => {
		container = usaTableSortableDOM();
		document.body.appendChild(container);
		sortableTable = USATableSortable.create(container, options);
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('creates a usa table with sortable columns', () => {
		expect(sortableTable).toBeDefined();
		const headerRow = container.querySelector('thead') as HTMLElement;
		const headings = headerRow.querySelectorAll('th');
		expect(headings[0]).toHaveAttribute('data-sortable', '');
	});

	it('creates a usa table with sortable columns when there is a pre-sorted column', () => {
		document.body.innerHTML = '';
		container = usaTableSortableSortedDOM();
		document.body.appendChild(container);
		const sortedTable = USATableSortable.create(container, options);
		expect(sortedTable).toBeDefined();
		const headerRow = container.querySelector('thead') as HTMLElement;
		const headings = headerRow.querySelectorAll('th');
		expect(headings[0]).toHaveAttribute('data-sortable', '');
	});

	it('creates a usa table with sortable columns when using createAll()', () => {
		document.body.innerHTML = '';
		container = usaTableSortableDOM();
		document.body.appendChild(container);
		USATableSortable.createAll();
		const headerRow = container.querySelector('thead') as HTMLElement;
		const headings = headerRow.querySelectorAll('th');
		expect(headings[0]).toHaveAttribute('data-sortable', '');
	});

	it('creates a usa table with sortable columns when utilizing the autoInit function', () => {
		document.body.innerHTML = '';
		container = usaTableSortableDOM();
		document.body.appendChild(container);
		USATableSortable.autoInit();
		// Simulate DOMContentLoaded event
		document.dispatchEvent(new Event('DOMContentLoaded'));
		const headerRow = container.querySelector('thead') as HTMLElement;
		const headings = headerRow.querySelectorAll('th');
		expect(headings[0]).toHaveAttribute('data-sortable', '');
	});

	it('sorts a column when the header is clicked', async () => {
		const user = userEvent.setup();
		const firstRowFirstCell = container.querySelector(
			'tbody tr:first-child th'
		);
		expect(firstRowFirstCell?.textContent).toBe('Hawaii');

		const nameHeading = container.querySelector(
			'thead th:first-child'
		) as HTMLElement;
		const sortHeaderButton = nameHeading.querySelector('button') as HTMLElement;

		await user.click(sortHeaderButton);
		const newFirstRowFirstCell = container.querySelector(
			'tbody tr:first-child th'
		);
		expect(newFirstRowFirstCell?.textContent).toBe('Alaska');
	});

	it('sorts a column with numbers correctly', async () => {
		const user = userEvent.setup();
		const orderHeading = container.querySelectorAll(
			'thead th'
		)[1] as HTMLElement;
		const sortHeaderButton = orderHeading.querySelector(
			'button'
		) as HTMLElement;

		await user.click(sortHeaderButton);
		const firstRowOrderCell = container.querySelector(
			'tbody tr:first-child td:nth-child(2)'
		);
		expect(firstRowOrderCell?.textContent).toBe('45th');
	});

	it('sorts a column with dates correctly', async () => {
		const user = userEvent.setup();
		const orderHeading = container.querySelectorAll(
			'thead th'
		)[2] as HTMLElement;
		const sortHeaderButton = orderHeading.querySelector(
			'button'
		) as HTMLElement;

		await user.click(sortHeaderButton);
		const firstRowOrderCell = container.querySelector(
			'tbody tr:first-child td:nth-child(3)'
		);
		expect(firstRowOrderCell?.textContent).toBe('Nov. 5, 1895');
	});

	it('toggles sort direction when the header is clicked multiple times', async () => {
		const user = userEvent.setup();
		const nameHeading = container.querySelector(
			'thead th:first-child'
		) as HTMLElement;
		const sortHeaderButton = nameHeading.querySelector('button') as HTMLElement;

		// First click - ascending
		await user.click(sortHeaderButton);
		let firstRowFirstCell = container.querySelector('tbody tr:first-child th');
		expect(firstRowFirstCell?.textContent).toBe('Alaska');

		// Second click - descending
		await user.click(sortHeaderButton);
		firstRowFirstCell = container.querySelector('tbody tr:first-child th');
		expect(firstRowFirstCell?.textContent).toBe('Utah');
	});

	it('sets aria-sort attribute correctly on header', async () => {
		const user = userEvent.setup();
		const nameHeading = container.querySelector(
			'thead th:first-child'
		) as HTMLElement;
		const sortHeaderButton = nameHeading.querySelector('button') as HTMLElement;

		// Initial state
		expect(nameHeading).not.toHaveAttribute('aria-sort');

		// First click - ascending
		await user.click(sortHeaderButton);
		expect(nameHeading).toHaveAttribute('aria-sort', 'ascending');

		// Second click - descending
		await user.click(sortHeaderButton);
		expect(nameHeading).toHaveAttribute('aria-sort', 'descending');
	});
});
