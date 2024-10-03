import Component from '@nciocpl/ncids-twig/components/usa-breadcrumb/usa-breadcrumb.twig';

import { VeryLongContent } from './content/index.js';
import css from './index.scss?inline';

export default {
	title: 'Components/Breadcrumb/Test Cases',
	component: Component,
	parameters: { css },
};

export const WrapWithVeryLongContent = {
	args:
		{
			...VeryLongContent,
			modifier: 'usa-breadcrumb--wrap',
		},
};
