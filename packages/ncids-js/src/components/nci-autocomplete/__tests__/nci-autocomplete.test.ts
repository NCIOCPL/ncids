import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { NCIAutocomplete } from '../nci-autocomplete.component';
import { getExampleACDOMPlain } from './example-dom';
import { MockACAdapter } from './mock-autocomplete-adapter';

describe('NCI Autocomplete', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should throw an error when create is called on invalid input element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIAutocomplete.create('chicken', { autocompleteSource: MockACAdapter });
		}).toThrow('Must be an input element to be an autocomplete');
	});

	it('should throw an error when create is called without autocompleteSource option', () => {
		expect(() => {
			const container = getExampleACDOMPlain();
			document.body.append(container);
			const txtInput = document.getElementById(
				'search-field'
			) as HTMLInputElement;

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIAutocomplete.create(txtInput, {
				minCharCount: 2,
			});
		}).toThrow('option autocompleteSource is undefined');
	});

	it('renders the proper autocomplete dom', () => {
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		const ac = NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
		});
		expect(ac).toBeTruthy();

		const listbox = screen.queryByRole('listbox');
		expect(listbox).toBeInTheDocument();
	});

	it('handles input and displays options', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil');
		const terms = screen.queryAllByRole('option');
		expect(terms).toHaveLength(10);
	});

	it('does not display options if minimum number of characters is not inputted', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			minCharCount: 4,
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil');
		expect(
			container.querySelector('#search-field-termswrapper')
		).not.toHaveClass('active');
	});

	it('displays provided message when minPlaceholderMsg option is provided', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			minCharCount: 4,
			minPlaceholderMsg: 'Enter 4 or more characters',
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil');
		expect(container.querySelector('#search-field-termswrapper')).toHaveClass(
			'active'
		);
		expect(
			container.querySelector('.min-placeholder-message')?.textContent
		).toBe('Enter 4 or more characters');
	});

	it('handles keyboard input to navigate options', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
		});
		const acInput = document.getElementById('search-field') as HTMLInputElement;
		await user.click(acInput);
		await user.keyboard('bil');
		await user.keyboard('[ArrowDown][ArrowDown][ArrowDown][ArrowUp]');

		const termHighlighted = container.querySelector('.highlight');
		expect(termHighlighted).toBeTruthy();

		await user.keyboard('[Enter]');
		expect(acInput?.value).toBe('bile duct');
		expect(
			container.querySelector('#search-field-termswrapper')
		).not.toHaveClass('active');
		expect(
			container.querySelector('.nci-autocomplete__status')
		).toBeEmptyDOMElement();

		acInput.value = '';
		await user.click(acInput);
		await user.keyboard('bil');
		await user.keyboard('[ArrowUp][ArrowUp][ArrowUp][ArrowDown]');
		const termHighlighted2 = container.querySelector('.highlight');
		expect(termHighlighted2).toBeTruthy();
		await user.keyboard('[ArrowRight]');
		expect(acInput?.value).toBe('bilateral nephrectomy');

		acInput.value = '';
		await user.click(acInput);
		await user.keyboard('bil');
		await user.keyboard('[Tab]');
		expect(
			container.querySelector('#search-field-termswrapper')
		).not.toHaveClass('active');
	});

	it('allows user to mouse click on an option to select', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
		});
		const acInput = document.getElementById('search-field') as HTMLInputElement;
		await user.click(acInput);
		await user.keyboard('bil');
		await user.click(screen.queryAllByRole('option')[3]);
		expect(
			container.querySelector('#search-field-termswrapper')
		).not.toHaveClass('active');
		expect(acInput?.value).toBe('biliary');
	});

	it('will not display a listbox when no terms are found', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			highlightMatchingText: false,
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('xkcd');
		expect(
			container.querySelector('.nci-autocomplete__status')
		).toBeEmptyDOMElement();
	});

	it('adds extra classes to listbox when provided', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			listboxClasses: 'dummyClass',
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil');
		expect(
			container.querySelector('.nci-autocomplete__listbox.dummyClass')
		).toBeTruthy();
	});

	it('does not highlight input matches if option is false', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			highlightMatchingText: false,
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil');
		expect(container.querySelectorAll('span mark')).toHaveLength(0);
	});

	it('submits the form if user clicks Enter and no term is selected or highlighted', async () => {
		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			highlightMatchingText: false,
		});
		const mockSubmit = jest.fn();
		const acForm = document.getElementById('acform') as HTMLFormElement;
		acForm.onsubmit = mockSubmit;
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil{Enter}');
		expect(mockSubmit).toHaveBeenCalled();
	});

	it('changes announcer text when language is spanish', async () => {
		const langSwitch = { language: 'es' };
		Object.defineProperty(window, 'langSwitch', {
			writable: true,
			value: langSwitch,
		});

		const user = userEvent.setup();
		const container = getExampleACDOMPlain();
		document.body.append(container);
		document.documentElement.lang = 'es';
		const txtInput = document.getElementById(
			'search-field'
		) as HTMLInputElement;
		NCIAutocomplete.create(txtInput, {
			autocompleteSource: new MockACAdapter(),
			highlightMatchingText: false,
		});
		await user.click(screen.getByRole('combobox'));
		await user.keyboard('bil');
		expect(
			container.querySelector('.nci-autocomplete__status')?.textContent
		).toContain(
			'10 sugerencias automáticas. Use flecha arriba o flecha abajo para escuchar las opciones.'
		);
	});
});
