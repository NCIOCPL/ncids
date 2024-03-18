import Component from './usa-search.twig';
import {
	DefaultContent,
	BigContent,
	SmallContent,
	DefaultContentLangEs,
	BigContentLangEs,
	SmallContentLangEs,
} from './content';
import css from './index.scss';
import img from '@nciocpl/ncids-css/uswds-img/usa-icons-bg/search--white.svg';

import { TestCase } from '../../../../components/test-case';
import { search } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Search',
	args: {
		uswdsBehaviorJs: search
	}
};

const replaceContent = (content) => {
	const template = Template.bind({})(content)
	return template.replace('./img/usa-icons-bg/search--white.svg', img);
};

const Template = (args) => Component(args);
export const Default = () => <TestCase css={css} html={replaceContent(DefaultContent)} />;
export const Big = () => <TestCase css={css} html={replaceContent(BigContent)} />;
export const Small = () => <TestCase css={css} html={replaceContent(SmallContent)} />;
export const DefaultLangEs = () => <TestCase css={css} html={replaceContent(DefaultContentLangEs)} />;
export const BigLangEs = () => <TestCase css={css} html={replaceContent(BigContentLangEs)} />;
export const SmallLangEs = () => <TestCase css={css} html={replaceContent(SmallContentLangEs)} />;
