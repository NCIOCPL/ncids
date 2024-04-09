import React from 'react';
import Component from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/usa-accordion.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { DefaultContent, BorderedContent, MultiContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/USWDS',
	args: {
		ncidsInitJs: () => USAAccordion.createAll(),
	},
};

const Template = (args) => Component(args);

export const Default = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
export const Bordered = () => (
	<TestCase css={css} html={Template.bind({})(BorderedContent)} />
);
export const Multiselectable = () => (
	<TestCase css={css} html={Template.bind({})(MultiContent)} />
);
