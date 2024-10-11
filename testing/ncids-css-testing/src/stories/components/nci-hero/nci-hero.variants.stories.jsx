import Component from '@nciocpl/ncids-twig/components/nci-hero/nci-hero.twig';
import css from './index.scss?inline';

import img_hero_mobile from './img/hero-mobile.jpg';
import img_hero_mobile_lg from './img/hero-mobile-large.jpg';
import img_hero_tablet from './img/hero-tablet.jpg';
import img_hero_tablet_lg from './img/hero-tablet-large.jpg';
import img_hero_desktop from './img/hero-desktop.jpg';
import img_hero_widescreen from './img/hero-widescreen.jpg';

export default {
	title: 'components/Hero/Variants',
	component: Component,
	parameters: { css },
};

export const WithCta = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'NCI is the nation&apos;s leader in cancer research.',
		'tagline': 'NCI is the nation&apos;s leader in cancer research.',
		'button': 'Learn More',
		'url': 'http://www.cancer.gov',
		'ctastrip': [
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
