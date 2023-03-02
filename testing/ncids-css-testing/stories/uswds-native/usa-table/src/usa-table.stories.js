import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-table.twig";
import SortableComponent from "./usa-table--sortable/usa-table--sortable.twig";
import DefaultContent from "./usa-table.json";
import BorderlessContent from "./usa-table~borderless.json";
import StripedContent from "./usa-table~striped.json";
import css from './index.scss';

export default {
  title: "USWDS/Components/Table",
};

const Template = (args) => Component(args);
const SortableTemplate = (args) => SortableComponent(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const Borderless = () => <TestCase css={css} html={Template.bind({})(BorderlessContent)} />;

export const Striped = () => <TestCase css={css} html={Template.bind({})(StripedContent)} />;

export const Sortable = () => <TestCase css={css} html={SortableTemplate.bind({})()} />;
