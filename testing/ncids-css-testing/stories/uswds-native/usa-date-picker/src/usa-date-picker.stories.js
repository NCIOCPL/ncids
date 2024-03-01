import React from 'react';
import Component from './usa-date-picker.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { datePicker } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Form Inputs/Date Picker',
	args: {
		uswdsBehaviorJs: datePicker,
	},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})({
	defaultDate: 'Default Date (YYYY-MM-DD)',
	rangeDate: 'Range Date (YYYY-MM-DD)',
	restrictedDateStart: 'Restricted Date: Start (YYYY-MM-DD)',
	restrictedDateEnd: 'Restricted Date: End (YYYY-MM-DD)',
	disabled_state: 'Disabled state',
})} />;

export const DefaultDate = () => <TestCase css={css} html={Template.bind({})({
	defaultDate: '1995-03-06',
	rangeDate: true,
	restrictedDateStart: true,
	restrictedDateEnd: true,
})} />;

export const RangeDate = () => <TestCase css={css} html={Template.bind({})({
	rangeDate: '2022-01-07',
	defaultDate: true,
	restrictedDateStart: true,
	restrictedDateEnd: true,
})} />;

export const RestrictedDate = () => <TestCase css={css} html={Template.bind({})({
	restrictedDateStart: '1995-03-06',
	restrictedDateEnd: '1995-03-15',
	defaultDate: true,
	rangeDate: true,
})} />;

export const Disabled = () => <TestCase css={css} html={Template.bind({})({
	disabled_state: 'disabled',
	defaultDate: true,
	rangeDate: true,
	restrictedDateStart: true,
	restrictedDateEnd: true,
})} />;

export const AriaDisabled = () => <TestCase css={css} html={Template.bind({})({
	disabled_state: 'aria-disabled',
	defaultDate: true,
	rangeDate: true,
	restrictedDateStart: true,
	restrictedDateEnd: true,
})} />;
