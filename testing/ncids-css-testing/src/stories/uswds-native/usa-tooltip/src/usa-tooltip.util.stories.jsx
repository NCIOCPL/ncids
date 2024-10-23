import Component from './usa-tooltip--utilities.twig'
import css from './index.scss?inline';
import * as tooltip from '@uswds/uswds/js/usa-tooltip';

export default {
	title: 'USWDS/Components/Tooltip',
	component: Component,
	parameters: {
		uswdsBehaviorJs: tooltip,
		css
	},
};


export const Utility = {};
