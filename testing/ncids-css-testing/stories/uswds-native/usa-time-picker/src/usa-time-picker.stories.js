import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-time-picker.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Time Picker",
};

const Template = (args) => Component(args);

export const TimePicker = () => <TestCase css={css} html={Template.bind({})()} />;
export const TimePickerDefaultValue = () => <TestCase css={css} html={Template.bind({})(
	{
		defaultValue: "1:00pm"
	}
)} />;
