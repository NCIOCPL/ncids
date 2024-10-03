import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content';

export default {
	title: 'Components/Header/Test Cases/Default',
	component: Component,
	parameters: {css}
};

export const NoJS = { args: DefaultContent };
