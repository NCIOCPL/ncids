import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/usa-icons-bg/search--white.svg';
import Component from './usa-search.twig';

import {
	DefaultContent,
	BigContent,
	SmallContent,
	DefaultContentLangEs,
	BigContentLangEs,
	SmallContentLangEs,
} from './content';

import * as search from '@uswds/uswds/js/usa-search';

export default {
	title: 'USWDS/Components/Search',
	component: Component,
	parameters: {
		uswdsBehaviorJs: search,
		css,
	},
};

export const Default = { args: { ...DefaultContent, ...{ img } } };
export const Big = { args: { ...BigContent, ...{ img } } };
export const Small = { args: { ...SmallContent, ...{ img } } };
export const DefaultLangEs = { args: { ...DefaultContentLangEs, ...{ img } } };
export const BigLangEs = { args: { ...BigContentLangEs, ...{ img } } };
export const SmallLangEs = { args: { ...SmallContentLangEs, ...{ img } } };
