import Component from '@nciocpl/ncids-twig/components/nci-pull-quote/nci-pull-quote.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Pull Quote/Default',
	component: Component,
	parameters: { css },
};

export const NCIPullQuote = {
	args: {
		body:
			'Mauris vehicula erat quis facilisis laoreet. Mauris eget vestibulum diam, quis pulvinar odio. Aenean nec eros ligula. Aliquam erat divvolutpat. Quisque volutpat nisl risus',
		author: 'Stephen J. Chanock, M.D.',
		title: 'Division of Cancer Epidemiology & Genetics Director',
	},
};
