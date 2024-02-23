import React from 'react';
import Component from './twig-test-cases/usa-accordion_cancergov.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/Cancer Gov',
	args: {
		ncidsInitJs: () => USAAccordion.createAll(),
	},
};

const Template = (args) => Component(args);

export const SampleArticle = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
export const Nested = () => (
	<TestCase css={css} html={Template.bind({})({...DefaultContent, isNested: true})} />
);
