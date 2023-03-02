import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-tooltip.twig";
import TestComponent from "./test/test-patterns/test-usa-tooltip-utilities.twig";
import UtilityComponent from "./usa-tooltip--utilities.twig";
import css from './index.scss';

export default {
  title: "USWDS/Components/Tooltip",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);
const UtilityTemplate = (args) => UtilityComponent(args);

export const Tooltip = () => <TestCase css={css} html={Template.bind({})()} />;
export const TooltipUtility = () => <TestCase css={css} html={UtilityTemplate.bind({})()} />;
export const Test = () => <TestCase css={css} html={TestTemplate.bind({})()} />;
