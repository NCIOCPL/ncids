import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content/index.js';

export default {
	title: 'Components/Site Alert/Test Cases/No JS',
	component: Component,
	parameters: { css },
};

export const Default = { args: { ...DefaultContent, expanded: true } };
