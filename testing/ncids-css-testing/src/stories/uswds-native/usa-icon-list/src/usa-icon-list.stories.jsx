import {
	DefaultContent,
	CustomRichContent,
	CustomSizeContent,
	RichContent,
	SimpleContent,
} from './content';

import css from './index.scss?inline';
import img_path from '@nciocpl/ncids-css/uswds-img/sprite.svg';
import Component from './usa-icon-list.twig';

export default {
	title: 'USWDS/Components/Icon List',
	component: Component,
	parameters: { css },
};

export const Default = { args: { ...DefaultContent, img_path } };
export const CustomRich = { args: { ...CustomRichContent, img_path } };
export const CustomSize = { args: { ...CustomSizeContent, img_path } };
export const Rich = { args: { ...RichContent, img_path } };
export const Simple = { args: { ...SimpleContent, img_path } };
