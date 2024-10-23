import Component from './usa-in-page-navigation.twig';
import DefaultContent from './usa-in-page-navigation.json';
import css from './index.scss?inline';

import * as inPageNavigation from '@uswds/uswds/js/usa-in-page-navigation';

export default {
	title: 'USWDS/Components/In-Page Navigation',
	component: Component,
	parameters: {
		uswdsBehaviorJs: inPageNavigation,
		css
	},
};

export const Default = { args: DefaultContent };
