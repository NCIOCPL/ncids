import Component from '@nciocpl/ncids-twig/components/usa-site-alert/usa-site-alert.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { DefaultContent } from './content';

export default {
	title: 'Components/Site Alert/Test Cases/No JS',
	args: {
	},
};

const Template = (args) => Component(args);
export const Default = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ ...DefaultContent, expanded: true })}
	/>
);
