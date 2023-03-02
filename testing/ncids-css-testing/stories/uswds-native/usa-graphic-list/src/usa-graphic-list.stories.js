import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-graphic-list.twig";
import Content from "./usa-graphic-list.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/Graphic List",
};

const Template = (args) => Component(args);

export const GraphicList = () => <TestCase css={css} html={Template.bind({})(Content)} />;
