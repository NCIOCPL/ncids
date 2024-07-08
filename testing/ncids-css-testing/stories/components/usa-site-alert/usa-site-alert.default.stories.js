import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DefaultContent } from './content';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

export default {
	title: 'Components/Site Alert/Default',
	args: {
		ncidsInitJs: () => USASiteAlert.createAll(),
	},
};

const Template = (args) => Component(args);
export const Default = () => (
	<TestCase css={css} html={Template.bind({})(DefaultContent)} />
);
export const DefaultDismissible = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ ...DefaultContent, dismissible: true })}
	/>
);
