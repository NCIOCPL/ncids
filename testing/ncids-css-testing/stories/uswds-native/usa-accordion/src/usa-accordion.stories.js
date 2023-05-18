import React from 'react';
import Component from './usa-accordion.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { DefaultContent, BorderedContent, MultiContent } from './content';
import { accordion } from '@uswds-js';

export default {
  title: 'USWDS Components/Accordion',
	args: {
		behavior: accordion,
	},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
export const Bordered = () => <TestCase css={css} html={Template.bind({})(BorderedContent)} />;
export const Multiselectable = () => <TestCase css={css} html={Template.bind({})(MultiContent)} />;
