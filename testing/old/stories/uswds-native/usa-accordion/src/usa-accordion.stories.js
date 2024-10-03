import React from 'react';
import Component from './usa-accordion.twig';
import css from './index.scss';

import { DefaultContent, BorderedContent, MultiContent } from './content';
import { accordion } from '@uswds/uswds/src/js/components';

export default {
  title: 'USWDS/Components/Accordion',
	parameters: {
		uswdsBehaviorJs: accordion,
		css
	},
};

const Template = (args) => Component(args);

export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
export const Bordered = () => <TestCase css={css} html={Template.bind({})(BorderedContent)} />;
export const Multiselectable = () => <TestCase css={css} html={Template.bind({})(MultiContent)} />;
