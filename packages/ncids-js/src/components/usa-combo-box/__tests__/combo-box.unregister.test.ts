import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';
import { USAComboBox } from '../index';

describe('Combo box - Unregister', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should unregister', () => {
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

		// Select has combo box role, should find only one.
		const query1 = screen.queryByRole('combobox', { hidden: true });
		expect(query1).toBeInTheDocument();

		const element = document.querySelector('.usa-combo-box');
		const component = USAComboBox.create(<HTMLElement>element);

		// Select is now hidden, the component has been created, should find 2 total.
		const query2 = screen.queryAllByRole('combobox', { hidden: true });
		expect(query2).toHaveLength(2);

		component.unregister();

		// Component has been unregistered, only the select should exist.
		const query3 = screen.queryByRole('combobox', { hidden: true });
		expect(query3).toBeInTheDocument();
	});

	it('should unregister disabled/required', () => {
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
		const component = USAComboBox.create(<HTMLElement>element);

		component.unregister();

		const comboBox = screen.getByRole('combobox');

		expect(comboBox).toBeDisabled();
		expect(comboBox).toBeRequired();
	});

	it('unregisters if created twice', () => {
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

		const unregisterSpy = jest.spyOn(USAComboBox.prototype, 'unregister');
		const element = document.querySelector('.usa-combo-box');

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		new USAComboBox(<HTMLElement>element);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		new USAComboBox(<HTMLElement>element);

		expect(unregisterSpy).toHaveBeenCalledTimes(1);
	});

	it('resets select if create listbox encounters an issue', () => {
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

		const unregisterSpy = jest.spyOn(USAComboBox.prototype, 'unregister');

		// Mocking that something in code bad happened to announcer, we're no longer passing a11y requirements.
		jest
			// @ts-expect-error Override private
			.spyOn(USAComboBox.prototype, 'createComboBox')
			// @ts-expect-error Override private
			.mockImplementation(function (this: USAComboBox) {
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createInput());
				// @ts-expect-error Override private
				this.hideListbox();
			});

		const element = document.querySelector('.usa-combo-box');
		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box hide listbox error');

		expect(unregisterSpy).toHaveBeenCalledTimes(1);
	});

	it('resets select if create announcer encounters an issue', () => {
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

		const unregisterSpy = jest.spyOn(USAComboBox.prototype, 'unregister');

		// Mocking that something in code bad happened to announcer, we're no longer passing a11y requirements.
		jest
			// @ts-expect-error Override private
			.spyOn(USAComboBox.prototype, 'createComboBox')
			// @ts-expect-error Override private
			.mockImplementation(function (this: USAComboBox) {
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createInput());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createListbox());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createAnnouncer());
				// @ts-expect-error Override private
				this.announcer = undefined;
				// @ts-expect-error Override private
				this.hideListbox();
			});

		const element = document.querySelector('.usa-combo-box');
		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box announcer error');

		expect(unregisterSpy).toHaveBeenCalledTimes(1);
	});

	it('resets select if create hideListbox encounters an error', () => {
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

		const unregisterSpy = jest.spyOn(USAComboBox.prototype, 'unregister');

		// Mocking that something in code bad happened to the input, the component is borked.
		jest
			// @ts-expect-error Override private
			.spyOn(USAComboBox.prototype, 'createComboBox')
			// @ts-expect-error Override private
			.mockImplementation(function (this: USAComboBox) {
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createInput());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createAnnouncer());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createListbox());
				// @ts-expect-error Override private
				this.input = undefined;
				// @ts-expect-error Override private
				this.hideListbox();
			});

		const element = document.querySelector('.usa-combo-box');
		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box hide listbox error');

		expect(unregisterSpy).toHaveBeenCalledTimes(1);
	});

	it('resets select if showListbox encounters an error', async () => {
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

		const unregisterSpy = jest.spyOn(USAComboBox.prototype, 'unregister');

		// Mocking that something in code bad happened to the input, the component is borked.
		jest
			// @ts-expect-error Override private
			.spyOn(USAComboBox.prototype, 'createComboBox')
			// @ts-expect-error Override private
			.mockImplementation(function (this: USAComboBox) {
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createInput());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createAnnouncer());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createListbox());
				// @ts-expect-error Override private
				this.input = undefined;
				// @ts-expect-error Override private
				this.showListbox();
			});
		const element = document.querySelector('.usa-combo-box');
		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box show listbox error');

		expect(unregisterSpy).toHaveBeenCalledTimes(1);
	});

	it('resets select if filterListbox encounters an error', async () => {
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

		const unregisterSpy = jest.spyOn(USAComboBox.prototype, 'unregister');

		// Mocking that something in code bad happened to the input, the component is borked.
		jest
			// @ts-expect-error Override private
			.spyOn(USAComboBox.prototype, 'createComboBox')
			// @ts-expect-error Override private
			.mockImplementation(function (this: USAComboBox) {
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createInput());
				// @ts-expect-error Override private
				this.comboBox.appendChild(this.createAnnouncer());
				// @ts-expect-error Override private
				this.filterListbox('app');
			});
		const element = document.querySelector('.usa-combo-box');
		expect(() => {
			USAComboBox.create(<HTMLElement>element);
		}).toThrow('Combo box filterListbox error');

		expect(unregisterSpy).toHaveBeenCalledTimes(1);
	});

	it('on unregister removes events', async () => {
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

		const removeEventListenerSpy = jest.spyOn(
			EventTarget.prototype,
			'removeEventListener'
		);

		const element = document.querySelector('.usa-combo-box');
		const component = USAComboBox.create(<HTMLElement>element);
		const buttons = screen.getAllByRole('button', { hidden: true });
		fireEvent.click(buttons[1]);
		const options = await screen.findAllByRole('option');
		expect(options[0]).toBeTruthy();
		component.unregister();

		/*
		 1. inputKeydownListener
		 2. inputEventListener
		 3. inputClickListener
		 4. toggleClickListener
		 5. clearClickListener
		 6. & 7. mouseoverListener (1 per option)
		 8. outsideClickListener
		 */
		expect(removeEventListenerSpy).toHaveBeenCalledTimes(8);
	});
});
