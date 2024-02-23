import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-accordion/usa-accordion.twig';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { BorderedContent, BorderedMultiContent } from './content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Variants/Bordered',
	args: {
		ncidsInitJs: () => USAAccordion.createAll(),
	},
};

const Template = (args) => Component(args);

export const Bordered = () => (
	<TestCase css={css} html={Template.bind({})(BorderedContent)} />
);
export const BorderedMultiselectable = () => (
	<TestCase css={css} html={Template.bind({})(BorderedMultiContent)} />
);
