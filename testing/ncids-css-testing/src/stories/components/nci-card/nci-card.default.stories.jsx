import Component from '@nciocpl/ncids-twig/components/nci-card/nci-card.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';

export default {
	title: 'Components/Card/Default',
	component: Component,
	parameters: { css },
};

export const Default = {
	args: {
		'title': 'CRCHD Diversity Training',
		'description': 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
		'imageSource': img_news1_16x9,
		'imageSrc': img_news1_16x9,
		'alt': 'CRCHD Diversity Training',
		'ariaLabel': 'Card',
		'url': 'http://cancer.gov',
	},
};
