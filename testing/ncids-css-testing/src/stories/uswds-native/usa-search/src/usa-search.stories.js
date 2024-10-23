import Component from './usa-search.twig';
import {
	DefaultContent,
	BigContent,
	SmallContent,
	DefaultContentLangEs,
	BigContentLangEs,
	SmallContentLangEs,
} from './content';
import css from './index.scss?inline';
import img from '@nciocpl/ncids-css/uswds-img/usa-icons-bg/search--white.svg';

import { search } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/Search',
	component: Component,
	parameters: {
		uswdsBehaviorJs: search,
		css
	}
};

const replaceContent = (content) => {
	const template = Template.bind({})(content)
	return template.replace('./img/usa-icons-bg/search--white.svg', img);
};

export const Default = () => <TestCase css={css} html={replaceContent(DefaultContent)} />;
export const Big = () => <TestCase css={css} html={replaceContent(BigContent)} />;
export const Small = () => <TestCase css={css} html={replaceContent(SmallContent)} />;
export const DefaultLangEs = () => <TestCase css={css} html={replaceContent(DefaultContentLangEs)} />;
export const BigLangEs = () => <TestCase css={css} html={replaceContent(BigContentLangEs)} />;
export const SmallLangEs = () => <TestCase css={css} html={replaceContent(SmallContentLangEs)} />;
