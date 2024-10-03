import Component from './usa-date-range-picker.twig';
import css from './index.scss?inline';
import * as datePicker from '@uswds/uswds/js/usa-date-picker';
import * as dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';

export default {
	title: 'USWDS/Components/Form Inputs/Date Range Picker',
	component: Component,
	parameters: {
		uswdsBehaviorJs: [datePicker, dateRangePicker],
		css,
	},
};

export const Default = {};

export const DefaultDate = {
	args: {
		defaultDateStart: '1995-03-06',
		defaultDateEnd: '1995-03-15',
	},
};

export const RestrictedDate = {
	args: {
		restrictedDateStart: '1995-03-06',
		restrictedDateEnd: '1995-03-15',
		defaultDateStart: true,
		defaultDateEnd: true,
	},
};

export const Disabled = {
	args: {
		disabled_state: 'disabled',
		defaultDateStart: true,
		defaultDateEnd: true,
	},
};

export const AriaDisabled = {
	args: {
		disabled_state: 'aria-disabled',
		defaultDateStart: true,
		defaultDateEnd: true,
	},
};
