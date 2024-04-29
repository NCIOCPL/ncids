import Component from '@nciocpl/ncids-twig/components/usa-footer/usa-footer.twig';
import css from './nci-big.scss';

import { TestCase } from '../../../components/test-case';
import { NciBigFooterContent } from './content';

export default {
	title: 'Components/Footer/Test Cases',
	args: {},
};

const Template = (args) => Component(args);

export const NoJS = () => (
	<TestCase css={css} html={Template.bind({})(NciBigFooterContent)} />
);
