import Component from './usa-in-page-navigation.twig';
import DefaultContent from './usa-in-page-navigation.json';
import css from './index.scss';

import { inPageNavigation } from '@uswds/uswds/src/js/components';

export default {
	title: 'USWDS/Components/In-Page Navigation',
	parameters: {
		uswdsBehaviorJs: inPageNavigation,
		css
	},
};

const Template = (args) => Component(args);
export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;
