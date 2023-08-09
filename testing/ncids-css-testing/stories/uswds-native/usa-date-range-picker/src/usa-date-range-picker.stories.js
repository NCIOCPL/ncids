import Component from './usa-date-range-picker.twig';
import css from './index.scss';
import { TestCase } from '../../../../components/test-case';
import { datePicker, dateRangePicker } from '@uswds-js';

export default {
	title: 'USWDS/Components/Form Inputs/Date Range Picker',
	args: {
		behavior: [ datePicker, dateRangePicker]
	},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})({})} />;

export const DefaultDate = () => <TestCase css={css} html={Template.bind({})({
	defaultDateStart: '1995-03-06',
	defaultDateEnd: '1995-03-15',
})} />;

export const RestrictedDate = () => <TestCase css={css} html={Template.bind({})({
	restrictedDateStart: '1995-03-06',
	restrictedDateEnd: '1995-03-15',
	defaultDateStart: true,
	defaultDateEnd: true,
})} />;

export const Disabled = () => <TestCase css={css} html={Template.bind({})({
	disabled_state: 'disabled',
	defaultDateStart: true,
	defaultDateEnd: true,
})} />;

export const AriaDisabled = () => <TestCase css={css} html={Template.bind({})({
	disabled_state: 'aria-disabled',
	defaultDateStart: true,
	defaultDateEnd: true,
})} />;

