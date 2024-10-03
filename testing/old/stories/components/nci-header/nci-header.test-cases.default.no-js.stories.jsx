import Component from '@nciocpl/ncids-twig/components/nci-header/nci-header.twig';
import css from './index.scss';

import { DefaultContent } from './content';

export default {
	title: 'Components/Header/Test Cases/Default',
	component: Component,
	parameters: {css}
};

const Template = (args) => Component(args);
export const NoJS = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
