import React from 'react';
import Component from './twig-test-cases/usa-accordion_basichtml.twig';
import css from './index.scss';

import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/Basic HTML',
	parameters: {
		ncidsInitJs: () => USAAccordion.createAll(),
		css
	},
};

const Template = (args) => Component(args);

export const Nested = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
