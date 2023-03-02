import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-combo-box.twig";
import TestComponent from "./test/test-patterns/test-usa-combo-box.twig";
import Content from "./usa-combo-box.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/Combo Box",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(Content)} />;

export const Test = () => <TestCase css={css} html={TestTemplate.bind({})()} />;
