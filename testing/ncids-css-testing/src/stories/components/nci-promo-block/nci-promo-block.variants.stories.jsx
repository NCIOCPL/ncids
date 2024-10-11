import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import { DefaultContentWithImage } from './content';

export default {
	title: 'Components/Promo Block/Variants',
	component: Component,
	parameters: { css },
};

export const WithImage = { args: DefaultContentWithImage };
