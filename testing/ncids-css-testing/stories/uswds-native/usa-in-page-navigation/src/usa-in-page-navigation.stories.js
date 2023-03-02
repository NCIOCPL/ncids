import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-in-page-navigation.twig";
import Content from "./usa-in-page-navigation.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/In-Page Navigation",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(Content)} />;
