import Component from './content/nci-card-section.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

import img_news2_16x9 from './img/news2-16x9.jpg';
import img_news2_4x3 from './img/news2-4x3.jpg';

import img_news3_16x9 from './img/news3-16x9.jpg';
import img_news3_4x3 from './img/news3-4x3.jpg';

export default {
	title: 'Components/Card/Test Cases',
	component: Component,
	parameters: { css },
};

export const CardGroupWithoutDescription = {
	args: {
		'items': [
			{
				'title': 'CRCHD Diversity Training',
				'imageSource': img_news1_4x3,
				'imageSrc': img_news1_16x9,
				'alt': 'CRCHD Diversity Training',
				'ariaLabel': 'Card',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Grant Application Development, Submission, Review, & Award',
				'imageSource': img_news2_4x3,
				'imageSrc': img_news2_16x9,
				'alt': 'Grant Application Development, Submission, Review, & Award',
				'ariaLabel': 'Card',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Capacitación en diversidad CRCHD',
				'imageSource': img_news3_4x3,
				'imageSrc': img_news3_16x9,
				'alt': 'Capacitación en diversidad CRCHD',
				'ariaLabel': 'Card',
				'url': 'http://cancer.gov',
			},
		],
	},
};
