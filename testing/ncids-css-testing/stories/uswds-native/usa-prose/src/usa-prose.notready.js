import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-prose.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Prose",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
