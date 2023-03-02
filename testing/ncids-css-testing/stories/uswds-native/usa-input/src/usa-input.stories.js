import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-input.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Text Input",
};

const Template = (args) => Component(args);

export const Input = () => <TestCase css={css} html={Template.bind({})()} />;
