import Component from './content/nci-card-float.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

export default {
	title: 'Components/Card/Test Cases',
	component: Component,
	parameters: { css },
};

export const CardInTextLeft = {
	args: {
		'modifier': 'float-left margin-bottom-5 tablet:margin-bottom-4 desktop:margin-x-5',
		'title': 'CRCHD Diversity Training',
		'description': 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
		'imageSource': img_news1_4x3,
		'imageSrc': img_news1_16x9,
		'alt': 'CRCHD Diversity Training',
		'ariaLabel': 'Card',
		'url': 'http://cancer.gov',
	},
};

export const CardInTextRight = {
	args: {
		'modifier': 'float-right margin-bottom-5 tablet:margin-bottom-4 desktop:margin-x-5',
		'title': 'CRCHD Diversity Training',
		'description': 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
		'imageSource': img_news1_4x3,
		'imageSrc': img_news1_16x9,
		'alt': 'CRCHD Diversity Training',
		'ariaLabel': 'Card',
		'url': 'http://cancer.gov',
	},
};
