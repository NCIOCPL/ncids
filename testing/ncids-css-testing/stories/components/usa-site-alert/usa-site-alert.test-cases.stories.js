import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { TwoColumnList } from './content';
import { USASiteAlert } from '@nciocpl/ncids-js/lib/esm/components/usa-site-alert';

export default {
	title: 'Components/Site Alert/Test Cases/Two Column List',
	args: {
		ncidsInitJs: () => USASiteAlert.createAll(),
	},
};

const Template = (args) => Component(args);
export const Emergency = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ ...TwoColumnList, modifier: 'emergency' })}
	/>
);
export const Info = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ ...TwoColumnList, modifier: 'info' })}
	/>
);
