import Component from '@nciocpl/ncids-css/uswds-packages/usa-site-alert/src/usa-site-alert.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DefaultContent, SlimContent } from './content';

export default {
	title: 'Components/Site Alert/Test Cases/USWDS',
	args: {
	},
};

const Template = (args) => Component(args);
export const Default = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ title: DefaultContent.heading, text: DefaultContent.content, aria_label: DefaultContent.ariaLabel })}
	/>
);
export const Slim = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ title: SlimContent.heading, text: SlimContent.content, aria_label: SlimContent.ariaLabel, modifier: "usa-site-alert--slim" })}
	/>
);
