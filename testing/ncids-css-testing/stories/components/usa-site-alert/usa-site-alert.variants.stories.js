import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { SlimContent } from './content';
import { USASiteAlert } from '@nciocpl/ncids-js/lib/esm/components/usa-site-alert';

export default {
	title: 'Components/Site Alert/Variants',
	args: {
		ncidsInitJs: () => USASiteAlert.createAll(),
	},
};

const Template = (args) => Component(args);
export const Slim = () => (
	<TestCase css={css} html={Template.bind({})(SlimContent)} />
);
export const SlimDismissible = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ ...SlimContent, dismissible: true })}
	/>
);
