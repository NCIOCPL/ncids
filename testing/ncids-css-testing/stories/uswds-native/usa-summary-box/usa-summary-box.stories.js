import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from "./usa-summary-box.twig";
import css from './index.scss';

export default {
  title: "USWDS Components/Summary Box",
};

const Template = (args) => Component(args);
const summaryExample = Template.bind({});

const html = summaryExample();
export const SummaryBox = () => <TestCase css={css} html={html} />;
