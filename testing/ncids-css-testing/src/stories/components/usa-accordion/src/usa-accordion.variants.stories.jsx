import Component from '@nciocpl/ncids-twig/components/usa-accordion/usa-accordion.twig';
import css from './index.scss?inline';

import { BorderedContent, BorderedMultiContent } from './content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Variants/Bordered',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAAccordion.createAll(),
		css,
	},
};

export const Bordered = { args: BorderedContent };
export const BorderedMultiselectable = { args: BorderedMultiContent };
