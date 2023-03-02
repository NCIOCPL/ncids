import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from "./usa-file-input.twig";
import {
  DefaultContent,
  DisabledContent,
  ErrorContent,
  MultipleContent,
  SpecificContent,
  WildcardContent,
} from "./content";
import css from './index.scss';

export default {
  title: "USWDS/Components/Form Inputs/File Input",
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;

export const Disabled = () => <TestCase css={css} html={Template.bind({})(DisabledContent)} />;

export const Error = () => <TestCase css={css} html={Template.bind({})(ErrorContent)} />;

export const Multiple = () => <TestCase css={css} html={Template.bind({})(MultipleContent)} />;

export const Specific = () => <TestCase css={css} html={Template.bind({})(SpecificContent)} />;

export const Wildcard = () => <TestCase css={css} html={Template.bind({})(WildcardContent)} />;
