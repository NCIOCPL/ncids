import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-pagination.twig";
import TestComponent from "./test/test-patterns/test-pagination-all.twig";
import css from './index.scss';

import {
  DefaultContent,
  UnboundedContent,
  EsContent,
  EsUnboundedContent,
} from "./content";

export default {
  title: "USWDS/Components/Pagination",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const Unbounded = () => <TestCase css={css} html={Template.bind({})(UnboundedContent)} />;

export const Spanish = () => <TestCase css={css} html={Template.bind({})(EsContent)} />;

export const SpanishUnbounded = () => <TestCase css={css} html={Template.bind({})(EsUnboundedContent)} />;

export const Test = () => <TestCase css={css} html={TestTemplate.bind({})()} />;
