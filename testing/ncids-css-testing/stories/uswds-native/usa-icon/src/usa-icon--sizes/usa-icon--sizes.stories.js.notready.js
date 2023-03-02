import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-icon--sizes.twig";
import Content from "./usa-icon--sizes.json";
import css from './index.scss';

export default {
  title: "USWDS/Design Tokens/Icons/Icon Sizes",
  argTypes: {
    icons: {
      table: { disable: true },
    },
    img_path: {
      table: { disable: true },
    },
  },
};

const Template = (args) => Component(args);

export const IconSizes = Template.bind({});
IconSizes.args = Content;
