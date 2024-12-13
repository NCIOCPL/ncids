import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss?inline';

import { TwoColumnList } from './content/index.js';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

export default {
	title: 'Components/Site Alert/Test Cases/Two Column List',
	component: Component,
	parameters: {
		ncidsInitJs: () => USASiteAlert.createAll(),
		css,
	},
};

export const Emergency = { args: { ...TwoColumnList, modifier: 'emergency' } };
export const Info = { args: { ...TwoColumnList, modifier: 'info' } };
