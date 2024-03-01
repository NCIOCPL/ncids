import Component from './usa-in-page-navigation.twig';
import DefaultContent from './usa-in-page-navigation.json';
import css from './index.scss';

import { TestCase } from '../../../../components/test-case';
import { inPageNavigation } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/In-Page Navigation',
	args: {
		uswdsBehaviorJs: inPageNavigation,
	},
};

const Template = (args) => Component(args);
export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
