import Component from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card-group.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Guide Card/Default',
	component: Component,
	parameters: { css },
};

export const CardGroup = {
	args: {
		'header': 'Your Guide to NCI Grants &amp; Training',
		'cards': [
			{
				'title': 'Research Grant Funding',
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
			{
				'title': 'Grants Process',
				'buttongroup': [
					{
						'title': 'Apply for a Grant',
						'url': 'http://cancer.gov',
					},
					{
						'title': 'Manage Your Award',
						'url': 'http://cancer.gov',
					},
					{
						'title': 'Grant Policies',
						'url': 'http://cancer.gov',
					},
					{
						'title': 'Grants and Management Contacts',
						'url': 'http://cancer.gov',
					},
				],
			},
			{
				'title': 'Funding for Training',
				'buttongroup': [
					{
						'title': 'Funding for Cancer Training',
						'url': 'http://cancer.gov',
					},
					{
						'title': 'Research Training at NCI',
						'url': 'http://cancer.gov',
					},
					{
						'title': 'Building a Diverse Workforce',
						'url': 'http://cancer.gov',
					},
					{
						'title': 'Training Program Contacts',
						'url': 'http://cancer.gov',
					},
				],
			},
		],
	},
};
