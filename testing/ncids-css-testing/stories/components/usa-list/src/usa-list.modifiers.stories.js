import React from 'react';
import { TestCase } from '../../../../components/test-case';
import Component from '@nciocpl/ncids-twig/components/usa-list/usa-list.twig';
import css from './index.scss';

export default {
	title: 'Components/usa-list/Modifiers',
};

const Template = (args) => Component(args);
const unstyledHtml = `
	<ul class="usa-list usa-list--unstyled">
		<li>Unstyled list item</li>
		<li>Unstyled list item</li>
		<li>Unstyled list item</li>
	</ul>
`;

export const TwoColumnList = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			twoColumn: true,
			items: [
				'Two Column List Item 1',
				'Two Column List Item 2',
				'Two Column List Item 3',
				'Two Column List Item 4',
			],
		})}
	/>
);
export const Unstyled = () => <TestCase css={css} html={unstyledHtml} />;
