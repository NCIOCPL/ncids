import React from 'react';
import Component from './usa-select.twig';
import ComponentMultiple from './usa-select-multiple.twig';
import { TestCase } from '../../../../components/test-case';
import css from './index.scss';

export default {
  title: 'USWDS/Components/Form Inputs/Select',
};

const Template = (args) => Component(args);
const TemplateMultiple = (args) => ComponentMultiple(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;
export const MultipleSelect = () => <TestCase css={css} html={TemplateMultiple.bind({})()} />;
