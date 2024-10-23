import Component from '@nciocpl/ncids-twig/components/usa-breadcrumb/usa-breadcrumb.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/Breadcrumb/Default',
	component: Component,
	parameters: { css },
};

export const Default = {
	args: {
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
	},
};
