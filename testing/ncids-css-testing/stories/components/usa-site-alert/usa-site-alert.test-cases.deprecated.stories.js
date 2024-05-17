import Component from './content/deprecated.twig';
import css from './index.scss';

import { TestCase } from '../../../components/test-case';
import { USASiteAlert } from '@nciocpl/ncids-js/lib/esm/components/usa-site-alert';

export default {
	title: 'Components/Site Alert/Test Cases/Deprecated',
	args: {
		ncidsInitJs: () => USASiteAlert.createAll(),
	},
};

const Template = (args) => Component(args);
export const Emergency = () => (
	<TestCase
		css={css}
		html={Template.bind({})({  deprecated: 'usa-site-alert--nci-standard usa-site-alert--nci-emergency' })}
	/>
);
export const Info = () => (
	<TestCase
		css={css}
		html={Template.bind({})({ deprecated: 'usa-site-alert--nci-standard usa-site-alert--nci-info' })}
	/>
);
