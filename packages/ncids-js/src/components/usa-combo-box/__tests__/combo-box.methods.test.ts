import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';
import { USAComboBox } from '../index';

describe('Combo box - Public methods', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('returns selected options', () => {
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
		const comboBox = USAComboBox.create(<HTMLElement>element);

		const buttons = screen.getAllByRole('button', { hidden: true });
		fireEvent.click(buttons[1]);

		const options = screen.getAllByRole('option');
		fireEvent.click(options[0]);

		const value = comboBox.getValue();
		expect(value).toEqual('apple');

		const selectedOptions = comboBox.getSelectedOptions();
		const option = document.createElement('option');
		option.value = 'apple';
		option.textContent = 'Apple';
		expect(Array.from(selectedOptions)).toEqual([option]);
	});

	it('returns select options', () => {
		const container = document.createElement('div');
		container.innerHTML = `
			<div class="usa-form-group">
				<label class="usa-label" for="fruit">Select a fruit</label>
				<div class="usa-combo-box">
					<select class="usa-select" name="fruit" id="fruit">
						<option value="apple">Apple</option>
						<option value="apricot">Apricot</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);
		const element = document.querySelector('.usa-combo-box');
		const comboBox = USAComboBox.create(<HTMLElement>element);

		const options = comboBox.getOptions();

		const apple = document.createElement('option');
		apple.value = 'apple';
		apple.textContent = 'Apple';

		const apricot = document.createElement('option');
		apricot.value = 'apricot';
		apricot.textContent = 'Apricot';

		expect(Array.from(options)).toEqual([apple, apricot]);
	});

	it('sets select by value', () => {
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
		const comboBox = USAComboBox.create(<HTMLElement>element);

		comboBox.setSelectedByValue('apricot');
		expect(comboBox.getValue()).toEqual('apricot');
	});
});
