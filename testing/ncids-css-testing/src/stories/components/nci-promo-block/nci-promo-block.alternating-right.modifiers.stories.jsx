import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import { AlternatingImageRightContent, DarkAlternatingImageRightContent } from './content';

export default {
	title: 'Components/Promo Block/Modifiers/Alternating Image Right',
	component: Component,
	parameters: { css },
};

export const WithImage = { args: AlternatingImageRightContent };
export const DarkThemeWithImage = { args: DarkAlternatingImageRightContent };
