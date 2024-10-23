import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss?inline';

import { SlimContent } from './content/index.js';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

export default {
	title: 'Components/Site Alert/Modifiers/Info/Slim',
	component: Component,
	parameters: {
		ncidsInitJs: () => USASiteAlert.createAll(),
		css,
	},
};

export const Slim = { args: { ...SlimContent, modifier: 'info' } };
export const SlimDismissible = {
	args: {
		...SlimContent,
		dismissible: true,
		modifier: 'info',
	},
};
