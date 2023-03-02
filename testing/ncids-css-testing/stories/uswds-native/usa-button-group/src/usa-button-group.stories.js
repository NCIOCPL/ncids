import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-button-group.twig";
import { DefaultContent, SegmentedContent } from "./content";
import css from './index.scss';

export default {
  title: "USWDS/Components/Button Group",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const Segmented = () => <TestCase css={css} html={Template.bind({})(SegmentedContent)} />;;
