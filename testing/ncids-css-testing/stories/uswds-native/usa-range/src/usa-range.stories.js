import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-range.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Range",
};

const Template = (args) => Component(args);

export const Range = () => <TestCase css={css} html={Template.bind({})()} />;
