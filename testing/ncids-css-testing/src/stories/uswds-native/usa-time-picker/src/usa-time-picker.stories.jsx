import Component from './usa-time-picker.twig';
import css from './index.scss?inline';

import * as timePicker from '@uswds/uswds/js/usa-time-picker';
import * as comboBox from '@uswds/uswds/js/usa-combo-box';

export default {
	title: 'USWDS/Components/Form Inputs/Time Picker',
	component: Component,
	parameters: {
		uswdsBehaviorJs: [timePicker, comboBox],
		css,
	},
};

export const TimePicker = {};
export const TimePickerDefaultValue = {
	args: { defaultValue: '1:00pm' },
};
