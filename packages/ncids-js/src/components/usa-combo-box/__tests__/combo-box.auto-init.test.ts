import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '../auto-init';
import { USAComboBox } from '../index';

describe('Combo box - Auto init', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should auto initialize combo box', () => {
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

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(1);
	});

	it('does not bork when missing combo box', () => {
		const createSpy = jest.spyOn(USAComboBox, 'create');

		const container = document.createElement('div');
		document.body.append(container);

		const event = new Event('DOMContentLoaded');
		document.dispatchEvent(event);

		expect(createSpy).toHaveBeenCalledTimes(0);
	});
});
