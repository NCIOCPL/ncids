import Component from './usa-accordion.twig';
import css from './index.scss?inline';

import { DefaultContent, BorderedContent, MultiContent } from './content/index';
import * as accordion from '@uswds/uswds/js/usa-accordion';

export default {
	title: 'USWDS/Components/Accordion',
	component: Component,
	parameters: {
		uswdsBehaviorJs: accordion,
		css,
	},
};

export const Default = { args: DefaultContent };
export const Bordered = { args: BorderedContent };
export const Multiselectable = { args: MultiContent };
