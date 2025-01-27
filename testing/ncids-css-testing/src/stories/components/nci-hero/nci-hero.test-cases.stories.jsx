import Component from '@nciocpl/ncids-twig/components/nci-hero/nci-hero.twig';
import css from './index.scss?inline';

import img_hero_mobile from './img/hero-mobile.jpg';
import img_hero_mobile_lg from './img/hero-mobile-large.jpg';
import img_hero_tablet from './img/hero-tablet.jpg';
import img_hero_tablet_lg from './img/hero-tablet-large.jpg';
import img_hero_desktop from './img/hero-desktop.jpg';
import img_hero_widescreen from './img/hero-widescreen.jpg';

export default {
	title: 'components/Hero/Test Cases/With CTA',
	component: Component,
	parameters: { css },
};

export const WithCtaLong = {
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
		'tagline': 'Funding for small businesses with next-generation cancer technologies.',
		'button': 'Learn More With A Long Text Link',
		'url': 'http://www.cancer.gov',
		'ctastrip': [
			{
				'title': 'NCI Alliance for Nanotechnology in Cancer',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Nanotechnology Characterization Laboratory',
				'url': 'http://www.cancer.gov',
			},
			{
				'title': 'Cancer Nanotechnology Plan',
				'url': 'http://www.cancer.gov',
			},
		],
	},
};

export const WithCtaWithExternalLink = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'Hero with Externally Linked Primary CTA',
		'tagline': 'Hero with Externally Linked Primary CTA',
		'button': 'External Link Example',
		'url': 'http://www.google.com',
	},
};

export const WithCtaWithInternalLinkOverride = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
		'alt': 'Hero with Internally Linked Primary CTA with External Link Icon Override',
		'tagline': 'Hero with Internally Linked Primary CTA with External Link Icon Override',
		'button': 'Internal Link Override with Icon',
		'url': 'http://www.cancer.gov',
		'externalModifier': 'usa-button--external'
	},
};

export const WithCtaWithExternalOverride = {
	args: {
		'image': {
			'widescreen': img_hero_widescreen,
			'desktop': img_hero_desktop,
			'tablet_lg': img_hero_tablet_lg,
			'tablet': img_hero_tablet,
			'mobile_lg': img_hero_mobile_lg,
			'mobile': img_hero_mobile,
		},
			'alt': 'Hero with Externally Linked Primary CTA with Internal Link',
			'tagline': 'Hero with Externally Linked Primary CTA with Internal Link',
			'button': 'External Link Override with No Icon',
			'url': 'http://www.google.com',
			'linkMarkedInternal': 'data-ncids-internal-link'
	},
};
