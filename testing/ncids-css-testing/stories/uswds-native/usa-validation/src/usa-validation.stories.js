import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-validation.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Validation",
};

const Template = (args) => Component(args);

export const Validation = () => <TestCase css={css} html={Template.bind({})()} />;
