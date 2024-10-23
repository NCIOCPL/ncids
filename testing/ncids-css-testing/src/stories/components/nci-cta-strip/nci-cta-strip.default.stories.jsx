import Component from '@nciocpl/ncids-twig/components/nci-cta-strip/nci-cta-strip.twig';
import css from './index.scss?inline';

export default {
	title: 'Components/CTA Strip/Default',
	component: Component,
	parameters: { css },
};

export const DefaultLong = {
	args: {
		'items': [
			{
				'title': 'Programs',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Resources',
				'url': 'http://www.google.com',
			},
			{
				'title': 'Success Stories',
				'url': 'http://www.msn.com',
			},
		],
	},
};
