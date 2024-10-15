import Component from './content/nci-card-section.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

import img_news2_16x9 from './img/news2-16x9.jpg';
import img_news2_4x3 from './img/news2-4x3.jpg';

import img_news3_16x9 from './img/news3-16x9.jpg';
import img_news3_4x3 from './img/news3-4x3.jpg';

export default {
	title: 'Components/Card/Default',
	component: Component,
	parameters: { css },
};

export const CardGroup = {
	args: {
		'items': [
			{
				'title': 'CRCHD Diversity Training',
				'description': 'Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
				'imageSource': img_news1_4x3,
				'imageSrc': img_news1_16x9,
				'alt': 'CRCHD Diversity Training',
				'ariaLabel': 'Card',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Grant Application Development, Submission, Review, & Award',
				'description': 'In patients with certain variations in the OAS1 gene, treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.',
				'imageSource': img_news2_4x3,
				'imageSrc': img_news2_16x9,
				'alt': 'Grant Application Development, Submission, Review, & Award',
				'ariaLabel': 'Card',
				'url': 'http://cancer.gov',
			},
			{
				'title': 'Capacitación en diversidad CRCHD',
				'description': 'El tratamiento para la COVID-19 grave con interferones disminuyó la carga viral del SARS-CoV-2, según encontró un nuevo estudio.',
				'imageSource': img_news3_4x3,
				'imageSrc': img_news3_16x9,
				'alt': 'Capacitación en diversidad CRCHD',
				'ariaLabel': 'Card',
				'url': 'http://cancer.gov',
			},
		],
	},
};
