import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-icon-list.twig";
import css from './index.scss';

import {
  DefaultContent,
  CustomRichContent,
  CustomSizeContent,
  RichContent,
  SimpleContent,
} from "./content";

export default {
  title: "USWDS/Components/Icon List",
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const CustomRich = Template.bind({});
CustomRich.args = CustomRichContent;

export const CustomSize = Template.bind({});
CustomSize.args = CustomSizeContent;

export const Rich = Template.bind({});
Rich.args = RichContent;

export const Simple = Template.bind({});
Simple.args = SimpleContent;
