import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss';

import { TwoColumnList } from './content';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

export default {
	title: 'Components/Site Alert/Test Cases/Two Column List',
	parameters: {
		ncidsInitJs: () => USASiteAlert.createAll(),
		css
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
