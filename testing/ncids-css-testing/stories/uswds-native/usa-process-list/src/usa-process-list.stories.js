import React from 'react';
import Component from './usa-process-list.twig';
import { TestCase } from '../../../../components/test-case';
import Tile from './usa-process-list--custom-sizing.twig';
import Test from './usa-process-list--no-text.twig';
import css from './index.scss';

export default {
  title: 'USWDS/Components/Process List',
};

const Template = (args) => Component(args);
const CustomTemplate = (args) => Tile(args);
const NoTextTemplate = (args) => Test(args);

export const Default = () => <TestCase css={css} html={Template.bind({})()} />;

export const ProcessListCustomSizing = () => <TestCase css={css} html={CustomTemplate.bind({})()} />;

export const ProcessListNoText = () => <TestCase css={css} html={NoTextTemplate.bind({})()} />;
