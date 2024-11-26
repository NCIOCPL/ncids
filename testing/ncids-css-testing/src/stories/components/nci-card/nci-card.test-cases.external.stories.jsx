import Component from './content/nci-card-section.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

export default {
	title: 'Components/Card/Test Cases',
	component: Component,
	parameters: { css },
};

export const ExternalCards = {
	args: {
		items: [
			{
				title: 'External Link to Google',
				description: 'An example of a card with an external link to Google.',
				imageSource: img_news1_4x3,
				imageSrc: img_news1_16x9,
				alt: 'External Link to Google',
				ariaLabel: 'Card',
				url: 'https://www.google.com',
			},
			{
				modifier: 'nci-card--external',
				title: 'Forced External Link',
				description:
					'An example of a card with an internal link that is overridden to display as external.',
				imageSource: img_news1_4x3,
				imageSrc: img_news1_16x9,
				alt: 'Forced External Link',
				ariaLabel: 'Card',
				url: 'https://www.cancer.gov',
			},
			{
				modifier: 'nci-card--internal',
				title: 'Forced Internal Link',
				description:
					'An example of a card with an external link that is overridden to display as internal.',
				imageSource: img_news1_4x3,
				imageSrc: img_news1_16x9,
				alt: 'Forced Internal Link',
				ariaLabel: 'Card',
				url: 'https://www.google.com',
			},
		],
	},
};
