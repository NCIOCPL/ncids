import Component from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/usa-accordion.twig';
import css from './index.scss?inline';

import { DefaultContent, BorderedContent, MultiContent } from '@nciocpl/ncids-css/uswds-packages/usa-accordion/src/content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
	title: 'Components/Accordion/Test Cases/USWDS',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAAccordion.createAll(),
		css,
	},
};

// Tests USWDS html with NCIDS js
export const Default = { args: DefaultContent };
export const Bordered = { args: BorderedContent };
export const Multiselectable = { args: MultiContent };
