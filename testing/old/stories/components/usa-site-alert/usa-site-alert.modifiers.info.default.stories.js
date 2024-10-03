import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss';

import { DefaultContent } from './content';
import { USASiteAlert } from '@nciocpl/ncids-js/usa-site-alert';

export default {
	title: 'Components/Site Alert/Modifiers/Info/Default',
	parameters: {
		ncidsInitJs: () => USASiteAlert.createAll(),
		css
	},
};

const Template = (args) => Component(args);
export const Default = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ ...DefaultContent, modifier: 'info' })}
	/>
);
export const DefaultDismissible = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			...DefaultContent,
			dismissible: true,
			modifier: 'info',
		})}
	/>
);
