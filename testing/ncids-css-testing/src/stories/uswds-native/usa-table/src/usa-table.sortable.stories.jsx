import Component from './usa-table--sortable/usa-table--sortable.twig';
import css from './index.scss?inline';

import * as table from '@uswds/uswds/js/usa-table';

export default {
	title: 'USWDS/Components/Table',
	component: Component,
	parameters: {
		uswdsBehaviorJs: table,
		css
	},
};

export const Sortable = {};
