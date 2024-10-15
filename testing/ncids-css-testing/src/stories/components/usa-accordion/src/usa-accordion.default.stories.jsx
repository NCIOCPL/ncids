import Component from '@nciocpl/ncids-twig/components/usa-accordion/usa-accordion.twig';
import css from './index.scss?inline';

import { DefaultContent, MultiContent } from './content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Default',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAAccordion.createAll(),
		css
	},
};

export const Default = { args: DefaultContent };
export const Multiselectable = { args: MultiContent };
