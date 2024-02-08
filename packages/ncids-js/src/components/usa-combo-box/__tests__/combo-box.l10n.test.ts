import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { USAComboBox } from '../index';

describe('Combo box - Localization', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('should translate clear button - ES', () => {
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
		document.documentElement.lang = 'es';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const button = screen.getByLabelText('Borrar selección');
		expect(button).toBeInTheDocument();
	});

	it('should translate clear button - EN', () => {
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
		document.documentElement.lang = 'en';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const button = screen.getByLabelText('Clear the select contents');
		expect(button).toBeInTheDocument();
	});

	it('should translate toggle button - ES', () => {
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
		document.documentElement.lang = 'es';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const button = screen.getByRole('button', {
			name:
				'Pulse la tecla de flecha hacia abajo para desplegar la lista de las opciones',
		});
		expect(button).toBeInTheDocument();
	});

	it('should translate toggle button - EN', () => {
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
		document.documentElement.lang = 'en';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const button = screen.getByRole('button', {
			name: 'Toggle the dropdown list',
		});
		expect(button).toBeInTheDocument();
	});

	it('should translate assistive hint - ES', async () => {
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
		document.documentElement.lang = 'es';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const hint = await screen.findByText(
			'Si hay campos que se autocompletan, use las teclas de flecha para conocer las opciones y pulse la tecla Enter para seleccionar. En los dispositivos táctiles, navegue por la pantalla al tacto o deslizando un dedo.'
		);
		expect(hint).toBeInTheDocument();
	});

	it('should translate assistive hint - EN', async () => {
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
		document.documentElement.lang = 'en';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const hint = await screen.findByText(
			'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.'
		);
		expect(hint).toBeInTheDocument();
	});

	it('should translate announcer - ES', async () => {
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
		document.documentElement.lang = 'es';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);
		const buttons = screen.getAllByRole('button', { hidden: true });
		fireEvent.click(buttons[1]);
		const options = await screen.findAllByRole('option', { name: 'Apple' });
		expect(options[0]).toBeTruthy();

		const announcer = await screen.findByRole('status');
		expect(announcer).toBeInTheDocument();

		const announcer2 = await screen.findByText(
			'1 sugerencias automáticas. Use flecha arriba o flecha abajo para escuchar las opciones.'
		);
		expect(announcer2).toBeInTheDocument();
	});

	it('should translate announcer - EN', async () => {
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
		document.documentElement.lang = 'en';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);
		const buttons = screen.getAllByRole('button', { hidden: true });
		fireEvent.click(buttons[1]);
		const options = await screen.findAllByRole('option', { name: 'Apple' });
		expect(options[0]).toBeTruthy();

		const announcer = await screen.findByRole('status');
		expect(announcer).toBeInTheDocument();
		const announcer2 = await screen.findByText(
			'2 suggestions found, use up and down arrows to review.'
		);
		expect(announcer2).toBeInTheDocument();
	});

	it('should translate no results found option - ES', async () => {
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
		document.documentElement.lang = 'es';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox = await screen.findByRole('combobox');
		await user.click(combobox);
		await user.keyboard('aaa');

		const option = screen.getByText('No hay resultados');
		expect(option).toBeInTheDocument();
	});

	it('should translate no results found option - EN', async () => {
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
		document.documentElement.lang = 'en';

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox = await screen.findByRole('combobox');
		await user.click(combobox);
		await user.keyboard('aaa');

		const option = screen.getByText('No results found');
		expect(option).toBeInTheDocument();
	});
});
