import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './index.scss?inline';

import { NciBigFooterContent } from './content/index.js';

export default {
	title: 'Components/Footer/Test Cases',
	component: Component,
	parameters: { css },
};

export const NoJS = { args: NciBigFooterContent };
