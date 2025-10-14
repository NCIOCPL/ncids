import Component from './usa-table--ncids-sortable/usa-table--sortable.twig';
import css from './index.scss?inline';

import { USATableSortable } from '@nciocpl/ncids-js/usa-table';

export default {
	title: 'Components/Table',
	component: Component,
	parameters: {
		ncidsInitJs: () => USATableSortable.createAll(),
		css,
	},
};

export const NcidsSortable = {};
