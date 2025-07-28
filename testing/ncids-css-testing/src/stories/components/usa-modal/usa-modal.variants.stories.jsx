import Component from '@nciocpl/ncids-twig/components/usa-modal/usa-modal.twig';
import css from './index.scss?inline';

import { USAModal } from '@nciocpl/ncids-js/usa-modal';
import { ForcedContent } from './content/index.js';

export default {
	title: 'Components/Modal/Variants',
	component: Component,
	parameters: {
		ncidsInitJs: () => USAModal.createAll(),
		css,
	},
};

export const ForcedAction = { args: ForcedContent };
