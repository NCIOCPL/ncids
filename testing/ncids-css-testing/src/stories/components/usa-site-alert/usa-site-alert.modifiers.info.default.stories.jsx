import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content/index.js';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

export default {
	title: 'Components/Site Alert/Modifiers/Info/Default',
	component: Component,
	parameters: {
		ncidsInitJs: () => USASiteAlert.createAll(),
		css,
	},
};

export const Default = { args: { ...DefaultContent, modifier: 'info' } };
export const DefaultDismissible = {
	args: {
		...DefaultContent,
		dismissible: true,
		modifier: 'info',
	},
};
