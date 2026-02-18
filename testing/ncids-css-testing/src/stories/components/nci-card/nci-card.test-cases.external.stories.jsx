import Component from './content/nci-card-section.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';

export default {
	title: 'Components/Card/Test Cases',
	component: Component,
	parameters: { css },
};

export const CardsWithExternalLinks = {
	args: {
		items: [
			{
				title: 'External Link Example',
				description: 'Click on this card to go to Google.',
				imageSource: img_news1_16x9,
				imageSrc: img_news1_16x9,
				alt: 'External Link Example card image',
				ariaLabel: 'External Link Example',
				url: 'https://www.google.com',
			},
			{
				modifier: 'nci-card--external',
				title: 'Override Internal to Show External',
				description:
					'This feature card has an internal link, but is using the override class to display the external link icon.',
				imageSource: img_news1_16x9,
				imageSrc: img_news1_16x9,
				alt: 'Override Example card image',
				ariaLabel: 'Override Internal to Show External',
				url: 'https://www.cancer.gov',
			},
			{
				linkMarkedInternal: 'data-ncids-internal-link',
				title: 'Override External to Not Show Icon',
				description:
					'This feature card has an external link, but is using the override class to not display the external link icon.',
				imageSource: img_news1_16x9,
				imageSrc: img_news1_16x9,
				alt: 'Forced Internal Link card image',
				ariaLabel: 'Override External to Not Show Icon',
				url: 'https://www.google.com',
			},
		],
	},
};
