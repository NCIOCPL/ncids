import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-icon.twig";
import Content from "./usa-icon.json";
import css from './index.scss';

export default {
  title: "USWDS/Design Tokens/Icons",
  argTypes: {
    icons: {
      table: { disable: true },
    },
  },
};

const Template = (args) => Component(args);

export const Icons = Template.bind({});
Icons.args = Content;
Icons.parameters = {
  axe: {
    skip: true,
  },
};
