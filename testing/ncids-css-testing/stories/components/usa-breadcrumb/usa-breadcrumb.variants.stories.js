import React from 'react';

import Component from '@nciocpl/ncids-twig/components/usa-breadcrumb/usa-breadcrumb.twig';
import { TestCase } from '../../../components/test-case';
import css from './breadcrumb.scss';

export default {
	title: 'Components/Breadcrumb/Variants',
	args: {},
};

const Template = (args) => Component(args);

export const Wrap = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			modifier: 'usa-breadcrumb--wrap',
			breadcrumbAriaLabel: 'Breadcrumb,,,',
			currentPageTitle:
				'Women-owned small business federal contracting program',
			breadcrumbs: [
				{
					label: 'Home',
					href: '#',
				},
				{
					label: 'Federal Contracting',
					href: '#',
				},
				{
					label: 'Contracting assistance programs',
					href: '#',
				},
			],
		})}
	/>
);
