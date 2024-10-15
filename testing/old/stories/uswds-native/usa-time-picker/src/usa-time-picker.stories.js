import React from 'react';
import Component from "./usa-time-picker.twig";
import css from './index.scss';

import { comboBox, timePicker } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Form Inputs/Time Picker',
	parameters: {
		uswdsBehaviorJs: [timePicker, comboBox],
		css
	},
};

const Template = (args) => Component(args);

export const TimePicker = () => <TestCase css={css} html={Template.bind({})()} />;

export const TimePickerDefaultValue = () => <TestCase css={css} html={Template.bind({})(
	{ defaultValue: '1:00pm', }
)} />;

