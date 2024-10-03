import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content';

export default {
	title: 'Components/Promo Block/Default',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
