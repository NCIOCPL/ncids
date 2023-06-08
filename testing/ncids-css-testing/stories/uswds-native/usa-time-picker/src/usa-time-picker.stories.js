import React from 'react';
import Component from "./usa-time-picker.twig";
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { comboBox, timePicker } from '@uswds-js';

export default {
	title: 'USWDS/Components/Form Inputs/Time Picker',
	args: {
		behavior: [timePicker, comboBox]
	},
};

const Template = (args) => Component(args);

export const TimePicker = () => <TestCase css={css} html={Template.bind({})()} />;

export const TimePickerDefaultValue = () => <TestCase css={css} html={Template.bind({})(
	{ defaultValue: '1:00pm', }
)} />;

