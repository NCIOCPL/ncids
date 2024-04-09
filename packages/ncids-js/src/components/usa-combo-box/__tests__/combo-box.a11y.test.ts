import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { USAComboBox } from '../index';
import { mockIntersectionObserver } from 'jsdom-testing-mocks';
mockIntersectionObserver();

describe('Combo box - Accessibility', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
		jest.restoreAllMocks();
	});

	it('selected option aria', async () => {
		const user = userEvent.setup();
		const container = document.createElement('div');
		container.innerHTML = `
			<div class='usa-form-group'>
				<label class='usa-label' for='fruit'>Select a fruit</label>
				<div class='usa-combo-box'>
					<select class='usa-select' name='fruit' id='fruit'>
						<option value>Select a fruit</option>
						<option value='apple'>Apple</option>
					</select>
				</div>
			</div>`;
		document.body.append(container);

		const element = document.querySelector('.usa-combo-box');
		USAComboBox.create(<HTMLElement>element);

		const combobox = await screen.findByRole('combobox');
		const button = await screen.findByRole('button', {
			name: 'Toggle the dropdown list',
		});

		expect(button).toHaveAttribute('aria-expanded', 'false');
		expect(combobox).toHaveAttribute('aria-expanded', 'false');
		expect(combobox).toHaveAttribute('aria-activedescendant', '');

		// open listbox
		await userEvent.click(combobox);
		const listbox = await screen.findByRole('listbox');
		const option = await screen.findByRole('option');
		expect(option).toHaveAttribute('aria-selected', 'false');
		expect(option).toHaveAttribute('aria-setsize', '1');
		expect(option).toHaveAttribute('aria-posinset', '1');

		// open to apple
		await user.keyboard('[ArrowDown]');

		expect(button).toHaveAttribute('aria-expanded', 'true');
		expect(combobox).toHaveAttribute('aria-expanded', 'true');
		expect(combobox).toHaveAttribute(
			'aria-activedescendant',
			'fruit--list--option-1'
		);
		expect(listbox).toHaveAccessibleName('Select a fruit');
		expect(option).toHaveAttribute('aria-selected', 'true');

		// select apple
		await user.keyboard('[Enter]');

		expect(button).toHaveAttribute('aria-expanded', 'false');
		expect(combobox).toHaveAttribute('aria-expanded', 'false');
		expect(combobox).toHaveAttribute('aria-activedescendant', '');
		expect(option).toHaveAttribute('aria-selected', 'false');

		// clear
		await user.keyboard('[Escape]');

		expect(combobox).toHaveAttribute('aria-expanded', 'false');
		expect(combobox).toHaveAttribute('aria-activedescendant', '');
		expect(option).toHaveAttribute('aria-selected', 'false');
	});
});
