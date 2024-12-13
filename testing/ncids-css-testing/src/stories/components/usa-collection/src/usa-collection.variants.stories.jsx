import Component from '@nciocpl/ncids-twig/components/usa-collection/usa-collection.twig';
import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';

import { CondensedContent } from './content';

export default {
	title: 'Components/Collection/Variants',
	component: Component,
	parameters: { css },
};

export const Condensed = { args: { ...CondensedContent, img } };
