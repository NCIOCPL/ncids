import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig';
import css from './index.scss';

export default {
	title: 'Components/List/Modifiers',
};

const Template = (args) => Component(args);

export const TwoColumnList = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			variant: "twoColumn",
			items: [
				'Two Column List Item 1',
				'Two Column List Item 2',
				'Two Column List Item 3',
				'Two Column List Item 4',
			],
		})}
	/>
);
export const UnstyledList = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			variant: "unstyled",
			items: [
				'Unstyled List Item 1',
				'Unstyled List Item 2',
				'Unstyled List Item 3',
			],
		})}
	/>
);
