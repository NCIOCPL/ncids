import Component from '@nciocpl/ncids-twig/components/usa-modal/usa-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
import { LargeContent, LongContent } from './content/index.js';

export default {
	title: 'Components/Modal/Modifiers',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAModal.createAll(),
		css,
	},
};

export const Large = { args: LargeContent };
export const MaxHeight = {
	args: {
		...LongContent,
		modifier: 'usa-modal--nci-maxh'
	}
};
