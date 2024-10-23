import {
	DefaultContent,
	CustomRichContent,
	CustomSizeContent,
	RichContent,
	SimpleContent,
} from './content';

import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';
import html from './usa-icon-list.twig?twig';

const Component = () => {
	const replaced = html().replaceAll('./img/sprite.svg', img);
	return <div dangerouslySetInnerHTML={{ __html: replaced }}></div>;
};

export default {
	title: 'USWDS/Components/Icon List',
	component: Component,
	parameters: { css },
};

export const Default = { args: DefaultContent };
export const CustomRich = { args: CustomRichContent };
export const CustomSize = { args: CustomSizeContent };
export const Rich = { args: RichContent };
export const Simple = { args: SimpleContent };
