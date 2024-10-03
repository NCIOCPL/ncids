import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import { DarkContent, DarkContentWithImage } from './content';

export default {
	title: 'Components/Promo Block/Modifiers/Dark Theme',
	component: Component,
	parameters: { css },
};

export const Default = { args: DarkContent };
export const WithImage = { args: DarkContentWithImage };
