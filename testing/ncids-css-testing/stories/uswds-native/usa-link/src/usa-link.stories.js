import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-link.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Link",
};

const Template = (args) => Component(args);

export const Link = () => <TestCase css={css} html={Template.bind({})()} />;
