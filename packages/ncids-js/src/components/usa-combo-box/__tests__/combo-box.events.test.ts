import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { USAComboBox } from '../usa-combo-box';
import { mockIntersectionObserver } from 'jsdom-testing-mocks';
const mockIO = mockIntersectionObserver();

describe('Combo box - Events', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('gives input focus on toggle dropdown click', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const buttons = await screen.findAllByRole('button', { hidden: true });
		await user.click(buttons[1]);

		const combobox = await screen.findByRole('combobox');
		expect(combobox).toHaveFocus();

		const listbox1 = await screen.findByRole('listbox');
		expect(listbox1).toBeInTheDocument();

		await user.click(buttons[1]);

		const listbox2 = screen.queryByRole('listbox');
		expect(listbox2).not.toBeInTheDocument();
	});

	it('visually focuses option on mouseover', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const buttons = await screen.findAllByRole('button', { hidden: true });
		await user.click(buttons[1]);

		const options = await screen.findAllByRole('option');
		await user.hover(options[0]);

		expect(options[0]).toBeVisible();

		const combobox = await screen.findByRole('combobox');
		expect(combobox).toHaveFocus();
	});

	it('handles select and clear on click', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const buttons = await screen.findAllByRole('button', { hidden: true });
		await user.click(buttons[1]);

		const options = await screen.findAllByRole('option');
		await user.click(options[0]);

		const combobox = await screen.findByRole('combobox');
		expect(combobox).toHaveValue('Apple');

		await user.click(buttons[0]);
		expect(combobox).toHaveValue('');
	});

	it('hides listbox on Escape', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const buttons = await screen.findAllByRole('button');
		await user.click(buttons[0]);

		await user.keyboard('[Escape]');

		const combobox = await screen.queryByRole('combobox');
		expect(combobox).toHaveFocus();

		const listbox = screen.queryByRole('listbox');
		expect(listbox).not.toBeInTheDocument();
	});

	it('supports keyboard navigation', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
						<option value="apricot">Apricot</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox1 = await screen.findByRole('combobox');
		combobox1.focus();

		// open to apple
		await user.keyboard('[ArrowDown]');
		// down to apricot
		await user.keyboard('[ArrowDown]');
		// no more options, stays on apricot
		await user.keyboard('[ArrowDown]');

		const options = await screen.findAllByRole('option');

		expect(options[0]).toBeVisible();

		const combobox2 = await screen.findByRole('combobox');
		expect(combobox2).toHaveFocus();

		// select apricot
		await user.keyboard('[Enter]');

		const combobox3 = await screen.findByRole('combobox');
		expect(combobox3).toHaveFocus();
		expect(combobox3).toHaveValue('Apricot');

		await user.keyboard('[Escape]');

		const combobox4 = await screen.findByRole('combobox');
		expect(combobox4).toHaveFocus();
		expect(combobox4).toHaveValue('');

		// up to apricot
		await user.keyboard('[ArrowUp]');
		// up to apple
		await user.keyboard('[ArrowUp]');
		// no more options, stays on apple
		await user.keyboard('[ArrowUp]');
		// select apple
		await user.keyboard('[Enter]');

		const combobox5 = await screen.findByRole('combobox');
		expect(combobox5).toHaveFocus();
		expect(combobox5).toHaveValue('Apple');

		// Open listbox again
		await user.keyboard('[ArrowDown]');
		// Close listbox
		await user.keyboard('[Escape]');
		// Clear listbox
		await user.keyboard('[Escape]');

		const combobox6 = await screen.findByRole('combobox');
		expect(combobox6).toHaveFocus();
		expect(combobox6).toHaveValue('');
	});

	it('scrolls to option when not visible', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
						<option value="apricot">Apricot</option>
						<option value="avocado">Avocado</option>
						<option value="banana">Banana</option>
						<option value="blackberry">Blackberry</option>
						<option value="blood orange">Blood orange</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox1 = await screen.findByRole('combobox');
		combobox1.focus();

		await user.keyboard('[ArrowDown]');

		const options = screen.queryAllByRole('option', {
			name: 'Blood orange',
			hidden: true,
		});
		expect(options[1]).toBeInTheDocument();
		window.HTMLElement.prototype.scrollIntoView = jest.fn();
		mockIO.leaveAll();
		mockIO.enterAll();
	});

	it('filters options on input', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
						<option value="apricot">Apricot</option>
						<option value="avocado">Avocado</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox = await screen.findByRole('combobox');
		await user.click(combobox);
		await user.keyboard('a');
		await user.keyboard('[Enter]');

		expect(combobox).toHaveValue('Apple');

		// Validating items not in the combo box will need discussion. For now, copy USWDS.
		await user.keyboard('s');
		await user.keyboard('[ArrowDown]');
		await user.keyboard('[Enter]');
		expect(combobox).toHaveValue('Apple');

		await user.keyboard('[Escape]');

		await user.keyboard('a');
		await user.keyboard('[ArrowDown]');
		await user.keyboard('[Enter]');
		expect(combobox).toHaveValue('Apricot');

		await user.keyboard('a');
		await user.keyboard('[ArrowDown]');
		await user.click(screen.getByText('No results'));
		await user.click(
			screen.getByRole('button', { name: 'Toggle the dropdown list' })
		);
		expect(combobox).toHaveValue('Apricot');

		await user.click(
			screen.getByRole('button', { name: 'Clear the select contents' })
		);

		await user.keyboard('a');
		await user.keyboard('[Backspace]');
		expect(combobox).toHaveValue('');
	});

	it('does not highlight invalid item', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
						<option value="apricot">Apricot</option>
						<option value="avocado">Avocado</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox = screen.getByRole('combobox');
		await user.click(combobox);
		await user.keyboard('a');

		const options = screen.getAllByRole('option');
		options[0].removeAttribute('data-value');
		await user.hover(options[0]);

		expect(combobox).toHaveValue('a');
	});

	it('hides listbox if combo box tabbed out', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
						<option value="apricot">Apricot</option>
						<option value="avocado">Avocado</option>
					</select>
				</div>
			</div>
			<button type='submit'>Go</button>`;

		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox = screen.getByRole('combobox');
		const listbox = screen.getByRole('listbox', { hidden: true });

		combobox.focus();
		expect(combobox).toHaveFocus();
		expect(listbox).not.toBeVisible();

		user.keyboard('[ArrowDown]');
		expect(listbox).toBeVisible();

		user.keyboard('[Tab]');
		expect(combobox).not.toHaveFocus();
		expect(listbox).not.toBeVisible();
	});
});
