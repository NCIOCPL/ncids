import Component from '@nciocpl/ncids-twig/components/usa-breadcrumb/usa-breadcrumb.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Breadcrumb/Variants',
	component: Component,
	parameters: { css },
};

export const Wrap = {
	args: {
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
	},
};
