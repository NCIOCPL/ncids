import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';
import { USAComboBox } from '../index';

describe('Combo box - Create', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should create combo box', () => {
		const createSpy = jest.spyOn(USAComboBox, 'create');

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
		const component = USAComboBox.create(<HTMLElement>element);

		expect(component).toBeTruthy();
		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('should create disabled/required combo box', () => {
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit" disabled required>
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);
		const comboBox = screen.getByRole('combobox');

		expect(comboBox).toBeDisabled();
		expect(comboBox).toBeRequired();
	});

	it('should set selected value on create', () => {
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
						<option value="avocado" selected>Avocado</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);
		const comboBox = screen.getByRole('combobox');

		expect(comboBox).toHaveValue('Avocado');
	});

	it('should allow options with same values', () => {
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple 1</option>
						<option value="apple">Apple 2</option>
						<option value="apple">Apple 3</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		const options = screen.getAllByRole('option');
		fireEvent.click(options[2]);

		const comboBox = screen.getByRole('combobox');
		expect(comboBox).toHaveValue('Apple 3');
	});

	it('should create all combo boxes', () => {
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
			</div>
			<div class="usa-form-group">
				<label class="usa-label" for="fruit2">Select a fruit 2</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit2" id="fruit2">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		USAComboBox.createAll();
		const comboBox = screen.getAllByRole('combobox');
		expect(comboBox).toHaveLength(2);
	});

	it('only creates valid options', () => {
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit2">Select a fruit 2</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit2" id="fruit2">
						<option value>Select a fruit</option>
						<option value="apple" disabled>Apple</option>
						<option value="apple">Apple</option>
						<option value="">Apricot</option>
						<option>Avocado</option>
						<option value="crab apple">Crab Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		const options = screen.getAllByRole('option');
		expect(options).toHaveLength(2);
	});

	it('throws error if not an HTMLElement', () => {
		const container = document.createElement('div');
		document.body.append(container);

		expect(() => {
			USAComboBox.create(<HTMLElement>(<unknown>'chicken'));
		}).toThrow('Element is not an HTMLElement');
	});

	it('throws error if select is missing', () => {
		const container = document.createElement('div');
		container.innerHTML = `<div class="usa-combo-box">nothing here</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');

		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box is missing inner select');
	});

	it('throws error if label is missing', () => {
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="very-bad-label">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value>Select a fruit</option>
						<option value="apple">Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);
		const element = document.querySelector('.usa-combo-box');

		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box is missing accessible label');
	});
});
