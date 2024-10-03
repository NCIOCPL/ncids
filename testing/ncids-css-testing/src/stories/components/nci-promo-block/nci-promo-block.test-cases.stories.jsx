import Component from '@nciocpl/ncids-twig/components/nci-promo-block/nci-promo-block.twig';
import css from './index.scss?inline';

import { DefaultNoDescriptionContent, DefaultWithImageNoDescriptionContent } from './content';

export default {
	title: 'Components/Promo Block/Test Cases',
	component: Component,
	parameters: { css },
};

export const DefaultNoDescription = { args: DefaultNoDescriptionContent };
export const DefaultWithImageNoDescription = { args: DefaultWithImageNoDescriptionContent };
