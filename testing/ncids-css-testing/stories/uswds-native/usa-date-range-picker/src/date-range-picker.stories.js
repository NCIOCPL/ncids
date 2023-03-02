import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-date-range-picker.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Date Range Picker",
  argTypes: {
    defaultDateStart: {
      name: "Default Date: Start (YYYY-MM-DD)",
      control: { type: 'text' },
    },
    defaultDateEnd: {
      name: "Default Date: End (YYYY-MM-DD)",
      control: { type: 'text' },
    },
    restrictedDateStart: {
      name: "Restricted Date: Start (YYYY-MM-DD)",
      control: { type: 'text' },
    },
    restrictedDateEnd: {
      name: "Restricted Date: End (YYYY-MM-DD)",
      control: { type: 'text' },
    },
    disabled_state: {
      name: "Disabled state",
      control: { type: "radio" },
      options: ["none", "disabled", "aria-disabled"]
    },
  },
};


const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;

export const DefaultDate = () => <TestCase css={css} html={Template.bind({})(
	{
		defaultDateStart: "1995-03-06",
		defaultDateEnd: "1995-03-15",
	}
)} />;

export const RestrictedDate = () => <TestCase css={css} html={Template.bind({})(
	{
		restrictedDateStart: "1995-03-06",
		restrictedDateEnd: "1995-03-15",
	}
)} />;

export const Disabled = () => <TestCase css={css} html={Template.bind({})(
	{
		disabled_state: "disabled",
	}
)} />;

export const AriaDisabled = () => <TestCase css={css} html={Template.bind({})(
	{
		disabled_state: "aria-disabled",
	}
)} />;
