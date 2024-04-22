import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig';
import css from './index.scss';

export default {
	title: 'Components/List/Default',
};

const Template = (args) => Component(args);

export const OrderedList = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			ordered: true,
			items: ['Ordered Item 1', 'Ordered Item 2', 'Ordered Item 3'],
		})}
	/>
);
export const UnorderedList = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			items: ['Unordered Item 1', 'Unordered Item 2', 'Unordered Item 3'],
		})}
	/>
);
