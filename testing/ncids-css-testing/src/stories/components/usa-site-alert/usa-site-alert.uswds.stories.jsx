import Component from '@nciocpl/ncids-css/uswds-packages/usa-site-alert/src/usa-site-alert.twig';
import css from './index.scss?inline';

import { DefaultContent, SlimContent } from './content/index.js';

export default {
	title: 'Components/Site Alert/Test Cases/USWDS',
	component: Component,
	parameters: { css },
};

export const Default = {
	args: {
		title: DefaultContent.heading,
		text: DefaultContent.content,
		aria_label: DefaultContent.ariaLabel,
	},
};

export const Slim = {
	args: {
		title: SlimContent.heading,
		text: SlimContent.content,
		aria_label: SlimContent.ariaLabel,
		modifier: 'usa-site-alert--slim',
	},
};
