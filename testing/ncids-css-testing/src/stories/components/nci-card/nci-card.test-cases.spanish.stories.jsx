import TwigComponent from '@nciocpl/ncids-twig/components/nci-card/nci-card.twig';
import css from './index.scss?inline';

import img_news1_16x9 from './img/news1-16x9.jpg';

const Component = (props) => (
	<div lang="es">
		<TwigComponent {...props} />
	</div>
);

export default {
	title: 'Components/Card/Test Cases',
	component: Component,
	parameters: { css },
};

export const SpanishWithExternalLink = {
	args: {
		title: 'External Link Testing Spanish SR Label',
		description:
			'A card to test that the label for the external link is in Spanish.',
		imageSource: img_news1_16x9,
		imageSrc: img_news1_16x9,
		alt: 'External Link for Spanish SR Example',
		ariaLabel: 'Card',
		url: 'http://google.com',
	},
};
