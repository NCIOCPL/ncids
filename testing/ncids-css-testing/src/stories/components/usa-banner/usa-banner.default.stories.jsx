import Component from '@nciocpl/ncids-twig/components/usa-banner/usa-banner.twig';
import css from './index.scss?inline';

export default {
	title: 'components/Banner/Default',
	component: Component,
	parameters: { css },
};

export const NCIBannerWithoutLanguageToggle = {
	args: {
		language: 'en',
	},
};

export const SpanishNCIBannerWithoutLanguageToggle = {
	args: {
		language: 'es',
	},
};

export const NCIBannerWithLanguageToggle = {
	args: {
		language: 'en',
		language_toggle_href: 'javascript:void(0);',
	},
};

export const SpanishNCIBannerWithLanguageToggle = {
	args: {
		language: 'es',
		language_toggle_href: 'javascript:void(0);',
	},
};
