import Component from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Guide Card/Default',
	component: Component,
	parameters: { css },
};

export const Default = {
	args: {
		title: 'Research Grant Funding',
		'modifier': 'desktop:grid-col-4',
		'buttongroup': [
			{
				'title': 'Funding Opportunities',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Cancer Moonshot Funding Opportunities',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Funding Strategy',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Research Program Contacts',
				'url': 'http://cancer.gov',
			},
		],
	},
};
