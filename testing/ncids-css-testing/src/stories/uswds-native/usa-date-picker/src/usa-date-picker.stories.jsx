import Component from './usa-date-picker.twig';
import css from './index.scss?inline';

import * as datePicker from '@uswds/uswds/js/usa-date-picker';

export default {
	title: 'USWDS/Components/Form Inputs/Date Picker',
	component: Component,
	parameters: {
		uswdsBehaviorJs: datePicker,
		css,
	},
};

export const Default = {
	args:
		{
			defaultDate: 'Default Date (YYYY-MM-DD)',
			rangeDate: 'Range Date (YYYY-MM-DD)',
			restrictedDateStart: 'Restricted Date: Start (YYYY-MM-DD)',
			restrictedDateEnd: 'Restricted Date: End (YYYY-MM-DD)',
			disabled_state: 'Disabled state',
		},
};

export const DefaultDate = {
	args:
		{
			defaultDate: '1995-03-06',
			rangeDate: true,
			restrictedDateStart: true,
			restrictedDateEnd: true,
		},
};

export const RangeDate = {
	args:
		{
			rangeDate: '2022-01-07',
			defaultDate: true,
			restrictedDateStart: true,
			restrictedDateEnd: true,
		},
};

export const RestrictedDate = {
	args:
		{

			restrictedDateStart: '1995-03-06',
			restrictedDateEnd: '1995-03-15',
			defaultDate: true,
			rangeDate: true,
		},
};

export const Disabled = {
	args:
		{
			disabled_state: 'disabled',
			defaultDate: true,
			rangeDate: true,
			restrictedDateStart: true,
			restrictedDateEnd: true,
		},
};

export const AriaDisabled = {
	args:
		{
			disabled_state: 'aria-disabled',
			defaultDate: true,
			rangeDate: true,
			restrictedDateStart: true,
			restrictedDateEnd: true,
		},
};
