import React from 'react';

import Component from '@nciocpl/ncids-twig/components/usa-breadcrumb/usa-breadcrumb.twig';
import css from './breadcrumb.scss';

export default {
	title: 'Components/Breadcrumb/Default',
	parameters: {css}
};

const Template = (args) => Component(args);

export const Default = () => (
	<TestCase
		css={css}
		html={Template.bind({})({
			modifier: '',
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
