import Component from './twig-test-cases/usa-accordion_cancergov.twig';
import css from './index.scss?inline';

import { DefaultContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/Cancer Gov',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAAccordion.createAll(),
		css,
	},
};

export const SampleArticle = { args: DefaultContent };
export const Nested = { args: { ...DefaultContent, isNested: true } };
