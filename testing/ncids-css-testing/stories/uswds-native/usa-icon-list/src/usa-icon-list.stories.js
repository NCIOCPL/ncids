import Component from './usa-icon-list.twig';
import {
	DefaultContent,
	CustomRichContent,
	CustomSizeContent,
	RichContent,
	SimpleContent,
} from './content';
import css from './index.scss';
import img from '@nciocpl/ncids-css/uswds-img/sprite.svg';

import { TestCase } from '../../../../components/test-case';

export default {
	title: 'USWDS/Components/Icon List',
};

const replaceContent = (content) => {
	const template = Template.bind({})(content)
	return template.replaceAll('./img/sprite.svg', img);
};

const Template = (args) => Component(args);
export const Default = () => <TestCase css={css} html={replaceContent(DefaultContent)} />;
export const CustomRich = () => <TestCase css={css} html={replaceContent(CustomRichContent)} />;
export const CustomSize = () => <TestCase css={css} html={replaceContent(CustomSizeContent)} />;
export const Rich = () => <TestCase css={css} html={replaceContent(RichContent)} />;
export const Simple = () => <TestCase css={css} html={replaceContent(SimpleContent)} />;
