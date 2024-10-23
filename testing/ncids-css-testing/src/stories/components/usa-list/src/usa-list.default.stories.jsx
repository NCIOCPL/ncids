import Component from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/List/Default',
	component: Component,
	parameters: { css },
};

export const OrderedList = {
	args: {
		ordered: true,
		items: ['Ordered Item 1', 'Ordered Item 2', 'Ordered Item 3'],
	},
};

export const UnorderedList = {
	args: {
		items: ['Unordered Item 1', 'Unordered Item 2', 'Unordered Item 3'],
	},
};
