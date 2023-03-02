import React from 'react';
import { TestCase } from '../../../../../components/test-case';
import Component from "./usa-table--scrollable.twig";
import ScrollableDefaultContent from "./usa-table--scrollable.json";
import ScrollableStripedContent from "./usa-table--scrollable~striped.json";
import ScrollableCompactContent from "./usa-table--scrollable~compact.json";
import ScrollableCompactStripedContent from "./usa-table--scrollable~compact-striped.json";
import css from '../index.scss';

export default {
  title: "USWDS/Components/Table/Scrollable",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(ScrollableDefaultContent)} />;

export const Striped = () => <TestCase css={css} html={Template.bind({})(ScrollableStripedContent)} />;

export const Compact = () => <TestCase css={css} html={Template.bind({})(ScrollableCompactContent)} />;

export const CompactStriped = () => <TestCase css={css} html={Template.bind({})(ScrollableCompactStripedContent)} />;
