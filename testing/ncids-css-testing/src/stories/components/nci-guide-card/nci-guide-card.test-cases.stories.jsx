import Component from '@nciocpl/ncids-twig/components/nci-guide-card/nci-guide-card.twig';
import css from './index.scss?inline';

import img_placeholder_16x9 from './img/16x9_placeholder.png';

export default {
	title: 'components/Guide Card/Test Cases',
	component: Component,
	parameters: { css },
};

export const GuideWithImageAndDescriptionWithoutImage = {
	args: {
		'modifier': 'nci-guide-card--with-image-and-description',
		'description': 'NCI is the nation&apos;s trusted source for cancer information. We&apos;re here with information about causes and risk factors, early detection and diagnosis, and treatment options.',
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

export const GuideCardWithImageAndDescriptionWithoutDescription = {
	args: {
		'modifier': 'nci-guide-card--with-image-and-description',
		'image': img_placeholder_16x9,
		'altText': 'Grants and Research',
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
