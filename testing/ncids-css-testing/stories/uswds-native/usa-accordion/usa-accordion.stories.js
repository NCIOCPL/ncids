import React from 'react';
import { TestCase } from '../../../components/test-case';
import Component from "./usa-accordion.twig";
import { DefaultContent, BorderedContent, MultiContent } from "./content";
import css from './index.scss';

export default {
  title: "USWDS Components/Accordion",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
export const Bordered = () => <TestCase css={css} html={Template.bind({})(BorderedContent)} />;
export const Multiselectable = () => <TestCase css={css} html={Template.bind({})(MultiContent)} />;
