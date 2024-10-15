import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './nci-big.scss';

import { NciBigFooterContent } from './content';

export default {
	title: 'Components/Footer/Test Cases',
	component: Component,
	parameters: {css}
};

const Template = (args) => Component(args);

export const NoJS = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} />
);
