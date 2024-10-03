import React from 'react';
import Component from '@nciocpl/ncids-twig/components/usa-accordion/usa-accordion.twig';
import css from './index.scss';

import { DefaultContent, MultiContent } from './content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Default',
	parameters: {
		ncidsInitJs: () => USAAccordion.createAll(),
		css
	},
};

const Template = (args) => Component(args);

export const Default = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
export const Multiselectable = () => (
	<TestCase css={css} html={Template.bind({})(MultiContent)} />
);
