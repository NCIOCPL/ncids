import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-date-picker.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Date Picker",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;

export const DefaultDate = () => <TestCase css={css} html={Template.bind({})(
	{
		defaultDate: {
			defaultValue: "1995-03-06",
		},
		rangeDate: {
			table: { disable: true },
		},
		restrictedDateStart: {
			table: { disable: true },
		},
		restrictedDateEnd: {
			table: { disable: true },
		},
	}
)} />;

export const RangeDate = () => <TestCase css={css} html={Template.bind({})(
	{
		rangeDate: {
			defaultValue: "2022-01-07",
		},
		defaultDate: {
			table: { disable: true },
		},
		restrictedDateStart: {
			table: { disable: true },
		},
		restrictedDateEnd: {
			table: { disable: true },
		},
	}
)} />;

export const RestrictedDate = () => <TestCase css={css} html={Template.bind({})(
	{
		restrictedDateStart: {
			defaultValue: "1995-03-06",
		},
		restrictedDateEnd: {
			defaultValue: "1995-03-15",
		},
		defaultDate: {
			table: { disable: true },
		},
		rangeDate: {
			table: { disable: true },
		},
	}
)} />;

export const Disabled = () => <TestCase css={css} html={Template.bind({})(
	{
		disabled_state:{
			defaultValue: "disabled",
		},
		defaultDate: {
			table: { disable: true },
		},
		rangeDate: {
			table: { disable: true },
		},
		restrictedDateStart: {
			table: { disable: true },
		},
		restrictedDateEnd: {
			table: { disable: true },
		},
	}
)} />;

export const AriaDisabled = () => <TestCase css={css} html={Template.bind({})(
	{
		disabled_state:{
			defaultValue: "aria-disabled",
		},
		defaultDate: {
			table: { disable: true },
		},
		rangeDate: {
			table: { disable: true },
		},
		restrictedDateStart: {
			table: { disable: true },
		},
		restrictedDateEnd: {
			table: { disable: true },
		},
	}
)} />;
