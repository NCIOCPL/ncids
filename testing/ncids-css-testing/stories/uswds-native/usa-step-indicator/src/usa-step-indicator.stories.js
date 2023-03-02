import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-step-indicator.twig";
import {
  DefaultContent,
  CenterCountersSmContent,
  CenterCountersContent,
  CenterNoLabelContent,
  CenterContent,
  CountersSmContent,
  CountersContent,
  NoLabelsContent,
  ShortContent,
} from "./content";
import css from './index.scss';

export default {
  title: "USWDS/Components/Step Indicator",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const CenterCountersSm = () => <TestCase css={css} html={Template.bind({})(CenterCountersSmContent)} />;

export const CenterCounters = () => <TestCase css={css} html={Template.bind({})(CenterCountersContent)} />;

export const CenterNoLabel = () => <TestCase css={css} html={Template.bind({})(CenterNoLabelContent)} />;

export const Center = () => <TestCase css={css} html={Template.bind({})(CenterContent)} />;

export const CountersSm = () => <TestCase css={css} html={Template.bind({})(CountersSmContent)} />;

export const Counters = () => <TestCase css={css} html={Template.bind({})(CountersContent)} />;

export const NoLabels = () => <TestCase css={css} html={Template.bind({})(NoLabelsContent)} />;

export const Short = () => <TestCase css={css} html={Template.bind({})(ShortContent)} />;
